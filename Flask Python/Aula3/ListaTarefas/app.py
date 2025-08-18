from flask import Flask, jsonify, render_template, request, redirect, url_for
import random

app = Flask(__name__)

tarefas = [
    "Estudar Python",
    "Estudar Banco de Dados"
]

@app.route("/", methods=["GET"])
def index():

    # _tarefas = [{"id": i, "nome": t} for i, t in enumerate(tarefas)]

    _tarefas = []
    for i, t in enumerate(tarefas):
        _tarefas.append({"id": i, "nome": t})
    print(_tarefas)
    return render_template("index.html", tarefas=_tarefas)

@app.route("/adicionar", methods=["POST"])
def adicionar():
    if request.method == 'POST':
        tarefa = request.form['tarefa']
        tarefas.append(tarefa)
    return redirect(url_for('index'))    

@app.route("/delete/<int:id>")
def delete(id):
    tarefas.pop(id)
    return redirect(url_for('index'))  

if __name__ == "__main__":
    app.run(debug=True)