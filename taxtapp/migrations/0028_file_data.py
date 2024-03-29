# Generated by Django 3.2.5 on 2021-07-30 08:20

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('taxtapp', '0027_delete_file_data'),
    ]

    operations = [
        migrations.CreateModel(
            name='File_Data',
            fields=[
                ('fileId', models.AutoField(primary_key=True, serialize=False)),
                ('filename', models.CharField(max_length=25)),
                ('file_size', models.IntegerField()),
                ('content', models.CharField(max_length=510)),
                ('modified', models.DateField()),
                ('created', models.DateField()),
                ('hash_value', models.CharField(max_length=50)),
                ('date_inserted', models.DateField()),
                ('full_data', models.TextField()),
            ],
        ),
    ]
