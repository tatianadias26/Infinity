from flask import Flask, jsonify, request

app = Flask(__name__)

alunos = []
# {"nome": "Tatiana", "nota": 8}

@app.route("/")
def index():
    return "Teste"

@app.route("/api/create", methods=['POST'])
def aluno_create():
    if request.method == 'POST':
        aluno = request.json
        alunos.append(aluno)
        response = {"seccess": True, "message": "Alunos salvo com sucesso!"}
        return jsonify(response), 201
    
@app.route("/api/listar", methods=['GET'])
def aluno_listar():
    return jsonify(alunos)

if __name__ == "__main__":
    app.run(debug=True)