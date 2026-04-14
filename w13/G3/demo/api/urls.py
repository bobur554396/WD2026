from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView

from api import views

urlpatterns = [
    path('categories/', views.category_list),
    path('categories/<int:category_id>/products/', views.category_products),
    # path('products/', views.product_list),
    # path('products/<int:product_id>/', views.product_detail),

    path('products/', views.ProductListAPIView.as_view()),
    path('products/<int:product_id>/', views.ProductDetailAPIView.as_view()),

    path('login/', TokenObtainPairView.as_view())

]