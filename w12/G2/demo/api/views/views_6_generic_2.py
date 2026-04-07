from rest_framework import generics
from rest_framework import mixins
from rest_framework.pagination import PageNumberPagination
from rest_framework.permissions import IsAuthenticated

from api.models import Product
from api.serializers import Product2Serializer


# CRUD API using Generic API View

class ProductListAPIView(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = Product2Serializer
    pagination_class = PageNumberPagination
    # permission_classes = (IsAuthenticated,)


class ProductDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = Product2Serializer
    lookup_url_kwarg = "product_id"
