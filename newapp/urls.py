from django.urls import path

from newapp import views

urlpatterns = [
    # url(r'^$', views.index_view, name='index'),
    # url(r'^another/$', views.another_view, name='another'),
    path("", views.home)

]
