from django.http import HttpResponse, JsonResponse
from django.shortcuts import render

from api.models import Product


def product_list(request):
    # select * from products
    products = Product.objects.all()
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json, safe=False)


# Product.objects.create(name='asd', price=123, description='asd')
# insert into product (nam) values ('asd', 123, 'asd')


def product_detail(request, pk=None):
    ...
