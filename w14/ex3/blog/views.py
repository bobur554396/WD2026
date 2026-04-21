from rest_framework.generics import ListCreateAPIView
from .models import BlogPost, Comment
from .serializers import BlogPostSerializer, CommentSerializer


class BlogPostListCreateView(ListCreateAPIView):
    queryset = BlogPost.objects.all()
    serializer_class = BlogPostSerializer


class CommentListCreateView(ListCreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
