from flask import Flask, jsonify, render_template
import random

app = Flask(__name__)

frase = [
    "Todo corpo no Everest já foi uma pessoa motivada.",
    "Não há obstáculos grande para quem desiste.",
    "Tudo pode dar certo, dará, da pior maneira possível.",
    "Não deixe para a manhã o que você pode deixar para lá.",
    "Meses de programação economizam semanas de plenejamento.",
    "Os humilhados seão humilhados."
]

@app.route("/")
def index():
    return "Working!"

@app.route("/api/teste", methods=['GET'])
def teste():
    return jsonify({"sucess": True})

@app.route("/api/frase", defaults={"id": None})
@app.route("/api/frase/<int:id>", methods=['GET'])
def get_frase(id):
    if not id:
        frase_sorteada = random.choice(frase)
        response = {"sucess": True, "message": frase_sorteada}
    elif id-1 < len(frase):
        frase_sorteada = frase[id-1]
        response = {"sucess": True, "message": frase_sorteada}
    else:
        response= {"sucess": False, "message": "Id não existe"}, 400
    
    #return jsonify(response)
    return render_template("frase.html", resultado=response)

@app.route("/api/listafrases", methods=['GET'])
def get_lista():
    return jsonify(frase)

if __name__ == "__main__":
    app.run(debug=True)