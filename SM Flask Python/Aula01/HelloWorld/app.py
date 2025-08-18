from flask import Flask

app = Flask(__name__) #dunder

@app.route("/") #decorator (padrão de projetos) - https://refactoring.guru/
def index():
    return "Hello World!"

@app.route("/saudar/<nome>") #engolbracket
def saudar(nome):
    return f"Bom Dia, {nome}!" #após redar, para acessar a rota, acrescenta /saudar/Tatiana na barra de endereço do navegador

@app.route("/dobrar/<int:numero>")
def dobrar(numero):
    return f"O dobro de {numero} é {numero*2}"

@app.route("/tabuada/<int:numero>")
def tabuada(numero):
    r = ""
    for n in range(1,11):
        r += f"{numero} x {n} = {numero*n}<br>"
    return r
   
if __name__ == "__main__":
    app.run(debug=True)