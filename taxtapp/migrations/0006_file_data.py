# Generated by Django 3.2.5 on 2021-07-13 06:50

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('taxtapp', '0005_delete_file_data'),
    ]

    operations = [
        migrations.CreateModel(
            name='File_Data',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('file_size', models.IntegerField()),
                ('content', models.CharField(max_length=510)),
                ('modified', models.IntegerField()),
                ('created', models.IntegerField()),
                ('sha_hash', models.CharField(max_length=500)),
            ],
        ),
    ]
