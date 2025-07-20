from flask import Flask, render_template, request, flash, redirect, url_for, session
app = Flask(__name__)
app.secret_key = 'sua_chave_secreta_aqui'

@app.route('/')
def index():
    return redirect(url_for('registrarUsuario'))

@app.route('/registrarUsuario', methods=['GET', 'POST'])
def registrarUsuario():
    if 'usuarios' not in session:
        session['usuarios'] = []
    if request.method == 'POST':
        username = request.form['username']
        email = request.form['email']
        password = request.form['password']

# Validação simples do lado do servidor
        if not username or not email or not password:
            flash('Todos os campos são obrigatórios!', 'danger')
        else:
            novo_usuario = {
                'username': username,
                'email': email,
                'password': password
            }
            usuarios = session['usuarios']
            usuarios.append(novo_usuario)
            session['usuarios'] = usuarios
            flash(f'Usuário {username} cadastrado com sucesso!', 'success')
            return redirect(url_for('registrarUsuario'))
    
# flash(): Armazena uma mensagem que será exibida na próxima requisição. Isso
# é útil para fornecer mensagens ao usuário.

    return render_template("formulario.html", usuarios=session.get('usuarios', []))
                           

if __name__ == '__main__':
    app.run(debug=True)