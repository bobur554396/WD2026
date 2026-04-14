from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import generics
from rest_framework.filters import SearchFilter, OrderingFilter
from rest_framework.permissions import IsAuthenticated

from api.filters import ProductFilter
from api.models import Product
from api.serializers import Product2Serializer


# CBV - Class-Based Views (DRF)

class ProductListAPIView(generics.ListCreateAPIView):
    # queryset = Product.objects.all()
    serializer_class = Product2Serializer
    permission_classes = (IsAuthenticated,)
    # filterset_fields = ('name', 'price')
    filterset_class = ProductFilter
    filter_backends = (DjangoFilterBackend, SearchFilter, OrderingFilter,)
    search_fields = ('name', 'price')
    ordering_fields = ('name', 'price')

    def get_queryset(self):
        if self.request.method == "GET":
            return Product.objects.all()
        return Product.objects.filter(owner=self.request.user)


class ProductDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    # queryset = Product.objects.all()
    serializer_class = Product2Serializer
    lookup_url_kwarg = "product_id"
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        if self.request.method == "GET":
            return Product.objects.all()
        return Product.objects.filter(owner=self.request.user)
