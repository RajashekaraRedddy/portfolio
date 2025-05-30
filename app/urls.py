from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [ 
    path('',views.home,name='home'),
    path('project/',views.projects,name='projects'),
    path('contact/',views.contact,name='contact'),
    path('education/',views.education,name='Education'),
    path('skills/',views.skills,name='Skills')
] 