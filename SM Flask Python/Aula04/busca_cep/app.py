from flask import Flask, render_template, request, redirect, url_for
import requests

app = Flask(__name__)


def realiza_requisicao(cep):
    url = f"https://viacep.com.br/ws/{cep}/json/"
    response = requests.get(url)
    if response.status_code != 200:
        return {"success": False, "msg": "CEP inválido ou não encontrado"}
    dados = response.json()
    if 'erro' in dados.keys():
        return {"success": False, "msg": "CEP inválido ou não encontrado"}
    return {"success": True, "msg": dados}

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/buscar")
def buscar():
    cep = request.args.get('cep', False)
    if not cep:
        return redirect(url_for('index'))
    else:
        resultado = realiza_requisicao(cep)
        print(resultado)
        return render_template('index.html', resultado=resultado)


if __name__ == "__main__":
    app.run(debug=True)