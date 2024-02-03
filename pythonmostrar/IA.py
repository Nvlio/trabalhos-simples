from bardapi import Bard
import os

def PegarResp(assunto):
    input_text = "Escreva dicas ou informações sobre {} em formato post de facebook, separe cada elemento do post em um dicionario python".format(assunto)
    bard_output = Bard(token='fgjtMwjMXaVK3oa74qxeWLJxUKxNkoo0ROMqa-qzWxKAGkbSN0EQlAvak0PX0bVf8_tCTg.').get_answer(input_text)['content']
    print (bard_output)

PegarResp('saude e beleza feminina')