from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import generics
from rest_framework import filters
from rest_framework.permissions import IsAuthenticated

from api.models import Product
from api.serializers import Product2Serializer


# CRUD - DRF using CBV using Generic - Level 5

class ProductListAPIView(generics.ListCreateAPIView):
    # queryset = Product.objects.all()
    serializer_class = Product2Serializer
    permission_classes = (IsAuthenticated,)
    filter_backends = (DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter,)
    search_fields = ('name', 'price')
    ordering_fields = ('name', 'price')
    # filter_class = ProductFilter
    # filterset_fields = ('name', 'price')

    def get_queryset(self):
        return Product.objects.filter(owner=self.request.user)


class ProductDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = Product2Serializer
    lookup_url_kwarg = 'product_id'
    # permission_classes = (IsAuthenticated,)
