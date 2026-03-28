from django.urls import path

from api import views

urlpatterns = [
    path('categories/', views.category_list),
    path('categories/<int:category_id>/products/', views.category_products),
    path('products/', views.product_list),
    path('products/<int:product_id>/', views.product_detail),
]