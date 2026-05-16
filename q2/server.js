class Product:
    def __init__(self, id, name, price):
        self.id = id
        self.name = name
        self.price = price

    def display(self):
        print("ID:", self.id)
        print("Name:", self.name)
        print("Price:", self.price)


class ProductManager:
    def __init__(self):
        self.products = []

    def add_product(self, product):
        self.products.append(product)

    def show_all(self):
        for p in self.products:
            p.display()
            

    def update_product(self, id, name, price):
        for p in self.products:
            if p.id == id:
                p.name = name
                p.price = price

    def delete_product(self, id):
        self.products = [p for p in self.products if p.id != id]


pm = ProductManager()

p1 = Product(1, "Laptop", 50000)
p2 = Product(2, "Phone", 20000)

pm.add_product(p1)
pm.add_product(p2)

pm.show_all()

pm.update_product(1, "Laptop Pro", 70000)

pm.delete_product(2)

pm.show_all()
