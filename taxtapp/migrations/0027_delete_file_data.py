# Generated by Django 3.2.5 on 2021-07-30 08:19

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('taxtapp', '0026_alter_file_data_full_data'),
    ]

    operations = [
        migrations.DeleteModel(
            name='File_Data',
        ),
    ]
