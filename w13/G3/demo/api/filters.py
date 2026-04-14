from django_filters import rest_framework as filters

from api.models import Product


class ProductFilter(filters.FilterSet):
    name = filters.CharFilter(field_name='name', lookup_expr='icontains')
    min_price = filters.NumberFilter(field_name='price', lookup_expr='gte') # greater than or equal
    max_price = filters.NumberFilter(field_name='price', lookup_expr='lte') # less than or equal

    class Meta:
        model = Product
        fields = ['description',]