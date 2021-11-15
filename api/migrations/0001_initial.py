from django.db import migrations
from api.user.models import CustomUser


class Migration(migrations.Migration):
    def seed_data(apps, schema_editor):
        user = CustomUser(name="plass",
                          email="foplacide@gmail.com", is_staff=True, is_superuser="True", phone="678000784",
                          gender="Male")
        user.set_password("123")
        user.save()

    dependencies = [

    ]

    operations = [
        migrations.RunPython(seed_data),
    ]
