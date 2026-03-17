from django.http import HttpResponse, JsonResponse
from django.shortcuts import render

from api.models import Product


def product_list(request):
    # count = Product.objects.count() # select count(*) from products
    # return HttpResponse(f"Products count: {count}")
    # p = Product.objects.get(id=1) # select * from products where id = 1
    products = Product.objects.all() # select * from products
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json, safe=False)
