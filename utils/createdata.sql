CREATE TABLE recipes (
                         id              VARCHAR(64) PRIMARY KEY,      -- e.g., rec_002
                         lang            VARCHAR(16) DEFAULT 'en-US',
                         title           VARCHAR(200) NOT NULL,
                         summary         TEXT,
                         author          VARCHAR(120),
                         source_name     VARCHAR(200),
                         source_url      VARCHAR(500),
                         license         VARCHAR(120),
                         created_at      DATETIME(6) DEFAULT CURRENT_TIMESTAMP(6),
                         updated_at      DATETIME(6) DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                         notes           TEXT
) ENGINE=InnoDB;



INSERT INTO recipes (id, lang, title, summary, author, source_name, source_url, license, notes)
VALUES
    ('rec_001','en-US','Spaghetti Aglio e Olio',
     'Classic Italian pasta with garlic, olive oil, and chili flakes.',
     'Mark','Family Recipes',NULL,'CC-BY-4.0','Quick, light, and vegetarian-friendly.'),

    ('rec_002','en-US','Chicken Stir-Fry',
     'Weeknight stir-fry with chicken, vegetables, soy sauce, and sesame oil.',
     'Mark','Family Recipes',NULL,'CC-BY-4.0','Can substitute tofu for vegetarian version.'),

    ('rec_003','en-US','Vegetarian Chili',
     'Hearty chili made with beans, corn, tomatoes, and warm spices.',
     'Mark','Family Recipes',NULL,'CC-BY-4.0','Great for batch cooking and freezing.'),

    ('rec_004','en-US','Avocado Toast',
     'Toasted bread topped with mashed avocado, lemon, and chili flakes.',
     'Mark','Family Recipes',NULL,'CC-BY-4.0','Healthy breakfast or snack.'),

    ('rec_005','en-US','Classic Pancakes',
     'Fluffy breakfast pancakes with butter, syrup, or toppings of choice.',
     'Mark','Family Recipes',NULL,'CC-BY-4.0','Add blueberries or chocolate chips if desired.'),

    ('rec_006','en-US','Beef Tacos',
     'Seasoned ground beef in taco shells with lettuce, cheese, and salsa.',
     'Mark','Family Recipes',NULL,'CC-BY-4.0','Easily scaled for family dinners.'),

    ('rec_007','en-US','Caprese Salad',
     'Italian salad with tomato, mozzarella, basil, olive oil, and balsamic.',
     'Mark','Family Recipes',NULL,'CC-BY-4.0','Serve chilled; use fresh mozzarella for best results.'),

    ('rec_008','en-US','Grilled Salmon',
     'Simple grilled salmon fillets with lemon, dill, and olive oil.',
     'Mark','Family Recipes',NULL,'CC-BY-4.0','Pairs well with rice or salad.'),

    ('rec_009','en-US','Greek Salad',
     'Refreshing salad with cucumber, tomato, onion, olives, and feta.',
     'Mark','Family Recipes',NULL,'CC-BY-4.0','Dress with olive oil and vinegar.'),

    ('rec_010','en-US','Chocolate Chip Cookies',
     'Classic cookies with butter, sugar, flour, and chocolate chips.',
     'Mark','Family Recipes',NULL,'CC-BY-4.0','Bake until golden for chewy centers.');