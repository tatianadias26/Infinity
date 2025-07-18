from flask import Flask, jsonify
import random

app = Flask(__name__)

frases = [
    "Todo corpo no Everest já foi uma pessoa motivada",
    "Não há obstáculos grande para quem desiste",
    "Tudo pode dar certo, dará, da pior maneira possível",
    "Não deixe para a manhã o que você pode deixar para lá",
    "Meses de programação economizam semanas de plenejamento",
    "Os humilhados seão humilhados"
]

@app.route("/")
def index():
    return "Working!"

@app.route("/api/teste", methods=['GET'])
def teste():
    return jsonify({"sucess": True})

@app.route("/api/frases", defaults={"id": None})
@app.route("/api/frases/<int:id>", methods=['GET'])
def get_frase(id):
    if not id:
        frase_sorteada = random.choice(frases)
    elif id-1 < len(frases):
        frase_sorteada = frases[id-1]
    else:
        return {"sucess": False, "message": "Id não existe"}, 400
    response = {"frases": frase_sorteada}
    return jsonify(response)

@app.route("/api/listafrases", methods=['GET'])
def get_lista():
    return jsonify(frases)

if __name__ == "__main__":
    app.run(debug=True)