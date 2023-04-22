# from django.db import models
# from django.contrib.auth.models import User
# from django.conf import settings
# import adminpanel
# from adminpanel.models import *
# from django.contrib.auth import get_user_model

# AUTH_USER_MODEL = 'adminpanel.User'


# class AnonymousCart(models.Model):
#     a_id = models.BigIntegerField()
#     shop_product_list = models.CharField(max_length=255, null=True, blank=True)
#     last_active_time = models.DateTimeField(null=True, blank=True)

# class UserCart(models.Model):
#     user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
#     shop_product_list = models.CharField(max_length=255, null=True, blank=True)


# class WebCountry(models.Model):
#     short_name = models.CharField(max_length=3, null=True, blank=True)
#     name = models.CharField(max_length=255, null=True, blank=True)
#     phonecode = models.IntegerField()
# class WebState(models.Model):
#     name = models.CharField(max_length=255, null=True, blank=True)
#     country = models.ForeignKey(WebCountry, on_delete=models.CASCADE)

# class WebCity(models.Model):
#     name = models.CharField(max_length=255, null=True, blank=True)
#     state = models.ForeignKey(WebState, on_delete=models.CASCADE)


# class ProductOrder(models.Model):
#     user = models.ForeignKey(settings.AUTH_USER_MODEL,
#                              on_delete=models.CASCADE, null=True)
#     # tax is in percentage
#     tax = models.DecimalField(max_digits=10, decimal_places=2, default='0.00')
#     shipping_charge = models.DecimalField(
#         max_digits=10, decimal_places=2, default='0.00')


# class ProductOrderData(models.Model):
#     shop_product = models.ForeignKey(
#         ShopProduct, on_delete=models.CASCADE, null=True)
#     product_order = models.ForeignKey(
#         ProductOrder, on_delete=models.CASCADE, null=True)
#     quantity = models.IntegerField(default=0)
#     per_unit_price = models.DecimalField(
#         max_digits=10, decimal_places=2, default='0.00')

