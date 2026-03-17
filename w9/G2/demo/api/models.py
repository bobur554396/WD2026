from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=300)


class Product(models.Model):
    name = models.CharField(max_length=300)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField(blank=True, null=True)
    # category = models.ForeignKey(Category)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'description': self.description,
        }