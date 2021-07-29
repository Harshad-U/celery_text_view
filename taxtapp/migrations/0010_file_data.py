# Generated by Django 3.2.5 on 2021-07-14 07:53

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('taxtapp', '0009_delete_file_data'),
    ]

    operations = [
        migrations.CreateModel(
            name='File_Data',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('filename', models.CharField(max_length=25)),
                ('file_size', models.IntegerField()),
                ('content', models.CharField(max_length=510)),
                ('modified', models.IntegerField()),
                ('created', models.IntegerField()),
                ('hash_value', models.CharField(max_length=50)),
            ],
        ),
    ]
