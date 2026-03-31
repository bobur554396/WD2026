from rest_framework import generics
from rest_framework import mixins

from api.models import Product
from api.serializers import Product2Serializer


# CRUD - DRF using CBV using Generic - Level 5

class ProductListAPIView(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = Product2Serializer


class ProductDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = Product2Serializer
    lookup_url_kwarg = 'product_id'
