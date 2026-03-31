from rest_framework.views import APIView
from rest_framework.response import Response

from api.models import Product
from api.serializers import Product2Serializer


# CRUD - DRF using CBV

class ProductListAPIView(APIView):
    def get(self, request):
        products = Product.objects.all()
        serializer = Product2Serializer(products, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = Product2Serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)


class ProductDetailAPIView(APIView):
    def get_object(self, product_id):
        try:
            return Product.objects.get(pk=product_id)
        except Product.DoesNotExist as e:
            return Response({'message': str(e)}, status=404)

    def get(self, request, product_id=None):
        product = self.get_object(product_id)
        serializer = Product2Serializer(product)
        return Response(serializer.data)

    def put(self, request, product_id=None):
        product = self.get_object(product_id)
        serializer = Product2Serializer(data=request.data, instance=product)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

    def delete(self, request, product_id=None):
        product = self.get_object(product_id)
        product.delete()
        return Response({'message': 'Product deleted'})
