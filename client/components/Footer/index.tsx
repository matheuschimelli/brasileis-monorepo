import React from "react";

import { Grid, Typography, Link, Container, Box } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },

  footer: {
    marginTop: theme.spacing(3),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

const footers = [
  {
    title: "Brasileis",
    description: ["Sobre", "Contato", "Blog"],
  },
  {
    title: "Soluções",
    description: [
      "Diário Oficial",
      "Jurisprudência",
      "Legislação",
      "Feed de Leis",
    ],
  },
  {
    title: "Ajuda",
    description: ["Assinaturas", "Guia do Usuário", "Problemas", "Consultoria"],
  },
  {
    title: "Legal",
    description: ["Política de Privacidade", "Termos de Uso"],
  },
];

export default function Pricing() {
  const classes = useStyles();

  return (
    <Container maxWidth="md" component="footer" className={classes.footer}>
      <Grid container spacing={4} justifyContent="space-evenly">
        {footers.map((footer) => (
          <Grid item xs={6} sm={3} key={footer.title}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              {footer.title}
            </Typography>
            <ul>
              {footer.description.map((item) => (
                <li key={item}>
                  <Link href="#" variant="subtitle1" color="textSecondary">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </Grid>
        ))}
      </Grid>
      <Box mt={5}>
        <Typography variant="body2" color="textSecondary" align="center">
          {"Copyright © "}
          <Link color="inherit" href="https://brasileis.com.br">
            Brasileis
          </Link>{" "}
          {new Date().getFullYear()}.
        </Typography>
      </Box>
    </Container>
  );
}
