import * as React from 'react';
import Box from '@mui/material/Box';
import {Typography} from "@mui/material";
import {Divider} from "@material-ui/core";
import DetailPageTypography from "./DetailPageTypography";
import BungalowIcon from '@mui/icons-material/Bungalow';
import IconButton from "@mui/material/IconButton";
import {Link} from "react-router-dom";


export default function ProductDetail() {
    return (
        <Box
            sx={{
                backgroundColor: 'primary.dark',
                color: "white",
                background: `rgba(0, 0, 0, 0.6)`,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '1% 5%'
            }}
        >


            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginBottom: '2%'
                }}
            >
                <Link
                    to="/"
                >
                    <IconButton aria-label="home"
                                sx={{
                                    border: "1px solid white"
                                }}
                    >
                        <BungalowIcon fontSize={'large'} sx={{
                            color: 'white',
                        }}/>
                    </IconButton>
                </Link>
            </Box>


            <DetailPageTypography>Our 'Pistachio Pesto with Cashews & Pine Nuts' is a blend of all-natural ingredients
                without any
                added preservatives and/or flavorings.
                Our sauce consists of California pistachios, cashews, pine nuts, and extra aged Parmesan cheese to give
                it a unique taste and a premium flavor profile.
                This combination is accompanied by other highly nutritious ingredients such as: fresh basil, fresh
                garlic, single-origin extra virgin olive oil, and high-oleic sunflower oil.</DetailPageTypography>


            <DetailPageTypography>The (rBST-free) milk for our cheeses is sourced from local farms of Green Bay, WI
                where animals
                are treated with respect and care.
                Our recipe has been tweaked many times to create a sauce that is pleasant, healthy, balanced, and full
                of clean energy.</DetailPageTypography>


            <DetailPageTypography>Ingredients: Fresh Basil, Single-Origin Extra Virgin Olive Oil*, High-Oleic Sunflower
                Oil*,
                Extra-Aged Parmesan Cheese, Pistachio, Cashew, Pine Nut, Fresh Garlic, Romano Cheese, Sea Salt
            </DetailPageTypography>

            <DetailPageTypography>*Please note that we are using moderate amounts of salt and oil to make our pesto an
                easier pick for
                everyone. You could always add salt and/or olive oil to your desire. Please enjoy!
            </DetailPageTypography>

            <DetailPageTypography>
                a recommendation: When using our sauce, it is best enjoyed in its original state. Cooking the sauce
                changes the flavor profile of our pesto. For example, use it as a spread on top of your pizza and
                don't cook it in the oven. That's all :)
            </DetailPageTypography>

            <DetailPageTypography>
                Ûpdates: We're in the process of reducing our packaging size from 8 to 6 ounces. This decision was
                made to help with having the freshest pesto on the shelves, and to reduce the price while keeping
                our quality as excellent as ever 🎉 Please send us your thoughts at the bottom of this page. We
                would 💚 to hear from you.
            </DetailPageTypography>

            <DetailPageTypography>
                🌼 Thank you very much for your continuous support 🌼
            </DetailPageTypography>
        </Box>


    );
}

