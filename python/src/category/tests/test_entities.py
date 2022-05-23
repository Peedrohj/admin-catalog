# Utils
from dataclasses import FrozenInstanceError, is_dataclass
from datetime import datetime
import unittest

# Entities
from category.domain.entities import Category


class TestCategory(unittest.TestCase):
    def test_if_is_a_dataclass(self):
        self.assertTrue(is_dataclass(Category))

    def test_create_category(self):
        category_props = {
            "name": "Movie",
            "description": "Some description",
            "is_active": True,
            "created_at": datetime.now,
        }

        category = Category(**category_props)

        self.assertEqual(category.name, "Movie")

    def test_create_category_with_just_a_name(self):
        category = Category(name="Movie")

        self.assertEqual(category.name, "Movie")
        self.assertEqual(category.description, None)
        self.assertEqual(category.is_active, True)
        self.assertIsInstance(category.created_at, datetime)

    def test_if_created_at_is_generated_in_constructor(self):
        category1 = Category(name="Movie 1")
        category2 = Category(name="Movie 2")

        self.assertNotEqual(category1.created_at.timestamp(),
                            category2.created_at.timestamp())

    def test_if_is_immutable(self):
        with self.assertRaises(FrozenInstanceError):            
            value_object = Category(name="Teste")
            value_object.name = "Teste"
