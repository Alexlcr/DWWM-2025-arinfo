import eel 

eel.init('EVALUATION FINAL')

@eel.expose

def App():
    print('running')

eel.start('index.html', size=(500,600), mode='browser')