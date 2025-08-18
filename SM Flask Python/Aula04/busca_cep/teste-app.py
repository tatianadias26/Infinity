from flask import Flask, render_template, request
import requests

app = Flask(__name__)

def realiza_requisicao():
    url = "https://viacep.com.br/ws/40261015/json/"
    response = requests.get(url)
    dados = response.json()
    return dados


@app.route("/")
def index():
    return render_template("index.html")

@app.route("/buscar", methods=['POST'])
def buscar():
    cep = request.form.get("cep")
    
    if cep:
        cep_limpo = "".join(filter(str.isdigit, cep))
        url = f"https://viacep.com.br/ws/{cep_limpo}/json/"
        response = requests.get(url)
        dados = response.json()        

        return render_template("index.html", resultado=dados)

    return render_template("index.html", resultado={"erro": "CEP inválido."})

if __name__ == "__main__":
    app.run(debug=True)