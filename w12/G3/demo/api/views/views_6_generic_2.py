from rest_framework import generics

from api.models import Product
from api.serializers import Product2Serializer


# CBV - Class-Based Views (DRF)

class ProductListAPIView(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = Product2Serializer
    # pagination_class = LimitOffsetPagination


class ProductDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = Product2Serializer
    lookup_url_kwarg = "product_id"
