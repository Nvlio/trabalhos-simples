from tkinter import *
from tkinter import ttk

#classe responsavel por construir os containers das tabelas
class Tabela:
    #metodo que inicia a tabela
    def __init__(self):
        self.Raiz=Tk()
        self.entrada = StringVar()
        
        
    #metodo que cria containers para texto apenas
    def containerTexto(self,texto):
        #vai definir qual o frame do container
        container = Frame(self.Raiz,width=10000)
        container.pack()

        #vai adicionar o que precisa para o container
        msg = Label(container,text=texto)
        msg.pack()
        
        
    def containerInsercao(self):
        insercao = Entry(self.Raiz,textvariable=self.entrada).pack()

    def containerBotao(self,texto):
        botao=Button(self.Raiz,text=texto,command=self.Raiz.destroy).pack()
    

    #metodo que constroi a tabela
    def construir(self):
        self.Raiz.geometry('500x100')
        self.Raiz.title("Programa para adicionar posts")
        self.containerTexto("Escreva o corpo do post")
        self.containerInsercao()
        self.containerBotao('Iniciar')
        self.Raiz.mainloop()
