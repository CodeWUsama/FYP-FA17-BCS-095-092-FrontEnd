import React, { useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Footer from "./../Footer/Footer";

const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    heroContent: {
        padding: theme.spacing(8, 0, 6),
    },
    cardHeader: {
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
    },
    cardPricing: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginBottom: theme.spacing(2),
    },
    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
        },
    },
}));

const tiers = [
    {
        title: 'Free',
        price: '0',
        description: ['Customize Upto 3 Templates', 'Publish 1 Website', 'Access to 5 categories', 'Email support'],
        buttonText: 'Select',
        buttonVariant: 'contained',
    },
    {
        title: 'Pro',
        subheader: 'Most popular',
        price: '500',
        description: [
            'Customize Upto 8 Templates',
            'Publish Upto 4 Websites',
            'Access to all Categories',
            'Priority email support',
        ],
        buttonText: 'Select',
        buttonVariant: 'contained',
    },
    {
        title: 'Enterprise',
        price: '1000',
        description: [
            'Customize Upto 20 Templates',
            'Publish Upto 10 Websites',
            'Access to all Categories',
            'Phone & email support',
        ],
        buttonText: 'Select',
        buttonVariant: 'contained',
    },
];

export default function Pricing() {
    const classes = useStyles();
    const [currentPlan, setPlan] = useState("");
    const [open, setOpen] = React.useState(false);

    useEffect(() => {

        window.scrollTo(0, 0);
        
        fetch("http://localhost:8080/user/getUserData", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token'),
                "Content-Type": 'application/json'
            }
        }).then(res => {
            return res.json();
        }).then(resData => {
            setPlan(resData.user.package.level);
        }).catch(err => {
            console.log(err);
        })
    }, []);


    let handleSelection = (plan) => {
        if (plan === "Free") {
            setOpen(true);
        }
        else {
            window.location.href = "/checkout?plan=" + plan;
        }
    }

    let handleAgree = () => {
        fetch("http://localhost:8080/user/cancelSubscription", {
            method: "POST",
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token'),
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
            })
        }).then(res => {
            if (res.status === 200) {
                window.location.href = "/account";
            }
        })
    }

    return (
        <div style={{ marginTop: 50 }}>
            <React.Fragment>
                <Container maxWidth="sm" component="main" className={classes.heroContent}>
                    <Typography component="h3" variant="h3" align="center" color="textPrimary" gutterBottom>
                        Pricing
                    </Typography>
                    <Typography variant="h6" align="center" color="textSecondary" component="p">
                        You can select the package according to your needs. You can cancel and upgrade package at any time.
                    </Typography>
                </Container>

                <Container style={{ marginBottom: 50 }} maxWidth="md" component="main">
                    <Grid container spacing={5} alignItems="flex-end">
                        {tiers.map((tier) => (
                            // Enterprise card is full width at sm breakpoint
                            <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
                                <Card>
                                    <CardHeader
                                        title={tier.title}
                                        subheader={tier.subheader}
                                        titleTypographyProps={{ align: 'center' }}
                                        subheaderTypographyProps={{ align: 'center' }}
                                        action={tier.title === 'Pro' ? <StarIcon /> : null}
                                        className={classes.cardHeader}
                                    />
                                    <CardContent>
                                        <div className={classes.cardPricing}>
                                            <Typography component="h5" variant="h5" color="textPrimary">
                                                PKR {tier.price}
                                            </Typography>
                                            <Typography variant="h6" color="textSecondary">
                                                /mo
                                            </Typography>
                                        </div>
                                        <ul>
                                            {tier.description.map((line) => (
                                                <Typography component="li" variant="subtitle1" align="center" key={line}>
                                                    {line}
                                                </Typography>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
                <Footer />
            </React.Fragment>
        </div>
    );
}