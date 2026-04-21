from django.urls import path
from .views import BlogPostListCreateView, CommentListCreateView

urlpatterns = [
    path('posts/', BlogPostListCreateView.as_view(), name='blogpost-list-create'),
    path('comments/', CommentListCreateView.as_view(), name='comment-list-create'),
]
