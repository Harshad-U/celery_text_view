# Generated by Django 3.2.5 on 2021-07-12 10:32

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('taxtapp', '0002_rename_file_data_filedata'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='FileData',
            new_name='File_Data',
        ),
    ]