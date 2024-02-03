from Interface import Tabela

def Main():
    teste = Tabela()
    teste.construir()
    print(teste.entrada.get())

print('testando')
Main()