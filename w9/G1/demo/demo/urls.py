"""
URL configuration for demo project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.http import HttpResponse, HttpRequest
from django.urls import path, re_path
from datetime import datetime, timedelta


def hello(request):
    # print(request)
    # print(type(request))
    # input: HttpRequest
    # logic of the view/function
    # output: HttpResponse
    return HttpResponse("<h1 style='color: red;'>Hello, world. You're at the polls index.</h1>")


def hours_ahead(request, hour):
    now = datetime.now()
    ahead_time = now + timedelta(hours=int(hour))
    return HttpResponse(f"The time is {hour} hours ahead = {ahead_time}")


urlpatterns = [
    path('admin/', admin.site.urls),
    path('hello', hello),
    re_path(r'^time/plus/(\d{1,2})/$', hours_ahead),
]
