from flask import Flask, render_template, request, redirect, url_for
import requests

app = Flask(__name__)


def realiza_requisicao(nome):
    url = f"https://restcountries.com/v3.1/translation/{nome}"
    response = requests.get(url)
    if response.status_code != 200:
        return {"success": False, "msg": "País não encontrado"}
    dados = response.json()
    return {"success": True, "msg": dados[0]}

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/buscar")
def buscar():
    nome = request.args.get('nome', False)
    if not nome:
        return redirect(url_for('index'))
    else:
        resultado = realiza_requisicao(nome)
        print(resultado)
        return render_template('index.html', resultado=resultado)


if __name__ == "__main__":
    app.run(debug=True)