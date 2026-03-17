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
from django.http import HttpResponse
from django.urls import path, re_path, include
from datetime import datetime, timedelta


def hello_world(request):
    # Input: HttpRequest
    # Logic of the view/function
    # Output: MUST return HttpResponse
    return HttpResponse("<h1 style='color: red'>Hello, world!</h1>")


def hours_ahead(request, hour):
    now = datetime.now()
    new_time = now + timedelta(hours=int(hour))
    return HttpResponse(f"The time is {hour} hours ahead = {new_time}")


urlpatterns = [
    path('admin/', admin.site.urls),
    path('hello/', hello_world),
    re_path(r'^time/plus/(\d{1,2})/$', hours_ahead),

    path('api/', include('api.urls'))
]
