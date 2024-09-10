from django.shortcuts import render


def index(request):
    return render(request, "index.html")  # Renders the homepage (index.html)


def about(request):
    return render(request, "about.html")  # Renders the About page


def contact(request):
    return render(request, "contact.html")  # Renders the Contact page
