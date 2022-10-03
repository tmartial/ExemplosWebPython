from django.shortcuts import render
from contatos.models import Pessoa
from django.views.generic.base import View
from contatos.forms import ContatoModel2Form

# Create your views here.
class ContatoListView(View):
 def get(self, request, *args, **kwargs):
    pessoas = Pessoa.objects.all()
    context = { 'pessoas': pessoas, }
    return render(request, 'contatos/listaContatos.html', context)

class ContatoCreateView(View):
   def get(self, request, *args, **kwargs):
      contexto = { 'formulario': ContatoModel2Form, }
      return render(request, "contatos/criaContato.html", contexto)
 
   def post(self, request, *args, **kwargs):
      formulario = ContatoModel2Form(request.POST)
      if formulario.is_valid():
         contato = formulario.save()
         contato.save()
         return HttpResponseRedirect(reverse_lazy(
         "contatos:lista-contatos"))    