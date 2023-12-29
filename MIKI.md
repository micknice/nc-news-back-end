--
-- PostgreSQL database dump
--

-- Dumped from database version 16.0
-- Dumped by pg_dump version 16.0

-- Started on 2023-12-03 01:29:49

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 216 (class 1259 OID 16578)
-- Name: address; Type: TABLE; Schema: public; Owner: e_commerce_emxk_user
--

CREATE TABLE public.address (
    id bigint NOT NULL,
    address_line_2 character varying(512),
    address_line_1 character varying(512) NOT NULL,
    city character varying(255) NOT NULL,
    country character varying(80) NOT NULL,
    user_id bigint NOT NULL,
    postcode character varying(30)
);


ALTER TABLE public.address OWNER TO e_commerce_emxk_user;

--
-- TOC entry 215 (class 1259 OID 16577)
-- Name: address_id_seq; Type: SEQUENCE; Schema: public; Owner: e_commerce_emxk_user
--

CREATE SEQUENCE public.address_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.address_id_seq OWNER TO e_commerce_emxk_user;

--
-- TOC entry 4962 (class 0 OID 0)
-- Dependencies: 215
-- Name: address_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: e_commerce_emxk_user
--

ALTER SEQUENCE public.address_id_seq OWNED BY public.address.id;


--
-- TOC entry 231 (class 1259 OID 34846)
-- Name: basket; Type: TABLE; Schema: public; Owner: e_commerce_emxk_user
--

CREATE TABLE public.basket (
    id integer NOT NULL,
    user_id integer NOT NULL,
    items text
);


ALTER TABLE public.basket OWNER TO e_commerce_emxk_user;

--
-- TOC entry 232 (class 1259 OID 34859)
-- Name: basket_seq; Type: SEQUENCE; Schema: public; Owner: e_commerce_emxk_user
--

CREATE SEQUENCE public.basket_seq
    START WITH 1
    INCREMENT BY 50
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.basket_seq OWNER TO e_commerce_emxk_user;

--
-- TOC entry 218 (class 1259 OID 16587)
-- Name: inventory; Type: TABLE; Schema: public; Owner: e_commerce_emxk_user
--

CREATE TABLE public.inventory (
    id bigint NOT NULL,
    product_id bigint NOT NULL,
    quantity integer NOT NULL
);


ALTER TABLE public.inventory OWNER TO e_commerce_emxk_user;

--
-- TOC entry 217 (class 1259 OID 16586)
-- Name: inventory_id_seq; Type: SEQUENCE; Schema: public; Owner: e_commerce_emxk_user
--

CREATE SEQUENCE public.inventory_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.inventory_id_seq OWNER TO e_commerce_emxk_user;

--
-- TOC entry 4963 (class 0 OID 0)
-- Dependencies: 217
-- Name: inventory_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: e_commerce_emxk_user
--

ALTER SEQUENCE public.inventory_id_seq OWNED BY public.inventory.id;


--
-- TOC entry 220 (class 1259 OID 16594)
-- Name: local_user; Type: TABLE; Schema: public; Owner: e_commerce_emxk_user
--

CREATE TABLE public.local_user (
    id bigint NOT NULL,
    email character varying(320) NOT NULL,
    first_name character varying(255) NOT NULL,
    last_name character varying(255) NOT NULL,
    password character varying(1000) NOT NULL,
    username character varying(255) NOT NULL,
    email_verified boolean DEFAULT false NOT NULL
);


ALTER TABLE public.local_user OWNER TO e_commerce_emxk_user;

--
-- TOC entry 219 (class 1259 OID 16593)
-- Name: local_user_id_seq; Type: SEQUENCE; Schema: public; Owner: e_commerce_emxk_user
--

CREATE SEQUENCE public.local_user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.local_user_id_seq OWNER TO e_commerce_emxk_user;

--
-- TOC entry 4964 (class 0 OID 0)
-- Dependencies: 219
-- Name: local_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: e_commerce_emxk_user
--

ALTER SEQUENCE public.local_user_id_seq OWNED BY public.local_user.id;


--
-- TOC entry 222 (class 1259 OID 16603)
-- Name: product; Type: TABLE; Schema: public; Owner: e_commerce_emxk_user
--

CREATE TABLE public.product (
    id bigint NOT NULL,
    long_description character varying(7000),
    name character varying(255) NOT NULL,
    price double precision NOT NULL,
    short_description character varying(1000) NOT NULL,
    img character varying(1028),
    sub_category character varying(255),
    category character varying(255),
    rating double precision
);


ALTER TABLE public.product OWNER TO e_commerce_emxk_user;

--
-- TOC entry 221 (class 1259 OID 16602)
-- Name: product_id_seq; Type: SEQUENCE; Schema: public; Owner: e_commerce_emxk_user
--

CREATE SEQUENCE public.product_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.product_id_seq OWNER TO e_commerce_emxk_user;

--
-- TOC entry 4965 (class 0 OID 0)
-- Dependencies: 221
-- Name: product_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: e_commerce_emxk_user
--

ALTER SEQUENCE public.product_id_seq OWNED BY public.product.id;


--
-- TOC entry 230 (class 1259 OID 25107)
-- Name: review; Type: TABLE; Schema: public; Owner: e_commerce_emxk_user
--

CREATE TABLE public.review (
    id bigint NOT NULL,
    author character varying(255) NOT NULL,
    body character varying(2054) NOT NULL,
    date character varying(255) NOT NULL,
    product_id integer NOT NULL,
    rating double precision NOT NULL,
    title character varying(255) NOT NULL
);


ALTER TABLE public.review OWNER TO e_commerce_emxk_user;

--
-- TOC entry 229 (class 1259 OID 25106)
-- Name: review_id_seq; Type: SEQUENCE; Schema: public; Owner: e_commerce_emxk_user
--

CREATE SEQUENCE public.review_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.review_id_seq OWNER TO e_commerce_emxk_user;

--
-- TOC entry 4966 (class 0 OID 0)
-- Dependencies: 229
-- Name: review_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: e_commerce_emxk_user
--

ALTER SEQUENCE public.review_id_seq OWNED BY public.review.id;


--
-- TOC entry 228 (class 1259 OID 16667)
-- Name: verification_token; Type: TABLE; Schema: public; Owner: e_commerce_emxk_user
--

CREATE TABLE public.verification_token (
    id bigint NOT NULL,
    created_time_stamp timestamp(6) without time zone NOT NULL,
    token character varying(255) NOT NULL,
    user_id bigint NOT NULL
);


ALTER TABLE public.verification_token OWNER TO e_commerce_emxk_user;

--
-- TOC entry 227 (class 1259 OID 16666)
-- Name: verification_token_id_seq; Type: SEQUENCE; Schema: public; Owner: e_commerce_emxk_user
--

CREATE SEQUENCE public.verification_token_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.verification_token_id_seq OWNER TO e_commerce_emxk_user;

--
-- TOC entry 4967 (class 0 OID 0)
-- Dependencies: 227
-- Name: verification_token_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: e_commerce_emxk_user
--

ALTER SEQUENCE public.verification_token_id_seq OWNED BY public.verification_token.id;


--
-- TOC entry 224 (class 1259 OID 16612)
-- Name: web_order; Type: TABLE; Schema: public; Owner: e_commerce_emxk_user
--

CREATE TABLE public.web_order (
    id bigint NOT NULL,
    address_id bigint NOT NULL,
    user_id bigint NOT NULL
);


ALTER TABLE public.web_order OWNER TO e_commerce_emxk_user;

--
-- TOC entry 223 (class 1259 OID 16611)
-- Name: web_order_id_seq; Type: SEQUENCE; Schema: public; Owner: e_commerce_emxk_user
--

CREATE SEQUENCE public.web_order_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.web_order_id_seq OWNER TO e_commerce_emxk_user;

--
-- TOC entry 4968 (class 0 OID 0)
-- Dependencies: 223
-- Name: web_order_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: e_commerce_emxk_user
--

ALTER SEQUENCE public.web_order_id_seq OWNED BY public.web_order.id;


--
-- TOC entry 226 (class 1259 OID 16619)
-- Name: web_order_quantities; Type: TABLE; Schema: public; Owner: e_commerce_emxk_user
--

CREATE TABLE public.web_order_quantities (
    id bigint NOT NULL,
    quantity integer NOT NULL,
    order_id bigint NOT NULL,
    product_id bigint NOT NULL
);


ALTER TABLE public.web_order_quantities OWNER TO e_commerce_emxk_user;

--
-- TOC entry 225 (class 1259 OID 16618)
-- Name: web_order_quantities_id_seq; Type: SEQUENCE; Schema: public; Owner: e_commerce_emxk_user
--

CREATE SEQUENCE public.web_order_quantities_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.web_order_quantities_id_seq OWNER TO e_commerce_emxk_user;

--
-- TOC entry 4969 (class 0 OID 0)
-- Dependencies: 225
-- Name: web_order_quantities_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: e_commerce_emxk_user
--

ALTER SEQUENCE public.web_order_quantities_id_seq OWNED BY public.web_order_quantities.id;


--
-- TOC entry 4728 (class 2604 OID 16581)
-- Name: address id; Type: DEFAULT; Schema: public; Owner: e_commerce_emxk_user
--

ALTER TABLE ONLY public.address ALTER COLUMN id SET DEFAULT nextval('public.address_id_seq'::regclass);


--
-- TOC entry 4729 (class 2604 OID 16590)
-- Name: inventory id; Type: DEFAULT; Schema: public; Owner: e_commerce_emxk_user
--

ALTER TABLE ONLY public.inventory ALTER COLUMN id SET DEFAULT nextval('public.inventory_id_seq'::regclass);


--
-- TOC entry 4730 (class 2604 OID 16597)
-- Name: local_user id; Type: DEFAULT; Schema: public; Owner: e_commerce_emxk_user
--

ALTER TABLE ONLY public.local_user ALTER COLUMN id SET DEFAULT nextval('public.local_user_id_seq'::regclass);


--
-- TOC entry 4732 (class 2604 OID 16606)
-- Name: product id; Type: DEFAULT; Schema: public; Owner: e_commerce_emxk_user
--

ALTER TABLE ONLY public.product ALTER COLUMN id SET DEFAULT nextval('public.product_id_seq'::regclass);


--
-- TOC entry 4736 (class 2604 OID 25110)
-- Name: review id; Type: DEFAULT; Schema: public; Owner: e_commerce_emxk_user
--

ALTER TABLE ONLY public.review ALTER COLUMN id SET DEFAULT nextval('public.review_id_seq'::regclass);


--
-- TOC entry 4735 (class 2604 OID 16670)
-- Name: verification_token id; Type: DEFAULT; Schema: public; Owner: e_commerce_emxk_user
--

ALTER TABLE ONLY public.verification_token ALTER COLUMN id SET DEFAULT nextval('public.verification_token_id_seq'::regclass);


--
-- TOC entry 4733 (class 2604 OID 16615)
-- Name: web_order id; Type: DEFAULT; Schema: public; Owner: e_commerce_emxk_user
--

ALTER TABLE ONLY public.web_order ALTER COLUMN id SET DEFAULT nextval('public.web_order_id_seq'::regclass);


--
-- TOC entry 4734 (class 2604 OID 16622)
-- Name: web_order_quantities id; Type: DEFAULT; Schema: public; Owner: e_commerce_emxk_user
--

ALTER TABLE ONLY public.web_order_quantities ALTER COLUMN id SET DEFAULT nextval('public.web_order_quantities_id_seq'::regclass);


--
-- TOC entry 4931 (class 2613 OID 16681)
-- Name: 16681; Type: BLOB; Schema: -; Owner: e_commerce_emxk_user
--

SELECT pg_catalog.lo_create('16681');


ALTER LARGE OBJECT 16681 OWNER TO e_commerce_emxk_user;

--
-- TOC entry 4932 (class 2613 OID 16682)
-- Name: 16682; Type: BLOB; Schema: -; Owner: e_commerce_emxk_user
--

SELECT pg_catalog.lo_create('16682');


ALTER LARGE OBJECT 16682 OWNER TO e_commerce_emxk_user;

--
-- TOC entry 4933 (class 2613 OID 24858)
-- Name: 24858; Type: BLOB; Schema: -; Owner: e_commerce_emxk_user
--

SELECT pg_catalog.lo_create('24858');


ALTER LARGE OBJECT 24858 OWNER TO e_commerce_emxk_user;

--
-- TOC entry 4934 (class 2613 OID 24859)
-- Name: 24859; Type: BLOB; Schema: -; Owner: e_commerce_emxk_user
--

SELECT pg_catalog.lo_create('24859');


ALTER LARGE OBJECT 24859 OWNER TO e_commerce_emxk_user;

--
-- TOC entry 4935 (class 2613 OID 24860)
-- Name: 24860; Type: BLOB; Schema: -; Owner: e_commerce_emxk_user
--

SELECT pg_catalog.lo_create('24860');


ALTER LARGE OBJECT 24860 OWNER TO e_commerce_emxk_user;

--
-- TOC entry 4936 (class 2613 OID 24861)
-- Name: 24861; Type: BLOB; Schema: -; Owner: e_commerce_emxk_user
--

SELECT pg_catalog.lo_create('24861');


ALTER LARGE OBJECT 24861 OWNER TO e_commerce_emxk_user;

--
-- TOC entry 4937 (class 2613 OID 24862)
-- Name: 24862; Type: BLOB; Schema: -; Owner: e_commerce_emxk_user
--

SELECT pg_catalog.lo_create('24862');


ALTER LARGE OBJECT 24862 OWNER TO e_commerce_emxk_user;

--
-- TOC entry 4938 (class 2613 OID 24863)
-- Name: 24863; Type: BLOB; Schema: -; Owner: e_commerce_emxk_user
--

SELECT pg_catalog.lo_create('24863');


ALTER LARGE OBJECT 24863 OWNER TO e_commerce_emxk_user;

--
-- TOC entry 4939 (class 2613 OID 24864)
-- Name: 24864; Type: BLOB; Schema: -; Owner: e_commerce_emxk_user
--

SELECT pg_catalog.lo_create('24864');


ALTER LARGE OBJECT 24864 OWNER TO e_commerce_emxk_user;

--
-- TOC entry 4940 (class 2613 OID 24865)
-- Name: 24865; Type: BLOB; Schema: -; Owner: e_commerce_emxk_user
--

SELECT pg_catalog.lo_create('24865');


ALTER LARGE OBJECT 24865 OWNER TO e_commerce_emxk_user;

--
-- TOC entry 4941 (class 2613 OID 24866)
-- Name: 24866; Type: BLOB; Schema: -; Owner: e_commerce_emxk_user
--

SELECT pg_catalog.lo_create('24866');


ALTER LARGE OBJECT 24866 OWNER TO e_commerce_emxk_user;

--
-- TOC entry 4942 (class 2613 OID 24867)
-- Name: 24867; Type: BLOB; Schema: -; Owner: e_commerce_emxk_user
--

SELECT pg_catalog.lo_create('24867');


ALTER LARGE OBJECT 24867 OWNER TO e_commerce_emxk_user;

--
-- TOC entry 4943 (class 2613 OID 24868)
-- Name: 24868; Type: BLOB; Schema: -; Owner: e_commerce_emxk_user
--

SELECT pg_catalog.lo_create('24868');


ALTER LARGE OBJECT 24868 OWNER TO e_commerce_emxk_user;

--
-- TOC entry 4944 (class 2613 OID 24869)
-- Name: 24869; Type: BLOB; Schema: -; Owner: e_commerce_emxk_user
--

SELECT pg_catalog.lo_create('24869');


ALTER LARGE OBJECT 24869 OWNER TO e_commerce_emxk_user;

--
-- TOC entry 4945 (class 2613 OID 24870)
-- Name: 24870; Type: BLOB; Schema: -; Owner: e_commerce_emxk_user
--

SELECT pg_catalog.lo_create('24870');


ALTER LARGE OBJECT 24870 OWNER TO e_commerce_emxk_user;

--
-- TOC entry 4946 (class 2613 OID 24871)
-- Name: 24871; Type: BLOB; Schema: -; Owner: e_commerce_emxk_user
--

SELECT pg_catalog.lo_create('24871');


ALTER LARGE OBJECT 24871 OWNER TO e_commerce_emxk_user;

--
-- TOC entry 4947 (class 2613 OID 24872)
-- Name: 24872; Type: BLOB; Schema: -; Owner: e_commerce_emxk_user
--

SELECT pg_catalog.lo_create('24872');


ALTER LARGE OBJECT 24872 OWNER TO e_commerce_emxk_user;

--
-- TOC entry 4948 (class 2613 OID 24873)
-- Name: 24873; Type: BLOB; Schema: -; Owner: e_commerce_emxk_user
--

SELECT pg_catalog.lo_create('24873');


ALTER LARGE OBJECT 24873 OWNER TO e_commerce_emxk_user;

--
-- TOC entry 4949 (class 2613 OID 24874)
-- Name: 24874; Type: BLOB; Schema: -; Owner: e_commerce_emxk_user
--

SELECT pg_catalog.lo_create('24874');


ALTER LARGE OBJECT 24874 OWNER TO e_commerce_emxk_user;

--
-- TOC entry 4950 (class 2613 OID 24875)
-- Name: 24875; Type: BLOB; Schema: -; Owner: e_commerce_emxk_user
--

SELECT pg_catalog.lo_create('24875');


ALTER LARGE OBJECT 24875 OWNER TO e_commerce_emxk_user;

--
-- TOC entry 4951 (class 2613 OID 24876)
-- Name: 24876; Type: BLOB; Schema: -; Owner: e_commerce_emxk_user
--

SELECT pg_catalog.lo_create('24876');


ALTER LARGE OBJECT 24876 OWNER TO e_commerce_emxk_user;

--
-- TOC entry 4952 (class 2613 OID 24877)
-- Name: 24877; Type: BLOB; Schema: -; Owner: e_commerce_emxk_user
--

SELECT pg_catalog.lo_create('24877');


ALTER LARGE OBJECT 24877 OWNER TO e_commerce_emxk_user;

--
-- TOC entry 4953 (class 2613 OID 24878)
-- Name: 24878; Type: BLOB; Schema: -; Owner: e_commerce_emxk_user
--

SELECT pg_catalog.lo_create('24878');


ALTER LARGE OBJECT 24878 OWNER TO e_commerce_emxk_user;

--
-- TOC entry 4954 (class 2613 OID 24879)
-- Name: 24879; Type: BLOB; Schema: -; Owner: e_commerce_emxk_user
--

SELECT pg_catalog.lo_create('24879');


ALTER LARGE OBJECT 24879 OWNER TO e_commerce_emxk_user;

--
-- TOC entry 4955 (class 2613 OID 24880)
-- Name: 24880; Type: BLOB; Schema: -; Owner: e_commerce_emxk_user
--

SELECT pg_catalog.lo_create('24880');


ALTER LARGE OBJECT 24880 OWNER TO e_commerce_emxk_user;

--
-- TOC entry 4914 (class 0 OID 16578)
-- Dependencies: 216
-- Data for Name: address; Type: TABLE DATA; Schema: public; Owner: e_commerce_emxk_user
--

COPY public.address (id, address_line_2, address_line_1, city, country, user_id, postcode) FROM stdin;
1	7th Floor	1 Darwin Parkway	Church End	United Kingdom	1	N3
2	18th Floor	34501 Atwood Trail	Swindon	United Kingdom	2	SN1
3	PO Box 43195	955 Browning Center	Normanton	United Kingdom	3	LE15
4	12th Floor	7367 Dwight Plaza	Wootton	United Kingdom	4	NN4
5	14th Floor	192 Ruskin Avenue	Swindon	United Kingdom	5	SN1
6	Suite 86	291 Killdeer Hill	Upton	United Kingdom	6	WF9
7	13th Floor	756 Golf Course Circle	Sheffield	United Kingdom	7	S1
8	Suite 97	3 Eggendart Court	London	United Kingdom	8	W1F
9	3rd Floor	89 Hauk Way	London	United Kingdom	9	WC1B
10	Apt 1379	1838 Harper Trail	Twyford	United Kingdom	10	LE14
11	8th Floor	37825 Homewood Avenue	Birmingham	United Kingdom	11	B12
12	PO Box 17423	15 Arapahoe Trail	Ford	United Kingdom	12	GL54
13	Suite 5	24870 Lakeland Point	Middleton	United Kingdom	13	LE16
14	Room 1279	93 International Way	Liverpool	United Kingdom	14	L33
15	3rd Floor	56153 Mcbride Junction	Whitchurch	United Kingdom	15	BS14
16	Apt 631	639 Springview Center	Norton	United Kingdom	16	S8
17	PO Box 83422	0 Autumn Leaf Avenue	Ford	United Kingdom	17	GL54
18	PO Box 62768	595 Fremont Point	Church End	United Kingdom	18	N3
19	Apt 605	9 Packers Park	Weston	United Kingdom	19	GU32
20	Apt 1777	30 Weeping Birch Parkway	Middleton	United Kingdom	20	LE16
21	Suite 89	1245 Continental Park	Newport	United Kingdom	21	NR29
22	6th Floor	4880 Superior Road	Merton	United Kingdom	22	SW19
23	PO Box 14628	700 Loomis Alley	Kirkton	United Kingdom	23	KW10
24	Suite 33	40 Mccormick Court	Pentre	United Kingdom	24	SY4
25	3rd Floor	73685 Commercial Plaza	West End	United Kingdom	25	DN36
26	Suite 28	232 Tennyson Crossing	Bristol	United Kingdom	26	BS41
27	Room 670	02 Village Center	Linton	United Kingdom	27	BD23
28	Apt 1625	157 Division Trail	Milton	United Kingdom	28	AB56
29	Room 672	03812 Lakewood Pass	Burnside	United Kingdom	29	EH52
30	PO Box 5645	9599 Burrows Court	London	United Kingdom	30	WC2H
31	Suite 24	114 Muir Terrace	Carlton	United Kingdom	31	DL8
32	PO Box 91218	3 Fulton Center	London	United Kingdom	32	W1F
33	9th Floor	49690 Debra Drive	Whitchurch	United Kingdom	33	BS14
34	Apt 959	065 Dorton Road	Dean	United Kingdom	34	OX7
35	Suite 78	132 Lien Drive	Norton	United Kingdom	35	NN11
36	PO Box 45400	52 Golden Leaf Plaza	Pentre	United Kingdom	36	SY4
37	Apt 1218	4364 Lakewood Court	East End	United Kingdom	37	BH21
38	PO Box 83916	85 Tomscot Street	Burnside	United Kingdom	38	EH52
39	6th Floor	720 Reindahl Drive	Kingston	United Kingdom	39	DT10
40	Suite 58	901 Moose Point	Newtown	United Kingdom	40	RG20
41	16th Floor	132 Golf View Junction	Wirral	United Kingdom	41	CH48
42	4th Floor	116 Vahlen Road	Hatton	United Kingdom	42	CV35
43	Room 1690	7 Glacier Hill Parkway	London	United Kingdom	43	WC2H
44	PO Box 35939	61 Kensington Avenue	Ashley	United Kingdom	44	SN13
45	PO Box 93532	08 Hoepker Crossing	Kinloch	United Kingdom	45	PH43
46	12th Floor	47746 Londonderry Terrace	Norton	United Kingdom	46	NN11
47	Apt 1842	80099 Goodland Street	Edinburgh	United Kingdom	47	EH9
48	Suite 6	965 Melby Court	Merton	United Kingdom	48	SW19
49	Room 1564	423 Linden Lane	Seaton	United Kingdom	49	LE15
50	Suite 96	6321 1st Drive	Sheffield	United Kingdom	50	S1
51	Suite 69	256 Raven Trail	Newbiggin	United Kingdom	51	NE46
52	Room 1009	01255 New Castle Pass	Milton	United Kingdom	52	NG22
53	PO Box 86501	863 Stone Corner Center	Upton	United Kingdom	53	DN21
54	Room 1313	5691 Londonderry Hill	Bristol	United Kingdom	54	BS41
55	Apt 740	6932 Golf View Park	Twyford	United Kingdom	55	LE14
56	Apt 1550	0334 East Crossing	Manchester	United Kingdom	56	M14
57	14th Floor	2 Reindahl Avenue	Birmingham	United Kingdom	57	B12
58	Suite 93	1 Warbler Place	Bristol	United Kingdom	58	BS41
59	Apt 459	79470 Victoria Place	Aberdeen	United Kingdom	59	AB39
60	Room 1170	8 Gulseth Alley	Newtown	United Kingdom	60	RG20
61	2nd Floor	95978 Derek Trail	Eaton	United Kingdom	61	DN22
62	17th Floor	48 Barnett Junction	Liverpool	United Kingdom	62	L33
63	Apt 1365	659 Autumn Leaf Pass	Whitchurch	United Kingdom	63	BS14
64	Apt 676	40468 Bartillon Road	Kingston	United Kingdom	64	DT10
65	PO Box 47078	64 Southridge Plaza	Walton	United Kingdom	65	CV35
66	Room 454	789 Arkansas Way	Swindon	United Kingdom	66	SN1
67	11th Floor	9 Gerald Circle	Sheffield	United Kingdom	67	S1
68	PO Box 7930	6850 Arapahoe Trail	Milton	United Kingdom	68	NG22
69	2nd Floor	41741 Reindahl Lane	Milton	United Kingdom	69	AB56
70	16th Floor	92 Dapin Lane	Milton	United Kingdom	70	AB56
71	PO Box 52867	260 Maryland Junction	Marston	United Kingdom	71	ST20
72	Apt 1511	53001 Lotheville Place	Kinloch	United Kingdom	72	PH43
73	PO Box 86723	04379 Scoville Road	Aston	United Kingdom	73	TF6
74	19th Floor	329 Muir Court	Sutton	United Kingdom	74	RH5
75	PO Box 62258	2599 Spenser Drive	Church End	United Kingdom	75	CB4
76	PO Box 67197	6270 Manley Court	Newton	United Kingdom	76	IV1
77	Room 620	535 Nobel Crossing	West End	United Kingdom	77	DN36
78	13th Floor	21309 Menomonie Avenue	Church End	United Kingdom	78	N3
79	PO Box 51063	5549 American Trail	Bradford	United Kingdom	79	BD7
80	Apt 1662	07722 Grayhawk Way	London	United Kingdom	80	SW1E
81	PO Box 6850	95068 Rigney Drive	Walton	United Kingdom	81	CV35
82	Room 1482	8 Dakota Circle	Sheffield	United Kingdom	82	S1
83	PO Box 57723	77288 Ramsey Parkway	Upton	United Kingdom	83	DN21
84	Apt 83	59074 Sunnyside Hill	Preston	United Kingdom	84	PR1
85	Room 632	1606 Clove Avenue	Liverpool	United Kingdom	85	L74
86	13th Floor	86 Nelson Avenue	Bristol	United Kingdom	86	BS41
87	PO Box 39686	81 Sundown Pass	Langley	United Kingdom	87	SG4
88	PO Box 58712	69 Shopko Street	Normanton	United Kingdom	88	LE15
89	PO Box 1538	306 Duke Pass	Birmingham	United Kingdom	89	B40
90	Room 645	5 Blue Bill Park Parkway	West End	United Kingdom	90	DN36
91	Apt 915	270 Straubel Way	Weston	United Kingdom	91	GU32
92	Apt 440	69 Lakewood Street	Newton	United Kingdom	92	IV1
93	9th Floor	2810 Havey Lane	Twyford	United Kingdom	93	LE14
94	Apt 1007	3 Algoma Drive	Wirral	United Kingdom	94	CH48
95	15th Floor	604 Annamark Avenue	Newbiggin	United Kingdom	95	NE46
96	PO Box 77761	5505 Lyons Drive	East End	United Kingdom	96	BH21
97	Room 763	714 Mesta Park	Birmingham	United Kingdom	97	B12
98	3rd Floor	7 Del Mar Way	Church End	United Kingdom	98	N3
99	Suite 1	61007 Norway Maple Pass	Whitwell	United Kingdom	99	DL10
100	Suite 13	979 Marquette Drive	Seaton	United Kingdom	100	LE15
101	11th Floor	878 Marcy Junction	Sheffield	United Kingdom	101	S1
102	Suite 24	4 Crowley Court	Normanton	United Kingdom	102	LE15
103	Suite 76	381 Quincy Place	Marston	United Kingdom	103	ST20
104	PO Box 33522	20094 Charing Cross Crossing	Aberdeen	United Kingdom	104	AB39
105	Suite 95	608 Haas Place	Pentre	United Kingdom	105	SY4
106	Suite 5	3 Northwestern Terrace	Brampton	United Kingdom	106	NR34
107	PO Box 83857	2 Sheridan Trail	Wirral	United Kingdom	107	CH48
108	Suite 68	45544 Portage Park	Liverpool	United Kingdom	108	L33
109	Apt 1106	674 Hooker Pass	Thorpe	United Kingdom	109	BD23
110	Apt 754	37 Bunker Hill Parkway	Milton	United Kingdom	110	NG22
111	Room 1771	7479 Killdeer Center	Upton	United Kingdom	111	WF9
112	PO Box 59749	6257 Delaware Hill	Linton	United Kingdom	112	BD23
113	Apt 451	702 Stoughton Park	Halton	United Kingdom	113	LS9
114	Apt 1276	8 Meadow Vale Street	Birmingham	United Kingdom	114	B40
115	PO Box 50823	37 Mandrake Alley	London	United Kingdom	115	WC2H
116	Suite 3	594 Hermina Pass	Normanton	United Kingdom	116	LE15
117	Room 455	2 Elka Drive	Ashley	United Kingdom	117	SN13
118	Suite 39	99 Badeau Point	Newbiggin	United Kingdom	118	NE46
119	5th Floor	17 Homewood Hill	Newport	United Kingdom	119	NR29
120	4th Floor	770 Nelson Crossing	Ashley	United Kingdom	120	SN13
121	PO Box 28562	61611 John Wall Circle	Charlton	United Kingdom	121	OX12
122	Room 906	6 Ridgeway Lane	London	United Kingdom	122	WC1B
123	Apt 1807	24 Stang Point	Newton	United Kingdom	123	IV1
124	10th Floor	0794 Toban Lane	Newton	United Kingdom	124	IV1
125	Apt 587	69 Golf View Place	Norton	United Kingdom	125	NN11
126	Apt 450	222 Messerschmidt Park	Birmingham	United Kingdom	126	B40
127	Suite 60	5 Elgar Crossing	Kingston	United Kingdom	127	DT10
128	13th Floor	8686 Little Fleur Hill	Denton	United Kingdom	128	M34
129	7th Floor	11 Eastwood Street	Norton	United Kingdom	129	S8
130	Room 1588	74 Debra Park	Norton	United Kingdom	130	NN11
131	Suite 25	483 Fordem Junction	Kingston	United Kingdom	131	DT10
132	4th Floor	525 Meadow Valley Circle	Walton	United Kingdom	132	CV35
133	Apt 1427	522 Valley Edge Drive	Charlton	United Kingdom	133	OX12
134	Suite 3	1674 Sugar Lane	Newton	United Kingdom	134	NG34
135	PO Box 2559	64 Thackeray Hill	London	United Kingdom	135	EC3M
136	Apt 1062	4259 Maple Wood Parkway	Upton	United Kingdom	136	DN21
137	Apt 570	9 Anthes Way	Buckland	United Kingdom	137	CT16
138	7th Floor	3 Nevada Place	Leeds	United Kingdom	138	LS6
139	Apt 1888	86653 Logan Trail	Whitchurch	United Kingdom	139	BS14
140	PO Box 89713	8 Granby Plaza	Liverpool	United Kingdom	140	L33
141	Room 1440	379 Melody Road	Marston	United Kingdom	141	ST20
142	PO Box 94271	90425 Morningstar Parkway	Swindon	United Kingdom	142	SN1
143	Room 848	6 Sunnyside Drive	Aston	United Kingdom	143	TF6
144	PO Box 67975	2 Hanson Point	Sheffield	United Kingdom	144	S1
145	3rd Floor	68738 Truax Way	Preston	United Kingdom	145	PR1
146	10th Floor	0 Ruskin Park	Pentre	United Kingdom	146	SY4
147	Room 910	278 Mesta Crossing	London	United Kingdom	147	WC1B
148	Room 1292	626 Village Court	Thorpe	United Kingdom	148	BD23
149	Room 512	6876 Cody Circle	Aston	United Kingdom	149	TF6
150	PO Box 99294	128 Fuller Point	Milton	United Kingdom	150	NG22
151	Room 867	956 Mifflin Center	Walton	United Kingdom	151	CV35
152	PO Box 62550	415 Shasta Circle	Newton	United Kingdom	152	NG34
153	PO Box 78240	2913 Sutteridge Lane	Whitchurch	United Kingdom	153	BS14
154	Apt 722	7351 Derek Place	Milton	United Kingdom	154	AB56
155	Suite 85	93072 Dawn Trail	Eaton	United Kingdom	155	DN22
156	2nd Floor	1724 Warrior Place	Whitwell	United Kingdom	156	DL10
157	PO Box 63245	26181 Village Green Parkway	Tullich	United Kingdom	157	AB55
158	Apt 976	003 Nelson Circle	Dean	United Kingdom	158	OX7
159	Apt 1340	62 Bay Center	Horton	United Kingdom	159	BS37
160	Apt 1008	37683 Sauthoff Trail	London	United Kingdom	160	EC3M
161	PO Box 44919	4027 Monterey Center	Bristol	United Kingdom	161	BS41
162	Room 697	7 Meadow Vale Road	Newport	United Kingdom	162	NR29
163	PO Box 16774	25029 Mockingbird Center	Aberdeen	United Kingdom	163	AB39
164	Suite 13	931 Forest Dale Point	Thorpe	United Kingdom	164	BD23
165	Suite 54	2 Westport Avenue	Thorpe	United Kingdom	165	BD23
166	5th Floor	0 Continental Hill	Leeds	United Kingdom	166	LS6
167	Apt 333	149 West Avenue	Linton	United Kingdom	167	BD23
168	Apt 1350	0 Oneill Circle	Dean	United Kingdom	168	OX7
169	PO Box 55709	09 Debra Alley	Wirral	United Kingdom	169	CH48
170	Apt 1968	51816 Rockefeller Avenue	Sheffield	United Kingdom	170	S1
171	PO Box 39804	24 Crowley Center	Church End	United Kingdom	171	N3
172	Apt 1254	22 Fairview Center	Kinloch	United Kingdom	172	PH43
173	Suite 22	9 Esch Drive	Weston	United Kingdom	173	GU32
174	PO Box 41999	5521 Tennyson Street	Walton	United Kingdom	174	CV35
175	Suite 10	732 Morrow Court	Normanton	United Kingdom	175	LE15
176	Room 1802	7080 Porter Trail	Aberdeen	United Kingdom	176	AB39
177	Room 1310	02778 Bluestem Junction	Normanton	United Kingdom	177	LE15
178	PO Box 85712	50665 Eastwood Point	London	United Kingdom	178	W1F
179	PO Box 39755	8591 Manufacturers Junction	London	United Kingdom	179	EC3M
180	PO Box 50228	6 Londonderry Drive	Newtown	United Kingdom	180	RG20
181	Room 1869	4753 Mitchell Plaza	Twyford	United Kingdom	181	LE14
182	PO Box 16179	6202 Blaine Place	Denton	United Kingdom	182	M34
183	Room 367	3 Lakewood Gardens Road	Burnside	United Kingdom	183	EH52
184	7th Floor	81 John Wall Street	Newbiggin	United Kingdom	184	NE46
185	Apt 432	02270 Oriole Street	Wootton	United Kingdom	185	NN4
186	PO Box 33415	143 Hagan Plaza	Burnside	United Kingdom	186	EH52
187	19th Floor	63 Pennsylvania Park	Belfast	United Kingdom	187	BT2
188	Room 482	8883 Boyd Drive	Ashley	United Kingdom	188	SN13
189	Apt 62	04 Sundown Circle	Langley	United Kingdom	189	SG4
190	Suite 47	58 Lillian Way	Kinloch	United Kingdom	190	PH43
191	Suite 21	92094 Londonderry Junction	Langley	United Kingdom	191	SG4
192	Room 1489	10 Heath Trail	Preston	United Kingdom	192	PR1
193	PO Box 77601	5 Stuart Lane	Pentre	United Kingdom	193	SY4
194	Room 156	92406 Debs Pass	Ashley	United Kingdom	194	SN13
195	Apt 1091	92 Mockingbird Crossing	Norton	United Kingdom	195	S8
196	Suite 9	2 Ridgeway Terrace	Ashley	United Kingdom	196	SN13
197	Suite 20	541 Sugar Junction	Birmingham	United Kingdom	197	B12
198	Room 1750	81 Crowley Parkway	Newport	United Kingdom	198	NR29
199	13th Floor	85782 Summer Ridge Drive	Newtown	United Kingdom	199	RG20
200	Suite 19	4 Waxwing Avenue	Leeds	United Kingdom	200	LS6
201	Suite 96	6977 Westerfield Hill	Newbiggin	United Kingdom	201	NE46
202	11th Floor	0 Stephen Trail	Dean	United Kingdom	202	OX7
203	Room 1569	1 Ohio Road	Sutton	United Kingdom	203	RH5
204	Suite 70	03 Porter Point	Middleton	United Kingdom	204	LE16
205	Room 817	377 Village Trail	Twyford	United Kingdom	205	LE14
206	Apt 1070	4117 Pankratz Junction	Wirral	United Kingdom	206	CH48
207	Suite 74	1 Service Pass	Craigavon	United Kingdom	207	BT66
208	PO Box 10965	89 Express Alley	Preston	United Kingdom	208	PR1
209	Room 1411	0 Village Drive	Seaton	United Kingdom	209	LE15
210	Suite 13	22557 Warrior Point	Swindon	United Kingdom	210	SN1
211	Suite 96	36 Killdeer Alley	London	United Kingdom	211	EC3M
212	PO Box 96423	321 Fuller Drive	Milton	United Kingdom	212	NG22
213	10th Floor	0090 Summerview Road	Stapleford	United Kingdom	213	LN6
214	15th Floor	71 Northview Alley	Milton	United Kingdom	214	AB56
215	Suite 26	537 Arrowood Center	Sheffield	United Kingdom	215	S1
216	Apt 1791	45 Menomonie Street	Linton	United Kingdom	216	BD23
217	Room 322	44 Sloan Street	Merton	United Kingdom	217	SW19
218	6th Floor	33 Clyde Gallagher Parkway	Kirkton	United Kingdom	218	KW10
219	PO Box 83643	340 Doe Crossing Plaza	Thorpe	United Kingdom	219	BD23
220	Room 968	03027 Redwing Drive	Glasgow	United Kingdom	220	G4
221	Apt 39	24 Kennedy Terrace	Leeds	United Kingdom	221	LS6
222	1st Floor	6 Lighthouse Bay Parkway	Church End	United Kingdom	222	N3
223	PO Box 68247	555 Fisk Park	Buckland	United Kingdom	223	CT16
224	Room 1077	3 Calypso Circle	Linton	United Kingdom	224	BD23
225	Apt 1893	11644 Ridgeview Terrace	Seaton	United Kingdom	225	LE15
226	Suite 2	159 Pond Street	Swindon	United Kingdom	226	SN1
227	20th Floor	9876 Forest Pass	Liverpool	United Kingdom	227	L74
228	Room 1223	44 Thackeray Way	Preston	United Kingdom	228	PR1
229	PO Box 53190	94930 Anthes Terrace	Carlton	United Kingdom	229	DL8
230	Room 1754	9270 Hayes Center	London	United Kingdom	230	WC2H
231	4th Floor	11416 Heffernan Trail	Milton	United Kingdom	231	AB56
232	PO Box 89054	6998 Northridge Place	Newton	United Kingdom	232	IV1
233	PO Box 49460	94 Pepper Wood Crossing	Ford	United Kingdom	233	GL54
234	Suite 98	10 Del Sol Street	Craigavon	United Kingdom	234	BT66
235	PO Box 96746	6186 Harbort Drive	Birmingham	United Kingdom	235	B40
236	11th Floor	9169 Oak Valley Junction	Halton	United Kingdom	236	LS9
237	Suite 10	55 Butternut Pass	Carlton	United Kingdom	237	DL8
238	PO Box 33633	6079 Clarendon Plaza	Charlton	United Kingdom	238	OX12
239	Room 838	25502 Laurel Junction	London	United Kingdom	239	WC1B
240	Apt 121	20 Hagan Alley	Birmingham	United Kingdom	240	B40
241	Apt 1	7328 Nova Plaza	Liverpool	United Kingdom	241	L33
242	Suite 49	34808 Tennessee Alley	Kirkton	United Kingdom	242	KW10
243	Suite 66	857 Bellgrove Point	Hatton	United Kingdom	243	CV35
244	Room 1488	93 Lindbergh Circle	London	United Kingdom	244	WC1B
245	3rd Floor	284 Melody Court	Upton	United Kingdom	245	WF9
246	Room 1570	71007 Pankratz Point	Denton	United Kingdom	246	M34
247	PO Box 43951	499 Badeau Junction	Whitchurch	United Kingdom	247	BS14
248	Room 445	6485 Shoshone Hill	Sheffield	United Kingdom	248	S33
249	Room 1877	93 Upham Trail	Marston	United Kingdom	249	ST20
250	PO Box 29437	8371 Clove Avenue	East End	United Kingdom	250	BH21
251	Apt 1986	07 Becker Lane	Aston	United Kingdom	251	TF6
252	14th Floor	056 Swallow Hill	Stapleford	United Kingdom	252	LN6
253	PO Box 28979	89 Alpine Hill	London	United Kingdom	253	WC2H
254	13th Floor	978 Melvin Center	Denton	United Kingdom	254	M34
255	Apt 457	70 Tomscot Point	Brampton	United Kingdom	255	NR34
256	18th Floor	4 Brown Way	Liverpool	United Kingdom	256	L33
257	Room 524	046 Dayton Junction	Sheffield	United Kingdom	257	S33
258	Suite 78	8460 Old Gate Junction	Wootton	United Kingdom	258	NN4
259	Apt 1227	3 Gerald Hill	Brampton	United Kingdom	259	NR34
260	Apt 349	705 Green Ridge Trail	London	United Kingdom	260	EC1V
261	PO Box 93464	9763 Golf Alley	London	United Kingdom	261	EC3M
262	Apt 1849	7791 Corry Avenue	Buckland	United Kingdom	262	CT16
263	PO Box 18940	0075 Graceland Center	Tullich	United Kingdom	263	AB55
264	PO Box 86017	2 Corben Circle	Halton	United Kingdom	264	LS9
265	Room 1395	865 Ramsey Hill	Twyford	United Kingdom	265	LE14
266	Apt 1251	9568 Golf View Circle	Ashley	United Kingdom	266	SN13
267	19th Floor	85 Little Fleur Crossing	Edinburgh	United Kingdom	267	EH9
268	Room 1749	287 Towne Avenue	Charlton	United Kingdom	268	OX12
269	Suite 82	0 Grasskamp Alley	Sutton	United Kingdom	269	RH5
270	Room 720	7 Forest Run Trail	Buckland	United Kingdom	270	CT16
271	Room 212	94189 Glendale Place	Kingston	United Kingdom	271	DT10
272	16th Floor	8979 Melody Crossing	Tullich	United Kingdom	272	AB55
273	Room 511	195 Waubesa Hill	Birmingham	United Kingdom	273	B40
274	PO Box 61625	7380 Melrose Circle	Weston	United Kingdom	274	GU32
275	Room 1269	34 Vera Terrace	Newton	United Kingdom	275	NG34
276	Apt 1011	3151 Westerfield Court	London	United Kingdom	276	W1F
277	PO Box 61336	7955 Norway Maple Point	Ashley	United Kingdom	277	SN13
278	14th Floor	1362 Badeau Street	Liverpool	United Kingdom	278	L74
279	PO Box 47805	3 Dixon Plaza	London	United Kingdom	279	W1F
280	Room 1976	08 Thompson Place	East End	United Kingdom	280	BH21
281	Room 1989	95 Steensland Park	Norton	United Kingdom	281	NN11
282	Room 349	0454 Almo Way	Belfast	United Kingdom	282	BT2
283	PO Box 83571	330 Saint Paul Road	Milton	United Kingdom	283	NG22
284	Room 435	42 Nobel Terrace	Charlton	United Kingdom	284	OX12
285	PO Box 69476	51 Dakota Point	Normanton	United Kingdom	285	LE15
286	Apt 45	74 Veith Hill	Glasgow	United Kingdom	286	G4
287	PO Box 80783	52954 New Castle Hill	Whitchurch	United Kingdom	287	BS14
288	11th Floor	723 Crownhardt Lane	Wirral	United Kingdom	288	CH48
289	Suite 14	5939 Schlimgen Drive	Church End	United Kingdom	289	CB4
290	Suite 48	5985 Prentice Drive	Seaton	United Kingdom	290	LE15
291	Apt 16	3 Lunder Terrace	East End	United Kingdom	291	BH21
292	Room 191	151 Chinook Alley	London	United Kingdom	292	W1F
293	Room 1276	46849 Upham Circle	Newton	United Kingdom	293	NG34
294	PO Box 68251	12604 Pleasure Terrace	Pentre	United Kingdom	294	SY4
295	Room 1606	40 Little Fleur Parkway	Wootton	United Kingdom	295	NN4
296	PO Box 52376	58332 Dawn Crossing	East End	United Kingdom	296	BH21
297	PO Box 36527	3801 Becker Park	Seaton	United Kingdom	297	LE15
298	6th Floor	99150 Warner Road	Twyford	United Kingdom	298	LE14
299	Room 685	3090 Green Ridge Drive	Whitchurch	United Kingdom	299	BS14
300	Apt 1914	7 Grayhawk Way	Norton	United Kingdom	300	S8
301	PO Box 6065	415 Hayes Avenue	Whitchurch	United Kingdom	301	BS14
302	Room 1545	121 Carioca Point	Aberdeen	United Kingdom	302	AB39
303	PO Box 63642	099 Hanover Road	Swindon	United Kingdom	303	SN1
304	Suite 88	66360 Walton Drive	Upton	United Kingdom	304	DN21
305	PO Box 63795	8 Jay Point	Norton	United Kingdom	305	NN11
306	PO Box 25419	27160 Briar Crest Junction	London	United Kingdom	306	WC1B
307	16th Floor	70187 Brentwood Street	Sutton	United Kingdom	307	RH5
308	Suite 14	92 Lake View Pass	London	United Kingdom	308	EC3M
309	Apt 1642	85262 Oxford Alley	Weston	United Kingdom	309	GU32
310	Room 1960	99658 Garrison Pass	Liverpool	United Kingdom	310	L33
311	PO Box 14622	33 Redwing Point	Belfast	United Kingdom	311	BT2
312	Suite 49	82 Havey Park	Stapleford	United Kingdom	312	LN6
313	Room 1521	29 Barby Trail	Norton	United Kingdom	313	S8
314	16th Floor	84904 Veith Circle	Milton	United Kingdom	314	AB56
315	Suite 46	6 David Point	Kinloch	United Kingdom	315	PH43
316	Suite 44	723 Golf View Street	Church End	United Kingdom	316	CB4
317	15th Floor	2510 Chive Junction	Langley	United Kingdom	317	SG4
318	Suite 31	55471 Lillian Crossing	London	United Kingdom	318	WC1B
319	Apt 182	13 Longview Trail	Craigavon	United Kingdom	319	BT66
320	15th Floor	3769 Dayton Point	Liverpool	United Kingdom	320	L74
321	Room 651	9780 Ramsey Center	Eaton	United Kingdom	321	DN22
322	Room 921	79815 Merrick Road	Buckland	United Kingdom	322	CT16
323	Apt 1246	4 Spenser Parkway	East End	United Kingdom	323	BH21
324	Apt 1754	81531 Jenifer Way	Dean	United Kingdom	324	OX7
325	PO Box 16570	1411 Nevada Crossing	Dean	United Kingdom	325	OX7
326	Apt 428	1 Dovetail Junction	Belfast	United Kingdom	326	BT2
327	9th Floor	81963 Bluestem Center	Halton	United Kingdom	327	LS9
328	Apt 1021	374 Cambridge Avenue	Halton	United Kingdom	328	LS9
329	PO Box 72000	38439 Clarendon Alley	Upton	United Kingdom	329	DN21
330	Room 752	9 Ohio Pass	London	United Kingdom	330	EC1V
331	Apt 1408	250 Shopko Way	Sutton	United Kingdom	331	CT15
332	Apt 96	2173 Brown Road	Norton	United Kingdom	332	S8
333	PO Box 90297	53844 Burning Wood Avenue	Aston	United Kingdom	333	TF6
334	Room 456	89 La Follette Avenue	Kirkton	United Kingdom	334	KW10
335	7th Floor	3 Spohn Point	London	United Kingdom	335	SW1E
336	12th Floor	88366 Schurz Road	Twyford	United Kingdom	336	LE14
337	PO Box 84036	763 Fordem Road	Dean	United Kingdom	337	OX7
338	PO Box 65939	2173 Sloan Court	Halton	United Kingdom	338	LS9
339	Room 1062	715 Mendota Crossing	Newbiggin	United Kingdom	339	NE46
340	PO Box 29627	0254 Killdeer Street	West End	United Kingdom	340	DN36
341	Apt 1651	302 Declaration Way	Liverpool	United Kingdom	341	L74
342	Apt 884	1 Comanche Hill	Birmingham	United Kingdom	342	B12
343	Room 160	65 Arkansas Center	London	United Kingdom	343	EC1V
344	Suite 84	32227 Brickson Park Crossing	Walton	United Kingdom	344	CV35
345	Suite 78	3263 Melvin Terrace	Norton	United Kingdom	345	S8
346	Apt 1522	44287 Bultman Avenue	Newbiggin	United Kingdom	346	NE46
347	PO Box 26834	4 Butternut Avenue	Pentre	United Kingdom	347	SY4
348	Apt 1809	78971 Killdeer Terrace	Edinburgh	United Kingdom	348	EH9
349	Suite 54	13400 Comanche Point	Normanton	United Kingdom	349	LE15
350	Apt 216	249 Clove Drive	Liverpool	United Kingdom	350	L33
351	PO Box 78630	18 Iowa Crossing	Sutton	United Kingdom	351	CT15
352	6th Floor	94 Barnett Street	Hatton	United Kingdom	352	CV35
353	Room 1469	38 Pankratz Trail	London	United Kingdom	353	W1F
354	Apt 1805	580 Butternut Lane	Horton	United Kingdom	354	BS37
355	Apt 1849	7 Green Plaza	Kingston	United Kingdom	355	DT10
356	Room 1744	177 Bartillon Place	Stapleford	United Kingdom	356	LN6
357	Suite 89	76683 Maple Park	Horton	United Kingdom	357	BS37
358	Room 726	29410 Pierstorff Parkway	Upton	United Kingdom	358	WF9
359	Room 1523	68247 Dorton Lane	Carlton	United Kingdom	359	DL8
360	12th Floor	0964 East Hill	Kirkton	United Kingdom	360	KW10
361	PO Box 176	1618 Kenwood Court	Newbiggin	United Kingdom	361	NE46
362	PO Box 60327	883 Cascade Alley	Wootton	United Kingdom	362	NN4
363	PO Box 55133	730 Memorial Court	Aston	United Kingdom	363	TF6
364	Apt 12	213 Dexter Trail	Denton	United Kingdom	364	M34
365	Apt 238	8 Prairie Rose Point	London	United Kingdom	365	SW1E
366	Room 726	10399 Stephen Alley	Milton	United Kingdom	366	NG22
367	Room 1893	2004 Mendota Trail	Tullich	United Kingdom	367	AB55
368	Room 928	677 Ludington Street	Normanton	United Kingdom	368	LE15
369	PO Box 81854	21421 Kensington Lane	Newbiggin	United Kingdom	369	NE46
370	Apt 1996	670 Oak Way	Liverpool	United Kingdom	370	L74
371	PO Box 47603	82 Little Fleur Road	Seaton	United Kingdom	371	LE15
372	17th Floor	34764 Daystar Parkway	Newton	United Kingdom	372	IV1
373	Room 1792	4429 Dawn Lane	Langley	United Kingdom	373	SG4
374	Apt 1070	0078 Burning Wood Crossing	Tullich	United Kingdom	374	AB55
375	Room 1344	5309 Troy Crossing	Preston	United Kingdom	375	PR1
376	Apt 1414	4 Morning Way	Pentre	United Kingdom	376	SY4
377	Room 874	3 Prairie Rose Plaza	Norton	United Kingdom	377	S8
378	1st Floor	981 Washington Center	Brampton	United Kingdom	378	NR34
379	15th Floor	3 Scott Drive	Ashley	United Kingdom	379	SN13
380	Apt 1497	431 Carioca Alley	Swindon	United Kingdom	380	SN1
381	PO Box 31969	34234 Steensland Lane	Burnside	United Kingdom	381	EH52
382	Room 1809	7146 Longview Hill	Sutton	United Kingdom	382	RH5
383	17th Floor	27269 Maple Drive	Upton	United Kingdom	383	DN21
384	Room 1450	3 Golf Course Crossing	Ashley	United Kingdom	384	SN13
385	Suite 80	6412 8th Place	Normanton	United Kingdom	385	LE15
386	Room 321	3248 Carberry Circle	Kinloch	United Kingdom	386	PH43
387	PO Box 37040	8 Lillian Terrace	Craigavon	United Kingdom	387	BT66
388	PO Box 18394	1028 Esker Park	Tullich	United Kingdom	388	AB55
389	Suite 31	3680 Autumn Leaf Drive	Birmingham	United Kingdom	389	B40
390	Apt 1530	8902 Village Parkway	Belfast	United Kingdom	390	BT2
391	Apt 1994	2 Commercial Street	Wirral	United Kingdom	391	CH48
392	Suite 36	4857 Bunker Hill Crossing	Whitwell	United Kingdom	392	DL10
393	Room 1118	192 Moose Terrace	Merton	United Kingdom	393	SW19
394	PO Box 56676	7878 Scofield Alley	Stapleford	United Kingdom	394	LN6
395	Suite 26	52 Meadow Ridge Terrace	Milton	United Kingdom	395	AB56
396	Suite 75	95 Golden Leaf Crossing	Ford	United Kingdom	396	GL54
397	Room 985	5348 Sutherland Park	Newtown	United Kingdom	397	RG20
398	Room 1658	37768 Cambridge Alley	Birmingham	United Kingdom	398	B40
399	Room 588	4507 Mitchell Center	Weston	United Kingdom	399	GU32
400	18th Floor	8 5th Trail	Sheffield	United Kingdom	400	S1
401	Room 1035	1983 7th Parkway	Buckland	United Kingdom	401	CT16
402	Apt 904	094 Pleasure Junction	Ashley	United Kingdom	402	SN13
403	Suite 32	79 Holy Cross Way	Walton	United Kingdom	403	CV35
404	Room 1088	896 Dovetail Avenue	Brampton	United Kingdom	404	NR34
405	Suite 3	3 South Pass	London	United Kingdom	405	WC1B
406	Apt 1963	48219 David Crossing	Newtown	United Kingdom	406	RG20
407	Room 1024	44 Goodland Plaza	Charlton	United Kingdom	407	OX12
408	6th Floor	8436 Crownhardt Alley	Sutton	United Kingdom	408	RH5
409	PO Box 62507	0 Oxford Parkway	Walton	United Kingdom	409	CV35
410	11th Floor	16 Welch Terrace	Aberdeen	United Kingdom	410	AB39
411	Suite 53	8 Alpine Place	Church End	United Kingdom	411	CB4
412	Suite 84	82 Becker Lane	Newport	United Kingdom	412	NR29
413	Suite 90	07 Nancy Hill	Denton	United Kingdom	413	M34
414	Suite 47	0 Pepper Wood Plaza	Weston	United Kingdom	414	GU32
415	Suite 47	47867 Arkansas Center	West End	United Kingdom	415	DN36
416	Apt 395	62737 John Wall Center	Thorpe	United Kingdom	416	BD23
417	PO Box 89108	0196 Forster Pass	Linton	United Kingdom	417	BD23
418	Suite 52	52 2nd Hill	Wirral	United Kingdom	418	CH48
419	Apt 1666	94 Mesta Place	East End	United Kingdom	419	BH21
420	Room 1406	6031 Lawn Alley	Kinloch	United Kingdom	420	PH43
421	Apt 1758	40365 Chive Park	Seaton	United Kingdom	421	LE15
422	PO Box 88363	79744 Derek Plaza	Tullich	United Kingdom	422	AB55
423	5th Floor	406 Magdeline Terrace	Sheffield	United Kingdom	423	S1
424	Suite 51	23 Pawling Crossing	Aston	United Kingdom	424	TF6
425	Suite 43	431 Harbort Pass	Normanton	United Kingdom	425	LE15
426	Apt 1290	41 Mayer Point	Langley	United Kingdom	426	SG4
427	Suite 81	86359 Dapin Road	Ford	United Kingdom	427	GL54
428	Apt 224	0 West Road	Weston	United Kingdom	428	GU32
429	7th Floor	04040 Morning Park	West End	United Kingdom	429	DN36
430	Apt 1938	31419 Gateway Avenue	Belfast	United Kingdom	430	BT2
431	Apt 41	4375 Sage Trail	Sutton	United Kingdom	431	RH5
432	17th Floor	58525 Russell Terrace	Craigavon	United Kingdom	432	BT66
433	Suite 16	06 Old Gate Drive	Aston	United Kingdom	433	TF6
434	Room 983	4276 4th Terrace	Upton	United Kingdom	434	WF9
435	3rd Floor	2668 Clyde Gallagher Trail	Swindon	United Kingdom	435	SN1
436	Apt 173	2217 Rockefeller Drive	Newtown	United Kingdom	436	RG20
437	15th Floor	806 Gulseth Terrace	Kingston	United Kingdom	437	DT10
438	Apt 882	32 Center Lane	Wirral	United Kingdom	438	CH48
439	Suite 60	66468 Loeprich Lane	Tullich	United Kingdom	439	AB55
440	Room 1252	99 Valley Edge Parkway	Milton	United Kingdom	440	AB56
441	11th Floor	25506 Sutteridge Lane	Normanton	United Kingdom	441	LE15
442	7th Floor	13023 Stone Corner Park	Upton	United Kingdom	442	DN21
443	Apt 1063	737 Larry Crossing	Liverpool	United Kingdom	443	L33
444	4th Floor	057 Colorado Drive	London	United Kingdom	444	SW1E
445	Suite 39	9 Sunnyside Terrace	Church End	United Kingdom	445	N3
446	PO Box 19458	863 Welch Road	Aberdeen	United Kingdom	446	AB39
447	PO Box 7536	09310 Prairie Rose Drive	Leeds	United Kingdom	447	LS6
448	Suite 42	300 Holmberg Hill	London	United Kingdom	448	WC2H
449	PO Box 66917	3 Butterfield Point	Manchester	United Kingdom	449	M14
450	Apt 514	8058 Reindahl Pass	Newtown	United Kingdom	450	RG20
451	Suite 74	5823 Forest Court	Halton	United Kingdom	451	LS9
452	Room 1968	0 Basil Alley	Aston	United Kingdom	452	TF6
453	Room 413	451 Scott Terrace	Burnside	United Kingdom	453	EH52
454	Room 1813	66001 Nancy Terrace	Aberdeen	United Kingdom	454	AB39
455	Suite 34	6565 Steensland Pass	Newtown	United Kingdom	455	RG20
456	Suite 38	4135 Warbler Court	Linton	United Kingdom	456	BD23
457	Suite 42	153 Carey Trail	Birmingham	United Kingdom	457	B40
458	4th Floor	4 2nd Place	Ashley	United Kingdom	458	SN13
459	Suite 39	9078 Mccormick Hill	Liverpool	United Kingdom	459	L33
460	11th Floor	839 Susan Court	Kinloch	United Kingdom	460	PH43
461	17th Floor	699 Merrick Park	Preston	United Kingdom	461	PR1
462	Apt 680	18852 Crowley Way	Sheffield	United Kingdom	462	S1
463	Suite 83	304 Bayside Hill	Whitchurch	United Kingdom	463	BS14
464	PO Box 82052	368 Portage Drive	Kirkton	United Kingdom	464	KW10
465	Suite 4	4 Anthes Terrace	Horton	United Kingdom	465	BS37
466	Apt 251	0854 Hazelcrest Lane	Dean	United Kingdom	466	OX7
467	Apt 1830	39 South Alley	Halton	United Kingdom	467	LS9
468	Room 832	6 Stang Junction	Whitwell	United Kingdom	468	DL10
469	Apt 1058	8148 Prentice Pass	Weston	United Kingdom	469	GU32
470	7th Floor	23968 Anniversary Court	Whitchurch	United Kingdom	470	BS14
471	Suite 31	71805 Longview Center	Swindon	United Kingdom	471	SN1
472	Suite 42	45108 Northport Lane	Liverpool	United Kingdom	472	L33
473	Apt 1426	79 Maywood Junction	Newtown	United Kingdom	473	RG20
474	PO Box 13594	5 Miller Court	Sutton	United Kingdom	474	RH5
475	Suite 9	7 Muir Hill	Eaton	United Kingdom	475	DN22
476	Room 1294	925 Mallard Point	Bristol	United Kingdom	476	BS41
477	Room 1189	36892 Kensington Pass	Charlton	United Kingdom	477	OX12
478	14th Floor	57455 Toban Crossing	Burnside	United Kingdom	478	EH52
479	Suite 85	0 Burning Wood Junction	London	United Kingdom	479	W1F
480	18th Floor	4 Homewood Drive	Newtown	United Kingdom	480	RG20
481	20th Floor	447 Bobwhite Center	Buckland	United Kingdom	481	CT16
482	PO Box 31980	187 Superior Center	Hatton	United Kingdom	482	CV35
483	Apt 1828	3786 Green Plaza	Charlton	United Kingdom	483	OX12
484	5th Floor	24 Dennis Trail	Seaton	United Kingdom	484	LE15
485	Room 971	5912 North Court	Aston	United Kingdom	485	TF6
486	Apt 1618	4231 Bartelt Lane	Kirkton	United Kingdom	486	KW10
487	Room 1942	6 Saint Paul Court	London	United Kingdom	487	EC3M
488	Suite 34	04 Corben Trail	London	United Kingdom	488	SW1E
489	Suite 27	648 Mcbride Court	Stapleford	United Kingdom	489	LN6
490	Apt 771	4 Bonner Street	London	United Kingdom	490	EC3M
491	PO Box 45858	509 Namekagon Alley	Linton	United Kingdom	491	BD23
492	5th Floor	40 Jenifer Way	Hatton	United Kingdom	492	CV35
493	PO Box 83805	7588 Arrowood Terrace	London	United Kingdom	493	EC3M
494	Suite 23	94 Barnett Lane	Liverpool	United Kingdom	494	L33
495	6th Floor	4370 Corry Crossing	Linton	United Kingdom	495	BD23
496	Room 588	028 Corscot Drive	Seaton	United Kingdom	496	LE15
497	9th Floor	266 Donald Hill	Halton	United Kingdom	497	LS9
498	Room 1714	44 Westend Crossing	Whitchurch	United Kingdom	498	BS14
499	Room 227	55 Division Parkway	Burnside	United Kingdom	499	EH52
500	Apt 424	61 Dwight Terrace	Sutton	United Kingdom	500	CT15
501	Apt 1218	00 Walton Trail	London	United Kingdom	501	SW1E
502	2nd Floor	9397 Rigney Alley	London	United Kingdom	502	EC1V
503	Suite 83	0 Rieder Avenue	Manchester	United Kingdom	503	M14
504	Suite 77	03999 Lerdahl Avenue	Liverpool	United Kingdom	504	L33
505	PO Box 99927	664 New Castle Junction	Marston	United Kingdom	505	ST20
506	Suite 49	72903 Schlimgen Parkway	Langley	United Kingdom	506	SG4
507	Room 100	59 Paget Street	Kingston	United Kingdom	507	DT10
508	12th Floor	39 Kropf Park	Upton	United Kingdom	508	WF9
509	PO Box 47436	7 Scoville Plaza	Langley	United Kingdom	509	SG4
510	15th Floor	8 Butterfield Parkway	Kingston	United Kingdom	510	DT10
511	Room 1286	54099 Mitchell Street	London	United Kingdom	511	SW1E
512	2nd Floor	0 South Place	Preston	United Kingdom	512	PR1
513	Apt 615	55 Golf Course Center	Glasgow	United Kingdom	513	G4
514	5th Floor	51 Graedel Trail	Upton	United Kingdom	514	WF9
515	Suite 92	85 Ilene Circle	Sutton	United Kingdom	515	CT15
516	Room 594	38035 Transport Avenue	Aston	United Kingdom	516	TF6
517	Room 632	923 Rusk Court	Ashley	United Kingdom	517	SN13
518	Apt 577	18 Helena Pass	Upton	United Kingdom	518	DN21
519	Room 1716	74 Surrey Terrace	Linton	United Kingdom	519	BD23
520	Suite 86	69 Bashford Lane	Newton	United Kingdom	520	NG34
521	Room 1962	30 Mandrake Plaza	Buckland	United Kingdom	521	CT16
522	PO Box 18887	533 Waywood Parkway	Langley	United Kingdom	522	SG4
523	Apt 635	01717 New Castle Center	London	United Kingdom	523	WC2H
524	Apt 1620	12 8th Place	Milton	United Kingdom	524	NG22
525	Suite 17	4906 Dovetail Terrace	London	United Kingdom	525	SW1E
526	PO Box 29353	5 Lakewood Junction	Glasgow	United Kingdom	526	G4
527	17th Floor	54074 Beilfuss Plaza	Ashley	United Kingdom	527	SN13
528	Apt 882	85 Dapin Center	Newton	United Kingdom	528	NG34
529	PO Box 1524	142 Surrey Court	Norton	United Kingdom	529	S8
530	Apt 554	3196 Artisan Circle	Upton	United Kingdom	530	DN21
531	Room 1529	95674 Jana Plaza	Belfast	United Kingdom	531	BT2
532	Suite 19	864 Jenifer Point	East End	United Kingdom	532	BH21
533	PO Box 43038	3 Sunbrook Plaza	Kirkton	United Kingdom	533	KW10
534	PO Box 46287	2302 Glendale Court	Newtown	United Kingdom	534	RG20
535	PO Box 61348	1211 Tony Hill	Linton	United Kingdom	535	BD23
536	Room 773	338 Schurz Junction	Thorpe	United Kingdom	536	BD23
537	19th Floor	4 Shopko Terrace	Leeds	United Kingdom	537	LS6
538	Room 1560	0433 Truax Trail	Sutton	United Kingdom	538	RH5
539	Suite 24	36 High Crossing Avenue	West End	United Kingdom	539	DN36
540	Apt 1711	69 East Way	London	United Kingdom	540	EC3M
541	PO Box 21764	565 Browning Junction	Hatton	United Kingdom	541	CV35
542	PO Box 57423	01 Eagan Lane	Birmingham	United Kingdom	542	B40
543	Apt 472	8706 Hagan Circle	Leeds	United Kingdom	543	LS6
544	15th Floor	7 Dwight Point	Sheffield	United Kingdom	544	S33
545	Suite 63	5690 Fremont Road	Edinburgh	United Kingdom	545	EH9
546	Apt 1194	64181 Shopko Park	Walton	United Kingdom	546	CV35
547	Suite 20	3 Maple Wood Alley	Dean	United Kingdom	547	OX7
548	PO Box 13437	1 Riverside Road	Milton	United Kingdom	548	AB56
549	PO Box 44333	4 Lawn Hill	Newton	United Kingdom	549	IV1
550	Suite 55	31 Coolidge Lane	Linton	United Kingdom	550	BD23
551	Suite 57	26 Crownhardt Parkway	Church End	United Kingdom	551	N3
552	11th Floor	71 Jana Pass	Thorpe	United Kingdom	552	BD23
553	Apt 1952	51 Messerschmidt Park	Carlton	United Kingdom	553	DL8
554	Apt 184	23799 Moose Junction	Newbiggin	United Kingdom	554	NE46
555	Suite 53	69992 Darwin Parkway	Brampton	United Kingdom	555	NR34
556	16th Floor	4 Eliot Lane	Sheffield	United Kingdom	556	S1
557	PO Box 52035	6281 Killdeer Point	Ashley	United Kingdom	557	SN13
558	18th Floor	45288 Red Cloud Street	Seaton	United Kingdom	558	LE15
559	10th Floor	504 Nevada Lane	Hatton	United Kingdom	559	CV35
560	Suite 77	5401 8th Street	Birmingham	United Kingdom	560	B12
561	17th Floor	06917 Banding Drive	Ashley	United Kingdom	561	SN13
562	6th Floor	24207 Old Shore Street	Pentre	United Kingdom	562	SY4
563	Room 234	784 Kinsman Way	Church End	United Kingdom	563	N3
564	12th Floor	7 Walton Trail	London	United Kingdom	564	WC1B
565	13th Floor	2 Maryland Drive	Belfast	United Kingdom	565	BT2
566	8th Floor	062 Farwell Hill	Ashley	United Kingdom	566	SN13
567	Apt 1377	78028 Bayside Way	Newton	United Kingdom	567	NG34
568	4th Floor	6 Maple Wood Avenue	Newport	United Kingdom	568	NR29
569	Apt 1022	969 Lyons Junction	Upton	United Kingdom	569	WF9
570	Room 997	8667 Arrowood Junction	London	United Kingdom	570	WC2H
571	Suite 90	7922 Moose Drive	Halton	United Kingdom	571	LS9
572	Apt 1258	6930 Main Point	Bradford	United Kingdom	572	BD7
573	PO Box 91486	125 Hooker Drive	Preston	United Kingdom	573	PR1
574	Room 774	556 Northland Junction	London	United Kingdom	574	W1F
575	Room 176	00 Talisman Circle	Glasgow	United Kingdom	575	G4
576	5th Floor	46 Novick Point	Linton	United Kingdom	576	BD23
577	Apt 788	50824 Manley Circle	Ashley	United Kingdom	577	SN13
578	20th Floor	6766 Lake View Park	Craigavon	United Kingdom	578	BT66
579	PO Box 14312	898 Crownhardt Point	Bradford	United Kingdom	579	BD7
580	PO Box 76722	5 Comanche Road	Birmingham	United Kingdom	580	B40
581	Apt 50	79 Heath Pass	Manchester	United Kingdom	581	M14
582	Suite 96	331 Hooker Plaza	London	United Kingdom	582	WC2H
583	1st Floor	785 Oneill Trail	Newton	United Kingdom	583	NG34
584	Suite 94	95892 Mccormick Point	Wootton	United Kingdom	584	NN4
585	PO Box 20074	37 Meadow Vale Way	Upton	United Kingdom	585	WF9
586	PO Box 98006	47803 Eastlawn Plaza	London	United Kingdom	586	WC2H
587	Suite 73	27 Lien Court	Kinloch	United Kingdom	587	PH43
588	Room 365	26090 Kingsford Drive	Ashley	United Kingdom	588	SN13
589	Suite 71	5 Parkside Park	Leeds	United Kingdom	589	LS6
590	Room 75	03896 Elka Way	Belfast	United Kingdom	590	BT2
591	Suite 56	36097 Monument Alley	Brampton	United Kingdom	591	NR34
592	PO Box 77587	3 Prairieview Way	Seaton	United Kingdom	592	LE15
593	Apt 1822	586 Independence Lane	Leeds	United Kingdom	593	LS6
594	PO Box 490	95 Talmadge Junction	Denton	United Kingdom	594	M34
595	Apt 251	4739 Tennessee Circle	Horton	United Kingdom	595	BS37
596	Suite 54	4 Magdeline Park	Birmingham	United Kingdom	596	B12
597	Room 269	9 Golf Course Crossing	Sheffield	United Kingdom	597	S33
598	8th Floor	2 Melody Point	London	United Kingdom	598	EC3M
\.


--
-- TOC entry 4929 (class 0 OID 34846)
-- Dependencies: 231
-- Data for Name: basket; Type: TABLE DATA; Schema: public; Owner: e_commerce_emxk_user
--

COPY public.basket (id, user_id, items) FROM stdin;
\.


--
-- TOC entry 4916 (class 0 OID 16587)
-- Dependencies: 218
-- Data for Name: inventory; Type: TABLE DATA; Schema: public; Owner: e_commerce_emxk_user
--

COPY public.inventory (id, product_id, quantity) FROM stdin;
1	1	8
2	2	5
3	3	15
4	4	11
5	5	15
6	6	13
7	7	6
8	8	0
9	9	8
10	10	14
11	11	1
12	12	8
13	13	18
14	14	5
15	15	5
16	16	11
17	17	11
18	18	8
19	19	20
20	20	8
21	21	15
22	22	18
23	23	16
24	24	4
25	25	12
26	26	15
27	27	11
28	28	11
29	29	8
30	30	13
31	31	18
32	32	0
33	33	11
34	34	15
35	35	13
36	36	19
37	37	10
38	38	17
39	39	17
40	40	17
41	41	0
42	42	17
43	43	10
44	44	14
45	45	4
46	46	6
47	47	3
48	48	20
49	49	16
50	50	9
51	51	8
52	52	20
53	53	19
54	54	12
55	55	14
56	56	12
57	57	6
58	58	6
59	59	20
60	60	11
61	61	10
62	62	8
63	63	8
64	64	20
65	65	8
66	66	4
67	67	14
68	68	9
69	69	0
70	70	5
71	71	4
72	72	20
73	73	2
74	74	0
75	75	10
76	76	11
77	77	17
78	78	3
79	79	17
80	80	16
81	81	8
82	82	6
83	83	17
84	84	0
85	85	18
86	86	10
87	87	14
88	88	9
89	89	13
90	90	9
91	91	6
92	92	5
93	93	4
94	94	7
95	95	12
96	96	12
97	97	12
98	98	19
99	99	2
100	100	8
101	101	19
102	102	3
103	103	14
104	104	0
105	105	8
106	106	4
107	107	16
108	108	18
109	109	6
110	110	7
111	111	6
112	112	2
113	113	9
114	114	1
115	115	1
116	116	3
117	117	4
118	118	19
119	119	14
120	120	12
121	121	5
122	122	11
123	123	7
124	124	20
125	125	3
126	126	9
127	127	6
128	128	5
129	129	4
130	130	0
131	131	13
132	132	20
133	133	19
134	134	17
135	135	7
136	136	5
137	137	16
138	138	14
139	139	10
140	140	6
141	141	8
142	142	12
143	143	2
144	144	4
145	145	7
146	146	19
147	147	6
148	148	12
149	149	18
150	150	8
151	151	2
152	152	11
153	153	4
154	154	18
155	155	18
156	156	7
157	157	6
158	158	19
159	159	9
160	160	5
161	161	1
162	162	8
163	163	0
164	164	14
165	165	17
166	166	12
167	167	11
168	168	3
169	169	4
170	170	20
171	171	8
172	172	3
173	173	2
174	174	11
175	175	12
176	176	13
177	177	17
178	178	18
179	179	8
180	180	10
181	181	7
182	182	6
183	183	2
184	184	17
185	185	3
186	186	6
187	187	19
188	188	17
189	189	5
190	190	3
191	191	10
192	192	7
193	193	18
194	194	9
195	195	8
196	196	12
197	197	15
198	198	3
199	199	13
200	200	16
201	201	14
202	202	2
203	203	2
204	204	1
205	205	3
206	206	16
207	207	16
208	208	10
209	209	1
210	210	17
211	211	8
212	212	18
213	213	18
214	214	6
215	215	13
216	216	12
217	217	13
218	218	1
219	219	2
220	220	11
221	221	12
222	222	0
223	223	7
224	224	0
225	225	10
226	226	8
227	227	16
228	228	19
229	229	1
230	230	13
231	231	17
232	232	17
233	233	14
234	234	16
235	235	3
236	236	17
237	237	7
238	238	12
239	239	0
240	240	7
241	241	19
242	242	8
243	243	4
244	244	3
245	245	9
246	246	14
247	247	19
248	248	7
249	249	12
250	250	0
251	251	16
252	252	20
253	253	3
254	254	12
255	255	2
256	256	20
257	257	13
258	258	5
259	259	6
260	260	6
261	261	9
262	262	12
263	263	9
264	264	1
265	265	8
266	266	3
267	267	5
268	268	8
269	269	7
270	270	8
271	271	0
272	272	2
273	273	5
274	274	3
275	275	18
276	276	15
277	277	6
278	278	14
279	279	17
280	280	8
281	281	10
282	282	2
283	283	19
284	284	2
285	285	5
286	286	3
287	287	17
288	288	9
289	289	7
290	290	2
291	291	8
292	292	8
293	293	15
294	294	14
295	295	6
296	296	15
297	297	12
298	298	11
299	299	3
300	300	15
301	301	14
302	302	2
303	303	8
304	304	13
305	305	3
306	306	19
307	307	10
308	308	3
309	309	4
310	310	11
311	311	18
312	312	16
313	313	12
314	314	8
315	315	13
316	316	5
317	317	9
318	318	5
319	319	13
320	320	5
321	321	16
322	322	5
323	323	14
324	324	20
325	325	15
326	326	11
327	327	3
328	328	15
329	329	17
330	330	2
331	331	13
332	332	19
333	333	4
334	334	0
335	335	8
336	336	7
337	337	8
338	338	19
339	339	6
340	340	18
341	341	20
342	342	13
343	343	15
344	344	9
345	345	0
346	346	10
347	347	18
348	348	10
349	349	2
350	350	1
351	351	7
352	352	9
353	353	18
354	354	3
355	355	11
356	356	10
357	357	14
\.


--
-- TOC entry 4918 (class 0 OID 16594)
-- Dependencies: 220
-- Data for Name: local_user; Type: TABLE DATA; Schema: public; Owner: e_commerce_emxk_user
--

COPY public.local_user (id, email, first_name, last_name, password, username, email_verified) FROM stdin;
1	nvoaden0@telegraph.co.uk	Ninetta	Voaden	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Richard 	f
2	gskitch1@cdbaby.com	Gustie	Skitch	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Sam 	f
3	mtofful2@netlog.com	Mendie	Tofful	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	AdzGio 	f
4	amartynov3@blogs.com	Arleen	Martynov	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Gary 	f
5	meckels4@springer.com	Millard	Eckels	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	darren 	f
6	lpell5@vinaora.com	Lissy	Pell	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Hazel 	f
7	pbutson6@qq.com	Penelopa	Butson	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	John 	f
8	ghazle7@reuters.com	Gordy	Hazle	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Barney 	f
9	ecubin8@archive.org	Estelle	Cubin	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Steve 	f
10	mkleinhaus9@google.de	Marlo	Kleinhaus	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Denzchamps 	f
11	kmckevitta@zdnet.com	Karena	McKevitt	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Colin 	f
12	bpardonb@ocn.ne.jp	Bee	Pardon	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	GP95 	f
13	smctaguec@sourceforge.net	Sawyer	McTague	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	BillyR96 	f
14	vpickringd@icq.com	Violante	Pickring	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Dan 	f
15	bquillinanee@surveymonkey.com	Bertrando	Quillinane	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Geordie 	f
16	atommenf@alibaba.com	Alaster	Tommen	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Kez 	f
17	kbawmeg@elegantthemes.com	Kristian	Bawme	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	David Jackson 	f
18	qlaibleh@wiley.com	Queenie	Laible	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Highlander 	f
19	rsoloni@foxnews.com	Roi	Solon	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	IRONMAN 	f
20	adurradj@edublogs.org	Aleksandr	Durrad	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Monica 	f
21	vranahank@stumbleupon.com	Vivienne	Ranahan	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Nath 	f
22	tmellandl@dion.ne.jp	Trevor	Melland	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Anndy 	f
23	cbloodm@shop-pro.jp	Collen	Blood	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	David 	f
24	nkrookn@icq.com	Niall	Krook	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	chris 	f
25	laldricko@123-reg.co.uk	Lemmy	Aldrick	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Robin 	f
26	lparcallp@slideshare.net	Loren	Parcall	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Pat 	f
27	tcollimoreq@ted.com	Thurstan	Collimore	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Trev 	f
28	rsimeonir@indiatimes.com	Rebecca	Simeoni	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Arran 	f
29	trubinovitschs@cafepress.com	Trefor	Rubinovitsch	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	GavS 	f
30	dsherrockt@hexun.com	Demetrius	Sherrock	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Paul 	f
31	abrecknallu@sogou.com	Aeriela	Brecknall	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Broseph 	f
32	egajewskiv@bluehost.com	Elfrida	Gajewski	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Mark 	f
33	tboddyw@bandcamp.com	Thomasina	Boddy	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	welshwizard 	f
34	kfleyx@furl.net	Kiley	Fley	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Daz 	f
35	jtredgoldy@homestead.com	Jaymee	Tredgold	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Colin B 	f
36	peyeingtonz@hao123.com	Powell	Eyeington	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	JJW 	f
37	tdrabble10@soundcloud.com	Tracie	Drabble	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Ken 	f
38	elincoln11@i2i.jp	Eustacia	Lincoln	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	eddiesson03 	f
39	vstut12@furl.net	Vida	Stut	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Milly 	f
40	ewillgoss13@google.nl	Eleanor	Willgoss	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Trevor 	f
41	komohun14@utexas.edu	Keelby	O'Mohun	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Ameet 	f
42	mlamping15@webnode.com	Myron	Lamping	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Olly 	f
43	gorniz16@liveinternet.ru	Guntar	Orniz	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Bal 	f
44	pmarguerite17@chron.com	Page	Marguerite	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	anthony 	f
45	ekynnd18@kickstarter.com	Erinna	Kynnd	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Maria 	f
46	hweigh19@shinystat.com	Hyacintha	Weigh	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	AC 	f
47	pgawkroge1a@g.co	Penni	Gawkroge	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Pete3 	f
48	hmcauslan1b@microsoft.com	Hodge	McAuslan	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	GuynoblePt 	f
49	smcgaughey1c@imageshack.us	Sutherlan	Mc Gaughey	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Flex 	f
50	gren1d@ovh.net	Godfry	Ren	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Mr woods 	f
51	mdomelow1e@chicagotribune.com	Marin	Domelow	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Scot 	f
52	kayris1f@pagesperso-orange.fr	Kirbie	Ayris	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Davey boy 	f
53	seades1g@123-reg.co.uk	Stafani	Eades	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Conor 	f
54	atrenam1h@wikipedia.org	Arny	Trenam	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	JJ 	f
55	smanuaud1i@dyndns.org	Suzi	Manuaud	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Barbill 	f
56	ysanz1j@blogger.com	Yorker	Sanz	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Dave 	f
57	dmico1k@tinyurl.com	Daisey	Mico	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Terry 	f
58	sdonwell1l@webmd.com	Sam	Donwell	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Zammiefitness 	f
59	jbockett1m@booking.com	Jamaal	Bockett	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Kieron 	f
60	hjaulmes1n@list-manage.com	Hyacinthie	Jaulmes	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Joesoap 	f
61	tcopcutt1o@house.gov	Thomasine	Copcutt	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Andy 	f
62	dmordy1p@cam.ac.uk	Devin	Mordy	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Pete N 	f
63	awhittle1q@nifty.com	Annis	Whittle	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	RJ 	f
64	clarret1r@google.pl	Clare	Larret	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Jason 	f
65	atollit1s@businessinsider.com	Avie	Tollit	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Merrionite 	f
66	sdaniellot1t@hugedomains.com	Steffi	Daniellot	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Em 	f
67	dagglione1u@mtv.com	Dynah	Agglione	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	siGuy 	f
68	bseleway1v@mozilla.org	Brucie	Seleway	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Ginger 28 	f
69	usycamore1w@psu.edu	Upton	Sycamore	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	WF 	f
70	sgoulborne1x@pbs.org	Shermie	Goulborne	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Hank 	f
71	sbeedom1y@dagondesign.com	Sigfrid	Beedom	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Jugjit 	f
72	tdat1z@google.nl	Timi	Dat	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Good product 	f
73	wbundey20@comsenz.com	Whitman	Bundey	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	dumbum 	f
74	fbreckwell21@smh.com.au	Freeland	Breckwell	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	VASILII 	f
75	mfebvre22@nhs.uk	Malanie	Febvre	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Odin 	f
76	asextone23@exblog.jp	Aloysia	Sextone	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Aura Fitness 	f
77	upeasee24@bluehost.com	Uriel	Peasee	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Karen 	f
78	emenauteau25@flavors.me	Erick	Menauteau	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Stan 	f
79	bferraro26@webnode.com	Bruno	Ferraro	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Alex 	f
80	fboundey27@webnode.com	Frans	Boundey	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Robbo77 	f
81	jwooland28@jimdo.com	Jaimie	Wooland	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Cali 	f
82	mnelius29@businessinsider.com	Madelon	Nelius	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Clarence 	f
83	sgrebner2a@icq.com	Sunshine	Grebner	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	WeenyArmsBuffLegs 	f
84	ineedham2b@wikimedia.org	Irma	Needham	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Quality item 	f
85	sgebuhr2c@mashable.com	Stu	Gebuhr	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	DrSpark 	f
86	rglencrash2d@last.fm	Ronni	Glencrash	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Charlie 	f
87	twyllie2e@nytimes.com	Tamiko	Wyllie	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	R&J 	f
88	gcogle2f@timesonline.co.uk	Gwenette	Cogle	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Mandy 	f
89	mseiter2g@ask.com	Morey	Seiter	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Dunks 	f
90	vredish2h@merriam-webster.com	Virginie	Redish	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Railside 	f
91	xcrayk2i@wix.com	Xaviera	Crayk	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Becks 	f
92	ddallmann2j@phoca.cz	Delano	Dallmann	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	KB 	f
93	bdozdill2k@google.co.jp	Booth	Dozdill	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Mike 	f
94	gelwin2l@si.edu	Gearalt	Elwin	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Arron Barber 	f
95	abankhurst2m@facebook.com	Arlie	Bankhurst	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Lianne 	f
96	pburchmore2n@omniture.com	Perceval	Burchmore	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Norris 	f
97	otuley2o@bluehost.com	Orton	Tuley	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	B weddy 	f
98	amacmechan2p@blogtalkradio.com	Ado	MacMechan	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Dave BW 	f
99	aartist2q@friendfeed.com	Arri	Artist	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Ross 	f
100	jchiese2r@privacy.gov.au	Jennee	Chiese	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Denz 	f
101	dgrayshon2s@house.gov	Dina	Grayshon	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Yoz 	f
102	ebagley2t@hhs.gov	Ellswerth	Bagley	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Sean 	f
103	bsetterthwait2u@omniture.com	Beatriz	Setterthwait	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	cathy 	f
104	dschenkel2v@myspace.com	Doralynne	Schenkel	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	No name Nick. 	f
105	ayouings2w@guardian.co.uk	Arlana	Youings	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Ferrari93 	f
106	bslewcock2x@about.com	Berny	Slewcock	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Jonesy 	f
107	uedleston2y@google.cn	Ulrikaumeko	Edleston	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Russ 	f
108	cbarensky2z@cnbc.com	Colman	Barensky	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Rory 	f
109	opregal30@livejournal.com	Obediah	Pregal	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Mr Apple 	f
110	rlunn31@mozilla.com	Robbie	Lunn	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Matt 	f
111	jbrosel32@weibo.com	Janeva	Brosel	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Stonecoldsd 	f
112	amanning33@amazon.com	Ainslee	Manning	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Adam 	f
113	kthornbarrow34@paginegialle.it	Kailey	Thornbarrow	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Knoxy 	f
114	fmaclardie35@china.com.cn	Fernandina	MacLardie	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Gos 	f
115	dcopperwaite36@reuters.com	Dion	Copperwaite	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Annabelle 	f
116	ptunnock37@census.gov	Perkin	Tunnock	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Dan N 	f
117	ehuddlestone38@arizona.edu	Elsworth	Huddlestone	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	PESTcrEEper 	f
118	kcastelin39@bbb.org	Kaleena	Castelin	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Allin 	f
119	aantic3a@youtu.be	Ada	Antic	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Samairb 	f
120	fbalmer3b@indiatimes.com	Filmer	Balmer	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Haggis 	f
121	rgallehock3c@liveinternet.ru	Reeta	Gallehock	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Claire 	f
122	mbenedict3d@toplist.cz	Monro	Benedict	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	MC 	f
123	nbaile3e@bizjournals.com	Noelani	Baile	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Arc 	f
124	spetigrew3f@salon.com	Susy	Petigrew	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Karl 	f
125	asayse3g@upenn.edu	Ame	Sayse	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Lee 	f
126	emacknight3h@apple.com	Elston	MacKnight	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Shelton 	f
127	ctapner3i@ning.com	Clemmie	Tapner	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Zig 	f
128	joels3j@netlog.com	Jacintha	Oels	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Al 	f
129	awhartonby3k@squidoo.com	Artie	Whartonby	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Annaleen Venter 	f
130	bbulteel3l@zdnet.com	Bank	Bulteel	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Gareth 	f
131	sflecknoe3m@cam.ac.uk	Sebastiano	Flecknoe	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Langy 	f
132	krainsden3n@istockphoto.com	Kinsley	Rainsden	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Pav 	f
133	pkenen3o@networksolutions.com	Pietra	Kenen	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Harry 	f
134	mkinlock3p@google.ru	Mei	Kinlock	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Belly Bear 	f
135	ezumbusch3q@ask.com	Errol	Zumbusch	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Luke 	f
136	hpierucci3r@hatena.ne.jp	Hobart	Pierucci	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Bernie 	f
137	oeldridge3s@cargocollective.com	Ogden	Eldridge	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Becka 	f
138	mmurgatroyd3t@examiner.com	Maurene	Murgatroyd	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Rich 	f
139	kmckinnell3u@xinhuanet.com	Kym	McKinnell	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	LMP 	f
140	dfaichnie3v@ebay.co.uk	Dinny	Faichnie	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	cam96ell 	f
141	ljirus3w@umich.edu	Lishe	Jirus	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Ewan 	f
142	jskitteral3x@networkadvertising.org	Jaymee	Skitteral	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Chris 	f
143	mdunkinson3y@answers.com	Morry	Dunkinson	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	G 	f
144	pelderfield3z@sun.com	Pearl	Elderfield	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Ash 	f
145	migglesden40@deviantart.com	Mallory	Igglesden	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Antony 	f
146	orablan41@google.com.hk	Opaline	Rablan	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Malleus 	f
147	kvigar42@t-online.de	Keven	Vigar	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Jimbob 	f
148	jniess43@netlog.com	Joan	Niess	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	P 	f
149	gpley44@si.edu	Gabriela	Pley	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Tom 	f
150	xciccotto45@wikipedia.org	Xylina	Ciccotto	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Fiona 	f
151	lmoresby46@multiply.com	Lennard	Moresby	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	D Att 	f
152	kaspital47@stumbleupon.com	Kinna	Aspital	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	david 	f
153	mjudge48@google.com	Michaela	Judge	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	James 	f
154	emacgebenay49@github.com	Edeline	MacGebenay	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	DJ 	f
155	idutt4a@tuttocitta.it	Innis	Dutt	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	MttWlls 	f
156	jcapelen4b@java.com	Jori	Capelen	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Luc 	f
157	dbayne4c@msu.edu	Derek	Bayne	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Neil 	f
158	espittall4d@marriott.com	Elisabetta	Spittall	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Andrew 	f
159	tbernath4e@washingtonpost.com	Tawsha	Bernath	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Stacey 	f
160	gdadley4f@google.com.br	Giffie	Dadley	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Silverback 	f
161	mdanilovic4g@dailymotion.com	Moritz	Danilovic	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Jas 	f
162	wfalk4h@flavors.me	Wittie	Falk	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Jay 	f
163	smatusiak4i@free.fr	Sarina	Matusiak	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Chuck 	f
164	acraddock4j@hp.com	Artie	Craddock	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Vega 	f
165	acoyett4k@quantcast.com	Alexandrina	Coyett	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	nickcl 	f
166	adando4l@noaa.gov	Ag	Dando	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Lucy 	f
167	tmorch4m@imdb.com	Trstram	Morch	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	T 	f
168	jinchcomb4n@amazon.com	Jeremy	Inchcomb	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Kirsteen 	f
169	oissitt4o@histats.com	Otto	Issitt	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Lewis 	f
170	lmussen4p@yandex.ru	Linn	Mussen	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Coldem 	f
171	rdrohun4q@reference.com	Ricard	Drohun	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Max 	f
172	adunbobin4r@globo.com	Agnesse	Dunbobin	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	D 	f
173	mgullan4s@rambler.ru	Mil	Gullan	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Chaz 	f
174	evalentin4t@dailymail.co.uk	Eachelle	Valentin	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Jules 	f
175	twhiston4u@rediff.com	Tommy	Whiston	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Len Webb 	f
176	mgromley4v@reddit.com	Maximilianus	Gromley	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Gazza 	f
177	cpichan4w@amazon.co.uk	Craig	Pichan	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	SGtheGhost85 	f
178	mwhichelow4x@merriam-webster.com	Marylinda	Whichelow	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Dominic 	f
179	ttumayan4y@slate.com	Tobi	Tumayan	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Toby 	f
180	fmayman4z@usatoday.com	Fran	Mayman	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Mr G 	f
181	mschleswigholstein50@indiatimes.com	Morry	Schleswig-Holstein	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Sjames 	f
182	dgovan51@dailymotion.com	Derk	Govan	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Ironrich 	f
183	ademaine52@zimbio.com	Aland	Demaine	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Hakki 	f
184	sfutcher53@yellowbook.com	Shelbi	Futcher	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Ckt73 	f
185	kspat54@howstuffworks.com	Karisa	Spat	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Hutchie 	f
186	jposchel55@t.co	Janeen	Poschel	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Paddy 	f
187	aguard56@howstuffworks.com	Anna	Guard	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Simon 	f
188	rmouton57@desdev.cn	Rasia	Mouton	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	SR 	f
189	nsandcraft58@globo.com	Neddie	Sandcraft	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Scotty 	f
190	ulegon59@reverbnation.com	Ulysses	Legon	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Kibs 	f
191	sspykings5a@yellowbook.com	Stacia	Spykings	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Sazbadger 	f
192	gpenk5b@diigo.com	Geraldine	Penk	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Martin R 	f
193	cdalzell5c@telegraph.co.uk	Charmaine	Dalzell	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	ChrisD 	f
194	rskellorne5d@flavors.me	Rana	Skellorne	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Edderz 	f
195	eupchurch5e@earthlink.net	Edvard	Upchurch	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Eddiesson03 	f
196	amillery5f@ovh.net	Alonzo	Millery	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Peter 	f
197	ehyams5g@acquirethisname.com	Edmon	Hyams	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Daniel 	f
198	kmckelloch5h@umn.edu	Kristoffer	McKelloch	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	RAW 	f
199	thugues5i@pagesperso-orange.fr	Tobie	Hugues	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Martin 	f
200	gborwick5j@fema.gov	Georgeanne	Borwick	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	BriPo 	f
201	aedsall5k@umn.edu	Andrea	Edsall	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Chalky 	f
202	wchristie5l@usgs.gov	Wolfie	Christie	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Adz 	f
203	cchitham5m@dailymotion.com	Creighton	Chitham	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	mttldhm 	f
204	slambrecht5n@guardian.co.uk	Sandy	Lambrecht	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	paul 	f
205	lwilleman5o@abc.net.au	Livvie	Willeman	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Littlea34 	f
206	cwilber5p@dyndns.org	Clint	Wilber	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Tman 	f
207	brosebotham5q@about.me	Buddy	Rosebotham	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	BIG MAC 	f
208	mstevings5r@theatlantic.com	Manolo	Stevings	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Euan 	f
209	ahenlon5s@examiner.com	Ailee	Henlon	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Gav 	f
210	cpincked5t@joomla.org	Charmane	Pincked	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Karla 	f
211	mharly5u@cocolog-nifty.com	Michele	Harly	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Bryce 	f
212	genticott5v@creativecommons.org	Gisela	Enticott	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	SyebeZ 	f
213	rmumbeson5w@hubpages.com	Rusty	Mumbeson	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Dragon1764 	f
214	fhairyes5x@latimes.com	Far	Hairyes	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Drew 	f
215	hsneezum5y@instagram.com	Haslett	Sneezum	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	NanaP 	f
216	bhardbattle5z@forbes.com	Bill	Hardbattle	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Dan Brown 	f
217	jreven60@elpais.com	Joana	Reven	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Wendy 	f
218	fbenjafield61@howstuffworks.com	Faber	Benjafield	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Rhodri 	f
219	mcapsey62@unblog.fr	Mill	Capsey	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Flexology 	f
220	dbardill63@thetimes.co.uk	Dolorita	Bardill	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Jonathan Stevenson 	f
221	bsummerside64@weibo.com	Baudoin	Summerside	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Johnnybhoy 	f
222	ldepinna65@webmd.com	Luciana	de Pinna	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Joe 	f
223	ncheel66@nature.com	Normie	Cheel	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Laura 	f
224	jstuddeard67@paypal.com	Jesselyn	Studdeard	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Liz 	f
225	mwoan68@g.co	Michael	Woan	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Nicky08 	f
226	rdobrovolski69@huffingtonpost.com	Rex	Dobrovolski	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	StrongLabUk 	f
227	ptamburi6a@friendfeed.com	Pattie	Tamburi	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Darren 	f
228	sconws6b@cisco.com	Sarene	Conws	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	William 	f
229	cnowland6c@domainmarket.com	Cullin	Nowland	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	AndyH 	f
230	scotes6d@digg.com	Shadow	Cotes	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Dan ‘the mirafit man’ 	f
231	lkinkead6e@theguardian.com	Lammond	Kinkead	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Deadlift Lover 	f
232	sstannas6f@chron.com	Sibella	Stannas	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Shah 	f
233	chanton6g@tumblr.com	Calv	Hanton	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Maccie 	f
234	adahmel6h@stumbleupon.com	Andee	Dahmel	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Andyt 	f
235	cmaccook6i@aboutads.info	Casi	MacCook	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Mossy 	f
236	bswiffin6j@umn.edu	Bobby	Swiffin	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Sparky 	f
237	premnant6k@cornell.edu	Puff	Remnant	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Ray 	f
238	glabdon6l@photobucket.com	Gale	Labdon	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Powerlifting girlie 	f
239	mkieran6m@howstuffworks.com	Millicent	Kieran	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Gez 	f
240	lledbury6n@wikimedia.org	Lorena	Ledbury	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Fed Tom 	f
241	hfindlater6o@ted.com	Hercule	Findlater	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Rickybobby 	f
242	lkillingbeck6p@mozilla.org	Lyndsey	Killingbeck	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Damien 	f
243	amattecot6q@ucoz.ru	Anitra	Mattecot	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	James Fisher 	f
244	fgofton6r@cafepress.com	Fin	Gofton	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Kane 	f
245	ospriggen6s@posterous.com	Odele	Spriggen	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Lukey 	f
246	jdoohey6t@ow.ly	Jeanelle	Doohey	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Micksmick 	f
247	afrostdicke6u@histats.com	Abdul	Frostdicke	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Iain 	f
248	jstuchburie6v@prweb.com	Jojo	Stuchburie	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Weir 	f
249	breddy6w@state.tx.us	Bondie	Reddy	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Boz 	f
250	eleynagh6x@thetimes.co.uk	Eddie	Leynagh	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	SaharaFee 	f
251	eorrice6y@tinypic.com	Ellette	Orrice	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Master Chief 	f
252	cwayman6z@gravatar.com	Clevie	Wayman	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Mr Blenham 	f
253	ahalahan70@hubpages.com	Asa	Halahan	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Konrad 	f
254	rlober71@amazon.co.jp	Rosemaria	Lober	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Rons 	f
255	ncheng72@pinterest.com	Nisse	Cheng	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Thewkout 	f
256	bsember73@oracle.com	Billye	Sember	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	NM 	f
257	btacon74@tinyurl.com	Beulah	Tacon	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Beynsy 	f
258	mbalhatchet75@rediff.com	Meggy	Balhatchet	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Vonovine 	f
259	clechmere76@fotki.com	Corene	Lechmere	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Harry S 	f
260	tloncaster77@kickstarter.com	Tilly	Loncaster	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	P! 	f
261	ffynn78@jugem.jp	Fianna	Fynn	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Jude 	f
262	jdugue79@ycombinator.com	Jaine	Dugue	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Red 	f
263	lpetersen7a@telegraph.co.uk	Lorette	Petersen	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Nabs 	f
264	hjelfs7b@fda.gov	Hilarius	Jelfs	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Arnold S 	f
265	rforan7c@ftc.gov	Rosemaria	Foran	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Billy 	f
266	wviccary7d@weather.com	Whittaker	Viccary	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Sylvia 	f
267	dhowford7e@uiuc.edu	Davidson	Howford	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Jamie 	f
268	cperche7f@ifeng.com	Christos	Perche	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Trevor sharp 	f
269	ktinan7g@gmpg.org	Katheryn	Tinan	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	cazza 	f
270	mkruger7h@liveinternet.ru	Martie	Kruger	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Chez 	f
271	gocloney7i@apache.org	Gerianne	O' Cloney	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Ness 	f
272	hohickey7j@time.com	Horatia	O'Hickey	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Mr Brown 	f
273	adurber7k@java.com	Ajay	Durber	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Yoshi fitness 	f
274	abroadbridge7l@pbs.org	Alfi	Broadbridge	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Geesypeeps 	f
275	emcivor7m@usatoday.com	Ellene	McIvor	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Louise P 	f
276	rbehan7n@freewebs.com	Rossie	Behan	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Jeff 	f
277	gbezant7o@taobao.com	Glad	Bezant	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Ric 	f
278	sinwood7p@ucsd.edu	Salaidh	Inwood	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	VBR Fitness 	f
279	kmacgregor7q@myspace.com	Kailey	MacGregor	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	UG Strongman 	f
280	tcouling7r@123-reg.co.uk	Timoteo	Couling	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Hans 	f
281	amaycey7s@bluehost.com	Aura	Maycey	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Emily 	f
282	lsudy7t@gmpg.org	Lissa	Sudy	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Anthony 	f
283	pchadbourne7u@ucsd.edu	Pattin	Chadbourne	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	El Kevo 	f
284	thunt7v@google.co.uk	Thornie	Hunt	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Dropandgiveme20 	f
285	mcumbridge7w@pinterest.com	Maurise	Cumbridge	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Oli 	f
286	tscotchmor7x@vimeo.com	Tamarra	Scotchmor	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Paulie 	f
287	rradford7y@etsy.com	Roderich	Radford	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	J 	f
288	rchsteney7z@meetup.com	Rahel	Chsteney	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	PT Guru 	f
289	bcallf80@privacy.gov.au	Bondy	Callf	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Magdalena 	f
290	drohlf81@google.com.hk	Dian	Rohlf	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	AF 	f
291	garrighi82@geocities.com	Gilbertina	Arrighi	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Ant 	f
292	bsnodden83@pbs.org	Beltran	Snodden	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Julian 	f
293	rgeck84@a8.net	Reuven	Geck	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Aymeric 	f
294	salexsandrev85@si.edu	Sigfrid	Alexsandrev	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Viv 	f
295	ogiordano86@wikipedia.org	Orlan	Giordano	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Lorraine 	f
296	kkiezler87@1688.com	Kristoffer	Kiezler	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	RichardP 	f
297	cpablos88@gravatar.com	Currey	Pablos	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Jordon 	f
298	cmckerley89@live.com	Clarinda	Mc-Kerley	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Lisa 	f
299	csacker8a@guardian.co.uk	Carmel	Sacker	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Nicky H 	f
300	wchallis8b@linkedin.com	Waylen	Challis	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Pamie 	f
301	wdiable8c@lycos.com	Wallis	Diable	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	happy 	f
302	ebetho8d@marketwatch.com	Elmira	Betho	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	John-Lee 	f
303	gduchenne8e@npr.org	Gerry	Duchenne	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Stephen 	f
304	clawrenz8f@bizjournals.com	Cahra	Lawrenz	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Naomi 	f
305	melijahu8g@w3.org	Mikel	Elijahu	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	MartinB 	f
306	yscrowby8h@usnews.com	Yorgo	Scrowby	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Winky 	f
307	klack8i@salon.com	Karita	Lack	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Guy 	f
308	plandsbury8j@sbwire.com	Pernell	Landsbury	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Dorian 	f
309	hsego8k@oakley.com	Husein	Sego	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Luka 	f
310	jmoughton8l@harvard.edu	June	Moughton	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	PH 	f
311	whubble8m@engadget.com	Winna	Hubble	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Phil 	f
312	mstopforth8n@fema.gov	Mikael	Stopforth	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Paulski 	f
313	lloughney8o@themeforest.net	Lorne	Loughney	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Simon B 	f
314	ssweet8p@unc.edu	Sydel	Sweet	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	JC 	f
315	apiele8q@etsy.com	Ashli	Piele	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Ioan 	f
316	lmcphelim8r@nature.com	Ludwig	McPhelim	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	CJ 	f
317	meddleston8s@bbb.org	Miranda	Eddleston	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Kristians 	f
318	bdadge8t@tinypic.com	Brigida	Dadge	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Hopskinz 	f
319	sdoyly8u@spotify.com	Sheilakathryn	D'Oyly	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	TM28 	f
320	sstelli8v@ft.com	Salomo	Stelli	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Physiques Gym Bexhill 	f
321	eseabon8w@discuz.net	Ester	Seabon	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Dan Dawson 	f
322	bfumagall8x@redcross.org	Bernelle	Fumagall	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Keely 	f
323	cwitterick8y@redcross.org	Clari	Witterick	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Nynke20 	f
324	ljouhan8z@oracle.com	Loise	Jouhan	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Lizzie 	f
325	sbogie90@twitter.com	Sybilla	Bogie	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Wenfy 	f
326	bantham91@typepad.com	Blair	Antham	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Scholesy 	f
327	esheekey92@typepad.com	Emerson	Sheekey	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	DARREN 	f
328	pstembridge93@tuttocitta.it	Patrizius	Stembridge	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Nick Davo 	f
329	plyst94@tumblr.com	Pavel	Lyst	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Craig 	f
330	fdoe95@wikimedia.org	Frannie	Doe	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Uncle 	f
331	gcandey96@joomla.org	Goldi	Candey	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	A 	f
332	lbaynard97@digg.com	Lucas	Baynard	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Tiger 	f
333	qdelias98@mozilla.com	Quinton	D'Elias	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	AliRunner 	f
334	ibraga99@slashdot.org	Izzy	Braga	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	JD 	f
335	bovesen9a@163.com	Beatrix	Ovesen	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Nick 	f
336	bthorntondewhirst9b@dot.gov	Brooke	Thornton-Dewhirst	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Happy Chappy 	f
337	cgiabucci9c@cocolog-nifty.com	Chere	Giabucci	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	JonyB 	f
338	bmushett9d@zdnet.com	Brandy	Mushett	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Owen 	f
339	rbande9e@wsj.com	Rora	Bande	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Iesa 	f
340	arallinshaw9f@wsj.com	Armando	Rallinshaw	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Mitch p 	f
341	dlenoir9g@mtv.com	Derby	Le Noir	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Salesy 	f
342	nflamank9h@google.com	Nalani	Flamank	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	JV 	f
343	jupsale9i@photobucket.com	Jena	Upsale	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	OldmanDave 	f
344	scavan9j@desdev.cn	Shannah	Cavan	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Sibbo57 	f
345	rparadin9k@cbc.ca	Ronald	Paradin	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	LostBoy 	f
346	mclynman9l@accuweather.com	Martie	Clynman	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Andy P 	f
347	tnealand9m@walmart.com	Theadora	Nealand	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Mina 	f
348	krittmeier9n@jigsy.com	Kent	Rittmeier	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Very happy customer. 	f
349	kbawles9o@youtu.be	Korie	Bawles	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Jack 	f
350	lmaciunas9p@rediff.com	Lorie	Maciunas	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Leebo 	f
351	jparks9q@usnews.com	Jae	Parks	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Grover 	f
352	wcoleby9r@cbc.ca	Walden	Coleby	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	BENJ 	f
353	aaubury9s@paypal.com	Anthia	Aubury	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Cb 	f
354	jdulake9t@opera.com	Juanita	Dulake	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Dek 	f
355	sskellern9u@usgs.gov	Simonette	Skellern	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Bazzer 	f
356	mchiddy9v@washington.edu	Mariska	Chiddy	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Huddo 	f
357	lgiuron9w@smugmug.com	Lynna	Giuron	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Jon P 	f
358	dwrightham9x@google.de	Dyane	Wrightham	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Seb 	f
359	wwildes9y@whitehouse.gov	Worth	Wildes	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	George 	f
360	tbremmer9z@who.int	Tarra	Bremmer	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Lord Liftington 	f
361	hsainsburya0@merriam-webster.com	Hillel	Sainsbury	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Abi 	f
362	tkirkama1@usnews.com	Tabbitha	Kirkam	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	pc 	f
363	bbriarsa2@qq.com	Bertina	Briars	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Kay 	f
364	wokiea3@51.la	Wynn	Okie	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Becky 	f
365	kstichalla4@diigo.com	Karim	Stichall	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Carts 	f
366	pvuittona5@opensource.org	Patin	Vuitton	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Rob 	f
367	daldiea6@dedecms.com	Darice	Aldie	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Hayley 	f
368	jarmatagea7@jimdo.com	Jennine	Armatage	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	clijam 	f
369	wlydstera8@canalblog.com	Willi	Lydster	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Paula 	f
370	anormantona9@ucsd.edu	Augie	Normanton	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	babs 	f
371	lsudworthaa@bbc.co.uk	Lisa	Sudworth	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Janet 	f
372	tjoanab@yahoo.co.jp	Terencio	Joan	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Kate 	f
373	maucuttac@bloglovin.com	Maggi	Aucutt	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	GinaG 	f
374	avaudreyad@fastcompany.com	Abbi	Vaudrey	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Slip sliding away... 	f
375	hsuggae@slideshare.net	Hyacinthie	Sugg	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Hosk 	f
376	mlotzeaf@europa.eu	Melvin	Lotze	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	E 	f
377	lracineag@phoca.cz	Lorenzo	Racine	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	ED 	f
378	bborehamah@nasa.gov	Boyce	Boreham	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	K 	f
379	bandrichukai@wsj.com	Bartlett	Andrichuk	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Dawnygirl 	f
380	kstruanaj@discuz.net	Kennedy	Struan	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Roughrider 	f
381	gbassindaleak@phpbb.com	Ginelle	Bassindale	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Den 	f
382	mmilehamal@archive.org	Minna	Mileham	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Jon 	f
383	mkerreyam@paypal.com	Major	Kerrey	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Ralph 	f
384	imeadleyan@skype.com	Igor	Meadley	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	WT74 	f
385	dlabelao@java.com	Dannel	Label	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Johnny 	f
386	agasperoap@npr.org	Anita	Gaspero	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Annie 	f
387	qcarilloaq@vinaora.com	Quentin	Carillo	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Feral 	f
388	ciacobiniar@msu.edu	Cort	Iacobini	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Brownie 	f
389	cgerratyas@meetup.com	Carey	Gerraty	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	STres 	f
390	dcoggingsat@tinyurl.com	Derwin	Coggings	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	MisterP17 	f
391	ddillamoreau@google.com.au	Dominique	Dillamore	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Bernard 	f
392	clucyav@networksolutions.com	Cheston	Lucy	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	catb0y 	f
393	tfillinghamaw@creativecommons.org	Toby	Fillingham	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	mark 	f
394	bferraraax@1und1.de	Bald	Ferrara	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	SC 	f
395	jbengleay@noaa.gov	Jakie	Bengle	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Bhavana 	f
396	dbavageaz@walmart.com	David	Bavage	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Stepper 	f
397	ljehaesb0@independent.co.uk	Leigha	Jehaes	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Mani 	f
398	wvanbrughb1@sphinn.com	Webster	VanBrugh	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Marta 	f
399	mcroucherb2@sbwire.com	Marlin	Croucher	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	GandT 	f
400	jioriob3@kickstarter.com	Justis	Iorio	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	MrDutch 	f
401	gmantb4@newyorker.com	Grace	Mant	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Jane 	f
402	ovonoertzenb5@virginia.edu	Orren	Von Oertzen	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Barb 	f
403	nsterrickerb6@home.pl	Niels	Sterricker	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Wendell 	f
404	cstarieb7@networkadvertising.org	Colene	Starie	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	MariaO 	f
405	jgopsillb8@cmu.edu	Johann	Gopsill	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Tilly’s mum 	f
406	shachetteb9@mayoclinic.com	Sigismund	Hachette	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Tracey66 	f
407	mgriggba@imdb.com	Marigold	Grigg	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	donna 	f
408	ljurgesbb@weebly.com	Louise	Jurges	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Ian 	f
409	abesseybc@hc360.com	Aubree	Bessey	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Sandra 	f
410	tjaraybd@dropbox.com	Torin	Jaray	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Sophia, Surrey 	f
411	jtaylotbe@last.fm	Judi	Taylot	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Emma 	f
412	cstannionbf@nyu.edu	Constantine	Stannion	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Big Daddy 	f
413	rdancerbg@ycombinator.com	Row	Dancer	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Kelly 	f
414	mgundrybh@elpais.com	Meridith	Gundry	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	kaya 	f
415	dtrenemanbi@vk.com	Dionysus	Treneman	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Mauzi 	f
416	fschiementzbj@nationalgeographic.com	Frieda	Schiementz	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Becca 	f
417	jlanchburybk@buzzfeed.com	Jessey	Lanchbury	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Lb129 	f
418	pmenghibl@angelfire.com	Pietro	Menghi	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	NA 	f
419	mjobbinsbm@nydailynews.com	Marven	Jobbins	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Scobie 	f
420	asmuthbn@barnesandnoble.com	Ailey	Smuth	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Disappointed 	f
421	wphalipbo@freewebs.com	Waldemar	Phalip	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	… 	f
422	cspringbp@boston.com	Clemmy	Spring	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Sally 	f
423	spherpsbq@biblegateway.com	Shelby	Pherps	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Nettstar 	f
424	ncatherallbr@samsung.com	Nobie	Catherall	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Andie 	f
425	kbarratbs@nifty.com	Kellyann	Barrat	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	NickNack 	f
426	mtirebt@edublogs.org	Milly	Tire	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Di 	f
427	cbreffitbu@ox.ac.uk	Clare	Breffit	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Susi2shoes 	f
428	fdudsonbv@printfriendly.com	Forester	Dudson	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Hele 	f
429	tinklebw@un.org	Tuckie	Inkle	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	wadstw 	f
430	wtrowillbx@irs.gov	Waring	Trowill	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	An 	f
431	kzupoby@google.com	Kora	Zupo	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Kasia 	f
432	bcleefbz@ovh.net	Becki	Cleef	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Jeanie 	f
433	hwridec0@dyndns.org	Hannah	Wride	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Carl86 	f
434	dstainlandc1@usnews.com	Deeann	Stainland	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Pistol Prits 	f
435	cchestermanc2@spiegel.de	Charis	Chesterman	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Rowan 	f
436	srawcliffc3@ask.com	Schuyler	Rawcliff	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Suesan 	f
437	klyndc4@booking.com	Keelby	Lynd	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Shahz 	f
438	jdorianc5@time.com	Jordain	Dorian	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	sleeplessj 	f
439	wtackettc6@narod.ru	Wilek	Tackett	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Michael 	f
440	gwarkec7@ed.gov	Gerianne	Warke	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Aimee 	f
441	cbroadfootc8@flickr.com	Chic	Broadfoot	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Dave R 	f
442	gtynnanc9@hc360.com	Glen	Tynnan	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Dayne 	f
443	nfoxwellca@sakura.ne.jp	Norry	Foxwell	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Kairos Martial Arts 	f
444	rabadecb@mysql.com	Rivalee	Abade	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Shell 	f
445	tedgworthcc@drupal.org	Tamara	Edgworth	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Agnes 	f
446	gmontescd@slideshare.net	Garwood	Montes	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Baldy 	f
447	jlethebridgece@sphinn.com	Jeddy	Lethebridge	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	El 	f
448	waustcf@intel.com	Wilden	Aust	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	MattLav 	f
449	lbelshawcg@baidu.com	Lukas	Belshaw	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Danners 	f
450	kmcclintonch@yale.edu	Kasey	McClinton	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	SP 	f
451	dmaclardieci@ft.com	Dion	MacLardie	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	H 	f
452	dsmurthwaitecj@loc.gov	Darice	Smurthwaite	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Dee 	f
453	areicheltck@dropbox.com	Ami	Reichelt	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Matty 	f
454	rmcmorrancl@time.com	Rudiger	McMorran	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Alan 	f
455	egannancm@wp.com	Ethelind	Gannan	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Sj 	f
456	kcarleycn@washingtonpost.com	Kristofor	Carley	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	BigAl 	f
457	erollinco@techcrunch.com	Ertha	Rollin	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Natriles 	f
458	jdevuystcp@google.co.jp	Jewelle	De Vuyst	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Val 	f
459	dpepincq@webmd.com	Dean	Pepin	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Spanner 	f
460	cwindascr@disqus.com	Cecilia	Windas	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Curtis 	f
461	sgeertsencs@utexas.edu	Sydney	Geertsen	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Garage Gym Nick 	f
462	sklulicekct@businesswire.com	Sullivan	Klulicek	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	SwindonRower 	f
463	kgemnettcu@clickbank.net	Kamillah	Gemnett	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	GT 	f
464	astoneleycv@cloudflare.com	Aluino	Stoneley	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	BettyB 	f
465	mkeachcw@paginegialle.it	Malva	Keach	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Jo 	f
466	cclearcx@cloudflare.com	Crosby	Clear	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Tony 	f
467	thinkscy@loc.gov	Teddie	Hinks	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Derfael 	f
468	cbrettellecz@unblog.fr	Colver	Brettelle	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Gain Forth Gym 	f
469	cbessentd0@china.com.cn	Craig	Bessent	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Pete 	f
470	bjosilevichd1@google.co.jp	Brenda	Josilevich	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Wayne 	f
471	hgheorghied2@com.com	Harlen	Gheorghie	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	yusuf 	f
472	avenneyd3@feedburner.com	Andree	Venney	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Tiny 	f
473	amidlard4@ihg.com	Annabelle	Midlar	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Hopscotcher 	f
474	msaingd5@epa.gov	Murvyn	Saing	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Davo 	f
475	cwroughtd6@discuz.net	Cynthea	Wrought	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Shirl 	f
476	springourd7@google.com.au	Sax	Pringour	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	John doe 	f
477	jlethlayd8@wikimedia.org	Jocelin	Lethlay	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Ali 	f
478	gbretteld9@facebook.com	Garret	Brettel	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Ann 	f
479	bfairbeardda@usda.gov	Bettine	Fairbeard	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Nikola 	f
480	bsolowaydb@macromedia.com	Blane	Soloway	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	CC 	f
481	kcowlamdc@patch.com	Kristien	Cowlam	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	sumeet21585 	f
482	ybettaneydd@infoseek.co.jp	Yolane	Bettaney	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Patrick 	f
483	hkinzede@miibeian.gov.cn	Hephzibah	Kinze	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Mia 	f
484	jroycroftdf@shop-pro.jp	Jerad	Roycroft	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Shokes 	f
485	awoolvindg@columbia.edu	Aharon	Woolvin	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Corin 	f
486	spandeydh@g.co	Sigismondo	Pandey	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Triangledan 	f
487	gkerseydi@networksolutions.com	Gabie	Kersey	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Niall N 	f
488	pbenhamdj@msn.com	Peterus	Benham	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Oldboygrandad 	f
489	gmassendk@woothemes.com	Gaylene	Massen	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	RyanT 	f
490	mpeachamdl@marketwatch.com	Milka	Peacham	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Derek 	f
491	tlautiedm@last.fm	Tarah	Lautie	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Steve B 	f
492	nlobelldn@php.net	Nickey	Lobell	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Bob 	f
493	odonnellydo@privacy.gov.au	Orazio	Donnelly	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Dorey 	f
494	lgaskalldp@miibeian.gov.cn	Lorianna	Gaskall	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Robert 	f
495	cwillettsdq@desdev.cn	Cornall	Willetts	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Bingojones 	f
496	ctirondr@studiopress.com	Crissie	Tiron	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Mongey 	f
497	redmeadsds@sbwire.com	Robb	Edmeads	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Kacy 	f
498	ngarfathdt@ftc.gov	Nichole	Garfath	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Flo 	f
499	sblaguedu@amazon.co.uk	Sky	Blague	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Marisa 	f
500	rthwaitedv@wsj.com	Rickie	Thwaite	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Full circle fitness 	f
501	rfelderdw@mapy.cz	Rickie	Felder	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Bish 	f
502	fgallandredx@cdc.gov	Flynn	Gallandre	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Scott 	f
503	mpetrillody@opera.com	Morissa	Petrillo	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Taff 	f
504	vattriedz@people.com.cn	Vite	Attrie	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Raz 	f
505	gbourtone0@google.com.br	Gloria	Bourton	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Kevin 	f
506	icromptone1@cnn.com	Ivy	Crompton	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Hass 	f
507	ccheesmane2@kickstarter.com	Conni	Cheesman	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Jonny 	f
508	plocksleye3@loc.gov	Pietrek	Locksley	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Mr T 	f
509	fyushmanove4@com.com	Fonsie	Yushmanov	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Kawt55 	f
510	bfrankcombee5@google.com	Blinni	Frankcombe	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Tony P 	f
511	zscougale6@prlog.org	Zared	Scougal	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Tony Page 	f
512	bcondiee7@t-online.de	Beret	Condie	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Steph 	f
513	abartere8@icq.com	Artus	Barter	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	FIFA 	f
514	shutchense9@hugedomains.com	Samantha	Hutchens	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Baz 	f
515	gkimberlyea@behance.net	Georas	Kimberly	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Hollie 	f
516	fgillmoreeb@businessinsider.com	Felicio	Gillmore	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Review 	f
517	bmerriganec@ihg.com	Burtie	Merrigan	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Balloo 	f
518	jlujaned@zimbio.com	Janifer	Lujan	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Weephil 	f
519	rwillesee@i2i.jp	Renato	Willes	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	SG 	f
520	screasyef@google.com.au	Salaidh	Creasy	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	G-Man 	f
521	dwynrehameeg@google.com.au	Daryl	Wynrehame	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Thomas 	f
522	bmckimeh@fda.gov	Bev	McKim	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Sara 	f
523	flloydei@cpanel.net	Frieda	Lloyd	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	nige 	f
524	dbernetteej@infoseek.co.jp	Doralin	Bernette	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Chris B 	f
525	uwestreyek@china.com.cn	Ulrikaumeko	Westrey	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	JIRc 	f
526	cgilbartel@sciencedaily.com	Caspar	Gilbart	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Jan 	f
527	jorcasem@techcrunch.com	Johnette	Orcas	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	bigjon 	f
528	mperrinsen@businesswire.com	Minne	Perrins	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Peter Rogerson 	f
529	sdranceeo@unicef.org	Sallyanne	Drance	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Amy 	f
530	torsiep@infoseek.co.jp	Torey	Orsi	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Neily 	f
531	oduckerineq@pbs.org	Oriana	Duckerin	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Misty 	f
532	cmuckeener@scribd.com	Cacilie	Muckeen	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Federico 	f
533	mgheeorghiees@canalblog.com	Moselle	Gheeorghie	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Gem 	f
534	karchleyet@pagesperso-orange.fr	Kristin	Archley	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Theo 	f
535	cbartheleteu@howstuffworks.com	Clemente	Barthelet	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Sid 	f
536	bsterzakerev@fema.gov	Bartholomeus	Sterzaker	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	oldtimer 	f
537	lwillcockew@guardian.co.uk	Lamont	Willcock	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Ben 	f
538	kgoodeex@senate.gov	Katuscha	Goode	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Michal 	f
539	ohailstoney@independent.co.uk	Othelia	Hailston	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Bren1997 	f
540	asimenonez@dailymotion.com	Angelica	Simenon	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	SteveB 	f
541	gworsfieldf0@purevolume.com	Gerek	Worsfield	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	FM 	f
542	aadamef1@yellowbook.com	Adrianna	Adame	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Som 	f
543	phallifaxf2@simplemachines.org	Penny	Hallifax	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Sirloin 	f
544	mzoppief3@miitbeian.gov.cn	Margret	Zoppie	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	justin 	f
545	jchrispf4@over-blog.com	Josefina	Chrisp	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Jamesy 	f
546	dstraffonf5@cisco.com	Dalt	Straffon	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Kat EG 	f
547	ptopingf6@japanpost.jp	Patricio	Toping	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	flo 	f
548	ncaulkettf7@examiner.com	Natka	Caulkett	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Surfseeker 	f
549	rahmedf8@scribd.com	Rhetta	Ahmed	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Chocojetpack 	f
550	pessbergerf9@delicious.com	Pepi	Essberger	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Dz69 	f
551	orennockfa@accuweather.com	Othilia	Rennock	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	G. 	f
552	mgreedyerfb@etsy.com	Maressa	Greedyer	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Iron sanctum 	f
553	shalwardfc@si.edu	Sherill	Halward	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	WILLIAM 	f
554	dspilsburiefd@springer.com	Darline	Spilsburie	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	garrymckay 	f
555	mhairesnapefe@nyu.edu	Margalit	Hairesnape	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	matt 	f
556	rblastockff@theglobeandmail.com	Rawley	Blastock	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Jonny Was 	f
557	mfaldoefg@vkontakte.ru	Marcellus	Faldoe	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Chunky but funky 	f
558	gjeannenetfh@tripod.com	Gwynne	Jeannenet	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Stuart 	f
559	lhandfi@networksolutions.com	Lila	Hand	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	CubbyWorse 	f
560	gmorenafj@istockphoto.com	Gregory	Morena	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Vinny 	f
561	cchoffinfk@aboutads.info	Chelsey	Choffin	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Ren 	f
562	cbaalhamfl@vkontakte.ru	Caitrin	Baalham	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Hendry 	f
563	sholliganfm@gnu.org	Shurlock	Holligan	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Zeejay 	f
564	lvalentinfn@lycos.com	Luciana	Valentin	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Foz 	f
565	kballancefo@japanpost.jp	Keane	Ballance	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Dale 	f
566	elinnemannfp@unblog.fr	Eddy	Linnemann	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Candles 	f
567	nsheepyfq@gizmodo.com	Natasha	Sheepy	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Gruffjet 	f
568	gbaksterfr@1und1.de	Gayla	Bakster	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Stewart 	f
569	gcicchellifs@artisteer.com	Geri	Cicchelli	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	WS 	f
570	aravelusft@gov.uk	Almeta	Ravelus	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Rorschach. 	f
571	tfetherstonfu@qq.com	Tony	Fetherston	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Hugh 	f
572	asalwayfv@flavors.me	Aurelea	Salway	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Big B 	f
573	ehendrikfw@senate.gov	Emmalynne	Hendrik	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	RS 	f
574	bswannackfx@drupal.org	Berni	Swannack	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	John Fish 	f
575	edermotfy@yelp.com	Ernestus	Dermot	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Ryo 	f
576	vrodsonfz@de.vu	Van	Rodson	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Sim 	f
577	jkynforthg0@vistaprint.com	Julianne	Kynforth	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Pip 	f
578	cjagog1@xinhuanet.com	Crosby	Jago	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Titan 	f
579	krennebeckg2@jimdo.com	Karlik	Rennebeck	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	DRP Fitness 	f
580	jeuplateg3@census.gov	Josefa	Euplate	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	PL 	f
581	thellardg4@blogs.com	Terri-jo	Hellard	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	SJ 	f
582	ntescheg5@google.com	Ninette	Tesche	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Asha 	f
583	btredwellg6@exblog.jp	Bettye	Tredwell	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	RogueDriver 	f
584	glawtyg7@tumblr.com	Gilligan	Lawty	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Vin 	f
585	rchallaceg8@wufoo.com	Rickert	Challace	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Tarzan 	f
586	btredgerg9@huffingtonpost.com	Benny	Tredger	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	basil 	f
587	mgadneyga@wikispaces.com	Mannie	Gadney	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Joseph 	f
588	dmatfieldgb@yelp.com	Dur	Matfield	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Gaz 	f
589	pmcleodgc@umich.edu	Phyllis	McLeod	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Dimitris 	f
590	cbenezegd@house.gov	Cristabel	Beneze	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Eric 	f
591	upunterge@yahoo.co.jp	Udall	Punter	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Raph 	f
592	plesorgf@alibaba.com	Phil	Lesor	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Shina 	f
593	tpallisgg@drupal.org	Tamqrah	Pallis	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Spike 	f
594	bheintzgh@friendfeed.com	Brad	Heintz	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Carl 	f
595	feverwingi@ycombinator.com	Freda	Everwin	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Danny 	f
596	roakebygj@hatena.ne.jp	Reggy	Oakeby	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Superman 	f
597	pgarthshoregk@mtv.com	Phyllis	Garthshore	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Henry 	f
598	igaythorpegl@constantcontact.com	Ichabod	Gaythorpe	$2a$10$hBn5gu6cGelJNiE6DDsaBOmZgyumCSzVwrOK/37FWgJ6aLIdZSSI2	Big Si 	f
599	User9@junit.com	User9-FirstName	User9-LastName	$2a$10$rYAntFxoxtTwLNsZXjg95OauY2dQNwcs52tl1XGDd7voCkZFM2itu	User9	f
601	johnsmith2@junit.com	john2	smith2	$2a$10$brTskP42x4sZDi6/GhBgT.XF7JcRwQlvvjUpHwi1FksG09tLgG/zG	johnsmith2@junit.com	f
602	johnsmith3@junit.com	john3	smith3	$2a$10$brTskP42x4sZDi6/GhBgT.XF7JcRwQlvvjUpHwi1FksG09tLgG/zG	johnsmith3@junit.com	f
603	johnsmith4@junit.com	john4	smith4	$2a$10$brTskP42x4sZDi6/GhBgT.XF7JcRwQlvvjUpHwi1FksG09tLgG/zG	johnsmith4@junit.com	f
600	johnsmith1@junit.com	john1	smith1	$2a$10$5f2FHAHmUPpiL1KVOlpbWO575LgtLf2ji4P5EP7w6SBE9p/ixlETC	johnsmith1@junit.com	t
604	johnsmith5@junit.com	john5	smith5	$2a$10$brTskP42x4sZDi6/GhBgT.XF7JcRwQlvvjUpHwi1FksG09tLgG/zG	johnsmith5@junit.com	t
\.


--
-- TOC entry 4920 (class 0 OID 16603)
-- Dependencies: 222
-- Data for Name: product; Type: TABLE DATA; Schema: public; Owner: e_commerce_emxk_user
--

COPY public.product (id, long_description, name, price, short_description, img, sub_category, category, rating) FROM stdin;
1	{textArr: Mirafit M3 Multi Grip Cable Attachment ,Four handle positions provide versatility for both wide and narrow exercises inc pulldown and row exercises ,Excellent for advanced muscle group targeting ,Standard size 32mm handles - suitable for most hand sizes ,Compatible with most lat pull down and multi gym machines ,Knurled grip handles ,Black powder coated steel construction ,Product specifications:\n\nWidth: 114cm \nDepth: 18cm \nHeight: 17cm \nHandle diameter: 3.2cm \nHandle spacing: 35cm/60cm/85cm/110cm \nNet weight: 8.6kg ,Width: 114cm ,Depth: 18cm ,Height: 17cm ,Handle diameter: 3.2cm ,Handle spacing: 35cm/60cm/85cm/110cm ,Net weight: 8.6kg }	Mirafit M3 Wide Multi Grip Cable Attachment	79.95	Our M3 Multi Grip Cable Attachments are an all-in-one attachment suitable for both multi gym and power rack cable systems. They have four grip positions allowing you to target the whole of your back. Durable and extremely efficient.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-M3-Wide-Multi-Grip-Cable-Attachment.jpg	gym-machines-attachments	strength-equipment	0.05
2	{textArr: \nMirafit Seated Row Machine\n,\nPlate loaded row machine suitable for Olympic weight plates and bumper\nplates \n,\nAnti-slip fabric on seat, chest and ankle pads\n,\nFeatures two pairs of handles, enabling you to target both your traps\nand lats\n,\nHandles are contoured to fingers\n,\nRubber stopper reduces noise\n,\nSix handlebar adjustment positions at 20mm distances\n,\nFive chest pad adjustment levels\n,\nSix seat height adjustment levels\n,\nDurable PVC feet protect flooring from damage\n,\nBlack powder coated finish\n,\nIdeal machine for home gyms\n,\nNot suitable for commercial use\n,\nNet weight: 38kg / 84lbs\n,\nMeasurements:\n,\nTotal Length: 158cm\n,\nTotal Width: 113cm\n,\nTotal Height: 100cm\n}	Mirafit Seated Row Machine	399.95	Build bigger arms and back muscles with this Mirafit Seated Row Machine. This compact plate loaded gym machine features contoured handles and anti-slip pads. The machine includes two pairs of handles designed to target your traps and lats.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Chest-Supported-T-Bar-Row.jpg	gym-machines-attachments	strength-equipment	0
3	{textArr: Mirafit Lat Pulldown & Seated Row Machine ,Latest generation lat pulldown featuring a sturdy steel frame, improved pulleys and anti slip pads ,Please note some similar looking models on the market weigh less than half of this machine. If comparing, remember to check the net weight ,Plated loaded cable machine suitable for use with Olympic weight plates and bumper plates ,High and low cable pulley system with 1:1 ratio ,Includes two cable attachments: ,37.5" lat pulldown bar ,14" straight bar ,Allows a range of lat pull down and seated row exercises to be performed ,Also suitable for tricep pushdowns and bicep curls ,Foot plates for use when performing seated rows ,Additional floor level foot plate for standing on when performing cable bicep curls ,Anti-slip fabric on seat and thigh pads ,Adjustable height thigh pads with 4 positions ,Heavy duty PVC feet protect flooring from damage ,Durable nylon pulleys provide a smooth workout experience ,Built in hooks to store attachments when not in use ,Compatible with various other carabiner attachments ,Ideal for home and garage gyms (please check ceiling height prior to purchase). Not recommended for use in full commercial gyms ,Please note: weight plates are not included ,Net weight: 57.5kg / 127lbs ,Measurements: ,Total Depth: 182cm ,Total Width: 117cm ,Total Height: 217cm (214.5 without the lat bar stowed) ,When considering ceiling height allow at least 10cm extra for installation }	Mirafit Lat Pulldown & Seated Row Machine	399.95	Get a precise upper body workout with this Lat Pulldown and Seated Row Machine. The plate loaded design is suitable for Olympic plates and has high and low cable attachments for a range of exercises. Includes lat pulldown bar and straight bar.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Plate-Loaded-Lat-Pulldown-Machine_1.jpg	gym-machines-attachments	strength-equipment	0.05
4	{textArr: \nMirafit M4 Lat Pulldown & Seated Row Machine with 135kg Weight Stack\n,\nCommercial grade selectorised cable pulley machine\n,\nMove the pin to select the amount of weight you want to lift\n,\nWeight stack now has 27 weight options in increments of 5kg\n,\nMinimum weight: 5kg\n,\nMaximum weight: 135kg\n,\nPulley weight ratio is 1:1\n,\nDual function machine with high and low attachments \n,\nIncludes two cable attachments:\n,\n48" lat pulldown bar with rubberized grips \n,\n50cm straight bar\n,\nAllows a range of lat pull down and seated row exercises to be\nperformed\n,\nPlease note this machine is not suitable for tricep pushdowns\nas the weight stack will hit the top\n,\nSturdy 75mm x 75mm x 3mm (11 gauge) steel frame with black powder\ncoated finish\n,\nBuilt in resistance band pegs to allow for band usage (bands not\nincluded) \n,\nAdjustable foot plate for seated rows with 8 positions \n,\nAnti-slip seat and thigh pads with a dense foam for comfort\n,\nAdjustable height thigh pads with 6 positions\n,\nHeavy duty PVC feet protect flooring from damage\n,\nAluminium pulleys provide a smooth workout experience\n,\nStainless steel guide rods\n,\nBuilt in hooks on top of the machine allow the lat pulldown bar to be\nstored out of the way when not in use \n,\nCompatible with various other carabiner attachments\n,\nMeasurements:\n\n\nTotal Depth: 144cm\n\n\nTotal Width: 109cm\n\n\nTotal Height: 221cm\n\n\nWhen considering ceiling height we recommend allowing at least\n20cm extra for installation\n\n\n,\nTotal Depth: 144cm\n,\nTotal Width: 109cm\n,\nTotal Height: 221cm\n,\nWhen considering ceiling height we recommend allowing at least\n20cm extra for installation\n}	Mirafit M4 Lat Pulldown & Seated Row Machine with Weight Stack	1799.95	Upgrade your gym with this Mirafit Lat Pulldown & Seated Row Machine. The included weight stack has 27 increments from 5kg to 135kg making this machine ideal for a wide range of users and strengths. Features aluminium pulleys for a smooth workout	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-M4-Lat-Pulldown-Seated-Row-Machine-with-135kg-weight-stack.jpg	gym-machines-attachments	strength-equipment	0.05
5	{textArr: Mirafit M3 Power Rack Cable Pulley System ,Available to fit the 208cm and 228cm M3 Power Racks ,Not suitable for the M3 half rack or the 188cm M3 Rack ,Please this product also requires the Mirafit Curved Rear Stabiliser Bar to be purchased for installation. If you have not already purchased the curved stabilizer bar then you need to choose the option which includes it as it will not be possible to install the cable system without this. ,Simple bolt-on design attaches directly to pre-drilled holes in the M3 frame and curved rear stabilizer bar ,Adds high and low cable pulley functions ,Includes a wide lat pull down bar and a straight bar ,Lat pull bar stores out of the way when not in use (as shown in image 1) ,Compatible with a wide range of carabiner attachments ,Allows a range of exercises to be performed including seated rows, push downs and bicep curls ,Please note: The high attachment is only suitable for downward motion exercises such as lat pull down and tricep pushdowns. It is not suitable for forward motion exercises such as overhead tricep extensions ,Chrome 2" Olympic weight poles (collars not included) ,Power rack is not included - this is purely the cable system kit as highlighted in image 1 ,Note: To reduce friction, apply a lubricating oil such as 3in1 oil to the sliding section and rollers }	Mirafit M3 Power Rack Cable Pulley System	279.95	Perform additional exercises with this Cable Pulley System designed to fit the Mirafit M3 Power Rack. Includes a straight bar, wide pulldown bar and Olympic weight poles. Please note curved stabiliser bar is also required.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-M3-Power-Rack-Cable-Pulley-System-208cm-Bar.jpg	gym-machines-attachments	strength-equipment	0.047
6	{textArr: \nMirafit M3 Power Rack Cable Pulley Starter Kit\n,\nAdds basic cable system functionality allowing additional exercises to\nbe performed such as bicep curls, tricep push downs and seated rows.\n,\nAvailable for each M3 rack height\n,\nCan also be used in conjunction with the M3 Power Rack Extension Kit\n,\nSimple design includes three roller arms which bolt directly to the\nbox section of the rack\n,\nIncludes all required fixings and three black steel carabiners\n,\nCompatible with various handle attachments such as tricep ropes,\nrow bars and curl bars\n,\nWeight can be attached using a suitable loading pin, strap or chains\n(not included)\n,\nHandles and attachments shown in images are not included but are sold\nseparately\n,\nPlease note this is a basic system designed to enable the user to\nperform a range of cable exercises. This is not a comparable to a full\ncable system that can be found in commercial gyms. Max load 80kg.\n}	Mirafit M3 Power Rack Cable Pulley Starter Kit	99.95	Our Cable Pulley Starter Kit attaches to the M3 Power Rack and provides a basic cable system. It is perfect for performing additional exercises and targeting specific muscle groups. Use in conjunction with a suitable plate loading pin, chain or strap	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-228cm-M3-Power-Rack-Cable-Pulley-Starter-Kit.jpg	gym-machines-attachments	strength-equipment	0.05
7	{textArr: Mirafit Dual Handle Cable Attachment ,Suitable for most multi gyms and cable pulley stations ,Two narrow grip handles ,Knurled grips for a secure hold ,Solid steel construction,Chrome finish,Measurements:\n\nTotal length: 36cm \nGrip length: 16cm \nGrip diameter: 2.5cm ,Total length: 36cm ,Grip length: 16cm ,Grip diameter: 2.5cm }	Mirafit Dual Handle Gym Cable Attachment	29.95	Activate your lats and traps with this Mirafit Dual Handle Cable Attachment. Solid steel construction with knurled handles for a secure grip. Suitable for most pulley machines and multi gyms.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Dual-Handle-Cable-Attachment.jpg	gym-machines-attachments	strength-equipment	0.05
8	{textArr: \nMirafit Landmine Row Platform\n,\nAllows for a greater range of motion when training\n,\nBuilt-in barbell rest with HDPE liners prevents damage to bar and\navoids rolling when not in use\n,\nWide base for added stability\n,\nAnti slip tread on foot plates\n,\nSturdy steel construction with powder coated finish\n,\nMeasurements:\n\n\nHeight: 33cm\n\n\nWidth: 65.5cm\n\n\nDepth: 65.5cm\n\n\nDistance between foot plates: 42cm\n\n\n,\nHeight: 33cm\n,\nWidth: 65.5cm\n,\nDepth: 65.5cm\n,\nDistance between foot plates: 42cm\n}	Mirafit Landmine Row Platform	89.95	Our Landmine Row Platforms allow for full extension when doing rows and other exercises. The elevated platform sits 33cm above the ground and provides a steady base for performing a range of strengthening exercises. Includes a built-in barbell rest.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/m/i/mirafit-landmine-row-platform-orange.jpg	landmine-handles	strength-equipment	0.048
9	{textArr: Mirafit Multi Grip Landmine Handle ,Slides securely onto the sleeves of both 2" Olympic and 1" standard barbells ,Multiple grip positions allow you to target specific areas and precision train ,Suitable for a wide range of exercises ,Seamless tube prevents damage to your bar ,Measurements:\n\nWidth: 94.5cm \nHeight: 26.5cm \nGrip diameter: 3.2cm ,Width: 94.5cm ,Height: 26.5cm ,Grip diameter: 3.2cm }	Mirafit Multi Grip Landmine Handle	49.95	Landmines are one of the most effective ways to build strength and power and our Multi Grip Landmine Handle is no exception. With wide, standard and narrow grip handles you can hit every muscle. Durable and versatile, use with either 1" or 2" bars.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/m/i/mirafit-multi-grip-landmine-handle.jpg	landmine-handles	strength-equipment	0.048
10	{textArr: Mirafit Post Landmine ,Creates a quick, versatile landmine setup with only two weight plates ,Simply position base post inside stacked Olympic plates ,360° swivel platform develops rotational strength ,Suitable for most 2"/50mm Olympic barbells ,Strong steel construction with black powder coated finish ,Dimensions: ,Base post length: 14cm ,Base post diameter: 5cm ,Bar sleeve opening diameter: 5.1cm }	Mirafit Post Landmine	29.95	Simple and effective, our Post Landmines allow you to get a full, rotational workout without the need for installation. Take yours with you to the gym or use it with your weight plates at home for upper body strengthening.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Post-Landmine.jpg	landmine-handles	strength-equipment	0.049
11	{textArr: Mirafit multi purpose landmine Attachment ,Versatile design suitable for a range of fitment options ,Can be fitted to suitable 50mm/60mm equipment ,Also suitable for fitment to a door (subject to door strength) ,Pre-drilled holes in the base plate also make this landmine suitable for bolting to the floor (fixings not included) ,Dual sleeve design suitable for both 1" and 2" Olympic diameter weight bars ,360° swivel platform ,18cm internal sleeve length ,When fitting to a door you must ensure you check the door is solid and strong enough to withstand the use prior to installation }	Mirafit Multi Purpose Landmine Attachment	29.95	Add another dimension to your strength training using our Landmine Attachments. Lock one onto your power rack via the adjustable plate grips and you're all set. Suitable for both 1" and Olympic 2" bars. Also fixes to squat racks and heavy doors.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Multi-Purpose-Landmine-Attachment.jpg	landmine-handles	strength-equipment	0.049
12	{textArr: Mirafit Gen II Straight Grip Landmine Handle ,Improved gen II model offers even more strength ,Suitable for use with Olympic diameter barbells ,Black powder coated steel construction ,Rubber handles for extra grip ,Measurements:\n\nSleeve opening diameter: 5.2cm \nHandle length: 14cm \nTotal length: 80cm ,Sleeve opening diameter: 5.2cm ,Handle length: 14cm ,Total length: 80cm }	Mirafit Gen II Straight Grip Landmine Handle	39.95	The Gen II Straight Grip Landmine Handle allows you to target your lats for a well-rounded workout. The attachment features rubber handles for a secure grip and a central support frame for even greater strength. Suitable for 2" Olympic weight bars.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/m/i/mirafit-gen-ii-straight-grip-landmine-handle.jpg	landmine-handles	strength-equipment	0.05
13	{textArr: Mirafit Gen II Single Landmine Handle ,Improved gen II model offers even more strength ,Suitable for use with 2" Olympic bars ,Helps maximise range of motion across lateral raises, one arm rows and multiple core exercises ,Seamless sleeve ensures no scuffs or scratches to your barbell ,Black powder coated steel construction ,Rubber handle for extra grip ,Measurements:\n\nHandle length: 14cm \nSleeve opening diameter: 5.2cm ,Handle length: 14cm ,Sleeve opening diameter: 5.2cm }	Mirafit Gen II Single Landmine Handle	23.95	Get more out of your workouts using our Gen II Single Landmine Handles. Durable and versatile, the heavy duty steel sleeve has been reinforced for high impact workouts. They're easy to fit, and the smooth finish protects your bar from wear and tear.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Gen-II-Single-Landmine-Handle.jpg	landmine-handles	strength-equipment	0.049
14	{textArr: Mirafit M3 Parallel Landmine Handle ,Suitable for use with 2" Olympic bars ,Helps maximise range of motion across lateral raises, rows and multiple core exercises ,Seamless sleeve ensures no scuffs or scratches to your barbell ,Black powder coated steel construction ,Knurled grip handles - 32mm diameter ,Dimensions: ,Height: 32.5cm ,Handle length: 23cm ,Handle diameter: 3.2cm }	Mirafit M3 Parallel Landmine Handle	59.95	Our heavy duty M3 landmine handle is suitable for Olympic barbells and features thick 32mm knurled grips. Great for bent over rows and back work.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-M3-Parallel-Landmine-Handle.jpg	landmine-handles	strength-equipment	0.047
15	{textArr: Mirafit Viking Press Landmine ,Neutral grip t bar row handle attachment for barbell ,A versatile piece of gym equipment that adds variety to your strengthening regime ,Suitable for a wide range of exercises ,Targets shoulders and triceps while front loading your overhead press ,Combine with Mirafit post landmine to rotate and isolate each side ,Develop rotational and core strength ,Can be used both with and without weight plates ,Compatible with all 2" Olympic barbells ,Seamless tube prevents damage to your bar ,Simply slide over bar sleeve and secure with the threaded stop pin ,Specifications:\n\nNet weight: 8.4kg \nWidth: 68.5cm \nDepth: 41cm \nHandle diameter: 4.5cm ,Net weight: 8.4kg ,Width: 68.5cm ,Depth: 41cm ,Handle diameter: 4.5cm ,See our range of compatible landmine accessories here }	Mirafit Viking Press Landmine Bar Attachment	59.95	Supplement your strength training and build speed and power using our Viking Landmine Press attachments. They're ideal for performing compound as well as rotational exercises, and come with a range of grips so you can vary your workouts.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/m/i/mirafit-viking-press-landmine-bar-attachment.jpg	landmine-handles	strength-equipment	0.048
16	{textArr: Mirafit Narrow Grip Landmine Handle & Row Attachment ,Compatible with all 2"/50mm Olympic bars ,Simply slide onto weight bar and load plates on top,Locking screw removes movement on sleeve during use,Multi-purpose handle also clips onto cable pulley stations and multi gyms for use as a seated row attachment ,Knurled grip handles ,3kg net weight ,Chrome plated steel ,Measurements:\n\nGrip length: 12.5cm \nGrip diameter: 3cm ,Grip length: 12.5cm ,Grip diameter: 3cm }	Mirafit Narrow Grip Landmine Handle & Row Attachment	34.95	Get maximum versatility for your gym using our Narrow Grip Landmine Handle and Row Attachments. Use the attachment on your cable system or slide over a 2" Olympic barbell for a range of landmine exercises.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Narrow-Grip-Landmine-Handle.jpg	landmine-handles	strength-equipment	0.046
17	{textArr: Mirafit Single Viking Press Landmine ,Neutral grip t bar row handle attachment for barbell ,A versatile piece of gym equipment that adds variety to your strengthening regime ,Suitable for a wide range of exercises ,Targets shoulders and triceps while front loading your overhead press ,Combine with Mirafit post landmine to rotate and isolate each side ,Develop rotational and core strength ,Can be used both with and without weight plates ,Compatible with all 2" Olympic barbells ,Seamless tube prevents damage to your bar ,Simply slide over bar sleeve and secure with the threaded stop pin ,Specifications:\n\nNet weight: 2.6kg \nWidth: 23cm \nDepth: 30cm \nHandle diameter: 5cm ,Net weight: 2.6kg ,Width: 23cm ,Depth: 30cm ,Handle diameter: 5cm }	Mirafit Single Viking Press Landmine Attachment	34.95	Add variety to your strength training with our Single Viking Press Landmine Attachments. Suitable for Olympic barbells, simply slide the handle on and secure with the locking pin. Both durable and versatile.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/m/i/mirafit-single-viking-press-landmine-attachment-front.jpg	landmine-handles	strength-equipment	0.05
18	{textArr: Mirafit T Bar Row Landmine ,360° swivel platform ,Develops rotational strength ,Dual bar fitment suitable for both 1"/25mm standard and 2"/50mm Olympic weight bars ,Fits into corner of room - no need to bolt into ground ,Handy carry handle allows for easy transportation to desired workout locations ,Black and orange steel construction ,10" Olympic bar sleeve ,6" standard bar sleeve ,Measurements:\n\nWidth: 35cm \nDepth: 35cm \nOlympic inner sleeve length: 25.5cm \nStandard inner sleeve length: 14.5cm ,Width: 35cm ,Depth: 35cm ,Olympic inner sleeve length: 25.5cm ,Standard inner sleeve length: 14.5cm }	Mirafit T Bar Row Platform	54.95	Our T Bar Row Platforms are ideal for garage gyms. Train explosively while targeting your back and core effectively. The posts swivel 360 degrees and are suitable for both Olympic and standard sized barbells. No need for bolts.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/m/i/mirafit-t-bar-row-platform.jpg	landmine-handles	strength-equipment	0.05
19	{textArr: \nMirafit Landmine Attachment For 50mm Equipment\n,\nAvailable in either orange or black\n,\nSuitable for Olympic bar sleeves\n,\nPivots and rotates over 180° on both a horizontal and vertical axis\n,\nCompatible with Mirafit M1 and M100 racks\n,\nMay also be suitable for other 50mm frame equipment, please check\nmeasurements image\n,\nPowder-coated steel construction\n,\nIncludes connection bolt\n,\nMeasurements:\n\n\nInner sleeve length: 25.5cm\n\n\nSleeve opening diameter: 5cm\n\n\n,\nInner sleeve length: 25.5cm\n,\nSleeve opening diameter: 5cm\n}	Mirafit Landmine Attachment for 50mm Power Rack	29.95	Mix up your training and start seeing some real results using our Landmine Attachments. Suitable for 50mm frames, attachment pivots and rotates over 180 degrees on horizontal and vertical axis to allow for varied workouts. Use with 2" Olympic bars.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/O/r/Orange-Mirafit-Landmine-Attachment-for-50mm-Power-Rack.jpg	landmine-handles	strength-equipment	0.05
20	{textArr: \nMirafit Parallel Dip Bars\n,\nFlexible equipment suitable for both beginner and advanced workouts\n,\nCalisthenics exercises utilise bodyweight for excellent results\n,\nPerfect 90cm height, tried and tested to give the best range of\navailable exercises\n,\nPowder coated steel design with comfortable padded handle grips\n,\nStrong 150kg max weight limit\n,\nNon slip rubber foot caps prevent parallettes from slipping during use\n,\nFreestanding, portable design\n,\nEasily moved and stored away when not in use\n,\nQuick and easy to assemble\n,\nCompatible with the Mirafit adjustable width bar\n,\nDimensions:\n\n\nTotal height: 92.5cm\n\n\nWidth: 43cm\n\n\nDepth: 60cm\n\n\nGrip diameter: 4.5cm\n\n\n,\nTotal height: 92.5cm\n,\nWidth: 43cm\n,\nDepth: 60cm\n,\nGrip diameter: 4.5cm\n,\nPlease note tools required for assembly are not included\n}	Mirafit Dip Bars	59.95	Get a grip on your calisthenic exercises with these Mirafit Dip Bars. Perfect for varying your strength routine, use them to develop your upper body focusing on your triceps, shoulders and chest. More advanced moves engage your core and lower body. 	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Parallel-Dip-Bars-Black.jpg	parallel-bars	strength-equipment	0.047
21	{textArr: \nMirafit Mini Parallettes\n,\nFlexible equipment suitable for both beginner and advanced workouts\n,\nCalisthenic exercises utilise bodyweight for excellent results\n,\nPowder coated steel design with comfortable padded handle grips\n,\nStrong 150kg max weight limit\n,\nNon slip rubber foot caps prevent bars from slipping during use\n,\nFreestanding, portable design\n,\nCan be easily moved and stored away when not in use\n,\nQuick and easy to assemble\n,\nDimensions:\n\n\nTotal height: 36cm\n\n\nWidth: 37cm\n\n\nDepth: 60cm\n\n\nGrip diameter: 4.5cm\n\n\n,\nTotal height: 36cm\n,\nWidth: 37cm\n,\nDepth: 60cm\n,\nGrip diameter: 4.5cm\n,\nPlease note tools required for assembly are not included\n}	Mirafit Mini Parallettes	49.95	Get a grip on your calisthenic exercises using our Mini Parallettes. They're ideal for helping you to develop your upper body as well as your core. Perform more advanced moves such as L-sits and planche press ups. Durable, sturdy and versatile.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Mini-Parallettes-Orange.jpg	parallel-bars	strength-equipment	0.049
22	{textArr: \nMirafit Parallel Dip Bars + Adjustable Width Bar Extension\n,\nChoice of colour: black or orange\n,\nPerfect 90cm height, tried and tested to give the best range of\navailable exercises\n,\nIncludes adjustable width bar extension allowing bars to be locked\ntogether at 8 fixed width positions from 85.5cm to 141.5cm total width\n(see image)\n,\nPowder coated steel design with comfortable padded handle grips\n,\nStrong 150kg max weight limit\n,\nNon slip rubber foot caps prevent parallettes from slipping during use\n,\nFreestanding, portable design\n,\nEasily moved and stored away when not in use\n,\nQuick and easy to assemble\n,\nDimensions:\n\n\nTotal height: 92.5cm\n\n\nDepth: 60cm\n\n\nGrip diameter: 4.5cm\n\n\n,\nTotal height: 92.5cm\n,\nDepth: 60cm\n,\nGrip diameter: 4.5cm\n,\nPlease note tools required for assembly are not included\n}	Mirafit Tall Parallettes with Adjustable Extension Bar	79.95	Work on your core strength, upper body and stabilising muscles with our Black Parallettes with Adjustable Extension Bar. Freestanding, portable design making it easy to use and store away. 150kg max weight limit.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Orange-Parallettes-with-Adjustable-Extension-Bar-on-White-Background_1.jpg	parallel-bars	strength-equipment	0.048
23	{textArr: \nMirafit High and Low Parallettes Set\n,\nIncludes a set of our tall dip bars with joiner bar plus a set of mini\nparallettes\n,\nFantastic tool for anyone looking to train calisthenics and improve\nstrength\n,\nPerform a wide range of body weight exercises\n,\nChoice of colour: black or orange\n,\nOur tall dip bars are a perfect 90cm height, tried and tested to give\nthe best range of available exercises\n,\nIncludes adjustable width bar extension allowing bars to be locked\ntogether at 8 fixed width positions from 85.5cm to 141.5cm total width\n(see image)\n,\nMini parallettes also included for a varied workout\n,\nPowder coated steel with comfortable padded handle grips\n,\nStrong 150kg max weight limit\n,\nNon slip rubber foot caps prevent parallettes from slipping during use\n,\nFreestanding, portable design\n,\nEasily moved and stored away when not in use\n,\nQuick and easy to assemble\n,\nWhen assembling ensure all fixings are inserted loosely first\nthen level the stands before tightening fully.\n,\nTall Dip Bar Dimensions:\n\n\nTotal height: 92.5cm\n\n\nDepth: 60cm\n\n\nGrip diameter: 4.5cm\n\n\n,\nTotal height: 92.5cm\n,\nDepth: 60cm\n,\nGrip diameter: 4.5cm\n,\nMini Parallette Dimensions:\n\n\nTotal height: 36cm\n\n\nDepth: 60cm\n\n\nGrip diameter: 4.5cm\n\n\n,\nTotal height: 36cm\n,\nDepth: 60cm\n,\nGrip diameter: 4.5cm\n,\nPlease note tools required for assembly are not included\n}	Mirafit High and Low Parallettes Set	119.95	This package includes both our tall and mini parallettes with adjustable joiner bar. Ideal for calisthenics and anyone looking to improve strength to bodyweight.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Parallettes-in-Orange_2.jpg	parallel-bars	strength-equipment	0.05
24	{textArr: Mirafit Adjustable Width Bar Extension ,Dip bars are not included - this is for the adjustable width bar extension only ,Compatible with Mirafit 90cm parallel dip bars ,Locks bars together ensuring they stay the same distance apart throughout your workout ,8 width positions - total width can be adjusted from 88cm to 137cm (see image) ,Supplied with quick release adjustment knobs ,Quick and easy to fit, no tools required ,Simply replace two feet with end caps included, slide pole through base of frame and secure with adjustment knobs ,Note: this extension is not suitable for use with the Mirafit Mini parallettes ,Note: only one extension can be used per pair of parallel bars }	Mirafit Adjustable Width Bar for Parallel Dip Bars	19.95	Steady your workout and make sure you get a good grip on your calisthenic exercises with this Mirafit Adjustable Width Bar. Adjustable with weight different positions, advance your strengthening regime and feel secure as you develop your routine.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Adjustable-Width-Extension-Bar.jpg	parallel-bars	strength-equipment	0.05
25	{textArr: \nMirafit M3 Power Rack with Barbell and Weights Set\n,\nIncludes:\n,\nChoice of M3 Power Rack in black or orange\n,\nM3 20kg Olympic Barbell in hard chrome finish \n,\nPair of quick release barbell collars\n,\n100kg black rubber bumper plate set\n,\nOptional accessory pack also available which includes:\n,\nM3 Battle Rope Anchor Attachment\n,\nSet of four M3 Resistance Band Pegs\n,\nPair of M3 Weight Poles - chrome\n,\nPair of M3 Fractional Weight Poles - chrome\n,\nOptional M350 Adjustable Weight Bench also available. For more\ninformation on this bench please see\nhere \n,\nPower rack is available in a choice of three heights and two internal\ndepths\n,\nStrong 60mm x 60mm x 3mm (11 gauge) steel frame\n,\nWest side hole spacing with one inch spacing in the bench press area\nand two inch spacing throughout\n,\nLaser-cut number markings for easy height identification at 5 hole\nintervals\n,\nJ-cup barbell rests with UHMW liners to prevent barbell damage\n,\nPin and pipe spotters provide safety whilst training\n,\nBolt down rack design with heavy duty foot plates\n,\n32mm diameter pull up bar without knurling\n,\n17mm hole size is compatible with a wide range of other Mirafit M3\npower cage attachments\n,\nPackage includes 100kg of our classic black rubber bumper plates. This\nset includes 2 x 5kg, 2 x 10kg, 2 x15kg and 2 x 20kg\nplates. Additional plates can also be purchased\nhere\n,\nAlso includes our best selling 20kg M3 barbell featuring a hard chrome\nfinish and hybrid grip pattern, ideal for a wide range of gym training\n,\nRack Specification:\n,\nChoice of height:\n,\n228cm (90")\n,\n208cm (82")\n,\n188cm (74") (height will mean pull up bar has less functionality,\nespecially for tall users)\n,\nChoice of internal depth:\n,\n60cm (total depth is 81cm including feet)\n,\n90cm (total depth is 111cm including feet)\n,\nWidth: 122cm (excluding feet) / 133cm (including feet)\n,\nPlease refer to measurements image for further dimensions\n,\nBar Specification:\n,\nBar weight: 20kg (44lbs)\n,\nBar length: 220cm (7.2ft)\n,\nGrip diameter: 28mm\n,\nCentre length: 131cm (4.3ft)\n,\nSleeve diameter: 50mm (2")\n,\nSleeve length: 41.65cm (16.4")\n,\nLoad testing: 680kg/1500lb\n,\nTensile strength: 218k psi\n,\nPlate Specifications:\n,\nDiameter: 45cm\n,\nApprox. plate thickness:\n,\n5kg: 2.4cm\n,\n10kg: 6.2cm\n,\n15kg: 6.2cm\n,\n20kg: 7.2cm\n}	Mirafit M3 Power Rack with Barbell and Weights Set	899.95	Level up your home gym with this Mirafit M3 Power Rack with Barbell and Weights Set. Including 100kg of bumper plates, an M3 Olympic bar, collars and power cage, this weightlifting set is ideal for anyone looking to train hard and get results.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/3/M3-228x90-Black-Rack-Plates-Bar-Collars-Bench_2.jpg	power-cages-racks	strength-equipment	0
26	{textArr: \nMirafit M100 Series Rack with Bar and Weights Set\n,\nIncludes:\n,\nM100 Power Rack in a choice of black or orange\n,\n7ft Chrome Olympic Barbell\n,\nPair of Spring Collars\n,\nChoice of 60kg, 100kg or 150kg bumper plate set - now includes our\nclassic black and white rubber bumper plates\n,\nOur M100 rack provides a great setup for working out safely at home\nand is suitable for a range of exercises including squats and bench\npress.\n,\nThe M100 is also compatible with a range of attachments (see below) so\nyou can expand your home gym as you progress\n,\nSolid steel full length chrome spotters are supplied with the rack\nallowing you to workout safely in case you fail a rep\n,\nIncludes J-Cups with UHMW liners\n,\nStrong 50mm x 50mm steel frame\n,\nPowder coated finish in a choice of black or orange \n,\nSteel thickness ranges from 2mm right up to 6mm\n,\nBolt down feet for extra stability\n,\nFully adjustable - 17 levels\n,\n1" diameter holes spaced at 7.5cm intervals\n,\nMulti grip pull up bar allows a range of narrow and wide grip pull ups\n,\nPull up bar diameter: 32mm with matt black finish. This can be\ninstalled upside down to reduce total height of rack to 204cm (190cm\nclearance to underside of pull bar in this position)\n,\nThe foot plates are pre-drilled with 11mm diameter holes but floor\nfixings are NOT included and will vary depending on your floor type.\nFor masonry floors we recommend our Floor\nFixing Kit (sold separately)\n,\nThe chrome 7ft barbell which is included is suitable for up to 300kg\nand comes complete with spring collars\n,\nOur rubber bumper plates are a home gym favourite and feature\nstainless steel centre rings. Choose from either a 60kg or 100kg set.\n,\n60kg set includes 2 x 5kg, 2 x 10kg and 2 x 15kg plates\n,\n100kg set also includes 2 x 20kg plates\n,\n150kg set also includes 2 x 25kg plates\n,\nRemember to also check out our weight\nbenches. Adding a bench will also allow you to bench press and\nperform various other additional exercises inside the rack.\n,\nRack Specification:\n,\nTotal Height: 213cm (204cm with pull up bar installed in reverse)\n,\nTotal Width: 149cm (122cm to outside of uprights)\n,\nTotal Depth: 123cm\n,\nInternal Depth: 61cm\n,\nFrame: 50mm X 50mm\n,\nNet weight: 64kg / 141lbs\n,\nMax load: 250kg  \n}	Mirafit M100 Power Rack with Barbell and Weights Set	599.95	Kickstart your own gym with this Mirafit M100 home gym kit. Based around our popular M100 rack this setup also includes an Olympic weightlifting bar, collars and bumper plate set in a choice of weight. Everything needed to start training at home.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/O/r/Orange-M100-Rack-with-Barbell-and-150kg-Package_1.jpg	power-cages-racks	strength-equipment	0.05
34	{textArr: Mirafit M3 Curved Rear Stabiliser Bar ,Suitable for the M3 power rack ,Rear Stabiliser bar attaches to the bottom of the cage in order to reduce sway and provide extra stability ,Removes the necessity to bolt the cage to the ground (90cm deep model only) ,60mm x 60mm x 3mm (11 gauge) steel with 8mm joint plates ,Includes all required fixings - please ensure all bolts are in place before tightening fully ,Note: a new cable system is available for the M3 rack which will also utilize this bar for installation. }	Mirafit M3 Curved Rear Stabiliser Bar	79.95	This M3 Curved Rear Stabiliser Bar attaches to the bottom of our M3 Power Cage to provide extra stability. It also eliminates the need to bolt the cage to the ground on our 90cm deep models.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-M3-Rear-Stabilising-Bar.jpg	power-rack-attachments	strength-equipment	0
27	{textArr: \nMirafit M3 Power Rack and Extension Bay\n,\nIncludes M3 rack in a choice 60cm or 90cm internal depth plus an\nadditional 60cm internal depth extension bay\n,\nChoice of three heights\n,\nAvailable with or without chrome weight storage poles\n,\n228cm rack& weight pole option includes 3 pairs of Olympic plate\nstorage poles + 1 pair of fractional poles\n,\n208cm / 188cm rack& weight pole option includes 2 pairs of Olympic\nplate storage poles + 1 pair of fractional poles\n,\nHeavy duty rack that forms the ideal centrepiece in any premium home\ngym\n,\n60mm x 60mm x 3mm (11 gauge) powder coated steel frame in a choice of\nblack or orange\n,\nJ-cups feature UHMW liners to protect the barbell and rack from\nscratches\n,\nWest side hole spacing enables a more precise height for spotters and\nbar rests, with 1 inch spacing through the bench press area and 2 inch\nspacing throughout\n,\nLaser cut number markings at five hole intervals make it easy to align\nattachments\n,\n17mm hole size is compatible with a wide range of M3\npower rack attachments\n,\nHeavy duty foot plates with holes for bolting down\n,\n32mm diameter pull up bar\n,\nMeasurements:\n,\nHeight:\n,\n228cm (90")\n,\n208cm (82")\n,\n188cm (74") (height will mean pull up bar has less functionality,\nespecially for tall users)\n,\nTotal Depth:\n,\n147cm (for 60cm internal rack depth option)\n,\n177cm (for 90cm internal rack depth option)\n,\nWidth: 122cm (excluding feet) / 133cm (including feet)\n,\nWeight Poles (optional):\n,\nTotal length: 16cm / 34cm\n,\nUseable length: 15cm / 33cm\n}	Mirafit M3 Power Rack and Extension Bay	579.95	Create the ultimate home gym setup with the Mirafit M3 Power Rack and Extension Bay. Available in three heights and two depths, this rack setup also includes a 60cm extension bay with optional storage poles for weight plates.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/2/2/228x90-Orange-M3-Power-Rack-and-Extension-Bay-Storage-Poles_1.jpg	power-cages-racks	strength-equipment	0
28	{textArr: \nMirafit M100 Power Rack with Cable Pulley System\n,\nFeature packed rack with high and low cable system ideal for a wide\nrange of exercises\n,\nCable system includes straight bar and lat pull bar attachments with\ncarabiners\n,\nSolid steel full length chrome spotters provide safety when working\nout alone\n,\nJ-Cups with UHMW liners\n,\nStrong 50mm x 50mm steel frame\n,\nPowder coated finish in a choice of black or orange \n,\nSteel thickness ranges from 2mm right up to 6mm\n,\nBolt down feet for extra stability\n,\nFully adjustable j-cup and spotter positions - 17 levels\n,\n1" diameter holes spaced at 7.5cm intervals\n,\nMulti grip pull up bar allows a range of narrow and wide grip pull ups\n,\nPull up bar diameter: 32mm with matt black finish. This can be\ninstalled upside down to reduce total height of rack to 204cm (190cm\nclearance to underside of pull bar in this position)\n,\nSuitable for use with a 7ft or 6ft international barbell. Please note\nthis cage is too wide for a standard 6ft barbell\n,\nCompatible with a range of attachments (see below)\n,\nThe foot plates are pre-drilled with 11mm diameter holes but floor\nfixings are NOT included and will vary depending on your floor type.\nFor masonry floors we recommend our Floor\nFixing Kit (sold separately)\n,\nRemember: metal spotters can potentially damage barbells. For\nadditional barbell protection from spotters please see our barbell\nspotter pads.\n,\nSpecification:\n,\nTotal Height: 217cm\n,\nTotal Width: 149cm (122cm to outside of uprights)\n,\nTotal Depth: 164cm\n,\nInternal Depth: 61cm\n,\nFrame: 50mm X 50mm\n,\nNet weight: 82kg / 181lbs\n,\nBarbell Max load: 250kg\n}	Mirafit M100 Power Rack with Cable System	449.95	Get the ultimate home workout with the Mirafit M100 Power Rack with Cable System. Available in black or orange finish, this package includes the rack and cable pulley system upgrade.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/B/l/Black-Mirafit-M100-Power-Rack-and-Cable-System_1.jpg	power-cages-racks	strength-equipment	0.049
29	{textArr: \nMirafit M3 Flip-Down Safety Spotters\n,\nSuitable for the 60cm or 90cm deep M3 power rack\n,\nNot suitable for M100 or M200 series\n,\nProtective UHMW liners reduce damage to uprights\n,\nUHMW on top also reduces damage to barbells\n,\nSimply flip-down into position and secure with safety pins\n,\nEasier to install then standard pin & pipe safeties\n,\nIncludes safety locking pins to keep the spotters secure\n,\n60mm x 60mm x 3mm (11 gauge) steel box section with 8mm joint plates\n,\n17mm holes allow attachments such as resistance band pegs to be used\n,\nPlease note UHMW will become worn with use\n,\nReplacement UHMW will be available to purchase shortly\n}	Mirafit M3 UHMW Flip Down Spotters	79.95	Protect yourself and your bar with these UHMW lined Flip Down Safety spotters to fit the M3 power rack. These safeties feature UHMW protective plastic liners to reduce damage to bars and uprights. Safety pins ensure they are kept secure during use.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-M3-UHMW-Spotters-90cm.jpg	power-rack-attachments	strength-equipment	0.05
30	{textArr: Mirafit M3 Roller J-Cups ,Compatible with M3 Series Power Racks ,Roller J-Cups allow for easy centering of the barbell before unracking ,Quick adjust safety knobs lock j-cup in place and prevent it from swaying ,16mm solid steel pin ,Reinforced nylon rollers ,UHMW liners protect rack against scratching and protect barbell against damage ,Black powder coated finish ,Designed to fit our 60mm M3 racks and yokes (17mm holes ) ,Suitable for use with barbells as well as our thicker axles and safety squat bars ,Supplied in pairs ,Measurements:\n\nTotal height: 24cm \nTotal width: 7cm \nPin diameter: 1.6cm \nProtrudes from rack face: 9.5cm \nBar rest depth: 5cm \nBar rest width: 6cm \nBar rest roller diameter: 4cm ,Total height: 24cm ,Total width: 7cm ,Pin diameter: 1.6cm ,Protrudes from rack face: 9.5cm ,Bar rest depth: 5cm ,Bar rest width: 6cm ,Bar rest roller diameter: 4cm }	Mirafit M3 Roller J-Cups	79.95	Unrack perfectly every time with the Mirafit M3 Roller J-Cups. With UHMW liners these will protect your rack and barbell while making it easier to centre the bar before lifts or squats.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-M3-Roller-J-Cups.jpg	power-rack-attachments	strength-equipment	0.05
31	{textArr: Mirafit M3 Wrist Roller Rack Attachment ,For use with the Mirafit M3 Power Rack, M3 Half Rack and M3 Yoke  ,Solid steel construction ,Securing ring keeps the roller in place (includes tool) ,Adjustment pin with handle makes it simple to install, remove or change height ,UHMW liners protect rack against damage ,Available with or without the Mirafit Wrist Roller ,Measurements:\n\nTotal length: 49.5cm \nPole length: 41cm \nPole diameter: 2.5cm ,Total length: 49.5cm ,Pole length: 41cm ,Pole diameter: 2.5cm }	Mirafit M3 Wrist Roller Rack Attachment	39.95	Build your forearm strength with this Mirafit M3 Wrist Roller Rack Attachment. Compatible with the M3 Power Rack range and used with the Mirafit Wrist Roller, this attachment is perfect for working out forearm muscles and building a stronger grip.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-M3-Wrist-Roller-Rack-Attachment_2.jpg	power-rack-attachments	strength-equipment	0
32	{textArr: \nMirafit M200 Wrist Roller Rack Attachment\n,\nFor use with 60mm Mirafit M2 and M200 series power racks (not suitable\nfor M3 range)\n,\nSolid steel construction\n,\nSecuring ring keeps roller in place (includes tool)\n,\nQuick release adjustment pin - simple to install/remove and change\nheight\n,\nAvailable with or without the Mirafit\nwrist roller\n,\nMeasurements:\n\n\nTotal length: 49.5cm\n\n\nPin length: 41cm\n\n\nPin diameter: 2.5cm\n\n\n,\nTotal length: 49.5cm\n,\nPin length: 41cm\n,\nPin diameter: 2.5cm\n}	Mirafit M200 Wrist Roller Rack Attachment	24.95	Our Wrist Roller Attachment for the M200 series racks provides a simple solution for adding Wrist Roller workouts to your routine. They're easy to install and will lock the roller in position, allowing you to target wrist and forearm muscles more eff	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Wrist-Roller-Rack-Attachment_4.jpg	power-rack-attachments	strength-equipment	0
33	{textArr: Mirafit M3 Front Stabiliser Bars ,These extensions are suitable for the M3 power rack (not suitable for M200 or M100 series) ,Provides additional stability at the front of the cage and improves versatility ,Allows the use of certain front mounted attachments ,60mm x 60mm x 3mm (11 gauge) steel with 8mm joint plates ,Includes all required fixings }	Mirafit M3 Front Stabiliser Bars	69.95	Increase the stability of your M3 Power Cage with these Front Stabiliser bars. The bars fit onto the front of the rack to provide additional support & versatility.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/m/i/mirafit-m3-front-foot-stabilising-extension-bars-set.jpg	power-rack-attachments	strength-equipment	0
35	{textArr: \nMirafit M3 Power Cage Straight Pull Up Bar\n,\nSuitable for the M3 Power Rack and M3 Tall Yoke\n,\nOriginal spec with 32mm diameter, as fitted to new M3 racks\n,\nMatt black powder coated finish without knurling\n,\nCan be used as a direct replacement for the original chin up bar\nsupplied with the M3 power cage or replace the back cross-bar to have\ntwo pull up bars installed at the same time. For the yoke this must be\nused in addition to the main cross member not as a replacement.\n,\nAlso suitable for use with the M3 power rack extension kit\n,\nIncludes all required fixings\n,\nThis bar can also be used on the M220 squat rack providing your\nproduct has the holes at the top of the uprights. Note that to do this\ndifferent fixings would be required (please purchase M10 x 80 fixings).\n,\nMeasurements:\n\n\nHeight: 15cm\n\n\nWidth: 110cm\n\n\nDepth: 6cm\n\n\nBar diameter: 3.2cm\n\n\nNet weight: 4.24kg\n\n\n,\nHeight: 15cm\n,\nWidth: 110cm\n,\nDepth: 6cm\n,\nBar diameter: 3.2cm\n,\nNet weight: 4.24kg\n}	Mirafit M3 Power Rack Straight Pull Up Bar	39.95	As fitted to M3 Power Racks when new, this 32mm Straight Pull Up Bar can be used to replace the back cross-bar to have two bars installed at once or used in conjunction with an extension bay.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-M3-Power-Rack-Straight-Pull-Up-Bar.jpg	power-rack-attachments	strength-equipment	0
36	{textArr: Mirafit Multi Grip Pull Up Bar for M3 Series ,Suitable for M3 Power Rack and M3 Half Rack ,Two pairs of straight handles spaced at 20cm and 60cm centres ,Allows for a range of narrow and wide grip exercises ,32mm diameter handles ,3mm (11gauge) tubular steel construction with 8mm joint plates ,Matt black powder coated finish ,Includes all required fixings ,Measurements: ,Width: 110cm ,Height: 15cm ,Depth: 28cm ,Measurements when installed on M3 Racks: ,228cm M3 Power Rack ,226cm to the top of the pull up bar (no increase in total rack height) ,204.5cm to the bottom of the pull up bar if installed upside down ,208cm M3 Power Rack ,206cm to the top of the pull up bar (no increase in total rack height) ,184.5cm to the bottom of the pull up bar if installed upside down ,188cm M3 Power Rack ,186cm to the top of the pull up bar (no increase in total rack height) ,164.5cm to the bottom of the pull up bar if installed upside down ,233cm M3 Half Rack ,232cm to the top of the pull up bar (no increase in total rack height) ,210cm to the bottom of the pull up bar if installed upside down ,208cm M3 Half Rack ,207cm to the top of the pull up bar (no increase in total rack height) ,185cm to the bottom of the pull up bar if installed upside down }	Mirafit Multi Grip Pull Up Bar for M3 Power Rack	69.95	This multi grip pull up bar is a direct fitment for the Mirafit M3 Series rack and half rack. Multiple grip positions allow a range of wide and narrow pull up exercises to be performed. Heavy duty 11 gauge steel construction.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/m/i/mirafit-m3-multi-function-pullup-bar.jpg	power-rack-attachments	strength-equipment	0.05
37	{textArr: Mirafit M200 Series Rack Barbell Holders ,Supplied as a twin pack containing two holders ,Compatible with M200, M200S, M210 and M220 models (not suitable for M3 or M100 racks) ,Storage solution for 2" Olympic bars  ,Fits onto the cross-member on the cage ,Includes all required fixings ,Measurements: ,Inner sleeve length: 18cm ,Sleeve diameter: 5cm }	Mirafit M200 Rack Barbell Holder Twin Pack	39.95	This gym storage solution is perfect for keeping your equipment organised. These Barbell Holders fit one Olympic barbell each and install onto the cross-member of your power cage, so that your bar is always close to hand. Supplied in pairs.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-M200-Rack-Barbell-Holders_1.jpg	power-rack-attachments	strength-equipment	0.05
38	{textArr: Mirafit M200 Series Battle Rope Anchor Attachment ,Compatble with M200, M200S, M210 and M220 models (not suitable for M3 or M100 racks) ,Strong and robust design ideal for battle rope and resistance band workouts ,Can be fitted to either the rack cross-members or uprights. ,Please note for battle rope use it will need to be installed on an upright unless it is used in conjuction with our battle rope strap (due to the close proximity of the cross member to the floor) ,Includes all required fixings ,Measurements: ,Internal Loop: 8.5cm x 10cm ,Base Plate: 23cm x 5cm }	Mirafit M200 Battle Rope Anchor Attachment	24.95	Ideal for strength and cardio workouts, simply attach this Battle Rope Anchor to the M200 Series Power Racks and start training. It can be fitted to the cross-member or the upright bar.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/m/i/mirafit-m2-battle-rope-anchor-attachment.jpg	power-rack-attachments	strength-equipment	0
39	{textArr: \nMirafit Wall Mounted Pull Up Bar\n,\nMulti position grip - excellent for advanced muscle group targeting\n,\nHit multiple muscle groups with 1 piece of equipment\n,\nGloss powder coat steel\n,\nVery solid piece of equipment - built to last\n,\nIncludes wall fixings\n,\n150kg max user weight (subject to wall strength)\n,\nNOT recommended for outdoor use\n,\nPlease note: tools required for assembly are not included\n,\nDimensions -\n\n\nTotal width: 121cm\n\n\nTotal depth: 61cm\n\n\nTotal height: 47cm\n\n\nHandle bar diameter: 2.5cm\n\n\n,\nTotal width: 121cm\n,\nTotal depth: 61cm\n,\nTotal height: 47cm\n,\nHandle bar diameter: 2.5cm\n}	Mirafit Multi Grip Wall Mounted Pull Up Bar	89.95	Take your strength training to the next level using our Multi Grip Pull Up Bars. They're wall mounted and allow you to work out at home and perfect your technique as you go. Vary your grip to target different areas and get a complete workout.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/m/i/mirafit-black-and-orange-multi-grip-pull-up-bar.jpg	pull-up-bars	strength-equipment	0.048
40	{textArr: \nMirafit Straight Grip Pull Up Bar\n,\nChoice of colour: orange or black\n,\nTwo adjustable positions - place bar at either 33.5cm or 53.5cm from\nwall\n,\nPlease note this is not designed for kipping pull ups as distance from\nwall is not enough\n,\n32mm grip diameter\n,\nOpen ended design allows for linking multiple brackets when using a\nsuitable 1"/1.25" pipe\n,\n150kg max. User weight (subject to wall strength)\n,\nStandard wall fixings included\n,\nDimensions:\n\n\nHeight: 58cm\n\n\nDepth: 61cm\n\n\nBar length: 133cm\n\n\n,\nHeight: 58cm\n,\nDepth: 61cm\n,\nBar length: 133cm\n,\nPlease note tools required for assembly are not included\n}	Mirafit Wall Mounted Pull Up Bar	79.95	Intensify your workout using our Wall Mounted Pull Up Bars. With two adjustable positions, the bar can be adapted to your home or gym environment easily. Available in orange or black. 	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/o/r/orange-mirafit-m3-wall-mounted-pull-up-bar.jpg	pull-up-bars	strength-equipment	0.05
41	{textArr: \nMirafit Ceiling Mounted Pull Up Bar\n,\n3 position - perfect for pull ups & chin ups\n,\nHit multiple muscle groups with 1 piece of equipment\n,\n32mm main cross bar\n,\n25mm handles\n,\nIncludes fixings\n,\nPlease note: tools required for assembly are not included.\n,\nDimensions -\n\n\nWide grip bar width - 97.5cm\n\n\nNarrow handle width - 33cm\n\n\nMedium handle width - 60cm\n\n\nOuter mounting holes - 63.5cm apart\n\n\nInner mounting holes - 49.5cm apart\n\n\nMounting holes front to back - 17cm\n\n\nHeight - 39.5cm (bar)/45.5cm (curved bar ends)\n\n\nMounting plate - 19.5cm X 9.5cm\n\n\nDistance between mounting plates - 47cm\n\n\n,\nWide grip bar width - 97.5cm\n,\nNarrow handle width - 33cm\n,\nMedium handle width - 60cm\n,\nOuter mounting holes - 63.5cm apart\n,\nInner mounting holes - 49.5cm apart\n,\nMounting holes front to back - 17cm\n,\nHeight - 39.5cm (bar)/45.5cm (curved bar ends)\n,\nMounting plate - 19.5cm X 9.5cm\n,\nDistance between mounting plates - 47cm\n}	Mirafit M1 3 Position Ceiling Pull Up Bar	49.95	Our Ceiling Mounted Pull Up Bars are exactly what you need to train regularly at home. They're challenging and excellent for building your back, shoulders and biceps. Use to perfect your form as well as strengthen your grip. 	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-M1-3-Position-Orange-Ceiling-Pull-Up-Bar.jpg	pull-up-bars	strength-equipment	0.044000000000000004
42	{textArr: \nMirafit Pillar Pull Up Grips\n,\nChoice of grip diameter:\n\n\n32mm\n\n\n48mm\n\n\n,\n32mm\n,\n48mm\n,\nSupplied in pairs\n,\nCan be attached to suitable pull up bars or used with shackles,\nkettlebells or barbells to create a challenging grip workout\n,\nPillar shape creates a tough grip setup to build hand strength\n,\nGreat tool for improving grip for weightlifting, bouldering and rock\nclimbing\n,\nStrong 38mm x 300mm triple stitched strap with logo\n,\n15cm steel tubes with solid steel hoops\n,\nMatt black powder coated finish\n,\nIncludes black steel carabiners\n}	Mirafit Pillar Pull Up Grips	24.95	Our Pillar Pull Up Grips are great for developing your grip strength and arm muscles. Supplied in pairs with a choice of grip diameter these connect to a suitable pull up bars or shackles for a touch upper body workout.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/3/2/32mm-and-48mm-Mirafit-Pillar-Pull-Up-Grips-on-White-Background-.jpg	pull-up-bars	strength-equipment	0.05
43	{textArr: \nMirafit Ball Pull Up Grips\n,\nChoice of grip diameter:\n\n\n75mm\n\n\n120mm\n\n\n,\n75mm\n,\n120mm\n,\nSupplied in pairs\n,\nCan be attached to suitable pull up bars or used with shackles,\nkettlebells or barbells to create a challenging grip workout\n,\nRound cannonball shape allows you to target grip strength whilst\nperforming a range of exercises\n,\nGreat tool for improving grip for weightlifting, bouldering and rock\nclimbing\n,\n3mm (11 gauge) steel balls\n,\n8mm solid steel connection plate\n,\nPre-drilled hole for carabiner connection\n,\nStrong 38mm x 300mm triple stitched strap with logo\n,\nIncludes black steel carabiners\n,\nMatt black powder coated finish\n}	Mirafit Ball Pull Up Grips	24.95	These Mirafit Balll Pull Up Grips are perfect for improving your grip strength for weightlifting, bouldering and rock climbing. Supplied in pairs these come in a choice of grip diameter .	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/7/5/75mm-and-120mm-Mirafit-Cannonball-Pull-Up-Grips-on-White-Background-.jpg	pull-up-bars	strength-equipment	0
44	{textArr: \nMirafit Climbing Peg Board\n,\nIncludes two dowel peg handles\n,\nPeg board training targets your upper body and grip strength\n,\nGreat for perfecting dead hangs, single arm hangs and pull up holds\n,\nDevelop your lock off strength and engage your lats with staggered\npull ups and weight shifts\n,\nCan be wall-mounted either vertically and horizontally\n,\nPosition multiple boards side by side to create desired climbing\nlengths\n,\nThick 39mm plywood construction with a clear coat lacquered finish\n,\nStandard wall fixings included\n,\nMeasurements: 124cm x 30cm\n}	Mirafit Climbing Peg Board	69.95	Perform climbing exercises at home using our wooden Peg Boards for training. Available in a range of sizes, each board is suitable for wall mounting and comes with two dowel peg handles. Climbing holes are 3.9cm deep for a secure hold.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/3/0/30x124cm-Mirafit-Climbing-Peg-Board_1.jpg	pull-up-bars	strength-equipment	0.047
45	{textArr: Mirafit Peg Board Dowel Handles ,Set of two ,Ideal for replacing lost or damaged handles ,Chamfered edge provides a comfortable, secure grip ,Solid beech wood construction with a clear coat lacquer finish ,Suitable for all Mirafit peg boards ,Measurements:\n\nTotal length: 16.5cm \nDiameter: 3cm ,Total length: 16.5cm ,Diameter: 3cm }	Mirafit Peg Board Dowel Handles	9.95	Our wooden Dowel Handles are suitable for any Mirafit Climbing Peg Board. Sold in pairs, each peg is 16.5cm long and has a grip diameter of 3cm.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/m/i/mirafit-peg-board-dowel-handles.jpg	pull-up-bars	strength-equipment	0
46	{textArr: Mirafit Peg Board Ball Handles ,Set of two ,Large spherical design intensifies workouts ,Target grip and finger strength ,Solid beech wood construction with a clear coat lacquer finish ,Suitable for all mirafit peg boards ,Measurements:\n\nTotal length: 12.5cm \nBall diameter: 6.3cm \nPeg diameter: 3cm ,Total length: 12.5cm ,Ball diameter: 6.3cm ,Peg diameter: 3cm }	Mirafit Peg Board Ball Handles	12.95	Intensify your upper body workout and improve your grip strength using our Peg Board Ball Handles. Suitable for any Mirafit Climbing Peg Board, each handle has a 6.3cm diameter ball grip for challenging your hand and finger strength.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/m/i/mirafit-peg-board-ball-handles.jpg	pull-up-bars	strength-equipment	0
47	{textArr: Mirafit M4 Multi Ball Pull Up Bar ,Attaches to the side bracing of the M4 Power Rack ,Features straight grips, angled grips and ball grips ,32mm diameter pull up bar handles ,2 x 76mm diameter ball grips ,2 x 100mm diameter ball grips ,Suitable for performing wide, narrow, neutral, pronated and supinated pull ups ,Includes all required fixings ,Measurements:\n\nTotal width: 121cm \nTotal depth: 38cm \nTotal height: 10cm ,Total width: 121cm ,Total depth: 38cm ,Total height: 10cm }	Mirafit M4 Multi Ball Pull Up Bar	129.95	Get a new workout every time with this Mirafit M4 Multi Ball Pull Up Bar. This bar can accomodate five grip styles and has multiple diameters, allowing you to perform many different pull up variations.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-M4-Multi-Ball-Pull-Up-Bar.jpg	pull-up-bars	strength-equipment	0
167	{textArr: Mirafit PU Kick Pad ,Large surface area allows for a variety of kick placements ,Self fastening straps for quick transitions during training ,Durable core able to withstand hard impacts ,Easy slip-on design ,One size fits all ,Improves coordination and kicking technique ,Orange and black polyurethane cover ,Suitable for home use. Not recommended for commercial use ,Matching punch pads available here }	Mirafit PU Kick Pad	22.95	Improve your kickboxing skills with this Mirafit Polyurethane Kick Pad. One size fits all, this PU kick shield is easy to adjust and remove during training sessions and has a durable core to withstand hard kicks.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-PU-Kick-Pad.jpg	boxing-equipment	conditioning	0
48	{textArr: Pro Suspension Trainer Set ,Use your own bodyweight as resistance and strengthen the whole body, whilst building muscle and burning unwanted fat. ,Suspension Training increases flexibility and endurance and helps to develop and maintain a strong core. ,Workout indoors or outdoors with anchor/door strap ,Easy adjust jam-free buckles ,Independently load tested to over 450kg (1000lb) ,Maximum user weight: 125kg ,High strength polyester webbing with industrial bartack stitching. ,Unique steel T-fastener buckles allow for quick adjustment of the Apex style straps, which adjust from 1.2m to 2.5m (excl. Anchor Strap) to suit users of varying sizes and abilities. ,The Apex straps attach to the 1.25m anchor strap to offer 5 different attachment points, when used with the integral door jam or when clipped to a wall anchor eyelet (not included) ,Alternatively, the anchor strap can be wrapped around a suitable tree or secure object with a circumference of up to 1.1m for complete flexibility on where you workout ,Quality ABS hand grips with integrated foot cradles, for use in ground-based exercises, allow you to work out the whole body. ,Includes mesh carry bag ,Safety Information:\n\nAs this equipment can be used in a variety of environments, including the outdoors, always check for wear and tear before use and replace if there are any signs of damage. \nAlways check that the item you attach the anchor strap to is suitably strong to support your dynamic weight before working out. ,As this equipment can be used in a variety of environments, including the outdoors, always check for wear and tear before use and replace if there are any signs of damage. ,Always check that the item you attach the anchor strap to is suitably strong to support your dynamic weight before working out. }	Pro Suspension Trainer Set	59.95	Train anywhere with this Pro Suspension Trainer Set. Increases flexibility, resistance and strength.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/S/u/Suspension-Trainer.jpg	pull-up-bars	strength-equipment	0.05
49	{textArr: Mirafit M3 Fat Grip Pull Up Bar ,Suitable for the M3 Power Rack and M3 Tall Yoke ,Large 50mm diameter challenges grip strength ,Matt black powder coated finish without knurling ,Can be used as a direct replacement for the original chin up bar supplied with the M3 power cage or replace the back cross-bar to have two pull up bars installed at the same time. For the yoke this must be used in addition to the main cross member not as a replacement. ,Also suitable for use with the M3 power rack extension kit  ,Includes all required fixings ,Measurements:\n\nHeight: 15cm \nWidth: 110cm \nDepth: 6cm \nBar diameter: 5cm \nNet weight: 5.72kg ,Height: 15cm ,Width: 110cm ,Depth: 6cm ,Bar diameter: 5cm ,Net weight: 5.72kg }	Mirafit M3 Power Rack Fat Grip Pull Up Bar	39.95	For increased grip, wrist and forearm strength, swap out the original chin up bar supplied with our M3 Power Rack with this M3 Fat Grip Pull Up Bar. It can also replace the back cross-bar to have one standard bar & one thick bar installed on the rack	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-M3-Power-Cage-Fat-Grip-Pull-Up-Bar.jpg	pull-up-bars	strength-equipment	0.05
50	{textArr: \nMirafit Adjustable Sit Up Bench\n,\nPerform situp exercises, crunches, russian twists and leg raises\n,\nAdjustable board suitable for various difficulty levels\n,\nAngle adjusts through 12 height positions\n,\nQuick release adjustment knob\n,\nEasily remove upright bar for storage\n,\nThick, padded backrest cushion, knee and foot rests\n,\nAll pads are wipe clean \n,\nCentre grab handle\n,\nRear wheels allow for easy movement\n,\nStrong steel construction with powder coated finish\n,\nMaximum user weight: 150kg\n,\nMeasurements: see measurements image\n,\nPlease note: tools required for assembly are not included\n}	Mirafit Sit Up Bench	129.95	This Sit Up Bench is ideal for intensifying your core workout so you can build strength across your abs. Adjust the board angle though 12 height levels to target different areas of your core. Ideal for both strength and definition.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/m/i/mirafit-sit-up-bench-black-orange.jpg	situp-benches	strength-equipment	0.05
51	{textArr: \nMirafit GHD Machine\n,\nGlute hamstring developer bench with new improved design\n,\nPerfect for glute-ham raises and crunches\n,\nThe GHD bench can also be used for reverse hyper, back\nextensions, Russian twists and more making it one of the most\neffective machines available for training the core and posterior chain\n,\nBuilt in resistance band pegs allow for increased progression\n,\nBand pegs also double as handles for moving the machine around using\nwheels fitted at the rear\n,\nMultiple height and length adjustments ensure the machine can be setup\ncorrectly for different users and exercises \n,\nSmooth sliding mechanism with quick release pins for easy adjustment\n,\nAdditional locking knobs for extra security once the correct position\nis found\n,\nAnti-slip foot plate with laser Mirafit emblem\n,\nThick, comfort shaped pads with durable, wipe clean vinyl covers\n,\nStrong, steel construction with powder coated finish\n,\nPre-drilled foot plates allow machine to easily be bolted down in\nfixed installations\n,\nIdeal GHD machine for home gyms and personal trainers\n,\nNet weight approx 68.4kg / 151lbs\n,\nMeasurements:\n,\nHeight: 110 - 136cm\n,\nWidth: 83cm\n,\nDepth: 178cm\n}	Mirafit GHD Machine	549.95	The glute ham developer - also known as the GHD - is perfect for glute-ham raises, crunches and back extensions. Our GHD Machine comes with built in resistance band pegs which allow for increased progression and thick, comfort shaped pads.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-GHD-Machine_1.jpg	situp-benches	strength-equipment	0.05
52	{textArr: Mirafit Under Door Sit Up Bar ,Work out ABS & stomach muscles ,3 heights levels - simply unscrew the wing nut & move up or down to desired height ,Padded foot rests for comfort ,Simply slides under the door & tightens on ,Foam pads protect door when fitted ,Dimensions -\n\nTotal width - 25cm \nFoot rest width - 9.5cm \nDepth - 23cm \nHeight - 19cm ,Total width - 25cm ,Foot rest width - 9.5cm ,Depth - 23cm ,Height - 19cm }	Mirafit Under Door Sit Up Bar	9.95	Our Sit Up Bars keep your feet firmly in place while you work your core. They're easy to secure and are perfect for both home and garage gyms. Each bar has three adjustable heights to help ensure a bespoke fit.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/m/i/mirafit-under-door-sit-up-bar.jpg	situp-benches	strength-equipment	0.05
53	{textArr: \nMirafit Ab Trainer Exercise Mat\n,\nFold out panel provides additional comfort & support\n,\nHelps target core & ab muscles\n,\nEnables full range of motion to work your entire abdominal muscle group\n,\nContoured design fits the natural curve of your back to provide\nsupport during training\n,\nIsolates upper abs, lower ABS & lower back muscles\n,\nFirm foam cushion\n,\nDurable PU leather cover\n,\nEasily wipes clean\n,\nFolded dimensions -\n\n\nHeight: 9cm\n\n\nWidth: 30.5cm\n\n\nDepth: 36cm\n\n\n,\nHeight: 9cm\n,\nWidth: 30.5cm\n,\nDepth: 36cm\n,\nFold out dimensions -\n\n\nHeight: 7cm\n\n\nWidth: 30.5cm\n\n\nDepth: 72\n\n\n,\nHeight: 7cm\n,\nWidth: 30.5cm\n,\nDepth: 72\n}	Mirafit Ab Trainer Pad Fold Out Exercise Mat	16.95	Our Fold Out Ab Trainer Exercise Mats support while allowing you to fully extend your ab muscles for optimised training. Protect your spine and take the strain out of your gain while you build up your core strength with precision.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Ab-Trainer-Fold-Out-Exercise-Mat-Orange.jpg	situp-benches	strength-equipment	0.05
54	{textArr: Mirafit Ab Pad Exercise Wedge Mat ,Helps target core & ab muscles ,Enables full range of motion to work your entire abdominal muscle group ,Contoured design fits the natural curve of the back to provide support during training ,30 degree sloped end ,Isolates upper abs, lower ABS & lower back muscles ,Perfect training aid ,Firm foam cushion ,Durable PU leather material - wipe clean ,One size fits all ,Dimensions -\n\nLength - 365mm \nWidth - 310mm \nHeight - 75mm ,Length - 365mm ,Width - 310mm ,Height - 75mm }	Mirafit Ab Pad Mat - Black	14.95	Working your core muscles is vital for stability and balance. Our Padded Ab Mats allow you to fully extend your core while providing support to help you perform high intensity core muscle workouts. Perfect for using at home or at the gym.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/m/i/mirafit-black-ab-pad-mat.jpg	situp-benches	strength-equipment	0.047
55	{textArr: Mirafit M130 Adjustable Squat & Bench Press Rack ,Latest design with improved frame and extra spotter positions ,Ideal for squat and bench press workouts at home ,Suitable for both upper and lower body workouts ,Adjustable spotter bars catch the weight bar for a fail-safe workout ,Fully adjustable – adjust rack width, height and spotter height ,13 barbell rack levels at 2" intervals ,11 spotter levels at 1" intervals ,10 width settings allowing different size bars to be used ,Narrow position helps reduce foot print when not in use ,Foot caps protect against floor damage and improve stability ,Rear weight storage poles for convenient weight storage ,Powder coated steel frame in a black and orange design ,Includes rubber barbell rest liners to help prevent barbell damage ,Quick and easy assembly ,Assembly requires 2 x 17mm spanners (not included) ,Measurements: ,Total width: 78cm - 123cm ,Total height: 103cm - 158cm ,Spotter height: 62cm - 87cm ,Depth: 97cm ,Storage pole length: 21cm }	Mirafit M130 Adjustable Squat & Bench Press Rack	149.95	The M130 Rack is ideal for performing squats and bench press exercises. The fully adjustable design has 13 barbell heights and 10 width positions. With built in spotters and weight storage the rack provides a great, versatile solution for home gyms.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/m/i/mirafit-m130-squat-rack-with-adjustable-spotters.jpg	squat-racks-stands	strength-equipment	0.047
56	{textArr: \nMirafit M220 Squat Rack\n,\nChoice of colour:\n\n\nBlack\n\n\nOrange\n\n\n,\nBlack\n,\nOrange\n,\nIdeal stand for squats and bench press exercises at home\n,\nOptional spotters provide additional safety when working out\n,\nIncludes J-Cups with UHMW liners\n,\nStrong 60mm x 60mm steel construction\n,\n6mm thick steel brace plates\n,\nFully adjustable - Now with 16 levels\n,\n1" diameter holes spaced at 8cm intervals\n,\nBolt down design provides extra stability\n,\nPowder coated finish with printed Mirafit logos\n,\nSuitable for use with a 7ft or 6ft international barbell. Please note\nthis rack is too wide for a standard 6ft barbell\n,\nCompatible with various M200 series attachments (see below)\n,\nSpecification:\n,\nHeight: 183cm\n,\nWidth: 132cm (122cm to outside of uprights)\n,\nDepth: 141cm\n,\nFrame: 60mm x 60mm\n,\nNet weight: 39.4kg / 87lbs (exc spotters)\n,\nThe foot plates are pre-drilled with 11mm diameter holes but floor\nfixings are NOT included and will vary depending on your floor type.\nFor masonry floors we recommend our Floor\nFixing Kit (sold separately)\n}	Mirafit M220 Squat Rack	149.95	Our M220 Squat Rack is perfect for training at home. Master compound lifts including squats and bench presses with the adjustable height J-Cups. Bolt down design provides extra security and stability. Compatible with a range of accessories.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Black-M220-Squat-Rack-with-Spotters-and-swatch.jpg	squat-racks-stands	strength-equipment	0.048
57	{textArr: \nMirafit M230 Squat and Bench Press Rack\n,\nAvailable in a choice of colour: black or orange\n,\n60mm x 60mm powder coated steel frame\n,\nAdjustable barbell rest and spotter heights enable different\nexercises and correct positioning\n,\n13 barbell rack levels at 2" intervals\n,\n13 spotter levels at 1" intervals\n,\nBarbell rests and spotters are UHMW lined to protect both your rack\nand barbells\n,\nOlympic 2" weight storage poles at the rear of the stand provide\nconvenient weight plate storage \n,\nSupplied with floor fixing brackets\n,\nSuitable for use with either a 7ft barbell or a 6ft international\nbarbell. Not suitable for use with 6ft standard barbells or smaller\n,\nMeasurements:\n\n\nTotal depth: 98cm\n\n\nTotal height at full extension: 167cm\n\n\nTotal width including floor fixing brackets: 133cm\n\n\nTotal width excluding floor fixing brackets: 120cm\n\n\nStorage pole length: 20cm\n\n\n,\nTotal depth: 98cm\n,\nTotal height at full extension: 167cm\n,\nTotal width including floor fixing brackets: 133cm\n,\nTotal width excluding floor fixing brackets: 120cm\n,\nStorage pole length: 20cm\n,\nSpotters:\n\n\nLowest height at which bar can be placed: 62.5cm\n\n\nHighest height at which bar can be placed: 92.5cm\n\n\n,\nLowest height at which bar can be placed: 62.5cm\n,\nHighest height at which bar can be placed: 92.5cm\n,\nBar rests:\n\n\nLowest height at which bar can be placed: 92.5cm\n\n\nHighest height at which bar can be placed: 152.5cm\n\n\n,\nLowest height at which bar can be placed: 92.5cm\n,\nHighest height at which bar can be placed: 152.5cm\n}	Mirafit M230 Squat and Bench Press Rack	249.95	The M230 Squat and Bench Press Rack will give you a huge range of training options and enable you to build up your compound lifts with confidence. With two colour variations available, the rack is the perfect centrepiece for your home gym.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-M230-Squat-Bench-Press-Rack-Black_1.jpg	squat-racks-stands	strength-equipment	0.049
58	{textArr: \nMirafit M3 Squat Stands\n,\nFreestanding utility squat stands\n,\nIndependent stands with a compact footprint\n,\nEasily stored away when not in use\n,\nIdeal for gyms, studios and facilities where space is limited\n,\nAlso provides a great solution for home and garage gyms\n,\nRubber feet protect floors and improve stability\n,\nStrong 60mm x 60mm x 3mm (11 gauge) steel construction with heavy\nduty reinforcement plates\n,\nJ-cup barbell rests with UHMW liners to prevent barbell damage\n,\n17mm hole size on uprights\n,\nFully adjustable height with 2 inch spacing and 1 inch through the\nbench zone\n,\nLaser-cut number markings for easy height identification at 5 hole\nintervals\n,\nChoice of black or orange powder coated finish\n,\nNote: this product is not suitable for use with spotters or dip bars \n,\nMeasurements:\n,\nTotal Height: 183cm\n,\nTotal Width: 57cm\n,\nDepth: 65cm\n,\nNet weight (per stand): approx. 27.2kg\n}	Mirafit M3 Squat Stands	249.95	Build strength and muscle with the Mirafit M3 Squat Stands. These freestanding independent stands have a compact footprint making them ideal for gyms and facilities with limited space. Strong 11 gauge steel construction. Includes UHMW lined J-cups.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafir-M3-Squat-Rack-Orange.jpg	squat-racks-stands	strength-equipment	0.045
64	{textArr: Mirafit M3 Preacher Curl Bench ,Our new preacher bench is stronger and heavier than our entry model and features a thick, padded cushion and nylon protection on the bar catcher ,Preacher benches are ideal for isolating and growing bicep muscles  ,Suitable for use with weight bars or dumbbells for various arm curl exercises ,Nylon liners on bar catchers avoid metal on metal contact, protecting bars against damage ,Adjustable seat pad with four height increments ,Anti-slip fabric on seat and arm rest pads with thick padded foam ,Durable PVC feet protect flooring from scratches ,Powder coated finish ,Max user weight: 150kg ,Measurements: ,Total height: 88cm ,Total depth: 101cm ,Total width: 81cm ,Seat height: 41.5cm - 53cm ,Pad width: 59cm }	Mirafit M3 Preacher Curl Bench	299.95	With an adjustable seat height, this Mirafit Preacher Curl Bench is suitable for a wide range of users and is ideal for isolating bicep muscles. A great piece of equipment for any gym and with nylon liners in the bar area to protect bars from damage.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Preacher-Curl_1.jpg	weight-benches	strength-equipment	0.045
59	{textArr: \nMirafit M4 Squat Rack \n,\nOur most heavy duty squat stand\n,\nSuitable for home or commercial use\n,\nJ-cup barbell rests with nylon liners to prevent barbell damage\n,\nOptional safety spotters also available\n,\nSuitable for a range of exercises including squats and bench press\n,\nBarbell rests feature nylon inner liners to protect the rack from\nscratching\n,\nSturdy 75mm x 75mm x 3mm steel frame with 10mm thick connection plates\n,\nWest side hole spacing enables a more precise height for spotters and\nbar rests with 1 inch spacing through the bench press area and 2 inch\nthroughout - great for users of any stature\n,\nLaser cut number markings at 5 hole intervals make it easy to\ncalculate the heights of attachments\n,\n17.5mm hole size is compatible with a range of M4 attachments\n,\nDurable PVC foot caps protect flooring from damage\n,\nGrade 8.8 M16 bolts throughout\n,\nPowder coated finish in black or orange colour\n,\nSuitable for use with a 7ft or a 6ft international barbell. Please\nnote that this rack is too wide for a standard 6ft barbell\n,\nA floor fixing kit is available\nhere should you wish to bolt the rack down\n,\nNet weight (exc spotters): 69.2kg / 153 lbs\n,\nNet weight (inc spotters): 87kg / 192lbs\n,\nMeasurements:\n,\nHeight: 182cm\n,\nWidth: 127cm (122cm to outside of uprights)\n,\nDepth: 140cm\n,\nFrame: 75mm x 75mm \n}	Mirafit M4 Squat Rack	399.95	Take your squat and bench press workout to the next level with the Mirafit M4 Squat Rack. This heavy duty stand features westside hole spacing for precision adjustment and includes J-Cups with nylon liners. Optional safety spotters are also available	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-M4-Squat-Rack.jpg	squat-racks-stands	strength-equipment	0
60	{textArr: \nMirafit Starter Squat Rack Package\n,\nIncludes squat rack with 7ft Olympic barbell, spring collars and 50kg\nof black bumper plates\n,\nBar weighs 17kg giving a total of combined max of 67kg with the\nincluded weights. Additional weight plates can also be purchased\nhere.\n,\nFully adjustable rack - adjust rack width and height\n,\nSimply loosen adjusting pins and select desired position\n,\nIdeal for squats at home\n,\nBuilt in fixed height spotters (not adjustable)\n,\nIncludes 7ft chrome Olympic barbell with spring collars\n,\n13 rack height levels (5cm gaps) suitable for a wide range of user\nheights\n,\n10 width positions (5cm gaps)\n,\nNarrow position helps reduce foot print when not in use\n,\nFoot caps protect against floor damage and help improve stability\n,\nRubber barbell rest liners help prevent barbell damage\n,\nIncludes 50kg of bumper plates (2 x 5kg bumper plates, 4 x 10kg bumper\nplates)\n,\nOur classic bumpers are made from solid rubber with a stainless steel\ncentre ring\n,\nQuick and easy assembly - ideal setup for beginners looking to\nstart working out at home\n,\nBar is 218cm long with a 28mm grip diameter \n,\nRack Measurements:\n,\nTotal width: 78cm - 123cm\n,\nTotal height: 103cm - 158cm\n,\nSpotter height: 76cm\n,\nDepth: 66cm\n,\nPlease note tools required for assembly are not included \n}	Mirafit Squat Rack With Barbell and Weights	399.95	Our starter squat rack package has everything you need to get squatting with a fully adjustable rack, 7ft Olympic barbell with collars and 50kg of our classic black bumper plate weights. Height adjusts to suit different user heights.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-M1-Squat-Rack-With-7ft-Barbell-and-60KG-Bumper-Plates.jpg	squat-racks-stands	strength-equipment	0.049
61	{textArr: \nMirafit Squat Box\n,\nImproved Gen II model offers:\n,\nImproved platform with padded cushion for added comfort\n,\nIncreased range of height adjustment with more levels\n,\nRubber Mirafit emblem foot caps\n,\nSeven adjustable height levels\n,\nQuick release adjustment knobs\n,\nSecondary knobs and pins for extra stability and security\n,\nLarge padded cushion with wipe clean vinyl cover\n,\nHelps teach and maintain accurate squatting technique\n,\nBox squats help development of the posterior chain muscles\n,\nMeasurements:\n\n\nHeight: 34cm (lowest position) / 46.5cm (highest position)\n\n\nSeat width: 46cm\n\n\nBase width: 56cm\n\n\nBase depth: 58cm\n\n\n,\nHeight: 34cm (lowest position) / 46.5cm (highest position)\n,\nSeat width: 46cm\n,\nBase width: 56cm\n,\nBase depth: 58cm\n}	Mirafit Squat Box	89.95	If you're looking for improved squat depth, our latest Squat Box is the perfect training partner. Along with a large padded seat for comfort and grippy rubber foot caps, the design now boasts seven adjustable heights to help you progress.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Orange-Gen-II-Squat-Box_2.jpg	squat-racks-stands	strength-equipment	0.05
62	{textArr: Mirafit M2 Flat Weight Bench ,Latest generation M2 series utility gym bench ,Ideal for a range of strength training exercises ,Use with dumbbells to workout chest, back & arm muscles ,Can be used with any Mirafit squat or power rack ,Suitable for use in home gyms, garage gyms and personal training studios ,Powder coated finish in a choice of black or orange colour ,Strong 60mm x 60mm x 3mm (11 gauge) steel frame ,Comfortable 70mm thick pad with anti slip fabric ,Mirafit emblem foot caps  ,Easy to assemble. Instructions included. ,Assembly requires 2 x 17mm spanners (not included) ,Bench net weight: 23kg ,Bench measurements: ,Length: 123cm ,Width: 47.5cm ,Height: 43cm ,Pad measurements: ,Length: 123cm ,Width 30cm ,Height 7cm }	Mirafit M2 Flat Weight Bench	119.95	Our latest M2 Series Flat Weight Bench features a comfortable anti slip pad and strong 60mm x 60mm steel frame. The M240 bench is simple to assemble and ideal for use in home gyms and personal training studios. Available in black or orange.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-M20-Flat-Weight-Bench-Orange.jpg	weight-benches	strength-equipment	0.047
63	{textArr: Mirafit FID Weight Bench and Hex Dumbbells ,Package includes adjustable weight bench with a pair of 5kg hex dumbbells and a pair of 10kg hex dumbbells ,Durable black rubber weights with knurling on handles for extra grip ,Hex shape stops the dumbbells rolling away when placed on the floor ,Fully adjustable bench - 7 backrest angles & 4 seat angles - flat, decline & incline positions ,Perform a wide range of dumbbell exercises by adjusting the backrest and seat angles ,Bench includes a handle and wheels on the back for easy movement ,Comfortable, wipe clean backrest and seat pads ,Easy to assemble (please note tools are not included) ,Additional hex weights are also available here ,Weight Bench Measurements:\n\nLength: 173cm \nWidth: 56.5cm \nHeight: 46cm to 128.5cm \nCushion thickness: 7cm \n,Length: 173cm ,Width: 56.5cm ,Height: 46cm to 128.5cm ,Cushion thickness: 7cm }	Mirafit FID Weight Bench & Hex Dumbbells	229.95	This package includes the Mirafit FID Weight Bench plus two pairs of our popular hex dumbbells. The fully adjustable bench allows a wide range of flat, incline and decline exercises to be performed.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-M2-Adjustable-FID-Weight-Bench-and-Hex-Dumbbells-kit_1.jpg	weight-benches	strength-equipment	0.05
65	{textArr: Mirafit M1 Preacher Curl Bench ,Entry level preacher bench designed for barbell/dumbbell curling exercises ,Adjustable pad height - 7 height options ,Built in castors for easy movement ,Strong black power coated steel frame ,Easy to assemble - includes instructions ,Ideal for home and garage gyms.Not suitable for commercial use. ,Max user weight 130kg ,Max bar holder weight 120kg ,Please note: tools required for assembly are not included. ,Dimensions -\n\nLength - 98cm \nWidth - 71cm \nTotal height - 81cm to 94cm \nSeat height - 45cm \nBarbell rest height 53cm ,Length - 98cm ,Width - 71cm ,Total height - 81cm to 94cm ,Seat height - 45cm ,Barbell rest height 53cm }	Mirafit M1 Preacher Curl Bench	129.95	Our M1 Preacher Benches are ideal for helping your build bigger, more defined arms. Each bench features a padded seat and angled rest to help you isolate your biceps and perfect your form. Great for adding to your gym bench collection.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-M2-Preacher-Curl-Bench.jpg	weight-benches	strength-equipment	0.040999999999999995
66	{textArr: \nMirafit Folding Weight Bench\n,\nEntry level gym bench with a compact foldable design that easily\nstores away\n,\nIdeal for working out at home or where space is limited\n,\nAdjustable angle allows flat and incline dumbbell exercises - four\npositions\n,\nLadder rail keeps backrest secure and improves stability\n,\nQuickly folds away for easy storage - simply remove locking pin and\nfold legs\n,\nPadded cushions provide excellent comfort and easily wipe clean after\nworkouts\n,\nPlastic foot caps protect flooring and help keep bench in position\n,\nDurable steel frame with black powder coated finish\n,\nDesign has been load tested to 200kg\n,\nQuick and easy assembly\n,\nCompatible with wall\nhanger available here\n,\nMeasurements:\n,\nAssembled: 114cm x 42cm x 42cm (to 111cm tall)\n,\nFolded: 112cm x 42cm x 22cm\n,\nPlease note tools required for assembly are not included. Assembly\nwill require M6, M8 and M10 spanners. Click\nhere for our tool set which includes these.\n}	Mirafit Folding Weight Bench	89.95	Our entry level bench has an adjustable backrest allowing for both flat and incline exercises. The simple foldable design can store away in seconds making this an ideal first bench for working out at home.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-White-M1-Folding-Weight-Bench-on-White-Background.jpg	weight-benches	strength-equipment	0.045
67	{textArr: Mirafit Fully Adjustable FID Weight Bench ,Built in handle & castors for easy movement ,Fully adjustable - 7 backrest angles & 4 seat angles - flat, decline & incline positions ,Home gym bench perfect for dumbbell workouts, bench presses and various other exercises,Adjustable leg/foot holder - allows bench to be used for crunches & sit ups ,Extra thick comfortable black padded cushions ,7cm x 5cm steel frame ,Black powder coated finish ,Easy to assemble - instruction manual included ,Tested to 300kg total ,Not suitable for commercial use,Dimensions:\n\nLength: 173cm \nWidth: 56.5cm \nHeight: 46cm to 128.5cm \nCushion thickness: 7cm ,Length: 173cm ,Width: 56.5cm ,Height: 46cm to 128.5cm ,Cushion thickness: 7cm }	Mirafit FID Adjustable Weight Bench	149.95	Our FID home weight bench is fully adjustable with flat, incline and decline positions. Ideal for dumbbell workouts, the bench allows multiple exercises through a range of backrest and seat pad angles.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/b/l/black-mirafit-m2-adjustable-fid-weight-bench.jpg	weight-benches	strength-equipment	0.047
68	{textArr: \nMirafit M150 Adjustable Weight Bench\n,\nOur M2 bench has evolved and is now the M150\n,\nUpgraded model with wider base and improved frame design\n,\nFully adjustable - 6 backrest angles and 4 seat angles\n,\nBuilt in handle and castors for easy movement\n,\nPerfect for dumbbell exercises, bench presses etc\n,\nExtra thick comfortable black padded cushions\n,\nGap between backrest and seat pads when flat is approx 5.5cm\n,\nStrong steel frame with 7cm x 5cm tubing\n,\nEasy to assemble - instruction manual included\n,\nAssembly requires 14mm, 17mm, 19mm and adjustable spanners (tools not\nincluded)\n,\nTested to 260kg total\n,\nMeasurements:\n\n\nLength: 127cm\n\n\nWidth: 60cm\n\n\nHeight: 44cm (flat) to 120cm (highest position)\n\n\nCushion thickness: 6cm\n\n\n\n\n,\nLength: 127cm\n,\nWidth: 60cm\n,\nHeight: 44cm (flat) to 120cm (highest position)\n,\nCushion thickness: 6cm\n}	Mirafit M150 Adjustable Weight Bench	149.95	Our M2 Adjustable Weight Bench has evolved and is now the M150 . With six backrest positions and four angled seat positions, this flat and incline bench is ideal for home gyms.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-M150-Weight-Bench-Orange_1.jpg	weight-benches	strength-equipment	0.047
69	{textArr: Mirafit Seated Utility Bench ,Multi purpose weight bench ideal for a range of exercises ,Perform seated shoulder press, lateral raises, dumbbell curls, shrugs and other upper body gym exercises ,T shape base allows you to get a solid grounding of your feet without anything getting in the way ,Seat and backrest pads are both set at slight angles ,Ideal bench for overhead dumbbell pressing exercises ,Aligns body to correct seated posture and allows for full range of motion ,Allows your gym training partner to easily spot and assist when shoulder pressing ,Sturdy steel frame with black powder coated finish ,Anti-slip fabric on seat and backrest pads with thick padded foam for a comfortable workout  ,Durable PVC foot caps protect flooring from scratches ,Measurements: ,Total height: 92cm ,Total width: 83cm ,Total depth: 83cm }	Mirafit Seated Utility Bench	169.95	Get a fantastic upper body workout with the Mirafit Seated Utility Bench. This multi purpose weight bench is ideal for targeting shoulder and arm muscles. The bench allows you to get in the correct position and features comfortable anti slip pads.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Utility-Bench_1.jpg	weight-benches	strength-equipment	0.05
70	{textArr: \nMirafit M250 Adjustable Weight Bench\n,\nGet a complete workout with this adjustable gym bench\n,\n6 backrest angles and 3 seat angles\n,\nSuitable for flat and incline exercises\n,\nIdeal for use with dumbbells or a rack\n,\nMinimal seat gap of circa 4cm improves comfort when the bench is flat\n,\nLatest M3 spec anti slip fabric on seat and backrest cushions\n,\nStrong construction with variable steel thickness up to 6mm\n,\nRubber foot caps protect flooring from becoming scuffed\n,\nBuilt in handle and castors for easy movement\n,\nRubber caps on adjustment bars reduce noise when changing angle\n,\nPowder coated finish in a choice of colour\n,\nBench arrives partly assembled which reduces assembly time\n,\nAssembly requires M8 and M10 spanners (not included)\n,\nBench net weight: 30kg\n,\nMeasurements:\n,\nLength: 127cm\n,\nWidth: 65cm\n,\nHeight: 44cm (flat) to 130cm (highest position)\n,\nCushion thickness: 6cm\n}	Mirafit M250 Adjustable Weight Bench	249.95	Work out in comfort and style with the Mirafit M250 Adjustable Weight Bench. With 6 backrest angles, 3 seat angles and a minimal seat gap, this bench is perfect for incline and flat exercises. Available in a choice of orange or black.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/O/r/Orange-M250-Adjustable-Weight-Bench-on-White-Background.jpg	weight-benches	strength-equipment	0.05
71	{textArr: \nMirafit Olympic Weightlifting Jerk Blocks\n,\nSet of six blocks:\n\n\n2 x 15" blocks\n\n\n2 x 12" blocks\n\n\n2 x 6" blocks\n\n\n,\n2 x 15" blocks\n,\n2 x 12" blocks\n,\n2 x 6" blocks\n,\nOptional extra 4" blocks available for a taller platform height\n,\nDrop pads built into the top blocks absorb impact and reduce noise\n,\nImportant: The 6" blocks with the drop pads must be on top in all\nconfigurations. Do not drop the weights directly on top of any of the\nwooden top blocks. We will not replace blocks that have been misused.\n,\nPrecision cut plywood with smooth, sealed finish and laser logos\n,\nDurable double wall construction\n,\nReinforced internal brace structure within each block for added\nstrength\n,\nRaised edges provide a stable rest for your barbell\n,\nStackable design allows you to customise your lift height\n,\nHandle cut-outs for easy movement\n,\nArrives fully-assembled - no asssembly required \n,\nEach box is 90cm deep x 50cm\n,\nNote: for maximum stability always ensure the largest blocks in\nuse are stacked closest to the floor\n,\nImportant: this product is designed for use on a smooth, level\nfloor. Using on an uneven surface where the blocks are not completely\nin contact with the floor can damage the blocks.\n}	Mirafit Olympic Weightlifting Jerk Blocks	69.95	Improve your weightlifting technique and progress your form using our Olympic Weightlifting Jerk Blocks. Each block has been reinforced with a durable, double wall construction. Precision cut and with drop pads built in. Set of six.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/3/3/33-inch-Mirafit-Olympic-Weightlifting-Jerk-Blocks_1.jpg	weightlifting-equipment	strength-equipment	0.05
72	{textArr: Mirafit Tib Developer Bar ,Designed to train the Tibialis Anterior muscles on the front of shins ,Strengthening tib muscles can help improve your running, squatting and jumping abilities ,Also helps to reduce the risk of shin splints, ankle pain and tendon injury ,Compatible with Olympic weight plates ,Start gently and gradually load more weight onto the bar as your strength progresses ,Chrome plated pole helps to avoid scratching when loading weight plates ,Includes weight collar to keep plates secure during exercise. Please ensure screw is well tightened before use }	Mirafit Tib Developer Bar	59.95	Strengthen your Tibialis Anterior muscles with this Mirafit Tib Developer Bar. Compatible with Olympic weight plates, this bar targets your tibs, helping you perform better in a range of lower body exercises and reducing risk of injury.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Tib-Developer-Bar.jpg	weightlifting-equipment	strength-equipment	0.05
73	{textArr: \nMirafit Gen II Mini Barbell Jack\n,\nElevates bar for easy loading/unloading of weight plates\n,\nCompact, space saving design can be easily moved and stored\n,\nBlack powder coated steel construction\n,\nHigh density plastic inner rest plates protect the bar's knurled grips\n,\nSuitable for use with standard and Olympic barbells\n,\nMeasurements:\n,\nOverall length: 50cm\n,\nOverall width: 12cm\n,\nBar rest width: 5cm\n}	Mirafit Gen II Mini Barbell Jack	39.95	Our Mini Barbell Jacks make loading your barbell for deadlifts quicker and easier. The jack is easy to use and simply lifts the bar off the floor while you change your plates. The jack grip is lined to help protect your bar through regular use.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Mini-Barbell-Jack.jpg	weightlifting-equipment	strength-equipment	0.05
74	{textArr: Mirafit Gen II Full Barbell Jack ,Lifts bar at both ends for easy loading/unloading of weight plates ,Suitable for use with 6ft and 7ft barbells (not suitable for shorter bars due to bar rest width) ,Lever handle makes elevating and lowering bar extremely simple - now with improved grip ,Black powder coated steel construction ,HDPE liners protect barbell against damage ,Measurements: ,Overall height: 100cm ,Overall width: 106cm ,Overall depth: 50cm ,Bar rest width: 100.5cm }	Mirafit Gen II Full Barbell Jack	99.95	Our Full Barbell Jacks elevate your barbell while you load your weight bar. The barbell rests include HDPE liners to protect your bar. Use the lever to raise and lower the barbell with ease. Ideal for deadlifts and heavy lifting sessions.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Gen-II-Full-Barbell-Jack-on-White-Background.jpg	weightlifting-equipment	strength-equipment	0.05
75	{textArr: \nMirafit Soft Stackable Olympic Jerk Blocks\n,\nAvailable as:\n\n\nFull 18" set (includes 2 X 6", 2 X 12" and 4 X triangular blocks)\n\n\nFull 12" set (includes 2 X 12" and 4 X triangular blocks)\n\n\nFull 6" set (includes 2 X 6" and 4 X triangular blocks)\n\n\nPair of 12" blocks only (includes 2 X blocks)\n\n\nPair of 6" blocks only (includes 2 X blocks)\n\n\nTriangular blocks only (includes 4 X blocks)\n\n\n,\nFull 18" set (includes 2 X 6", 2 X 12" and 4 X triangular blocks)\n,\nFull 12" set (includes 2 X 12" and 4 X triangular blocks)\n,\nFull 6" set (includes 2 X 6" and 4 X triangular blocks)\n,\nPair of 12" blocks only (includes 2 X blocks)\n,\nPair of 6" blocks only (includes 2 X blocks)\n,\nTriangular blocks only (includes 4 X blocks)\n,\nMade from high density foam with a black, durable, non-slip PVC cover\n,\nTriangular blocks help to keep your barbell in place\n,\nStackable design allows you to customise your lift height\n,\nUse as deadlift blocks or for Olympic weightlifting moves such as\nclean and jerk\n,\nSoft, foam boxes absorb impact and sound\n,\nStrap handles for easy movement\n,\nSecure hook and loop fastenings to hold blocks together\n,\nEach box is 75.5cm deep X 50cm wide\n,\nNote: for maximum stability always ensure the largest blocks in use\nare stacked closest to the floor\n}	Mirafit Soft Stackable Olympic Jerk Blocks	109.95	Our Soft Stackable Olympic Jerk Blocks are ideal for Olympic weightlifting and strength training. Stack for jerk drills or use them as deadlift blocks. High density foam absorbs impact, reduces noise and protects equipment and flooring.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/6/-/6-Inch-Mirafit-Soft-Stackable-Olympic-Jerk-Blocks-on-White-Background-2.jpg	weightlifting-equipment	strength-equipment	0.05
76	{textArr: \nMirafit Deadlift Platform\n,\nAvailable with or without heavy duty black rubber matting\n,\nFrame only option is ideal for customers wishing to build a wooden\ndeadlift platform\n,\nRubber mat option includes 8 x 61cm square crumb rubber tiles (TUV\napproved)\n,\nShock absorbing, 40mm thick mats dampen noise and reduce wear and tear\non your equipment\n,\nTarget and strengthen your back, legs and forearm muscles\n,\n50mm x 50mm x 3mm (11 gauge) steel frame with black powder coated\nfinish\n,\nReinforced corner bracing with Mirafit laser cut emblems\n,\nInternal size of workout area is 244cm x 122cm (8ft x 4ft)\n,\nOptional resistance band pole set includes:\n,\n4 x 25mm solid steel poles with 8mm arm\n,\n8 x frame installation bolts\n,\n4 x floor brackets\n}	Mirafit Deadlift Platform	69.95	The Mirafit Deadlift Platform provides a dedicated 8ft x 4ft workout area ideal for taking your gym training to the next level. Available with or without our heavy duty black crumb rubber floor tiles. Optional resistance band poles also available.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/m/i/mirafit-deadlift-platform.jpg	weightlifting-equipment	strength-equipment	0.05
77	{textArr: Replacement Cover for Mirafit Soft Stackable Olympic Jerk Block,Suitable for replacing a damaged or worn cover,Available in either 6" or 12" block size,Simple installation with a bit of wiggling,Includes one outer cover only with zip (not a pair),Does not include the internal foam block ,Please note the covers will arrive creased due to being folded inside the packaging. This will gradually start to straighten out but please allow time.}	Mirafit Replacement Cover for Soft Jerk Blocks	29.95	These replacement covers allow you to keep your soft jerk blocks looking fresh. Rejuvenate tired pads or resolve damage at a fraction of the cost of buying new. Simple to fit and available for either 6" or 12" blocks.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/c/o/cover-for-mirafit-soft-stackable-olympic-jerk-blocks.jpg	weightlifting-equipment	strength-equipment	0
78	{textArr: \nMirafit Large Square Drop Pad\n,\nSold as a single pad (for a pair please purchase quantity 2)\n,\nEach pad features velcro strips allowing multiple pads to be attached\ntogether to form a longer pad if desired\n,\nSquare shape with large surface area, ideal for various strongman\nlifts including heavy overhead dumbbell press or atlas stones\n,\nProvides a great solution for those wanting a multi use drop\npad that can be used for a range of lifts or events\n,\nExtra large vents on sides help pressure to release on impact\n,\nHigh density foam with latest spec outer cover\n,\nNewly improved velcro closure avoids the need for zips\n,\nHandles for easy movement and positioning\n,\nWeight: approx. 22kg\n,\nMeasurements:\n,\nHeight: 20cm\n,\nWidth: 90cm\n,\nDepth: 90cm\n}	Mirafit Large Square Drop Pad	129.95	Practice your Strongman lifts with this Mirafit Large Drop Pad. This 90cm square pad is designed to withstand heavy weights and will help to reduce noise and floor damage. Ideal for heavy dumbbells, atlas stones and various strongman events	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Large-Orange-Drop-Pad_1.jpg	weightlifting-equipment	strength-equipment	0
79	{textArr: Mirafit Olympic Barbell Weighted Chains ,Supplied in pairs in a choice of weight:\n\n2 X 8kg weightlifting chain (16kg) \n2 X 12kg weightlifting chain (24kg) \n2 X 16kg weightlifting chain (32kg) ,2 X 8kg weightlifting chain (16kg) ,2 X 12kg weightlifting chain (24kg) ,2 X 16kg weightlifting chain (32kg) ,Ideal for progressive lifting - the total weight being lifted increases as the chains lift off the floor ,Olympic diameter collars with lever screw for a secure hold on weight bars  ,Hard-wearing steel construction ,Welded chain links for added durability ,Measurements:\n\n8kg chains:\n\nTotal length (inc. Collar): 165cm \nChain length (without collar): 156cm \n12kg chains:\n\nTotal length (inc. Collar): 166cm \nChain length (without collar): 158cm \n16kg chains:\n\nTotal length (inc. Collar): 160cm \nChain length (without collar): 153cm ,8kg chains:\n\nTotal length (inc. Collar): 165cm \nChain length (without collar): 156cm ,Total length (inc. Collar): 165cm ,Chain length (without collar): 156cm ,12kg chains:\n\nTotal length (inc. Collar): 166cm \nChain length (without collar): 158cm ,Total length (inc. Collar): 166cm ,Chain length (without collar): 158cm ,16kg chains:\n\nTotal length (inc. Collar): 160cm \nChain length (without collar): 153cm ,Total length (inc. Collar): 160cm ,Chain length (without collar): 153cm }	Mirafit Olympic Barbell Weighted Chains	49.95	Our Weighted Steel Chains are a fantastic training tool for serious weightlifters. These durable, hard-wearing chains are available in 8kg, 12kg and 16kg sizes. Use them on their own or with a 2" Olympic weight bar, to help you up your one-rep max.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Olympic-Weightlifting-Chains.jpg	weightlifting-equipment	strength-equipment	0.049
80	{textArr: Mirafit Leg Stretcher ,Stretch key muscles in the lower body ,Increasing flexibility in your hamstrings, inner thighs and calves ,Two leg extension bars with centre handle ,Five adjustable centre handle positions allow you to gradually increase intensity ,Soft foam grips ,Compact and portable design ,Measurements:\n\nLength: 112cm to 145.5cm \nWidth: 10cm to 225cm \nHeight:13cm ,Length: 112cm to 145.5cm ,Width: 10cm to 225cm ,Height:13cm }	Mirafit Leg Stretcher	24.95	Reach your flexibility goals using our Three Bar Leg Stretcher. Ideal for anyone training in kickboxing, Karate and Taekwondo. The bar is durable and has been designed to allow you to push your inner thighs to their outer limits.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Leg-Stretcher-Open.jpg	weightlifting-equipment	strength-equipment	0.05
81	{textArr: \nMirafit M3 Hybrid 20kg Olympic Barbell - Black & Chrome\n,\n7ft bar with hybrid grip pattern to suit a wide range of weightlifting\nexercises\n,\nIdeal for general gym work aswell as both Olympic lifts and\npowerlifting\n,\nTested to 680kg (1500lb)\n,\nSprung steel bar\n,\nBlack zinc coat centre with hard chrome sleeves\n,\nBronze bushings\n,\nEight-piece needle bearings\n,\nHybrid grip pattern featuring dual knurl marks\n,\nNo centre knurling\n,\nBranded rubber inserts and end caps - please note this bar now has\nupdated M3 logo end caps\n,\nSuitable for use with 2" Olympic weight plates\n,\nPlease note this bar is designed for training. It is not competition\ncertified. \n,\nSpecification:\n\n\nBar weight: 20kg (44lbs)\n\n\nBar length: 220cm (7.2ft)\n\n\nGrip diameter: 28mm\n\n\nCentre length: 131cm (4.3ft)\n\n\nSleeve diameter: 50mm (2")\n\n\nSleeve length: 41.65cm (16.4")\n\n\nLoad testing: 680kg/1500lb\n\n\nTensile strength: 218k psi\n\n\n,\nBar weight: 20kg (44lbs)\n,\nBar length: 220cm (7.2ft)\n,\nGrip diameter: 28mm\n,\nCentre length: 131cm (4.3ft)\n,\nSleeve diameter: 50mm (2")\n,\nSleeve length: 41.65cm (16.4")\n,\nLoad testing: 680kg/1500lb\n,\nTensile strength: 218k psi\n}	Mirafit M3 7ft 20kg Olympic Barbell - Black & Chrome	179.95	Our M3 7ft Olympic Barbells are our signature weight bars. Durable and built-to-last, they can handle up to 680kg and have a tensile strength of 218k PSI. Suitable for deadlifting and rack work, each bar has a hybrid knurl pattern for a secure grip	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-M3-7ft-Black-and-Silver-Olympic-Barbell-on-a-White-Background--.jpg	bars	weights-and-bars	0.05
87	{textArr: Mirafit Multi Grip Olympic Swiss Bar (Collars Not Included) ,Three handle positions including one angled and two neutral ,32mm handle diameter with knurled grips ,Handles spaced at 24.5cm, 50cm and 72cm apart ,Matt black powder-coated steel construction ,Orange mirafit branded silicone inserts (interchangeable) ,Swiss bar design relieves pressure and alleviates strain on shoulders and wrists ,Compatible with all Mirafit power racks (M100/M200/M2/M3) except the M1 rack (too narrow internally) ,Specification: ,Total length: 211cm ,Sleeve length: 35cm ,Bar weight: 19.5kg ,Maximum load: 350kg }	Mirafit Multi Grip Olympic Swiss Bar Black	119.95	Our Olympic Swiss Bar is ideal for helping you to train with precision and quickly switching up grip positions. Perfect for targeting specific muscles while adding variety to your workout. Comes complete with branded orange bands. 350kg capacity.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Black-Olympic-Swiss-Bar-on-White-Background.jpg	bars	weights-and-bars	0.045
82	{textArr: Mirafit M3 Hybrid 20kg Olympic Barbell - Orange & Black ,7ft bar with hybrid grip pattern to suit a wide range of weightlifting exercises ,Ideal for general gym work aswell as both Olympic lifts and powerlifting ,Tested to 680kg (1500lb) ,Sprung steel bar ,Orange centre with black zinc coat sleeves ,Bronze bushings ,Eight-piece needle bearings ,Hybrid grip pattern featuring dual knurl marks ,No centre knurling ,Branded rubber inserts and end caps ,Suitable for use with 2" Olympic weight plates ,Please note this bar is designed for training. It is not competition certified.  ,Please note black sleeves will scratch over time. If you are concerned about this we recommend our bars with chrome sleeves ,Specification:\n\nBar weight: 20kg (44lbs) \nBar length: 220cm (7.2ft) \nGrip diameter: 28mm \nCentre length: 131cm (4.3ft) \nSleeve diameter: 50mm (2") \nSleeve length: 41.65cm (16.4") \nLoad testing: 680kg/1500lb \nTensile strength: 218k psi ,Bar weight: 20kg (44lbs) ,Bar length: 220cm (7.2ft) ,Grip diameter: 28mm ,Centre length: 131cm (4.3ft) ,Sleeve diameter: 50mm (2") ,Sleeve length: 41.65cm (16.4") ,Load testing: 680kg/1500lb ,Tensile strength: 218k psi }	Mirafit M3 7ft 20kg Olympic Barbell - Orange & Black	199.95	Our M3 7ft 20kg Barbells are ideal for giving your gym a unique edge. The black and orange finish helps to protect your bar against wear and provides a super slick look.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/b/l/black-and-orange-Mirafit-M3-20kg-Olympic-Barbell.jpg	bars	weights-and-bars	0.05
83	{textArr: Mirafit M3 Hybrid 15kg Olympic Barbell - Orange & Black ,201cm women's bar with hybrid grip pattern to suit a wide range of weightlifting exercises ,Ideal for general gym work aswell as both Olympic lifts and powerlifting ,Tested to 680kg (1500lb) ,Sprung steel bar ,Orange centre with black zinc coat sleeves ,Bronze bushings ,Eight-piece needle bearings ,Hybrid grip pattern featuring dual knurl marks ,No centre knurling ,Branded rubber inserts and end caps ,Suitable for use with 2" Olympic weight plates ,Please note this bar is designed for training. It is not competition certified ,Please note black sleeves will scratch over time. If you are concerned about this we recommend our bars with chrome sleeves ,Specification:\n\nBar weight: 15kg (33lb) \nBar length: 201cm (6.6ft) \nCentre diameter: 25mm (1") \nCentre length: 131cm (4.3ft) \nSleeve diameter: 50mm (2") \nSleeve length: 32cm (12.6") \nLoad testing: 680kg/1500lb \nTensile strength: 210k psi ,Bar weight: 15kg (33lb) ,Bar length: 201cm (6.6ft) ,Centre diameter: 25mm (1") ,Centre length: 131cm (4.3ft) ,Sleeve diameter: 50mm (2") ,Sleeve length: 32cm (12.6") ,Load testing: 680kg/1500lb ,Tensile strength: 210k psi }	Mirafit M3 Women's 15kg Olympic Barbell - Black & Orange	189.95	Our M3 Women's 15kg Olympic Barbells can handle up to 680kg and have a hybrid grip pattern with dual knurl marks. The black and orange finish adds extra style. Suitable for Mirafit power racks and squat racks.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/B/l/Black-and-Orange-Mirafit-M3-15kg-Olympic-Womens-Bar.jpg	bars	weights-and-bars	0.044000000000000004
84	{textArr: Mirafit Olympic Swiss Bar (collars not included) ,Four grip positions including two angled and two neutral ,28mm handle diameter with knurled grips ,Handles spaced at 20cm, 38cm, 57cm and 75cm apart ,Solid steel construction with chrome finish ,Mirafit branded end caps ,Swiss bar design relieves pressure and alleviates strain on both shoulders and wrists ,Compatible with all Mirafit power racks (M100/M200/M2/M3) except the M1 rack (too narrow internally) ,Product specifications:\n\nTotal length: 213cm \nSleeve length: 39.5cm \nBar weight: 25kg \nMaximum load: 454kg/1000lb ,Total length: 213cm ,Sleeve length: 39.5cm ,Bar weight: 25kg ,Maximum load: 454kg/1000lb }	Mirafit Olympic Swiss Bar	129.95	Our Swiss Bars weigh 25kg and features 28mm knurled grips and branded end caps. Compatible with all Mirafit power racks and cages, the bar includes four grip positions making it ideal for a range of exercises.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Multi-Grip-Olympic-Swiss-Bar.jpg	bars	weights-and-bars	0.047
85	{textArr: \nMirafit Olympic Barbell Weight Bar\n,\nPerfect for dead lifts, bench presses, squats etc\n,\nAvailable in 4ft, 5ft, 6ft & 7ft lengths (specifications below)\n,\nSuitable for all 2" Olympic weight plates/discs\n,\nTested to 300kg\n,\nIncludes 2 quick release spring collars\n,\nSolid steel bar\n,\nChrome finish\n,\n28mm grip diamater\n,\nPlease note this bar is not suitable for exercises which involve\ndropping the bar from overhead\n}	Mirafit 2 Inch Olympic Barbell Weight Bar	69.95	Our Olympic Weight Bars are exactly what you need to progress. Choose from lighter, 4ft straight bars to full-sized 7ft bars to fit your squat rack or power rack. Knurled for a secure grip, each bar can handle up to 300kg. Suitable for 2" weights.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-2-Inch-Olympic-Barbell-Weight-Bars.jpg	bars	weights-and-bars	0.049
86	{textArr: Mirafit M3 Hybrid 20kg Olympic Barbell - Black ,7ft bar with hybrid grip pattern to suit a wide range of weightlifting exercises ,Ideal for general gym work aswell as both Olympic lifts and powerlifting ,Tested to 680kg (1500lb) ,Sprung steel bar ,Black zinc coat finish ,Bronze bushings ,Eight-piece needle bearings ,Hybrid grip pattern featuring dual knurl marks ,No centre knurling ,Branded rubber inserts and end caps ,Suitable for use with 2" Olympic weight plates ,Please note this bar is designed for training. It is not competition certified.  ,Please note black sleeves will scratch over time. If you are concerned about this we recommend our bars with chrome sleeves ,Specification:\n\nBar weight: 20kg (44lbs) \nBar length: 220cm (7.2ft) \nGrip diameter: 28mm \nCentre length: 131cm (4.3ft) \nSleeve diameter: 50mm (2") \nSleeve length: 41.65cm (16.4") \nLoad testing: 680kg/1500lb \nTensile strength: 218k psi ,Bar weight: 20kg (44lbs) ,Bar length: 220cm (7.2ft) ,Grip diameter: 28mm ,Centre length: 131cm (4.3ft) ,Sleeve diameter: 50mm (2") ,Sleeve length: 41.65cm (16.4") ,Load testing: 680kg/1500lb ,Tensile strength: 218k psi }	Mirafit M3 7ft 20kg Olympic Barbell - Black	179.95	Our black M3 7ft Barbell can handle up to 680kg making it a clear choice for advanced lifters. This sprung steel bar features dual knurl marks for grip and guidance. Suitable for Olympic lifts and powerlifting. Tensile strength tested to 218k PSI.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-black-M3-Olympic-20kg-barbell.jpg	bars	weights-and-bars	0.049
136	{textArr: Mirafit 10kg Dumbbell Weight Set - Black ,Suitable for wide range of exercises to tone and build muscle strength ,Also perfect for use in yoga, pilates, aerobics etc. ,All dumbbells are printed with Mirafit logo and weight ,Neoprene soft touch weights - comfortable and easy to grip ,Handy case for easy storage and transportation ,Set includes:\n\n2 X 0.5kg dumbbells \n2 X 1kg dumbbells \n2 X 1.5kg dumbbells \n2 X 2kg dumbbells \nGrey carry case ,2 X 0.5kg dumbbells ,2 X 1kg dumbbells ,2 X 1.5kg dumbbells ,2 X 2kg dumbbells ,Grey carry case }	Mirafit 10kg Mini Dumbbell Set in Case - Black Weights	29.95	Our Mini Dumbbell Sets are perfect for helping you achieve your strength goals. With a variety of weights, you can target each muscle group with different loads and add resistance to your cardio regime. Use at home or at the gym for a full workout.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-10kg-Dumbbell-Set-and-Case.jpg	weight-sets-kits	weights-and-bars	0.049
88	{textArr: \nMirafit Black Olympic Bumper Plates\n,\nSold in pairs or sets\n,\nSolid rubber construction absorbs impact\n,\nStainless steel centre ring\n,\nPrinted Mirafit logo and weight label\n,\nSuitable for use on Olympic diameter bars\n,\n45cm diameter (IWF standard)\n,\nApprox plate thickness:\n\n\n5kg bumper plate: 2.4cm\n\n\n10kg bumper plate: 4.4cm\n\n\n15kg bumper plate: 6.2cm\n\n\n20kg bumper plate: 7.2cm\n\n\n25kg bumper plate: 8.4cm\n\n\n,\n5kg bumper plate: 2.4cm\n,\n10kg bumper plate: 4.4cm\n,\n15kg bumper plate: 6.2cm\n,\n20kg bumper plate: 7.2cm\n,\n25kg bumper plate: 8.4cm\n,\nStorage Rack also available:\n\n\nHeight: 27.5cm\n\n\nWidth: 109.5cm\n\n\nDepth: 34.5cm\n\n\n,\nHeight: 27.5cm\n,\nWidth: 109.5cm\n,\nDepth: 34.5cm\n}	Mirafit Black Olympic Rubber Bumper Plates	49.95	Our Bumper Plates are perfect for deadlifting as well as Olympic weightlifting style moves. With a rubber construction, they are shock-absorbent and help to protect your bars and floor when training. Each plate has a 45cm diameter (IWF standard).	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Black-Olympic-Rubber-Bumper-Plates-on-White-Background.jpg	bumper-plates	weights-and-bars	0.05
89	{textArr: Mirafit 150kg Black Bumper Plates Set & Storage Rack ,Includes:\n\n1 x Horizontal Plate Rack & Bar Stand \n2 x 5kg Olympic Bumper Plates \n2 x 10kg Olympic Bumper Plates \n2 x 15kg Olympic Bumper Plates \n2 x 20kg Olympic Bumper Plates \n2 x 25kg Olympic Bumper Plates ,1 x Horizontal Plate Rack & Bar Stand ,2 x 5kg Olympic Bumper Plates ,2 x 10kg Olympic Bumper Plates ,2 x 15kg Olympic Bumper Plates ,2 x 20kg Olympic Bumper Plates ,2 x 25kg Olympic Bumper Plates ,Black weight plates with white text ,Solid rubber construction on bumper plates and stainless steel centre rings ,Strong steel storage rack has rubber feet to protect flooring ,Storage rack also has storage for two weight bars built in (bars not included) ,Measurements:\n\nStorage Rack: \n\nTotal height: 27.5cm \nTotal width: 109.5cm \nTotal depth: 34.5cm \nBumper Plates:\n\nDiameter: 45cm \nThickness:\n\n5kg bumper plate: 2.4cm \n10kg bumper plate: 4.4cm \n15kg bumper plate: 6.2cm \n20kg bumper plate: 7.2cm \n25kg bumper plate: 8.4cm ,Storage Rack: ,Total height: 27.5cm ,Total width: 109.5cm ,Total depth: 34.5cm ,Bumper Plates:\n\nDiameter: 45cm \nThickness:\n\n5kg bumper plate: 2.4cm \n10kg bumper plate: 4.4cm \n15kg bumper plate: 6.2cm \n20kg bumper plate: 7.2cm \n25kg bumper plate: 8.4cm ,Diameter: 45cm ,Thickness:\n\n5kg bumper plate: 2.4cm \n10kg bumper plate: 4.4cm \n15kg bumper plate: 6.2cm \n20kg bumper plate: 7.2cm \n25kg bumper plate: 8.4cm ,5kg bumper plate: 2.4cm ,10kg bumper plate: 4.4cm ,15kg bumper plate: 6.2cm ,20kg bumper plate: 7.2cm ,25kg bumper plate: 8.4cm }	Mirafit 150kg Black Bumper Plates Set & Storage Rack	569.95	Start your home gym off right with this Mirafit 150kg Black Bumper Plate Set and Storage Rack. Rubber weight plates help to absorb impact when lifting, and the storage stand will keep your workout space organised. Ideal set for home and garage gyms.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-150kg-Black-Bumper-Plates-and-Storage-Stand.jpg	bumper-plates	weights-and-bars	0
90	{textArr: Mirafit M3 Barbell with Black Bumper Plates & Weight Storage Stand ,Includes:\n\n1 x Mirafit M3 20kg Olympic Barbell - Black\n1 x Pair of Quick Release Barbell Collars \n1 x Mirafit Horizontal Plate Rack & Bar Stand \nYour choice of bumper plate package ,1 x Mirafit M3 20kg Olympic Barbell - Black,1 x Pair of Quick Release Barbell Collars ,1 x Mirafit Horizontal Plate Rack & Bar Stand ,Your choice of bumper plate package ,Bumper plate package options:\n\n60kg weight set:\n\n2 x 5kg plates \n2 x 10kg plates \n2 x 15kg plates \n100kg weight set:\n\n2 x 5kg plates \n2 x 10kg plates \n2 x 15kg plates \n2 x 20kg plates \n150kg weight set:\n\n2 x 5kg plates \n2 x 10kg plates \n2 x 15kg plates \n2 x 20kg plates \n2 x 25kg plates ,60kg weight set:\n\n2 x 5kg plates \n2 x 10kg plates \n2 x 15kg plates ,2 x 5kg plates ,2 x 10kg plates ,2 x 15kg plates ,100kg weight set:\n\n2 x 5kg plates \n2 x 10kg plates \n2 x 15kg plates \n2 x 20kg plates ,2 x 5kg plates ,2 x 10kg plates ,2 x 15kg plates ,2 x 20kg plates ,150kg weight set:\n\n2 x 5kg plates \n2 x 10kg plates \n2 x 15kg plates \n2 x 20kg plates \n2 x 25kg plates ,2 x 5kg plates ,2 x 10kg plates ,2 x 15kg plates ,2 x 20kg plates ,2 x 25kg plates ,Black weight plates with white logo and weight labels ,Solid rubber construction on bumper plates absorbs impact,Stainless steel centre rings ,Strong steel storage rack with rubber feet to protect flooring ,Our M3 barbell is a fantastic all round performer with a hybrid grip pattern, eight-piece needle bearings and bronze bushings,Ideal for a wide range of gym and weightlifting exercises,Barbell features a black zinc coat finish,Quick release barbell collars make weight changes easy,Measurements: ,M3 Barbell:\n\nWeight: 20kg \nTotal length: 220cm \nCentre length: 131cm \nGrip diameter: 28mm \nLoad testing: 680kg ,Weight: 20kg ,Total length: 220cm ,Centre length: 131cm ,Grip diameter: 28mm ,Load testing: 680kg ,Rack: ,Total height: 27.5cm ,Total width: 109.5 cm ,Total depth: 34.5cm ,Bumper Plates:\n\nDiameter: 45cm \nThickness:\n\n5kg bumper plate: 2.4cm \n10kg bumper plate: 4.4cm \n15kg bumper plate: 6.2cm \n20kg bumper plate: 7.2cm \n25kg bumper plate: 8.4cm ,Diameter: 45cm ,Thickness:\n\n5kg bumper plate: 2.4cm \n10kg bumper plate: 4.4cm \n15kg bumper plate: 6.2cm \n20kg bumper plate: 7.2cm \n25kg bumper plate: 8.4cm ,5kg bumper plate: 2.4cm ,10kg bumper plate: 4.4cm ,15kg bumper plate: 6.2cm ,20kg bumper plate: 7.2cm ,25kg bumper plate: 8.4cm }	Mirafit M3 Olympic Barbell with Bumper Plate Set and Weight Storage Stand	499.95	Get your gym kickstarted with this Olympic barbell and weight set. Kit includes our signature black M3 barbell with quick release collars, a choice of bumper plate set and a sturdy storage rack to keep the bar and plates tidy and off the gym floor.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-150kg-Black-Bumper-Plates-Bar-and-Storage-Stand_1.jpg	bumper-plates	weights-and-bars	0
91	{textArr: \nMirafit 150kg Black Bumper Plates Set + 15kg Change Plates + Storage\nTrolley\n,\nThis weightlifting set includes:\n\n\n1 x Portable Storage Trolley Rack\n\n\n2 x 5kg Olympic Bumper Plates\n\n\n2 x 10kg Olympic Bumper Plates\n\n\n2 x 15kg Olympic Bumper Plates\n\n\n2 x 20kg Olympic Bumper Plates\n\n\n2 x 25kg Olympic Bumper Plates\n\n\n2 x 0.5kg Fractional Change Plates (white)\n\n\n2 x 1kg Fractional Change Plates (green)\n\n\n2 x 1.5kg Fractional Change Plates (yellow)\n\n\n2 x 2kg Fractional Change Plates (blue)\n\n\n2 x 2.5kg Fractional Change Plates (red)\n\n\n,\n1 x Portable Storage Trolley Rack\n,\n2 x 5kg Olympic Bumper Plates\n,\n2 x 10kg Olympic Bumper Plates\n,\n2 x 15kg Olympic Bumper Plates\n,\n2 x 20kg Olympic Bumper Plates\n,\n2 x 25kg Olympic Bumper Plates\n,\n2 x 0.5kg Fractional Change Plates (white)\n,\n2 x 1kg Fractional Change Plates (green)\n,\n2 x 1.5kg Fractional Change Plates (yellow)\n,\n2 x 2kg Fractional Change Plates (blue)\n,\n2 x 2.5kg Fractional Change Plates (red)\n,\nSuitable for use on Olympic diameter bars\n,\nIncludes a total of 165kg of weight plates\n,\nSolid rubber construction on bumper plates with a stainless steel\ncentre ring \n,\nFractional change plates allow for increasing the weight level\ngradually and feature an anti slip design so are snug on the bar\n,\nStrong steel trolley rack has rear castor wheels and a front handle\nfor easy movement\n,\nMeasurements:\n,\nStorage Rack:\n,\nTotal height: 30cm\n,\nTotal width: 154.5cm\n,\nTotal depth: 40cm\n,\nBumper Plates:\n,\nDiameter: 45cm\n,\nThickness:\n,\n5kg bumper plate: 2.4cm\n,\n10kg bumper plate: 4.4cm\n,\n15kg bumper plate: 6.2cm\n,\n20kg bumper plate: 7.2cm\n,\n25kg bumper plate: 8.4cm\n,\nFractional Change Plates:\n,\nDiameter x thickness:\n,\n0.5kg fractional change plate: 13.4cm x 1.2cm\n,\n1kg fractional change plate: 15.8cm x 1.4cm\n,\n1.5kg fractional change plate: 17.4cm x 1.8cm\n,\n2kg fractional change plate: 18.9cm x 1.9cm\n,\n2.5kg fractional change plate: 20.9cm x 2.3cm\n}	Mirafit Black Bumper Plates Set & Change Plates & Storage Trolley	749.95	This weight plate and storage trolley set includes 150kg of our black rubber bumper plates, a 15kg fractional plate set and a handy portable trolley to neatly store all the plates. Ideal for any gym or club.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-150kg-Black-Bumper-Plates-Fractionals-Storage-Trolley.jpg	bumper-plates	weights-and-bars	0
92	{textArr: \nMirafit Marbled Bumper Plates\n,\nAvailable in pairs or as sets\n,\nColour-coded marbled effect Olympic weight plates\n,\nPlate colours are grey 5kg, green 10kg, yellow 15kg, blue 20kg and red\n25kg \n,\nWhite raised letters for easy identification\n,\nBevelled edge allows you to get fingers slightly under when picking up\nfrom the floor\n,\nSolid rubber construction for excellent impact absorption\n,\nStainless steel centre ring\n,\nSuitable for 2" Olympic bars\n,\nDiameter: 45cm\n,\nApprox. plate thickness:\n\n\n5kg bumper plate: 2.4cm\n\n\n10kg bumper plate: 4.4cm\n\n\n15kg bumper plate: 6.2cm\n\n\n20kg bumper plate: 7.2cm\n\n\n25kg bumper plate: 8.4cm\n\n\n,\n5kg bumper plate: 2.4cm\n,\n10kg bumper plate: 4.4cm\n,\n15kg bumper plate: 6.2cm\n,\n20kg bumper plate: 7.2cm\n,\n25kg bumper plate: 8.4cm\n,\nStorage Rack also available:\n\n\nHeight: 27.5cm\n\n\nWidth: 109.5cm\n\n\nDepth: 34.5cm\n\n\n,\nHeight: 27.5cm\n,\nWidth: 109.5cm\n,\nDepth: 34.5cm\n,\nLooking for a barbell? Complete your setup by adding the M3 20kg\nHybrid Olympic Bar (including quick release barbell collars):\n\n\nFinish: Hard chrome sleeves with black zinc coat centre\n\n\nTotal length: 220cm\n\n\nGrip diameter: 28mm\n\n\nCentre length: 131cm\n\n\nLoad testing: 680kg/1500lb\n\n\n,\nFinish: Hard chrome sleeves with black zinc coat centre\n,\nTotal length: 220cm\n,\nGrip diameter: 28mm\n,\nCentre length: 131cm\n,\nLoad testing: 680kg/1500lb\n}	Mirafit Marbled Bumper Plates	69.95	Make your gym stand out with these Mirafit Marbled Bumper Plates. These solid rubber bumpers are available in pairs or sets and are colour coded for easy identification. The moulded design includes raised letters and stainless steel centre rings.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Marbled-Bumper-Plates.jpg	bumper-plates	weights-and-bars	0.05
144	{textArr: Mirafit Replacement Belt with Buckle for Mirafit Adjustable Weighted Vests ,Fits all sizes of our vest  ,Single Unit }	Mirafit Replacement Belt with Buckle for Adjustable Weighted Vests	8.95	Replacement belt with buckle for the Mirafit Adjustable Weighted Vest.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/r/e/replacement-belt-with-buckle-for-adjustable-weighted-vests.jpg	wearable-weights	weights-and-bars	0
93	{textArr: \nMirafit Colour Splash Bumper Plates\n,\nAvailable in pairs or sets\n,\nBlack plates with coloured splashes for easy weight identification\n,\nColour is 5kg grey, 10kg green, 15kg yellow, 20kg blue, 25kg red\n,\nWhite printed Mirafit logo and weight label\n,\nSolid rubber construction provides excellent impact absorption\n,\nStainless steel centre ring\n,\nSuitable for use on Olympic diameter bars\n,\n45cm diameter (IWF standard)\n,\nApprox plate thickness:\n\n\n5kg bumper plate: 2.4cm\n\n\n10kg bumper plate: 4.4cm\n\n\n15kg bumper plate: 6.2cm\n\n\n20kg bumper plate: 7.2cm\n\n\n25kg bumper plate: 8.4cm\n\n\n,\n5kg bumper plate: 2.4cm\n,\n10kg bumper plate: 4.4cm\n,\n15kg bumper plate: 6.2cm\n,\n20kg bumper plate: 7.2cm\n,\n25kg bumper plate: 8.4cm\n,\nStorage Rack also available:\n\n\nHeight: 27.5cm\n\n\nWidth: 109.5cm\n\n\nDepth: 34.5cm\n\n\n,\nHeight: 27.5cm\n,\nWidth: 109.5cm\n,\nDepth: 34.5cm\n,\nLooking for a barbell? Complete your setup by adding the M3 20kg\nHybrid Olympic Bar (including quick release barbell collars):\n\n\nFinish: Hard chrome sleeves with black zinc coat centre\n\n\nTotal length: 220cm\n\n\nGrip diameter: 28mm\n\n\nCentre length: 131cm\n\n\nLoad testing: 680kg/1500lb\n\n\n,\nFinish: Hard chrome sleeves with black zinc coat centre\n,\nTotal length: 220cm\n,\nGrip diameter: 28mm\n,\nCentre length: 131cm\n,\nLoad testing: 680kg/1500lb\n}	Mirafit Colour Splash Bumper Plates	49.95	Our Mirafit Colour Splash Bumper Plates are colour coded for easy identification and the solid rubber construction absorbs impact for a quieter workout. Suitable for use on Olympic diameter bars.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Colour-Splash-Bumper-Plates-on-a-White-Background.jpg	bumper-plates	weights-and-bars	0.05
94	{textArr: Mirafit Olympic Weight Bar and 50kg Bumper Plate Set ,Includes:,6ft International Bar - This bar has shorter sleeves than a standard 6ft barbell but a longer centre meaning it will still fit onto all Mirafit squat and power racks ,2 x 5kg bumper plates,4 x 10kg bumper plates,Quick release barbell collars,Additional plates are also available to purchase here,The barbell features a chrome finish and knurled grip,Please note these bars are not designed to be dropped to the floor from overhead  ,These durable bumper plates are made from solid rubber with stainless steel centre rings ,Specifications: ,6ft International Olympic Bar:\n\nTotal length: 186cm \nSleeve length: 25cm \nCentre section length: 130cm \nGrip diameter: 28mm \nBar weight: approx. 14kg (14.5kg with collars) ,Total length: 186cm ,Sleeve length: 25cm ,Centre section length: 130cm ,Grip diameter: 28mm ,Bar weight: approx. 14kg (14.5kg with collars) ,Bumper Plates\n\nDiameter: 45cm\nApprox. plate thickness: \n5kg bumper plate: 2.4cm \n10kg bumper plate: 4.4cm ,Diameter: 45cm,Approx. plate thickness: ,5kg bumper plate: 2.4cm ,10kg bumper plate: 4.4cm ,Delivery \n\nThis product is delivered in multiple boxes \nThe courier will often not deliver all of the boxes at the same time. Please wait at least 48 hours for the other boxes to arrive before contacting us \nOur bumper plates are supplied with a coating of silicone oil to preserve the plates during storage and transportation. This can be removed using a damp cloth on arrival. ,This product is delivered in multiple boxes ,The courier will often not deliver all of the boxes at the same time. Please wait at least 48 hours for the other boxes to arrive before contacting us ,Our bumper plates are supplied with a coating of silicone oil to preserve the plates during storage and transportation. This can be removed using a damp cloth on arrival. }	Mirafit 6ft International Olympic Bar and 50kg Plate Set	349.95	This Olympic bar and weight set is ideal for anyone looking to start training at home. The bar is 6ft long but is international spec so will still fit any Mirafit squat rack. Includes collars and 50kg of bumper plates.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/6/f/6ft-barbell-with-orange-black-bumper-plates.jpg	bumper-plates	weights-and-bars	0.05
95	{textArr: \nMirafit Olympic Weight Bar and Weights Set\n,\nAvailable with a choice of four different barbells: \n\n\n7ft Bar - The ideal choice where space is not an issue. Fits all\nMirafit racks.\n\n\n6ft International Bar - This bar has shorter sleeves than a\nstandard 6ft barbell but a longer centre meaning it will still fit\nonto all Mirafit squat and power racks.\n\n\n6ft Bar - Our regular 6ft Olympic bar. Please note the centre of\nthis bar is not long enough to fit Mirafit power racks.\n\n\n5ft Bar - Ideal where space is very limited.\n\n\n,\n7ft Bar - The ideal choice where space is not an issue. Fits all\nMirafit racks.\n,\n6ft International Bar - This bar has shorter sleeves than a\nstandard 6ft barbell but a longer centre meaning it will still fit\nonto all Mirafit squat and power racks.\n,\n6ft Bar - Our regular 6ft Olympic bar. Please note the centre of\nthis bar is not long enough to fit Mirafit power racks.\n,\n5ft Bar - Ideal where space is very limited.\n,\nBarbells feature a chrome finish, knurled grips and are tested to 300kg\n,\nPlease note these bars are not designed to be dropped to the floor\nfrom overhead \n,\nA pair of spring collars is also included for the bar\n,\nChoose from either 60kg or 100kg of weight plates to suit your\nstrength level\n,\nOur crumb rubber bumpers are made from recycled rubber with stainless\nsteel centre rings and orange text\n,\n60kg set includes 2 x 5kg, 2 x 10kg, 2 x 15kg\n,\n100kg set includes 2 x 5kg, 2 x 10kg, 2 x 15kg, 2 x 20kg\n,\n7ft bar also available as a 150kg set which adds 2 x 25kg plates\n,\nSpecifications:\n\n\n7ft Olympic Bar:\n\n\nTotal length: 218cm\n\n\nSleeve length: 39.5cm\n\n\nCentre section length: 130.5cm\n\n\nGrip diameter: 28mm\n\n\nBar weight: approx. 17kg  (17.5kg with collars)\n\n\n\n\n6ft International Olympic Bar:\n\n\nTotal length: 186cm\n\n\nSleeve length: 25cm\n\n\nCentre section length: 130cm\n\n\nGrip diameter: 28mm\n\n\nBar weight: approx. 14kg (14.5kg with collars)\n\n\n\n\n6ft Olympic Bar:\n\n\nTotal length: 182cm\n\n\nSleeve length: 32.5cm\n\n\nCentre section length: 111cm\n\n\nGrip diameter: 28mm\n\n\nBar weight: approx. 14.5kg (15kg with collars)\n\n\n\n\n5ft Olympic Bar:\n\n\nTotal length: 152cm\n\n\nSleeve length: 26.5cm\n\n\nCentre section length: 93cm\n\n\nGrip diameter: 28mm\n\n\nBar weight: approx.12.8kg (13.3kg with collars)\n\n\n\n\nBumper Plates\n\n\nDiameter: 45cm (IWF standard)\n\n\nApprox. plate thickness:\n\n\n5kg bumper plate: 3.5cm\n\n\n10kg bumper plate: 6cm\n\n\n15kg bumper plate: 7.5cm\n\n\n20kg bumper plate: 8.3cm\n\n\n25kg bumper plate: 9cm\n\n\n\n\n,\n7ft Olympic Bar:\n\n\nTotal length: 218cm\n\n\nSleeve length: 39.5cm\n\n\nCentre section length: 130.5cm\n\n\nGrip diameter: 28mm\n\n\nBar weight: approx. 17kg  (17.5kg with collars)\n\n\n,\nTotal length: 218cm\n,\nSleeve length: 39.5cm\n,\nCentre section length: 130.5cm\n,\nGrip diameter: 28mm\n,\nBar weight: approx. 17kg  (17.5kg with collars)\n,\n6ft International Olympic Bar:\n\n\nTotal length: 186cm\n\n\nSleeve length: 25cm\n\n\nCentre section length: 130cm\n\n\nGrip diameter: 28mm\n\n\nBar weight: approx. 14kg (14.5kg with collars)\n\n\n,\nTotal length: 186cm\n,\nSleeve length: 25cm\n,\nCentre section length: 130cm\n,\nGrip diameter: 28mm\n,\nBar weight: approx. 14kg (14.5kg with collars)\n,\n6ft Olympic Bar:\n\n\nTotal length: 182cm\n\n\nSleeve length: 32.5cm\n\n\nCentre section length: 111cm\n\n\nGrip diameter: 28mm\n\n\nBar weight: approx. 14.5kg (15kg with collars)\n\n\n,\nTotal length: 182cm\n,\nSleeve length: 32.5cm\n,\nCentre section length: 111cm\n,\nGrip diameter: 28mm\n,\nBar weight: approx. 14.5kg (15kg with collars)\n,\n5ft Olympic Bar:\n\n\nTotal length: 152cm\n\n\nSleeve length: 26.5cm\n\n\nCentre section length: 93cm\n\n\nGrip diameter: 28mm\n\n\nBar weight: approx.12.8kg (13.3kg with collars)\n\n\n,\nTotal length: 152cm\n,\nSleeve length: 26.5cm\n,\nCentre section length: 93cm\n,\nGrip diameter: 28mm\n,\nBar weight: approx.12.8kg (13.3kg with collars)\n,\nBumper Plates\n\n\nDiameter: 45cm (IWF standard)\n\n\nApprox. plate thickness:\n\n\n5kg bumper plate: 3.5cm\n\n\n10kg bumper plate: 6cm\n\n\n15kg bumper plate: 7.5cm\n\n\n20kg bumper plate: 8.3cm\n\n\n25kg bumper plate: 9cm\n\n\n,\nDiameter: 45cm (IWF standard)\n,\nApprox. plate thickness:\n,\n5kg bumper plate: 3.5cm\n,\n10kg bumper plate: 6cm\n,\n15kg bumper plate: 7.5cm\n,\n20kg bumper plate: 8.3cm\n,\n25kg bumper plate: 9cm\n,\nDelivery \n\n\nThis product is delivered in multiple boxes\n\n\nThe courier will often not deliver all of the boxes at the same\ntime. Please wait at least 48 hours for the other boxes to arrive\nbefore contacting us\n\n\nOur bumper plates are supplied with a coating of silicone oil to\npreserve the plates during storage and transportation. This can be\nremoved using a damp cloth on arrival.\n\n\n,\nThis product is delivered in multiple boxes\n,\nThe courier will often not deliver all of the boxes at the same\ntime. Please wait at least 48 hours for the other boxes to arrive\nbefore contacting us\n,\nOur bumper plates are supplied with a coating of silicone oil to\npreserve the plates during storage and transportation. This can be\nremoved using a damp cloth on arrival.\n}	Mirafit Olympic Barbell & Weights Set	299.95	Our Olympic Barbell & Weight Sets are perfect for building strength and muscle. Choose an Olympic bar and a weight set that suits you to create your ideal strength training kit. Also includes a pair of spring barbell collars.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/K/i/Kit-Mirafit-7ft-bar-100kg-crumb-bumper-plates_1.jpg	bumper-plates	weights-and-bars	0.05
96	{textArr: \nMirafit Olympic Bumper Plates\n,\nSupplied in pairs or as sets\n,\nOrange with black text\n,\nMoulded weight plates with raised Mirafit logo and weight letters\n,\n45 degree bevelled edge makes bumpers easier to pick up off the floor\n,\nSolid rubber construction provides excellent impact absorption\n,\nStainless steel centre ring\n,\nSuitable for use on Olympic diameter bars\n,\n45cm diameter (IWF standard)\n,\nApprox plate thickness:\n\n\n5kg bumper plate: 2.4cm\n\n\n10kg bumper plate: 4.4cm\n\n\n15kg bumper plate: 6.2cm\n\n\n20kg bumper plate: 7.2cm\n\n\n25kg bumper plate: 8.4cm\n\n\n,\n5kg bumper plate: 2.4cm\n,\n10kg bumper plate: 4.4cm\n,\n15kg bumper plate: 6.2cm\n,\n20kg bumper plate: 7.2cm\n,\n25kg bumper plate: 8.4cm\n,\nStorage Rack also available:\n\n\nHeight: 27.5cm\n\n\nWidth: 109.5cm\n\n\nDepth: 34.5cm\n\n\n,\nHeight: 27.5cm\n,\nWidth: 109.5cm\n,\nDepth: 34.5cm\n,\nLooking for a barbell? Complete your setup by adding the M3 20kg\nHybrid Olympic Bar (including quick release barbell collars):\n\n\nFinish: Black zinc coat sleeves and centre\n\n\nTotal length: 220cm\n\n\nGrip diameter: 28mm\n\n\nCentre length: 131cm\n\n\nLoad testing: 680kg/1500lbs\n\n\n,\nFinish: Black zinc coat sleeves and centre\n,\nTotal length: 220cm\n,\nGrip diameter: 28mm\n,\nCentre length: 131cm\n,\nLoad testing: 680kg/1500lbs\n}	Mirafit Olympic Bumper Plates	59.95	These Mirafit Olympic Bumper Plates have a solid rubber construction to absorb impact and provide minimal bounce. Suitable for use on Olympic diameter bars, they have raised, moulded logos and a bevelled edge for easier handling. 	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/s/e/set-Mirafit-Orange-Bumper-Plates.jpg	bumper-plates	weights-and-bars	0.05
97	{textArr: Mirafit Competition Style Olympic Bumper Plates ,Sold in pairs or as a full set ,Weight tolerance of +/- 10g ,Narrow width allows more weight to be loaded to bar ,Natural rubber with chrome plated steel core ,Updated design now with raised Mirafit logo and weight label ,Suitable for use on Olympic diameter bars  ,450mm diameter ,50.4mm collar opening ,Please note these plates are not IWF certified ,Approx plate thickness: ,10kg bumper plate: 30.5mm ,15kg bumper plate: 43mm ,20kg bumper plate: 55mm ,25kg bumper plate: 68mm }	Mirafit Competition Olympic Bumper Plates	139.95	Our Competition Style Olympic Weight Plates are colour coded in IWF colours and have a 45cm diameter. Made from natural rubber, the plates have a narrow width and a chrome plated steel core. Ideal for weightlifting.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/m/i/mirafit-competition-bumper-plates-140kg-set-white-background.jpg	bumper-plates	weights-and-bars	0.05
108	{textArr: Mirafit Competition Kettlebell Set & Weight Rack ,Package includes:\n\n8kg competition kettlebell (light pink rings) \n10kg competition kettlebell (dark pink rings) \n12kg competition kettlebell (blue rings) \n16kg competition kettlebell (yellow rings) \n20kg competition kettlebell (purple rings) \n24kg competition kettlebell (green rings) \n28kg competition kettlebell (orange rings) \n32kg competition kettlebell (red rings) \n2 tier kettlebell storage rack ,8kg competition kettlebell (light pink rings) ,10kg competition kettlebell (dark pink rings) ,12kg competition kettlebell (blue rings) ,16kg competition kettlebell (yellow rings) ,20kg competition kettlebell (purple rings) ,24kg competition kettlebell (green rings) ,28kg competition kettlebell (orange rings) ,32kg competition kettlebell (red rings) ,2 tier kettlebell storage rack ,Colour rings on handles make identification easy and fast ,Ideal for gyms, studios and personal trainers ,All kettlebells have the same dimensions for ease of use ,Flat base prevents the kettlebell from rolling away or rocking during exercise ,Hollow steel ball with a sand and iron sand filling ,Kettlebell storage rack includes two 38" kettlebell trays, ideal for storing the full set ,Secured rubber tray liners protect against knocks and scratches ,300kg maximum load ,Measurements:\n\nKettlebells:\n\n28cm x 21cm x 21cm (handle 34mm) \nRack:\n\nHeight: 75cm \nWidth: 104cm \nDepth: 50.5cm \nTray: 96cm x 24cm ,Kettlebells:\n\n28cm x 21cm x 21cm (handle 34mm) ,28cm x 21cm x 21cm (handle 34mm) ,Rack:\n\nHeight: 75cm \nWidth: 104cm \nDepth: 50.5cm \nTray: 96cm x 24cm ,Height: 75cm ,Width: 104cm ,Depth: 50.5cm ,Tray: 96cm x 24cm ,Please note: tools required for rack assembly are not included }	Mirafit Competition Kettlebell Set & Weight Rack	499.95	Enhance your training with the Mirafit Competition Kettlebell Set & Weight Rack. This kit includes eight kettlebells ranging from 8kg to 32kg kettlebell size plus weight storage rack. Kettlebells are colour coded and a uniform size for ease of use.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Competition-Kettlebells-in-Rack-on-White-Background_2.jpg	kettlebells	weights-and-bars	0
98	{textArr: \nMirafit Competition Kettlebell Set & Weight Rack\n,\nSet of 7 kettlebells and a 2 tier weight rack\n,\nDurable cast steel kettlebells with stainless steel handles\n,\nEach kettlebell is calibrated to +/- 200g\n,\nAll kettlebells have the same dimensions for ease of use \n,\nFlat bases prevent the kettlebells rolling away or rocking\n,\nBlack powder coated finish\n,\nPremium stainless steel handles for an excellent feeling in the hand.\nPlease note stainless handle will show polishing marks\n,\nContrasting debossed Mirafit logos and weight labels on front of each\nkettlebell in white for easy identification\n,\nKettlebell storage rack includes two 38" kettlebell trays, ideal for\nstoring the full set\n,\nSecured rubber tray liners protect against knocks and scratches\n,\n300kg maximum load\n,\nMeasurements:\n\n\nKettlebells:\n\n\n28cm x 21cm x 21cm (handle 34mm)\n\n\n\n\nRack:\n\n\nHeight: 75cm\n\n\nWidth: 104cm\n\n\nDepth: 50.5cm\n\n\nTray: 96cm x 24cm\n\n\n\n\n,\nKettlebells:\n\n\n28cm x 21cm x 21cm (handle 34mm)\n\n\n,\n28cm x 21cm x 21cm (handle 34mm)\n,\nRack:\n\n\nHeight: 75cm\n\n\nWidth: 104cm\n\n\nDepth: 50.5cm\n\n\nTray: 96cm x 24cm\n\n\n,\nHeight: 75cm\n,\nWidth: 104cm\n,\nDepth: 50.5cm\n,\nTray: 96cm x 24cm\n,\nPlease note: tools required for rack assembly are not included.\n}	Mirafit Black Competition Kettlebell Set & Weight Rack	699.95	This Competition Kettlebell Set features a consistent size from 8kg to 32kg. Each kettlebell has a black body and a stainless-steel handle for excellent feel. The included kettlebell storage rack ensures your gym space stays neat and well organized	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/S/e/Set-of-Mirafit-Gen-II-Competition-Kettlebells-with-Storage-Rack.jpg	kettlebells	weights-and-bars	0
99	{textArr: \nMirafit Competition Kettlebells\n,\nCompetition kettlebells featuring a consistent size and handle diameter\n,\nDurable cast steel body with stainless steel handle\n,\nAvailable in a choice of weights or sets\n,\nCalibrated to +/- 200g\n,\nAll kettlebells have the same dimensions for ease of use\n,\nFlat base prevents kettlebell rolling away or rocking\n,\nBlack powder coated finish\n,\nPremium stainless steel handle for an excellent feeling in the hand.\nPlease note stainless handle will show polishing marks\n,\nContrasting debossed Mirafit logo and weight label on front in white\nfor easy identification\n,\nKettlebell Measurements:\n,\n28cm x 21cm x 21cm\n,\nHandle: 34mm\n,\nKettlebell sets also available including full set with optional\nstorage rack\n,\nStorage rack measurements: 75cm (h) x 104cm (w) x 50.5cm (d)\n}	Mirafit Black Competition Kettlebells	49.95	Our latest Competition Kettlebells feature a durable black body with premium stainless-steel handle for excellent feel. Available from 8kg to 32kg or in sets, these kettlebells share a common size throughout the range to support consistent technique	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/S/e/Set-of-Mirafit-Gen-II-Competition-Kettlebells_2.jpg	kettlebells	weights-and-bars	0
100	{textArr: \nMirafit Cast Iron Kettlebells\n,\nAvailable in a range of weights from 4kg to 32kg\n,\nPowder coated matt black finish with orange styling\n,\nComfortable easy grip handle - feels great in the hand\n,\nFlat non wobble base prevents rolling\n,\nMirafit logo and kg indicator on front\n,\nAdditional kg and lb markings on rear for easy identification\n,\nDimensions (height x width, handle diameter):\n\n\n4kg kettlebell: 16.5cm x 15.5cm, 2.9cm\n\n\n6kg kettlebell: 18.5cm x 16.5cm, 3cm\n\n\n8kg kettlebell: 20cm x 17.5cm, 3.3cm\n\n\n10kg kettlebell: 21cm x 18.5cm, 3.4cm\n\n\n12kg kettlebell: 22cm x 19cm, 3.4cm\n\n\n16kg kettlebell: 23.5cm x 20cm, 3.5cm\n\n\n20kg kettlebell: 25cm x 20cm, 3.6cm\n\n\n24kg kettlebell: 26.5cm x 21cm, 3.7cm\n\n\n28kg kettlebell: 28cm x 22cm, 3.7cm\n\n\n32kg kettlebell: 29.5cm x 23cm, 3.8cm\n\n\n,\n4kg kettlebell: 16.5cm x 15.5cm, 2.9cm\n,\n6kg kettlebell: 18.5cm x 16.5cm, 3cm\n,\n8kg kettlebell: 20cm x 17.5cm, 3.3cm\n,\n10kg kettlebell: 21cm x 18.5cm, 3.4cm\n,\n12kg kettlebell: 22cm x 19cm, 3.4cm\n,\n16kg kettlebell: 23.5cm x 20cm, 3.5cm\n,\n20kg kettlebell: 25cm x 20cm, 3.6cm\n,\n24kg kettlebell: 26.5cm x 21cm, 3.7cm\n,\n28kg kettlebell: 28cm x 22cm, 3.7cm\n,\n32kg kettlebell: 29.5cm x 23cm, 3.8cm\n}	Mirafit Cast Iron Kettlebell - Choice of Weight	14.95	Our Cast Iron Kettlebells have been designed to help you get the most out of your strength training. Work your core resistance and develop grip strength, all in one go. Durable and hard-wearing. Available in a range of sizes, including 16kg, 20kg and 24kg kettlebells.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Cast-Iron-Kettlebells-MF-Award.jpg	kettlebells	weights-and-bars	0.049
101	{textArr: \nMirafit Cast Iron Kettlebell\n,\nBlack or orange coloured soft touch coating - floor friendly\n,\nAvailable in a range of weights from 6kg to 32kg and with an optional\nstorage rack\n,\nExcellent for working out arm, leg, back & ab muscles\n,\nHelps tone muscles, burn fat & build core strength\n,\nEasy grip handle\n,\nMirafit logo and weight printed on each kettlebell\n,\nStrong single cast construction with no welding\n,\nWeights and colours available:\n\n\n6kg kettlebell - orange\n\n\n8kg kettlebell - orange\n\n\n10kg kettlebell - orange\n\n\n12kg kettlebell - orange\n\n\n16kg kettlebell - orange\n\n\n20kg kettlebell - black\n\n\n24kg kettlebell - black\n\n\n28kg kettlebell - black\n\n\n32kg kettlebell - black\n\n\n,\n6kg kettlebell - orange\n,\n8kg kettlebell - orange\n,\n10kg kettlebell - orange\n,\n12kg kettlebell - orange\n,\n16kg kettlebell - orange\n,\n20kg kettlebell - black\n,\n24kg kettlebell - black\n,\n28kg kettlebell - black\n,\n32kg kettlebell - black\n}	Mirafit Soft Touch Cast Iron Kettlebell Weight	19.95	Build strength and improve your functional fitness levels using our Soft Touch Cast Iron Kettlebells. The outer coat protects the weights from knocks and scratches through regular use. Great for kitting out your home gym. Range of sizes available, including our popular 8kg kettlebell.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Soft-Touch-Cast-Iron-Kettlebell-Set-on-White-Background_1.jpg	kettlebells	weights-and-bars	0.048
102	{textArr: Mirafit Competition Kettlebells ,Our competition kettlebell range features a consistent size and handle diameter regardless of weight making them ideal for gradually building weight between sets ,Available in a choice of weight: ,8kg kettlebell with light pink rings ,10kg kettlebell with dark pink rings ,12kg kettlebell with blue rings ,16kg kettlebell with yellow rings ,20kg kettlebell with purple rings ,24kg kettlebell with green rings ,28kg kettlebell with orange rings ,32kg kettlebell with red rings ,A full set featuring one of each kettlebell ,A full set featuring one of each kettlebell + 2 tier storage rack ,Colour rings on handles make fast identification easy ,Ideal for gyms and personal trainer studios ,All kettlebells have the same dimensions for ease of use  ,Flat base prevents kettlebell rocking or rolling away ,Hollow steel ball with a sand and iron sand filling ,Black powder coated finish ,Debossed weight label on one side and debossed Mirafit logo on the other ,Kettlebell Measurements: ,28cm x 21cm x 21cm ,Handle: 34mm }	Mirafit Competition Kettlebells	39.95	Practice your kettlebell swings and exercises with the Mirafit Competition Kettlebells. Featuring uniform dimensions and a flat base, these iron sand filled kettlebells are perfect for training for your next competition. From 8kg - 32kg.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Competition-Kettlebells-on-a-White-Background_2.jpg	kettlebells	weights-and-bars	0
103	{textArr: \nMirafit Urethane Competition Kettlebells\n,\nAvailable in a range of weights from 8kg to 32kg or as a kettlebell set\n,\nCommercially rated PU kettlebells with excellent durability\n,\nCompetition spec where all weights are the same uniform size for ease\nof use\n,\nColour rings on each kettlebell make identification easy:\n,\n8kg kettlebell with light pink rings\n,\n12kg kettlebell with blue rings\n,\n16kg kettlebell with yellow rings\n,\n20kg kettlebell with purple rings\n,\n24kg kettlebell with green rings\n,\n28kg kettlebell with orange rings\n,\n32kg kettlebell with red rings\n,\nAlso available as a set of all 7 kettlebells with optional storage rack\n,\nUrethane body offers superior impact absorption and retains its colour\nfor longer, making these kettlebells ideal for commercial gyms or\npremium home studio setups \n,\nFlat front with a curved back\n,\nLarge weight label on the front of each kettlebell\n,\nFlat base prevents kettlebell from rocking\n,\nMatte textured chrome handle for improved grip\n,\nKettlebell Measurements (all weights are same size):\n\n\nHeight: 30.5cm\n\n\nWidth: 21cm\n\n\nDepth: 19cm\n\n\nHandle: 34mm\n\n\n,\nHeight: 30.5cm\n,\nWidth: 21cm\n,\nDepth: 19cm\n,\nHandle: 34mm\n,\nOptional storage rack measurements: 75cm (h) x 104cm (w) x 50.5cm (d)\n}	Mirafit Urethane Competition Kettlebells	49.95	Introducing the Mirafit Urethane Competition Kettlebells. These commercially rated kettlebells are available from 8kg to 32kg in weight and feature a urethane body, which offers excellent durability and impact absorption. Also available as a set.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/s/e/set-Mirafit-Urethane-Kettlebells_2.jpg	kettlebells	weights-and-bars	0
104	{textArr: Mirafit Kettlebell Set ,Please Note - these kettlebell weights are in pounds (lbs) NOT kilograms (kg) ,Includes 5lb (2.2kg), 10lb (4.5kg) and 15lb (6.8kg) kettlebells with storage stand ,Excellent for working out arm, leg, back and ab muscles ,Increases core strength ,Helps tone muscles and burn fat ,Handy storage stand keeps kettlebells together and tidy when not in use ,Easy clean surface ,Comfortable easy grip handles ,Dimensions -\n\n5Lb Kettlebell - W: 17cm X D: 13.5cm X H: 18.5cm \n10Lb Kettlebell - W: 18cm X D: 16.5cm X H: 22.5cm \n15Lb Kettlebell - W: 19.5cm X D: 20cm X H: 24.5cm \nStorage stand - W: 51.5cm X D: 21.5cm X H: 4cm ,5Lb Kettlebell - W: 17cm X D: 13.5cm X H: 18.5cm ,10Lb Kettlebell - W: 18cm X D: 16.5cm X H: 22.5cm ,15Lb Kettlebell - W: 19.5cm X D: 20cm X H: 24.5cm ,Storage stand - W: 51.5cm X D: 21.5cm X H: 4cm }	Mirafit 3pce Kettlebell Weight Set with Stand (Total 30lbs)	29.95	Our three piece kettlebell sets are ideal for taking your strength training to the next level. Each set includes 5lb, 10lb and 15lb weights with storage stand. Please note: the weights printed on these kettlebells are in pounds NOT kilograms.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-3-Piece-Kettlebell-Set-with-Stand.jpg	kettlebells	weights-and-bars	0.047
105	{textArr: Mirafit Olympic Plate Loading Pin T Handle ,Suitable for close-grip exercises including duck walk and strongman power stairs ,Solid steel 32mm diameter handle ,Adjustable height - 10 positions spaced at 1" intervals ,Suitable for use with 2" Olympic sized weight plates ,Matt black power coated finish ,Note: this product is not recommended for swinging exercises  ,Measurements:\n\nHeight: 41-64cm \nHandle width: 25.5cm \nHandle diameter: 32mm  \nSleeve diameter: 48mm ,Height: 41-64cm ,Handle width: 25.5cm ,Handle diameter: 32mm  ,Sleeve diameter: 48mm }	Mirafit Olympic Plate Loading Pin T Handle	49.95	Perfect for close-grip exercises including duck walk and power stairs, our Olympic Plate Loading Pins are a great way to diversify your training and build functional strength. An essential product for Strongman style training.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Loading-Pin-Power-Handle-on-White-Background.jpg	kettlebells	weights-and-bars	0.046
106	{textArr: Mirafit Soft Touch Kettlebell Set & Weight Rack ,Package Includes:\n\n6kg kettlebell (orange) \n8kg kettlebell (orange) \n10kg kettlebell (orange) \n12kg kettlebell (orange) \n16kg kettlebell (orange) \n20kg kettlebell (black) \n24kg kettlebell (black) \n28kg kettlebell (black) \n32kg kettlebell (black) \n2 tier kettlebell rack ,6kg kettlebell (orange) ,8kg kettlebell (orange) ,10kg kettlebell (orange) ,12kg kettlebell (orange) ,16kg kettlebell (orange) ,20kg kettlebell (black) ,24kg kettlebell (black) ,28kg kettlebell (black) ,32kg kettlebell (black) ,2 tier kettlebell rack ,Soft touch kettlebell coating is floor friendly and ideal for home gyms and studios ,Kettlebell workouts are a great way to exercise the full body including leg, arm, core and back muscles ,Handles are easy to grip and comfortable during use ,Mirafit logo and weight label is printed in white on each kettlebell, improving visibility ,Sturdy kettlebell rack with two 38" trays for easy storage ,Secured rubber tray liners protect against knocks and scratches ,300kg maximum load ,Rack measurements:\n\nHeight: 75cm \nWdith: 104cm \nDepth: 50.5cm \nTray: 96cm x 24cm ,Height: 75cm ,Wdith: 104cm ,Depth: 50.5cm ,Tray: 96cm x 24cm ,Please note: tools required for assembly are not included }	Mirafit Soft Touch Kettlebell Set & Weight Rack	599.95	Get a ready made gym setup with the Mirafit Soft Touch Kettlebell Set & Weight Rack. Ranging from a 6kg kettlebell to a 32kg kettlebell you get 9 weights and a 2 tier rack. The soft touch coating makes the weights floor friendly.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Soft-Touch-Kettlebells-with-stand-on-white-background_1.jpg	kettlebells	weights-and-bars	0
107	{textArr: Mirafit Kettlebell Set and Weight Rack ,Package includes:\n\n4kg cast iron kettlebell \n6kg cast iron kettlebell \n8kg cast iron kettlebell \n10kg cast iron kettlebell \n12kg cast iron kettlebell \n16kg cast iron kettlebell \n20kg cast iron kettlebell \n24kg cast iron kettlebell \n28kg cast iron kettlebell \n32kg cast iron kettlebell \n2 tier kettlebell rack ,4kg cast iron kettlebell ,6kg cast iron kettlebell ,8kg cast iron kettlebell ,10kg cast iron kettlebell ,12kg cast iron kettlebell ,16kg cast iron kettlebell ,20kg cast iron kettlebell ,24kg cast iron kettlebell ,28kg cast iron kettlebell ,32kg cast iron kettlebell ,2 tier kettlebell rack ,Powder coated matt black finish with orange styling ,Handle is easy to grip and comfortable to use ,Flat non-wobble base prevents rolling ,Two 38" kettlebell trays, suitable for storing up to 10 weights ,Secured rubber tray liners protect against knocks and scratches ,300kg maximum load ,Rack measurements:\n\nHeight: 75cm \nWidth: 104cm \nDepth: 50.5cm \nTray: 96cm x 24cm ,Height: 75cm ,Width: 104cm ,Depth: 50.5cm ,Tray: 96cm x 24cm ,Please note: tools required for assembly are not included }	Mirafit Kettlebell Set & Weight Rack	599.95	Kit out your gym with our purpose-built Cast Iron Kettlebell Set and Rack. The set includes a full range of weights starting at 4kg and going right up to 32kg. Each rack tray is lined with a soft rubber to protect your equipment from marks and damage	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Kettlebell-Set-and-Weight-Rack.jpg	kettlebells	weights-and-bars	0
109	{textArr: Mirafit Urethane Kettlebell Set & Weight Rack ,Package includes a set of 7 kettlebells from 8kg to 32kg and a sturdy two tier kettlebell storage rack  ,Ideal all in one kettlebell set up for gyms and training studios ,Commercially rated PU kettlebells with excellent durability ,Competition spec where all weights are the same uniform size for ease of use ,Colour rings and large white text on each kettlebell make identification easy: ,8kg kettlebell with light pink rings ,12kg kettlebell with blue rings ,16kg kettlebell with yellow rings ,20kg kettlebell with purple rings ,24kg kettlebell with green rings ,28kg kettlebell with orange rings ,32kg kettlebell with red rings ,Urethane body offers superior impact absorption and retains its colour for longer, making these kettlebells ideal for commercial gyms or premium home studio setups  ,Each kettlebell has a flat front with a curved back ,Flat bases on each kettlebell prevent them from rocking ,Matte textured chrome handle for improved grip ,Kettlebell Measurements (all weights are same size):\n\nHeight: 30.5cm \nWidth: 21cm \nDepth: 19cm \nHandle: 34mm ,Height: 30.5cm ,Width: 21cm ,Depth: 19cm ,Handle: 34mm ,Rack measurements:\n\nHeight: 75cm \nWidth: 104cm \nDepth: 50.5cm \nTray: 96cm x 24cm ,Height: 75cm ,Width: 104cm ,Depth: 50.5cm ,Tray: 96cm x 24cm ,Please note: tools required for rack assembly are not included }	Mirafit Urethane Kettlebell Set & Weight Rack	899.95	This Mirafit Urethane Kettlebell Set is ideal for any gym or studio. The set includes 7 kettlebells from 8kg to 32kg and two tier storage rack. Suitable for home or commercial use, these kettlebells feature a durable PU body and matt chrome handles	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/s/e/set-Mirafit-Urethane-Kettlebells-and-rack.jpg	kettlebells	weights-and-bars	0
110	{textArr: \nMirafit Gen III Stitched Medicine Wall Ball\n,\nAvailable in a range of weights:\n,\n3kg wall ball\n,\n4kg wall ball\n,\n5kg wall ball\n,\n6kg wall ball\n,\n7kg wall ball\n,\n8kg wall ball\n,\n9kg wall ball\n,\n10kg wall ball\n,\n12kg wall ball\n,\nAll weights are approx. 13"/33cm diameter for easy storage \n,\nVersatile design suitable for various core strength workouts \n,\nLatest non-slip textured surface for increased grip and feel\n,\nReinforced stitching for extra strength\n,\nWhite embroidered logo and weight text\n,\nStrong synthetic PU leather outer\n,\nAbsorbs impact when thrown against rigid surfaces\n,\nAdd resistance to your core and abdominal workouts\n,\nIncrease difficulty and enhance results during sit ups, lunges and\nsquats\n,\nPerfect for incorporating throwing and catching into your HIIT sessions\n,\nPlease note these balls are not designed for slamming. If you want to\nbe able to throw a ball hard against the floor or wall then you need\nto purchase a slam ball instead.\n,\nPlease also note due to the stitched construction these balls are not\na perfect round shape and so will not roll in a perfect straight line.\n}	Mirafit Classic 13" Medicine Wall Ball	34.95	With an improved non-slip textured surface for extra grip, our Gen III stitched medicine balls are ideal for building strength and endurance. Change up your workout routine to incorporate throwing and catching exercises and vary up HIIT training.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/5/k/5kg-Mirafit-Gen-3-Stitched-Medicine-Wall-Ball.jpg	medicine-balls	weights-and-bars	0.05
111	{textArr: Mirafit Medicine Ball With Handles ,Double handle grip makes these medicine balls perfect for partner workouts and larger circuit groups ,Great for incorporating into abdominal and core exercises ,Also ideal for rotational movements and medicine ball swings ,Printed weight indicator on side and end of ball makes switching between different weights easy. Ideal for gyms and personal trainer studios. ,Improve and develop strength, balance and explosive power ,Textured rubber surface for a secure and comfortable grip ,Please note: these balls are not designed for throwing against hard surfaces. If you need a ball that will withstand hard impact please use a Mirafit slam ball. ,Medicine ball diameters:\n\n3kg to 4kg: 22cm \n5kg to 12kg: 27cm ,3kg to 4kg: 22cm ,5kg to 12kg: 27cm }	Mirafit Medicine Ball With Handles	24.95	Our Medicine Balls with Handles are perfect for functional training and building core strength. Ideal for improving power and explosivity, the rubber surface of these balls makes for a comfortable and secure grip. Available in a range of weights.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/1/2/12kg-Mirafit-double-handle-medicine-ball-on-a-white-background.jpg	medicine-balls	weights-and-bars	0.05
112	{textArr: Mirafit 14" Wall Ball ,Oversize medicine ball available in a range of weights ,Suitable for home and commercial gyms ,All weights are the same 36cm / 14" diameter ,Durable polyurethane material with anti-slip texture for increased grip and feel ,Interior foam wall helps maintain shape and stability ,Reinforced stitching ,Suitable for various core strength workouts ,Not suitable for slamming ,Large weight label for easy identification ,Please note: These balls are not designed for slamming. If you wish to incorporate slamming movements into your workout please purchase a slam ball }	Mirafit Large 14" Medicine Wall Ball	39.95	Get a great core workout with these Mirafit 14" Wall Balls. These oversize medicine balls are available in a range of weights with a consistent 14" diameter. The balls feature a durable PU material with anti-slip texture for improved grip and feel.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Stitched-Medicine-Wall-Ball-7kg_1.jpg	medicine-balls	weights-and-bars	0
113	{textArr: Mirafit 10" Mini Wall Ball  ,Available in a range of weights ,Compact 10" size ideal for improving control and technique ,Saves on storage space compared to our oversize wall balls  ,Suitable for home and commercial gyms ,All weights are the same 25cm / 10" diameter ,Durable polyurethane material with anti-slip texture for increased grip and feel ,Interior foam wall helps maintain shape and stability ,Reinforced stitching ,Suitable for various core strength workouts ,Not suitable for slamming ,Large weight label for easy identification ,Please note: These balls are not designed for slamming. If you wish to incorporate slamming movements into your workout please purchase a slam ball }	Mirafit Small 10" Medicine Wall Ball	29.95	Save on storage space with these Mirafit Mini Wall Balls. With a smaller 25cm diameter, these compact wall balls are suitable for home or commercial gyms and feature an anti-slip texture with reinforced stitching. Available from 3kg to 10kg weight	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Mini-Wall-Ball-8kg_1.jpg	medicine-balls	weights-and-bars	0.05
145	{textArr: Mirafit Wrist Roller ,Improves forearm and grip strength ,11 gauge steel construction ,Thick 48mm diameter grip ,Matt black powder coated finish ,Strong nylon strap with 10 adjustable length settings ,Includes black steel carabiner ,Measurements: ,Strap length: 150cm ,Handle length: 38cm ,Grip length: 15cm ,Grip diameter: 4.8cm }	Mirafit Wrist Roller	34.95	Our Wrist Rollers allow you to build grip and forearm strength. Each roller comes with an adjustable strap and an accompanying carabiner clip for weight plates and kettlebells. The thick grip handles have a 4.8cm diameter to challenge your workouts.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Wrist-Roller_1.jpg	wearable-weights	weights-and-bars	0.048
114	{textArr: \nMirafit Strongman Sandbags For Strongman Training (sand not included)\n,\nThese bags have been significantly improved over time with additional\nreinforcement for extra strength\n,\nAvailable in a choice of sizes:\n\n\n50kg sandbag\n\n\n75kg sandbag\n\n\n100kg sandbag\n\n\n125kg sandbag\n\n\n150kg sandbag\n\n\n,\n50kg sandbag\n,\n75kg sandbag\n,\n100kg sandbag\n,\n125kg sandbag\n,\n150kg sandbag\n,\nSuitable for a variety of strength training including carry exercises\nand platform lifts\n,\nBuilt in filler bag - simply poor sand directly into bag, seal the\nfastenings and begin exercising\n,\nHeavy duty 1000D nylon for increased durability\n,\nReinforced triple stitched seams with extra strong zipper\n,\nDouble fastening for a more secure seal\n,\nMeasurements:\n,\n50kg sandbag: 28cm x 42cm\n,\n75kg sandbag: 37cm x 42cm\n,\n100kg sandbag: 48cm x 42cm\n,\n125kg sandbag: 61cm x 42cm\n,\n150kg sandbag: 76cm x 42cm\n,\nNote: these bags can be dropped but are not designed to be slammed or\ndragged\n,\nWeight of bag will vary according to exact sand used. We recommend\ncoarse rather than fine sand. This can be purchased from any good\nbuilders' merchant or diy store\n}	Mirafit Gen III Sandbag for Strongman Training - Choice of Size	49.95	Reinforced Sandbags for Strongman that go above and beyond your average workout. Specifically designed to cope with extreme weight loads, get up to 150kg of sand in one bag! Complete with a built-in filler bag. Use at home, in the gym or at the park.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/S/e/Set-of-Mirafit-Strongman-Sandbags-Black.jpg	sandbags	weights-and-bars	0.048
115	{textArr: \nMirafit Sandbags (Sand Not Included)\n,\nAvailable in three sizes: 15kg sandbag, 30kg sandbag or 60kg sandbag\n(max capacity)\n,\nIncludes outer bag and internal filler bag for sand (see below for\nspecifications)\n,\nSuitable for a variety of workouts and strength training - helps\ndevelop core strength, stability, balance and focus\n,\nMultiple exterior handles on sides and ends ideal for a range of\nexercises\n,\nHeavy duty 1000D cordura nylon with thick black strapping\n,\nReinforced triple stitched seams with strong YKK zipper\n,\nFiller bags feature double fastening for a secure load\n,\nSpare filler bags also available in 15kg and 25kg sizes\n,\nMeasurements:\n,\n15kg sandbag: 50cm x 19cm (includes one 15kg filler bag)\n,\n30kg sandbag: 64cm x 22cm (includes one 15kg and one 25kg filler bag\n- please part fill each filler bag)\n,\n60kg sandbag: 84cm x 27cm (includes three 25kg filler bags - please\npart fill each filler bag)\n,\nPlease note these bags are delivered unfilled - sand is not\nincluded but can be purchased from your local DIY superstore\n,\nPlease position the end of each filler bag inside the outer bag before\nadding sand otherwise it will be difficult to insert\n,\nThese sandbags are intended for lifting and carrying. They are not\nsuitable for dragging exercises\n}	Mirafit Gym Sandbag - Choice of Size	5.95	Ideal for strength and conditioning work, our Sandbags are designed to put your fitness and stamina to the test. Use to strengthen and build, as well as raise your heart rate. The hard-wearing bags have multiple handles for a range of exercises.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Orange-Gym-Sandbags-on-White-Background_1.jpg	sandbags	weights-and-bars	0.047
116	{textArr: Mirafit Sand Filled Power Bag ,Available in a choice of sizes:\n\n5kg power bag \n10kg power bag \n15kg power bag \n20kg power bag \n25kg power bag ,5kg power bag ,10kg power bag ,15kg power bag ,20kg power bag ,25kg power bag ,Weighted bags designed to help develop core strength, stability, balance and focus ,Five exterior handles on sides and ends allow for a variety of training styles ,Ideal for strength training, boxing and mma ,Great for rehabilitation, conditioning and toning exercises ,An ideal alternative to medicine balls, kettlebells and dumbbells ,Perfect for bootcamps and group sessions both indoors and outdoors ,Durable PVC outer with reinforced stitching and extra strong, hidden zipper ,High density foam liner ensures bag keeps its shape and structure during use ,Sand filling with iron sand mixture on the heavier bags ,Measurements: 55.5cm X 21cm ,Please note: these sandbags are not suitable for dragging exercises }	Mirafit Sand Filled Power Bag - Choice of Size	29.95	Our Sand Filled Power Bags are strong, durable and built for high impact workouts. Ideal for improving functional fitness levels, each bag comes with five handles for a variety of training styles.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-20kg-Sand-Filled-Power-Bag.jpg	sandbags	weights-and-bars	0.05
117	{textArr: \nMirafit Sack Style Sandbag (Sand Not Included)\n,\nAvailable in a choice of three sizes:\n\n\n50-75kg sandbag\n\n\n75-100kg sandbag\n\n\n100-125kg sandbag\n\n\n,\n50-75kg sandbag\n,\n75-100kg sandbag\n,\n100-125kg sandbag\n,\nIdeal for strongman training and events\n,\nIncludes outer bag and internal filler bag\n,\nUpgraded 1050D heavy duty cordura nylon for increased durability\n,\nNow with newly improved canvas internal filler bag\n,\nCumbersome sack style shape ideal for carrying and loading exercises\n,\nReinforced quadruple stitched seams\n,\nStrong strap and buckle fastening\n,\nNote: these bags can be dropped but are not designed to be slammed or\ndragged\n,\nMeasurements (approx measurements when filled):\n\n\n50-75kg sandbag: 60cm X 40cm\n\n\n75-100kg sandbag: 70cm X 40cm\n\n\n100-125kg sandbag: 77cm X 40cm\n\n\n,\n50-75kg sandbag: 60cm X 40cm\n,\n75-100kg sandbag: 70cm X 40cm\n,\n100-125kg sandbag: 77cm X 40cm\n,\nHow to fill your sandbag:\n\n\nOpen main sandbag and place empty filler bag inside\n\n\nOpen out filler bag within the main bag and fill with sand\n\n\nCourse sand is better than fine as it's less likely to leak\n\n\nLoad sand up to desired weight\n\n\nTwist neck of filler bag and secure\n\n\nGather neck of main bag as close as possible to the filler bag.\nThis is important in order to avoid the filler bag from moving\naround inside the main bag\n\n\nFasten neck of main bag securely using the strap and buckle\n\n\n,\nOpen main sandbag and place empty filler bag inside\n,\nOpen out filler bag within the main bag and fill with sand\n,\nCourse sand is better than fine as it's less likely to leak\n,\nLoad sand up to desired weight\n,\nTwist neck of filler bag and secure\n,\nGather neck of main bag as close as possible to the filler bag.\nThis is important in order to avoid the filler bag from moving\naround inside the main bag\n,\nFasten neck of main bag securely using the strap and buckle\n}	Mirafit Heavy Sack Style Sandbag for Strongman Training	34.95	Our Heavy Sack Sandbags are a versatile Strongman training tool. Load up to 125kg of sand for a range of exercises and strength training. A heavy duty, sack style bag with buckle strap fastening for quick and easy weight change	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Sack-Sandbag-Set-of-three.jpg	sandbags	weights-and-bars	0.044000000000000004
118	{textArr: \nThese bags are at a low price as there are white marks and\nresidue on the surface. This can be seen in some of the photos and\ndoes not affect their use. \n,\nMirafit Heavy Duty Sandbag\n,\nAvailable in a range of pre-filled weights\n,\nHighly durable and abrasion resistant composite material\n,\nDesigned to withstand vigorous use\n,\nFive exterior handles for a variety of training styles\n,\nInterior foam wall helps maintain shape and stability during use\n,\nReinforced stitching\n,\nSuitable for home and commercial gyms\n,\nGreat tool for developing core strength, stability, power and balance\n,\nLarge weight label for easy identification\n,\nPlease note these bags are not suitable for slamming or dragging on\nbare floors, concrete surfaces or outdoor use. This will invalidate\nany warranty. Always ensure suitable rubber gym flooring is used\n,\nMeasurements:\n\n\n5kg sandbag: 51cm x 20cm\n\n\n10kg sandbag: 52cm x 20cm\n\n\n15kg sandbag: 56cm x 21cm\n\n\n20kg sandbag: 61cm x 24cm\n\n\n25kg sandbag: 67cm x 24cm\n\n\n30kg sandbag: 69cm x 25cm\n\n\n,\n5kg sandbag: 51cm x 20cm\n,\n10kg sandbag: 52cm x 20cm\n,\n15kg sandbag: 56cm x 21cm\n,\n20kg sandbag: 61cm x 24cm\n,\n25kg sandbag: 67cm x 24cm\n,\n30kg sandbag: 69cm x 25cm\n}	Mirafit Heavy Duty Sandbag	29.95	Get a superior core workout with these Mirafit Heavy Duty Sandbags. These durable sandbags feature five handles and an abrasion resistant material designed to withstand vigorous use.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-10kg-Heavy-Duty-Sandbag_1.jpg	sandbags	weights-and-bars	0
119	{textArr: \nMirafit No Bounce Slam Ball\n,\n7 sizes available:\n\n\n2kg slam ball\n\n\n3kg slam ball\n\n\n5kg slam ball\n\n\n8kg slam ball\n\n\n10kg slam ball\n\n\n12kg slam ball\n\n\n15kg slam ball\n\n\n,\n2kg slam ball\n,\n3kg slam ball\n,\n5kg slam ball\n,\n8kg slam ball\n,\n10kg slam ball\n,\n12kg slam ball\n,\n15kg slam ball\n,\nNon bounce design - designed for repeated slamming on solid surfaces\n,\nProvides weight resistance through a full range of unrestricted\nnatural motions - including throwing, swinging and rotation\n,\nSand filled ball prevents bouncing and rolling between slams\n,\nTextured black vinyl surface provides grip and durability\n,\nHelps increase core strength - works on abs, shoulders, back, arms and\nlegs\n,\nImproves flexibility, balance and reaction speed\n,\nDimensions:\n,\n2kg slam ball - 10kg slam ball = 25cm diameter\n,\n12kg slam ball - 15kg slam ball = 29cm diameter\n}	Mirafit Non Bounce Slam Ball	12.95	Our Slam Balls are designed to help you work your body to its full potential. Increase your explosive power while strengthening your stabilising muscles. Tailor your workout with different weights for different muscle groups.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Non-Bounce-Slam-Ball-2kg-on-White-Background.jpg	slam-balls	weights-and-bars	0.05
120	{textArr: \nMirafit Tyre Tread No Bounce Slam Ball\n,\nAvailable in a choice of size:\n\n\n2kg slam ball\n\n\n3kg slam ball\n\n\n4kg slam ball\n\n\n5kg slam ball\n\n\n6kg slam ball\n\n\n7kg slam ball\n\n\n8kg slam ball\n\n\n9kg slam ball\n\n\n10kg slam ball\n\n\n12kg slam ball\n\n\n15kg slam ball\n\n\n20kg slam ball\n\n\n25kg slam ball\n\n\n30kg slam ball\n\n\n50kg slam ball\n\n\n75kg slam ball\n\n\n,\n2kg slam ball\n,\n3kg slam ball\n,\n4kg slam ball\n,\n5kg slam ball\n,\n6kg slam ball\n,\n7kg slam ball\n,\n8kg slam ball\n,\n9kg slam ball\n,\n10kg slam ball\n,\n12kg slam ball\n,\n15kg slam ball\n,\n20kg slam ball\n,\n25kg slam ball\n,\n30kg slam ball\n,\n50kg slam ball\n,\n75kg slam ball\n,\nDesigned for repeated slamming on solid surfaces\n,\nPerfect for improving functional fitness levels\n,\nUse for various throwing, swinging and rotating exercises\n,\nSand filled ball prevents bouncing and rolling in-between slams\n,\nTyre tread pattern PVC surface for improved grip and durability\n,\nHelps to build core strength as well as target your shoulders, back,\narms and legs\n,\nIdeal for improving endurance, speed and power\n,\nMeasurements:\n\n\n2kg slam ball - 10kg slam ball = 22cm diameter\n\n\n12kg slam ball - 30kg slam ball = 30cm diameter\n\n\n50kg slam ball = 37cm diameter\n\n\n75kg slam ball = 39cm diameter\n\n\n,\n2kg slam ball - 10kg slam ball = 22cm diameter\n,\n12kg slam ball - 30kg slam ball = 30cm diameter\n,\n50kg slam ball = 37cm diameter\n,\n75kg slam ball = 39cm diameter\n}	Mirafit Tyre Tread Slam Ball	14.95	Our Tyre Tread Slam Balls are durable and versatile. Each ball has a textured surface for increased grip while you train. Ideal for improving power and speed, the non bounce design stops the balls from rolling away. Available in sizes 2kg to 30kg.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/m/i/mirafit-tyre-tread-slam-ball-2kg.jpg	slam-balls	weights-and-bars	0.048
121	{textArr: \nMirafit Large Slam Balls\n,\nAvailable in a range of weights\n,\nHighly durable and abrasion resistant composite material\n,\nLatest non-slip textured surface for increased grip and feel\n,\nSuitable for home and commercial gyms\n,\nInterior foam wall helps maintain shape and stability\n,\nReinforced stitching\n,\nAll weights are the same 36cm / 14" diameter\n,\nLarge weight label for easy identification\n,\nVersatile design suitable for various workouts and exerises\n,\nSuitable for slamming or throwing on impact absorbing rubber gym\nfloors that are clear of debris\n,\nPlease note our slam balls are not suitable for slamming on bare\nfloors, concrete surfaces or outdoor use. This will invalidate any\nwarranty. Always ensure suitable rubber gym flooring is used\n}	Mirafit Large 14" Slam Ball	49.95	Offer price on 7, 14, 16, 18 and 22kg sizes whilst stocks last. These commercial grade heavy duty slam balls are made from a highly durable abrasion resistant material with reinforced stitching for extra durability	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Oversized-Slam-Ball-3kg_1.jpg	slam-balls	weights-and-bars	0
122	{textArr: \nMirafit Calibrated Cast Iron Weight Plates\n,\nAs featured in Giant's Live Deadlift events\n,\nSold in pairs or sets\n,\nCast iron construction with a machined finish\n,\nCalibrated to achieve a precise +/- 10 grams accuracy\n,\nWhite stickers on reverse of disc cover calibration plugs\n,\nThin cut design allows up to 700kg on an Olympic barbell\n,\nSnug 50.4mm centre hole for a secure barbell fit that's ideal for\ndeadlifts (accurate to +/- 0.2mm)\n,\nDurable plates with a quality baked finish - please note the finish\nwill still scratch/chip slightly with metal on metal contact but is\nvastly superior compared to a regular painted finish\n,\nRaised Mirafit logo and weight indicator\n,\nColour coded for easy identification - colours follow IPF requirements\nfor powerlifting\n,\nWe recommend using a bar with hard chrome sleeves as black sleeves may\nscratch when in contact with metal plates\n,\nFractional change plates in chrome finish also available\n,\nMeasurements:\n,\n0.25kg weight plate: 112mm x 6mm\n,\n0.5kg weight plate: 134mm x 7mm\n,\n1.25kg weight plate: 160mm x 11mm\n,\n2.5kg weight plate: 190mm x 16mm\n,\n5kg weight plate: 228mm x 22mm\n,\n10kg weight plate: 325mm x 22mm\n,\n15kg weight plate: 400mm x 21mm\n,\n20kg weight plate: 450mm x 22mm\n,\n25kg weight plate: 450mm x 27mm\n,\nAlso available in sets:\n,\n150kg weight plate set includes 5/10/15/20/25kg pairs\n,\n9kg weight plate set includes 0.25/0.5/1.25/2.5kg pairs\n,\n159kg weight plate set includes 150kg set and 9kg set\n}	Mirafit Calibrated Cast Iron Weight Plates	19.95	Increase your powerlifting records with our Calibrated Cast Iron Weight Plates. These precision plates are machined and calibrated to within 10 grams of their stated weight with a thin profile and quality baked finish. Colour coded to IPF standards	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Calibrated-Cast-Iron-Weight-Plates-on-White-Background.jpg	weight-plates	weights-and-bars	0.049
123	{textArr: \nMirafit Calibrated Steel Weight Plates\n,\nSold in pairs or as a set\n,\nSteel plates with a hard chrome vacuum plated finish\n,\nCalibrated to a precise +/- 10g accuracy\n,\nExtra thin design allows even more weight to be added to a barbell\n,\nIdeal for powerlifters, deadlift, squat and heavy gym lifting\n,\nSuitable for use on a 2" Olympic barbell\n,\n50.6mm centre hole (accurate to +/- 0.2mm)\n,\nBlack debossed logos and weight labels\n,\nBlack colour rubber edge bands\n,\nWe also offer replacement edge bands for these plates in IPF\ncolours here\n,\nMeasurements:\n,\n5kg weight plate: 239mm x 17mm\n,\n10kg weight plate: 318mm x 18mm\n,\n15kg weight plate: 379mm x 19mm\n,\n20kg weight plate: 450mm x 18mm\n,\n25kg weight plate: 450mm x 22mm\n,\nSet option includes two weight plates in each size from 5kg to 25kg\n(150kg total)\n}	Mirafit Calibrated Steel Weight Plates	59.95	Fit more weight on the bar with these Mirafit Calibrated Steel Weight Plates. The extra thin design is ideal for powerlifters and anyone lifting big totals in the gym. Available in pairs or as a weight plate set.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Calibrated-Steel-Weight-Plates_1.jpg	weight-plates	weights-and-bars	0
124	{textArr: \nMirafit Black Deep Dish Olympic Weight Plates\n,\nSold in pairs\n,\nBlack finish with contrasting orange or white raised letters for easy\nidentification\n,\nCast iron plates with classic deep dish design\n,\nSatisfying old school metal-on-metal sound\n,\nDeep dish style makes the plates easy to carry and load onto the\nbarbell\n,\nAvailable in regular and fractional sizes\n,\n77.5kg set also available which includes 2 x 20kg, 2 x 10kg, 2 x 5kg,\n2 x 2.5kg and 2 x 1.25kg plates\n,\nPlease note due to the casting process the finish on these products\nmay vary slightly\n,\nMeasurements:\n\n\n1.25kg weight plate - 160mm x 16mm\n\n\n2.5kg weight plate - 200mm x 23mm\n\n\n5kg weight plate - 230mm x 32mm\n\n\n10kg weight plate - 325mm x 32mm\n\n\n15kg weight plate - 360mm x 36mm\n\n\n20kg weight plate - 450mm x 40mm\n\n\n25kg weight plate - 450mm x 45mm\n\n\n,\n1.25kg weight plate - 160mm x 16mm\n,\n2.5kg weight plate - 200mm x 23mm\n,\n5kg weight plate - 230mm x 32mm\n,\n10kg weight plate - 325mm x 32mm\n,\n15kg weight plate - 360mm x 36mm\n,\n20kg weight plate - 450mm x 40mm\n,\n25kg weight plate - 450mm x 45mm\n}	Mirafit Black Deep Dish Olympic Weight Plates	9.95	These cast iron plates feature a classic deep dish design finished in black with a choice of orange or white raised letters. The deep dish rim makes these plates easy to carry and the cast iron adds a satisfying old school sound to any gym.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Black-and-Orange-Deep-Dish-Olympic-Weight-Plates.jpg	weight-plates	weights-and-bars	0
125	{textArr: Mirafit Deep Dish Olympic Weight Plates ,Sold in pairs ,Cast iron plates with classic deep dish design ,Satisfying old school metal-on-metal sound ,Durable grey hammertone finish ,Contrasting black raised letters for easy identification ,Deep dish style makes the plates easy to carry and load onto the barbell ,Available in regular and fractional sizes ,Please note due to the casting process the finish on these products may vary slightly ,Measurements:\n\n1.25kg weight plate - 160mm x 16mm \n2.5kg weight plate - 200mm x 23mm \n5kg weight plate - 230mm x 32mm \n10kg weight plate - 325mm x 32mm \n15kg weight plate - 360mm x 36mm \n20kg weight plate - 450mm x 40mm \n25kg weight plate - 450mm x 45mm ,1.25kg weight plate - 160mm x 16mm ,2.5kg weight plate - 200mm x 23mm ,5kg weight plate - 230mm x 32mm ,10kg weight plate - 325mm x 32mm ,15kg weight plate - 360mm x 36mm ,20kg weight plate - 450mm x 40mm ,25kg weight plate - 450mm x 45mm }	Mirafit Deep Dish Olympic Weight Plates	9.95	Add that classic old school look and sound to your gym with these Mirafit Deep Dish Olympic Weight Plates. These heavy duty cast iron plates come in a range of weights and the deep dish design makes them easy to carry and load onto bars.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Deep-Dish-Olympic-Weight-Plates.jpg	weight-plates	weights-and-bars	0.05
126	{textArr: Mirafit Olympic Fractional Plates Set ,Includes:\n\n2 X 0.25kg weight plates \n2 X 0.5kg weight plates \n2 X 0.75kg weight plates \n2 X 1kg weight plates \nTravel bag ,2 X 0.25kg weight plates ,2 X 0.5kg weight plates ,2 X 0.75kg weight plates ,2 X 1kg weight plates ,Travel bag ,Compatible with all Olympic 2" barbells and dumbbell bars ,Chrome plated steel construction ,Calibrated to +/- 10g ,Measurements (diameter X thickness):\n\n0.25kg weight plates: 10.5cm X 0.5cm \n0.5kg weight plates: 10.5cm X 1cm \n0.75kg weight plates: 10.5cm X 1.5cm \n1kg weight plates: 10.5cm X 2cm ,0.25kg weight plates: 10.5cm X 0.5cm ,0.5kg weight plates: 10.5cm X 1cm ,0.75kg weight plates: 10.5cm X 1.5cm ,1kg weight plates: 10.5cm X 2cm }	Mirafit Olympic Fractional Plates Set	39.95	Our Fractional Plates Sets are ideal for helping you push past your one-rep max. These chrome plated steel plates are suitable for 2" Olympic weight bars. Sets include plates ranging from 0.25kg to 1kg, as well as a travel bag to take to the gym.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Olympic-Fractional-Plates-Set.jpg	weight-plates	weights-and-bars	0.05
127	{textArr: \nMirafit Hex Olympic Weight Plates\n,\n12 sided design stops weights rolling on the floor\n,\nBuilt in handles making loading and unloading a breeze\n,\nAvailable in a full range of weight sizes\n,\nSupplied in pairs\n,\nCast iron construction with a durable, textured matt black rubber\nfinish\n,\nStainless steel centre ring\n,\nRaised Mirafit logo and weight label\n,\nSuitable for use with Olympic barbells\n,\nPlate diameters:\n\n\n1.25kg weight plates: 16cm\n\n\n2.5kg weight plates: 21cm\n\n\n5kg weight plates: 24.5cm\n\n\n10kg weight plates: 30.5cm\n\n\n15kg weight plates: 35.5cm\n\n\n20kg weight plates: 43cm\n\n\n25kg weight plates: 43cm\n\n\n,\n1.25kg weight plates: 16cm\n,\n2.5kg weight plates: 21cm\n,\n5kg weight plates: 24.5cm\n,\n10kg weight plates: 30.5cm\n,\n15kg weight plates: 35.5cm\n,\n20kg weight plates: 43cm\n,\n25kg weight plates: 43cm\n}	Mirafit Hex Olympic Weight Plates	12.95	Our Hex Olympic Weight Plates are a great all-rounder. The two-handle design makes them easy to pick up and train with. And the angled sides help to prevent plates from rolling away.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Hex-Olympic-Weight-Plates.jpg	weight-plates	weights-and-bars	0.05
128	{textArr: \nMirafit Cast Iron Ruck Plates\n,\nAvailable in a choice of size:\n\n\n5kg ruck plate\n\n\n10kg ruck plate\n\n\n15kg ruck plate\n\n\n20kg ruck plate\n\n\nFull set also available (includes 1 plate in each size)\n\n\n,\n5kg ruck plate\n,\n10kg ruck plate\n,\n15kg ruck plate\n,\n20kg ruck plate\n,\nFull set also available (includes 1 plate in each size)\n,\nSimply add the ruck plate into a backpack or rucksack and start walking\n,\nProvides an all-in-one functional workout combining cardio, strength\nand resistance training\n,\nRucking builds cardiovascular health and can also improve posture\n,\nPlates include handles for easy insertion and removal\n,\nRounded edges prevent damage to floors when the plates are stored\n,\nEmbossed logo and weight indicator\n,\nMeasurements:\n\n\n5kg plate:\n\n\nHeight: 14.5cm\n\n\nWidth: 23cm\n\n\nDepth: 2.7cm\n\n\nHandle Width: 12.5cm\n\n\nHandle Height: 4cm\n\n\n\n\n10kg plate:\n\n\nHeight: 38cm\n\n\nWidth: 18cm\n\n\nDepth: 2.6cm\n\n\nHandle Width: 12.5cm\n\n\nHandle Height: 3.5cm\n\n\n\n\n15kg plate:\n\n\nHeight: 38cm\n\n\nWidth: 24cm\n\n\nDepth: 2.7cm\n\n\nHandle Width: 12.5cm\n\n\nHandle Height: 3.5cm\n\n\n\n\n20kg plate:\n\n\nHeight: 38cm\n\n\nWidth: 24.7cm\n\n\nDepth: 3.5cm\n\n\nHandle Width: 12.5cm\n\n\nHandle Height: 3.5cm\n\n\n\n\n,\n5kg plate:\n\n\nHeight: 14.5cm\n\n\nWidth: 23cm\n\n\nDepth: 2.7cm\n\n\nHandle Width: 12.5cm\n\n\nHandle Height: 4cm\n\n\n,\nHeight: 14.5cm\n,\nWidth: 23cm\n,\nDepth: 2.7cm\n,\nHandle Width: 12.5cm\n,\nHandle Height: 4cm\n,\n10kg plate:\n\n\nHeight: 38cm\n\n\nWidth: 18cm\n\n\nDepth: 2.6cm\n\n\nHandle Width: 12.5cm\n\n\nHandle Height: 3.5cm\n\n\n,\nHeight: 38cm\n,\nWidth: 18cm\n,\nDepth: 2.6cm\n,\nHandle Width: 12.5cm\n,\nHandle Height: 3.5cm\n,\n15kg plate:\n\n\nHeight: 38cm\n\n\nWidth: 24cm\n\n\nDepth: 2.7cm\n\n\nHandle Width: 12.5cm\n\n\nHandle Height: 3.5cm\n\n\n,\nHeight: 38cm\n,\nWidth: 24cm\n,\nDepth: 2.7cm\n,\nHandle Width: 12.5cm\n,\nHandle Height: 3.5cm\n,\n20kg plate:\n\n\nHeight: 38cm\n\n\nWidth: 24.7cm\n\n\nDepth: 3.5cm\n\n\nHandle Width: 12.5cm\n\n\nHandle Height: 3.5cm\n\n\n,\nHeight: 38cm\n,\nWidth: 24.7cm\n,\nDepth: 3.5cm\n,\nHandle Width: 12.5cm\n,\nHandle Height: 3.5cm\n}	Mirafit Cast Iron Ruck Plates	24.95	Our Cast Iron Ruck Plates allow combined cardio and strength training through a well-rounded rucking workout. Simply place the plate in a rucksack and begin walking. Available in 5kg, 10kg, 15kg, 20kg or as a full set of plates.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Cast-Iron-Ruck-Plates-on-White-Background_5.jpg	weight-plates	weights-and-bars	0.05
129	{textArr: \nMirafit Cast Iron Tri Grip Weights\n,\nDesigned for 1" standard size bars and attachments - NOT suitable for\nolympic bars\n,\nAvailable in a full range of weight sizes\n,\nTri grip design - quick and easy to load and unload\n,\nSolid cast iron construction\n,\nPrecision cast for increased weight accuracy\n,\nSilver/grey finish\n,\nPlate diameters:\n\n\n1.25kg weight: 15.5cm\n\n\n2.5kg weight: 18cm\n\n\n5kg weight: 23cm\n\n\n10kg weight: 30cm\n\n\n15kg weight: 34.5cm\n\n\n20kg weight: 38.5cm\n\n\n25kg weight: 40cm\n\n\n,\n1.25kg weight: 15.5cm\n,\n2.5kg weight: 18cm\n,\n5kg weight: 23cm\n,\n10kg weight: 30cm\n,\n15kg weight: 34.5cm\n,\n20kg weight: 38.5cm\n,\n25kg weight: 40cm\n}	Mirafit Cast Iron 1" Tri Grip Weights	9.95	Our Cast Iron 1" Tri Grip Weights are easy to grip, making weight changes quick and efficient. Available in a range of sizes. Can be used both on and off the bar. Suitable for both barbells and dumbbells.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Cast-Iron-1inch-Tri-Grip-Weights-on-White-Background.jpg	weight-plates	weights-and-bars	0.05
130	{textArr: Mirafit Cast Iron Tri Grip Weights ,Designed for 2" Olympic size bars and attachments ,Available in a full range of weight sizes ,Tri grip design - quick and easy to load and unload ,Solid cast iron construction ,Precision cast for increased weight accuracy ,Silver/grey finish ,Plate diameters:\n\n1.25kg plate: 15.3cm \n2.5kg plate: 18.9cm \n5kg plate: 26cm \n10kg plate: 34cm \n15kg plate: 38cm \n20kg plate: 40cm \n25kg plate: 40cm ,1.25kg plate: 15.3cm ,2.5kg plate: 18.9cm ,5kg plate: 26cm ,10kg plate: 34cm ,15kg plate: 38cm ,20kg plate: 40cm ,25kg plate: 40cm }	Mirafit Cast Iron 2" Olympic Tri Grip Weights	9.95	Kit out your home gym using our Tri Grip Cast Iron Weight Plates. Suitable for 2" Olympic bars, each plate is precision cast for accuracy. The tri grip design means they're easy to pick up and can be used without the bar for conditioning exercises.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Cast-Iron-2-inch-Olympic-Tri-Grip-Weights.jpg	weight-plates	weights-and-bars	0.049
131	{textArr: \nMirafit 150kg Black Bumper Plates Set + 15kg Change Plates + Storage\nTrolley\n,\nThis weightlifting set includes:\n\n\n1 x Portable Storage Trolley Rack\n\n\n2 x 5kg Olympic Bumper Plates\n\n\n2 x 10kg Olympic Bumper Plates\n\n\n2 x 15kg Olympic Bumper Plates\n\n\n2 x 20kg Olympic Bumper Plates\n\n\n2 x 25kg Olympic Bumper Plates\n\n\n2 x 0.5kg Fractional Change Plates (white)\n\n\n2 x 1kg Fractional Change Plates (green)\n\n\n2 x 1.5kg Fractional Change Plates (yellow)\n\n\n2 x 2kg Fractional Change Plates (blue)\n\n\n2 x 2.5kg Fractional Change Plates (red)\n\n\n,\n1 x Portable Storage Trolley Rack\n,\n2 x 5kg Olympic Bumper Plates\n,\n2 x 10kg Olympic Bumper Plates\n,\n2 x 15kg Olympic Bumper Plates\n,\n2 x 20kg Olympic Bumper Plates\n,\n2 x 25kg Olympic Bumper Plates\n,\n2 x 0.5kg Fractional Change Plates (white)\n,\n2 x 1kg Fractional Change Plates (green)\n,\n2 x 1.5kg Fractional Change Plates (yellow)\n,\n2 x 2kg Fractional Change Plates (blue)\n,\n2 x 2.5kg Fractional Change Plates (red)\n,\nSuitable for use on Olympic diameter bars\n,\nIncludes a total of 165kg of weight plates\n,\nSolid rubber construction on bumper plates with a stainless steel\ncentre ring \n,\nFractional change plates allow for increasing the weight level\ngradually and feature an anti slip design so are snug on the bar\n,\nStrong steel trolley rack has rear castor wheels and a front handle\nfor easy movement\n,\nMeasurements:\n,\nStorage Rack:\n,\nTotal height: 30cm\n,\nTotal width: 154.5cm\n,\nTotal depth: 40cm\n,\nBumper Plates:\n,\nDiameter: 45cm\n,\nThickness:\n,\n5kg bumper plate: 2.4cm\n,\n10kg bumper plate: 4.4cm\n,\n15kg bumper plate: 6.2cm\n,\n20kg bumper plate: 7.2cm\n,\n25kg bumper plate: 8.4cm\n,\nFractional Change Plates:\n,\nDiameter x thickness:\n,\n0.5kg fractional change plate: 13.4cm x 1.2cm\n,\n1kg fractional change plate: 15.8cm x 1.4cm\n,\n1.5kg fractional change plate: 17.4cm x 1.8cm\n,\n2kg fractional change plate: 18.9cm x 1.9cm\n,\n2.5kg fractional change plate: 20.9cm x 2.3cm\n}	Mirafit Black Bumper Plates Set & Change Plates & Storage Trolley	749.95	This weight plate and storage trolley set includes 150kg of our black rubber bumper plates, a 15kg fractional plate set and a handy portable trolley to neatly store all the plates. Ideal for any gym or club.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-150kg-Black-Bumper-Plates-Fractionals-Storage-Trolley.jpg	weight-sets-kits	weights-and-bars	0
132	{textArr: Mirafit M3 Barbell with Black Bumper Plates & Weight Storage Stand ,Includes:\n\n1 x Mirafit M3 20kg Olympic Barbell - Black\n1 x Pair of Quick Release Barbell Collars \n1 x Mirafit Horizontal Plate Rack & Bar Stand \nYour choice of bumper plate package ,1 x Mirafit M3 20kg Olympic Barbell - Black,1 x Pair of Quick Release Barbell Collars ,1 x Mirafit Horizontal Plate Rack & Bar Stand ,Your choice of bumper plate package ,Bumper plate package options:\n\n60kg weight set:\n\n2 x 5kg plates \n2 x 10kg plates \n2 x 15kg plates \n100kg weight set:\n\n2 x 5kg plates \n2 x 10kg plates \n2 x 15kg plates \n2 x 20kg plates \n150kg weight set:\n\n2 x 5kg plates \n2 x 10kg plates \n2 x 15kg plates \n2 x 20kg plates \n2 x 25kg plates ,60kg weight set:\n\n2 x 5kg plates \n2 x 10kg plates \n2 x 15kg plates ,2 x 5kg plates ,2 x 10kg plates ,2 x 15kg plates ,100kg weight set:\n\n2 x 5kg plates \n2 x 10kg plates \n2 x 15kg plates \n2 x 20kg plates ,2 x 5kg plates ,2 x 10kg plates ,2 x 15kg plates ,2 x 20kg plates ,150kg weight set:\n\n2 x 5kg plates \n2 x 10kg plates \n2 x 15kg plates \n2 x 20kg plates \n2 x 25kg plates ,2 x 5kg plates ,2 x 10kg plates ,2 x 15kg plates ,2 x 20kg plates ,2 x 25kg plates ,Black weight plates with white logo and weight labels ,Solid rubber construction on bumper plates absorbs impact,Stainless steel centre rings ,Strong steel storage rack with rubber feet to protect flooring ,Our M3 barbell is a fantastic all round performer with a hybrid grip pattern, eight-piece needle bearings and bronze bushings,Ideal for a wide range of gym and weightlifting exercises,Barbell features a black zinc coat finish,Quick release barbell collars make weight changes easy,Measurements: ,M3 Barbell:\n\nWeight: 20kg \nTotal length: 220cm \nCentre length: 131cm \nGrip diameter: 28mm \nLoad testing: 680kg ,Weight: 20kg ,Total length: 220cm ,Centre length: 131cm ,Grip diameter: 28mm ,Load testing: 680kg ,Rack: ,Total height: 27.5cm ,Total width: 109.5 cm ,Total depth: 34.5cm ,Bumper Plates:\n\nDiameter: 45cm \nThickness:\n\n5kg bumper plate: 2.4cm \n10kg bumper plate: 4.4cm \n15kg bumper plate: 6.2cm \n20kg bumper plate: 7.2cm \n25kg bumper plate: 8.4cm ,Diameter: 45cm ,Thickness:\n\n5kg bumper plate: 2.4cm \n10kg bumper plate: 4.4cm \n15kg bumper plate: 6.2cm \n20kg bumper plate: 7.2cm \n25kg bumper plate: 8.4cm ,5kg bumper plate: 2.4cm ,10kg bumper plate: 4.4cm ,15kg bumper plate: 6.2cm ,20kg bumper plate: 7.2cm ,25kg bumper plate: 8.4cm }	Mirafit M3 Olympic Barbell with Bumper Plate Set and Weight Storage Stand	499.95	Get your gym kickstarted with this Olympic barbell and weight set. Kit includes our signature black M3 barbell with quick release collars, a choice of bumper plate set and a sturdy storage rack to keep the bar and plates tidy and off the gym floor.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-150kg-Black-Bumper-Plates-Bar-and-Storage-Stand_1.jpg	weight-sets-kits	weights-and-bars	0
133	{textArr: \nMirafit Olympic Weight Bar and Weights Set\n,\nAvailable with a choice of four different barbells: \n\n\n7ft Bar - The ideal choice where space is not an issue. Fits all\nMirafit racks.\n\n\n6ft International Bar - This bar has shorter sleeves than a\nstandard 6ft barbell but a longer centre meaning it will still fit\nonto all Mirafit squat and power racks.\n\n\n6ft Bar - Our regular 6ft Olympic bar. Please note the centre of\nthis bar is not long enough to fit Mirafit power racks.\n\n\n5ft Bar - Ideal where space is very limited.\n\n\n,\n7ft Bar - The ideal choice where space is not an issue. Fits all\nMirafit racks.\n,\n6ft International Bar - This bar has shorter sleeves than a\nstandard 6ft barbell but a longer centre meaning it will still fit\nonto all Mirafit squat and power racks.\n,\n6ft Bar - Our regular 6ft Olympic bar. Please note the centre of\nthis bar is not long enough to fit Mirafit power racks.\n,\n5ft Bar - Ideal where space is very limited.\n,\nBarbells feature a chrome finish, knurled grips and are tested to 300kg\n,\nPlease note these bars are not designed to be dropped to the floor\nfrom overhead \n,\nA pair of spring collars is also included for the bar\n,\nChoose from either 60kg or 100kg of weight plates to suit your\nstrength level\n,\nOur crumb rubber bumpers are made from recycled rubber with stainless\nsteel centre rings and orange text\n,\n60kg set includes 2 x 5kg, 2 x 10kg, 2 x 15kg\n,\n100kg set includes 2 x 5kg, 2 x 10kg, 2 x 15kg, 2 x 20kg\n,\n7ft bar also available as a 150kg set which adds 2 x 25kg plates\n,\nSpecifications:\n\n\n7ft Olympic Bar:\n\n\nTotal length: 218cm\n\n\nSleeve length: 39.5cm\n\n\nCentre section length: 130.5cm\n\n\nGrip diameter: 28mm\n\n\nBar weight: approx. 17kg  (17.5kg with collars)\n\n\n\n\n6ft International Olympic Bar:\n\n\nTotal length: 186cm\n\n\nSleeve length: 25cm\n\n\nCentre section length: 130cm\n\n\nGrip diameter: 28mm\n\n\nBar weight: approx. 14kg (14.5kg with collars)\n\n\n\n\n6ft Olympic Bar:\n\n\nTotal length: 182cm\n\n\nSleeve length: 32.5cm\n\n\nCentre section length: 111cm\n\n\nGrip diameter: 28mm\n\n\nBar weight: approx. 14.5kg (15kg with collars)\n\n\n\n\n5ft Olympic Bar:\n\n\nTotal length: 152cm\n\n\nSleeve length: 26.5cm\n\n\nCentre section length: 93cm\n\n\nGrip diameter: 28mm\n\n\nBar weight: approx.12.8kg (13.3kg with collars)\n\n\n\n\nBumper Plates\n\n\nDiameter: 45cm (IWF standard)\n\n\nApprox. plate thickness:\n\n\n5kg bumper plate: 3.5cm\n\n\n10kg bumper plate: 6cm\n\n\n15kg bumper plate: 7.5cm\n\n\n20kg bumper plate: 8.3cm\n\n\n25kg bumper plate: 9cm\n\n\n\n\n,\n7ft Olympic Bar:\n\n\nTotal length: 218cm\n\n\nSleeve length: 39.5cm\n\n\nCentre section length: 130.5cm\n\n\nGrip diameter: 28mm\n\n\nBar weight: approx. 17kg  (17.5kg with collars)\n\n\n,\nTotal length: 218cm\n,\nSleeve length: 39.5cm\n,\nCentre section length: 130.5cm\n,\nGrip diameter: 28mm\n,\nBar weight: approx. 17kg  (17.5kg with collars)\n,\n6ft International Olympic Bar:\n\n\nTotal length: 186cm\n\n\nSleeve length: 25cm\n\n\nCentre section length: 130cm\n\n\nGrip diameter: 28mm\n\n\nBar weight: approx. 14kg (14.5kg with collars)\n\n\n,\nTotal length: 186cm\n,\nSleeve length: 25cm\n,\nCentre section length: 130cm\n,\nGrip diameter: 28mm\n,\nBar weight: approx. 14kg (14.5kg with collars)\n,\n6ft Olympic Bar:\n\n\nTotal length: 182cm\n\n\nSleeve length: 32.5cm\n\n\nCentre section length: 111cm\n\n\nGrip diameter: 28mm\n\n\nBar weight: approx. 14.5kg (15kg with collars)\n\n\n,\nTotal length: 182cm\n,\nSleeve length: 32.5cm\n,\nCentre section length: 111cm\n,\nGrip diameter: 28mm\n,\nBar weight: approx. 14.5kg (15kg with collars)\n,\n5ft Olympic Bar:\n\n\nTotal length: 152cm\n\n\nSleeve length: 26.5cm\n\n\nCentre section length: 93cm\n\n\nGrip diameter: 28mm\n\n\nBar weight: approx.12.8kg (13.3kg with collars)\n\n\n,\nTotal length: 152cm\n,\nSleeve length: 26.5cm\n,\nCentre section length: 93cm\n,\nGrip diameter: 28mm\n,\nBar weight: approx.12.8kg (13.3kg with collars)\n,\nBumper Plates\n\n\nDiameter: 45cm (IWF standard)\n\n\nApprox. plate thickness:\n\n\n5kg bumper plate: 3.5cm\n\n\n10kg bumper plate: 6cm\n\n\n15kg bumper plate: 7.5cm\n\n\n20kg bumper plate: 8.3cm\n\n\n25kg bumper plate: 9cm\n\n\n,\nDiameter: 45cm (IWF standard)\n,\nApprox. plate thickness:\n,\n5kg bumper plate: 3.5cm\n,\n10kg bumper plate: 6cm\n,\n15kg bumper plate: 7.5cm\n,\n20kg bumper plate: 8.3cm\n,\n25kg bumper plate: 9cm\n,\nDelivery \n\n\nThis product is delivered in multiple boxes\n\n\nThe courier will often not deliver all of the boxes at the same\ntime. Please wait at least 48 hours for the other boxes to arrive\nbefore contacting us\n\n\nOur bumper plates are supplied with a coating of silicone oil to\npreserve the plates during storage and transportation. This can be\nremoved using a damp cloth on arrival.\n\n\n,\nThis product is delivered in multiple boxes\n,\nThe courier will often not deliver all of the boxes at the same\ntime. Please wait at least 48 hours for the other boxes to arrive\nbefore contacting us\n,\nOur bumper plates are supplied with a coating of silicone oil to\npreserve the plates during storage and transportation. This can be\nremoved using a damp cloth on arrival.\n}	Mirafit Olympic Barbell & Weights Set	299.95	Our Olympic Barbell & Weight Sets are perfect for building strength and muscle. Choose an Olympic bar and a weight set that suits you to create your ideal strength training kit. Also includes a pair of spring barbell collars.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/K/i/Kit-Mirafit-7ft-bar-100kg-crumb-bumper-plates_1.jpg	weight-sets-kits	weights-and-bars	0.05
134	{textArr: Mirafit 20kg Studio Pump Set ,Contains:\n\n1 X 140cm bar \n2 X quick release collars \n2 X 1.25kg weights \n2 X 2.5kg weights \n2 X 5kg weights ,1 X 140cm bar ,2 X quick release collars ,2 X 1.25kg weights ,2 X 2.5kg weights ,2 X 5kg weights ,Additional plates available to purchase here. Max weight limit for bar is 40kg. ,Designed for high repetition movements with low weight load ,Soft padded bar provides comfort during workouts ,Please note this product is delivered in 2 boxes ,Bar specification - ,Total length: 140cm ,Sleeve length: 20cm ,Centre grip diameter: 3.5cm ,Bar weight including clips: 2.2kg }	Mirafit 20kg Studio Pump Set - Black/Orange/Grey	89.95	Build strength and definition using our Studio Pump Set. The barbell is lightly padded for comfort and comes with a selection of weight plates allowing you to switch your reps up as you train. Great for home workouts.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-20kg-Studio-Pump-Set-Black-Orange-Grey.jpg	weight-sets-kits	weights-and-bars	0.05
135	{textArr: \nMirafit Rubber Dumbbell Set & 3 Tier Weight Storage Rack\n,\nPackage includes:\n\n\n2 x 5kg dumbbells\n\n\n2 x 7.5kg dumbbells\n\n\n2 x 10kg dumbbells\n\n\n2 x 12.5kg dumbbells\n\n\n2 x 15kg dumbbells\n\n\n2 x 17.5kg dumbbells\n\n\n2 x 20kg dumbbells\n\n\n2 x 25kg dumbbells\n\n\n2 x 27.5kg dumbbells\n\n\n2 x 30kg dumbbells\n\n\n1 x Dumbbell Rack\n\n\n,\n2 x 5kg dumbbells\n,\n2 x 7.5kg dumbbells\n,\n2 x 10kg dumbbells\n,\n2 x 12.5kg dumbbells\n,\n2 x 15kg dumbbells\n,\n2 x 17.5kg dumbbells\n,\n2 x 20kg dumbbells\n,\n2 x 25kg dumbbells\n,\n2 x 27.5kg dumbbells\n,\n2 x 30kg dumbbells\n,\n1 x Dumbbell Rack\n,\nRack available in a choice of colour: black or orange\n,\nNote: the 22.5kg dumbbells are not included as there is not room on\nthe rack to store these as well. They can be purchased by clicking here\nbut would need to be stored separately. \n,\nSolid cast weights with 32mm solid steel knurled handles\n,\nRubber coating protects flooring and reduces noise compared to using\ncast iron dumbbells\n,\nFree-standing dumbbell storage rack keeps your workout area neat and\ntidy\n,\nOpen centre trays allow for easy loading and unloading of weights\n,\nWeight rack maximum load: 400kg\n,\nRack measurements:\n\n\nWidth: 131.5cm\n\n\nDepth: 56cm\n\n\nHeight 88cm\n\n\nTray: 120cm x 25.5cm\n\n\n,\nWidth: 131.5cm\n,\nDepth: 56cm\n,\nHeight 88cm\n,\nTray: 120cm x 25.5cm\n}	Mirafit Rubber Dumbbell Set & 3 Tier Weight Rack	999.95	Our Rubber Dumbbell and Storage Rack Sets are perfect for home and garage gyms. Each set includes a range of Dumbbell Weights in pairs starting from 5kg to 30kg. The Storage Rack can hold up to 400kg and is ideal for keeping your gym neat and tidy.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Ring-Dumbbell-Set-with-Black-3-Tier-Weight-Rack-on-White-Background_1.jpg	weight-sets-kits	weights-and-bars	0.05
137	{textArr: Mirafit Calibrated Fractional Weight Plate Set ,5kg total weight includes 2 x 1.25kg, 4 x 0.5kg and 2 x 0.25kg plates ,Cast iron construction with a machined finish ,Calibrated to achieve a precise +/- 10 grams accuracy ,Snug 50.4mm centre hole for a secure barbell fit ,Raised Mirafit logo and weight letters ,Chrome finish ,Measurements: ,0.25kg weight plate: 112mm x 6mm ,0.5kg weight plate: 134mm x 7mm ,1.25kg weight plate: 160mm x 11mm }	Mirafit Calibrated 5kg Fractional Change Plate Set	99.95	These Calibrated Fractional Plates are ideal for making small but precise changes to the amount of weight on your barbell. The set includes 2 x 1.25kg, 4 x 0.5kg and 2 x 0.25kg of cast iron weight plates with a chrome finish and raised black letters.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/c/a/calibrated_fractional_weight_plates_package.jpg	weight-sets-kits	weights-and-bars	0
138	{textArr: Mirafit Olympic Curl Bar & 20kg Tri Grip Weight Plates ,2" bars & weight plates ,Includes curl bar, 2x 5kg weight plates, 4x 2.5kg weight plates & spring collars ,Specially angled bar designed to reduce strain on wrists & elbows during forearm & bicep workouts ,Tri grip weight disc design ,Solid cast iron plates with grey finish ,Precision cast for increased weight accuracy ,Bar length: 119cm ,Bar end length: 16.5cm ,Bar weight: 8kg }	Mirafit Olympic Curl Bar & 20kg Tri Grip Weight Set	99.95	Build strength and definition using our Olympic EZ Curl Bar and Tri Grip Weight Sets. The custom-designed bar reduces strain on your joints while you lift. The weight plates are easy to pick up and load, making weight changes quick and efficient.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Olympic-Curl-Bar-and-20kg-Tri-Grip-Weight-Set.jpg	weight-sets-kits	weights-and-bars	0.05
139	{textArr: Mirafit 150kg Black Bumper Plates Set & Storage Rack ,Includes:\n\n1 x Horizontal Plate Rack & Bar Stand \n2 x 5kg Olympic Bumper Plates \n2 x 10kg Olympic Bumper Plates \n2 x 15kg Olympic Bumper Plates \n2 x 20kg Olympic Bumper Plates \n2 x 25kg Olympic Bumper Plates ,1 x Horizontal Plate Rack & Bar Stand ,2 x 5kg Olympic Bumper Plates ,2 x 10kg Olympic Bumper Plates ,2 x 15kg Olympic Bumper Plates ,2 x 20kg Olympic Bumper Plates ,2 x 25kg Olympic Bumper Plates ,Black weight plates with white text ,Solid rubber construction on bumper plates and stainless steel centre rings ,Strong steel storage rack has rubber feet to protect flooring ,Storage rack also has storage for two weight bars built in (bars not included) ,Measurements:\n\nStorage Rack: \n\nTotal height: 27.5cm \nTotal width: 109.5cm \nTotal depth: 34.5cm \nBumper Plates:\n\nDiameter: 45cm \nThickness:\n\n5kg bumper plate: 2.4cm \n10kg bumper plate: 4.4cm \n15kg bumper plate: 6.2cm \n20kg bumper plate: 7.2cm \n25kg bumper plate: 8.4cm ,Storage Rack: ,Total height: 27.5cm ,Total width: 109.5cm ,Total depth: 34.5cm ,Bumper Plates:\n\nDiameter: 45cm \nThickness:\n\n5kg bumper plate: 2.4cm \n10kg bumper plate: 4.4cm \n15kg bumper plate: 6.2cm \n20kg bumper plate: 7.2cm \n25kg bumper plate: 8.4cm ,Diameter: 45cm ,Thickness:\n\n5kg bumper plate: 2.4cm \n10kg bumper plate: 4.4cm \n15kg bumper plate: 6.2cm \n20kg bumper plate: 7.2cm \n25kg bumper plate: 8.4cm ,5kg bumper plate: 2.4cm ,10kg bumper plate: 4.4cm ,15kg bumper plate: 6.2cm ,20kg bumper plate: 7.2cm ,25kg bumper plate: 8.4cm }	Mirafit 150kg Black Bumper Plates Set & Storage Rack	569.95	Start your home gym off right with this Mirafit 150kg Black Bumper Plate Set and Storage Rack. Rubber weight plates help to absorb impact when lifting, and the storage stand will keep your workout space organised. Ideal set for home and garage gyms.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-150kg-Black-Bumper-Plates-and-Storage-Stand.jpg	weight-sets-kits	weights-and-bars	0
140	{textArr: Mirafit Olympic Weight Bar and 50kg Bumper Plate Set ,Includes:,6ft International Bar - This bar has shorter sleeves than a standard 6ft barbell but a longer centre meaning it will still fit onto all Mirafit squat and power racks ,2 x 5kg bumper plates,4 x 10kg bumper plates,Quick release barbell collars,Additional plates are also available to purchase here,The barbell features a chrome finish and knurled grip,Please note these bars are not designed to be dropped to the floor from overhead  ,These durable bumper plates are made from solid rubber with stainless steel centre rings ,Specifications: ,6ft International Olympic Bar:\n\nTotal length: 186cm \nSleeve length: 25cm \nCentre section length: 130cm \nGrip diameter: 28mm \nBar weight: approx. 14kg (14.5kg with collars) ,Total length: 186cm ,Sleeve length: 25cm ,Centre section length: 130cm ,Grip diameter: 28mm ,Bar weight: approx. 14kg (14.5kg with collars) ,Bumper Plates\n\nDiameter: 45cm\nApprox. plate thickness: \n5kg bumper plate: 2.4cm \n10kg bumper plate: 4.4cm ,Diameter: 45cm,Approx. plate thickness: ,5kg bumper plate: 2.4cm ,10kg bumper plate: 4.4cm ,Delivery \n\nThis product is delivered in multiple boxes \nThe courier will often not deliver all of the boxes at the same time. Please wait at least 48 hours for the other boxes to arrive before contacting us \nOur bumper plates are supplied with a coating of silicone oil to preserve the plates during storage and transportation. This can be removed using a damp cloth on arrival. ,This product is delivered in multiple boxes ,The courier will often not deliver all of the boxes at the same time. Please wait at least 48 hours for the other boxes to arrive before contacting us ,Our bumper plates are supplied with a coating of silicone oil to preserve the plates during storage and transportation. This can be removed using a damp cloth on arrival. }	Mirafit 6ft International Olympic Bar and 50kg Plate Set	349.95	This Olympic bar and weight set is ideal for anyone looking to start training at home. The bar is 6ft long but is international spec so will still fit any Mirafit squat rack. Includes collars and 50kg of bumper plates.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/6/f/6ft-barbell-with-orange-black-bumper-plates.jpg	weight-sets-kits	weights-and-bars	0.05
141	{textArr: Mirafit M3 Barbell with 150kg Colour Bumper Plate Set & Weight Storage Stand ,Includes:\n\n1 x M3 20kg Olympic Barbell - Black & Chrome \n1 x Pair of Quick Release Barbell Collars \n1 x Horizontal Plate Rack & Bar Stand \n2 x 5kg Olympic Bumper Plates (grey)\n2 x 10kg Olympic Bumper Plates (green)\n2 x 15kg Olympic Bumper Plates (yellow)\n2 x 20kg Olympic Bumper Plates (blue)\n2 x 25kg Olympic Bumper Plates (red),1 x M3 20kg Olympic Barbell - Black & Chrome ,1 x Pair of Quick Release Barbell Collars ,1 x Horizontal Plate Rack & Bar Stand ,2 x 5kg Olympic Bumper Plates (grey),2 x 10kg Olympic Bumper Plates (green),2 x 15kg Olympic Bumper Plates (yellow),2 x 20kg Olympic Bumper Plates (blue),2 x 25kg Olympic Bumper Plates (red),Brightly coloured marbled bumper plates for easy identification ,Solid rubber construction on bumper plates absorbs impact,Stainless steel centre rings ,Strong steel storage rack with rubber feet to protect flooring ,Our M3 barbell is a fantastic all round performer with a hybrid grip pattern, eight-piece needle bearings and bronze bushings,Ideal for a wide range of gym and weightlifting exercises,Barbell features a black zinc coat centre with hard chrome sleeves,Quick release barbell collars make weight changes easy,Measurements: ,M3 Barbell:\n\nWeight: 20kg \nTotal length: 220cm \nCentre length: 131cm \nGrip diameter: 28mm \nLoad testing: 680kg ,Weight: 20kg ,Total length: 220cm ,Centre length: 131cm ,Grip diameter: 28mm ,Load testing: 680kg ,Rack: ,Total height: 27.5cm ,Total width: 109.5 cm ,Total depth: 34.5cm ,Bumper Plates:\n\nDiameter: 45cm \nThickness:\n\n5kg bumper plate: 2.4cm \n10kg bumper plate: 4.4cm \n15kg bumper plate: 6.2cm \n20kg bumper plate: 7.2cm \n25kg bumper plate: 8.4cm ,Diameter: 45cm ,Thickness:\n\n5kg bumper plate: 2.4cm \n10kg bumper plate: 4.4cm \n15kg bumper plate: 6.2cm \n20kg bumper plate: 7.2cm \n25kg bumper plate: 8.4cm ,5kg bumper plate: 2.4cm ,10kg bumper plate: 4.4cm ,15kg bumper plate: 6.2cm ,20kg bumper plate: 7.2cm ,25kg bumper plate: 8.4cm }	Mirafit M3 Barbell with 150kg Colour Bumper Plate Set and Weight Storage Stand	799.95	Take your gym to the next level with this Mirafit 150kg Bumper Plate & Barbell Set. Includes a full set of colour coded weight plates, premium 20kg M3 Olympic barbell, quick release bar collars and a compact storage stand to keep the gym area tidy.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-150kg-Marbled-Bumper-Plates-Storage-Stand-and-Bar.jpg	weight-sets-kits	weights-and-bars	0
142	{textArr: \nMirafit Adjustable Ankle And Wrist Weights\n,\n0.5kg/1kg/2kg suitable for ankles or wrists\n,\n3kg/4kg/5kg only suitable for ankles due to size\n,\n5kg only suitable for large ankles\n,\nPlease refer to dimensions image for measurements\n,\nOrange and black design\n,\nSupplied in pairs\n,\nAvailable in a choice of weight:\n,\n2 X 0.5kg\n,\n2 X 1kg\n,\n2 X 2kg\n,\n2 X 3kg\n,\n2 X 4kg\n,\n2 X 5kg\n,\nHelps increase intensity of standard exercises\n,\nAdjustable fastening\n,\nUniversal size, see images for detailed dimensions\n,\nEvenly distributed iron sand filling\n,\nShapes to your body\n,\nImprove muscular endurance, weight loss, strength training & toning\n}	Mirafit Ankle/Wrist Weights - Choice of Size	10.95	Intensify your cardio and plyometric training using our Mirafit Ankle and Wrist Weights. Great for functional work, rehabilitating injuries and adding a new dimension to your workouts. Available in a range of sizes from 0.5kg to 5kg.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Orange-Wrist-and-Ankle-Weights-on-White-Background.jpg	wearable-weights	weights-and-bars	0.05
143	{textArr: Mirafit Replacement 1kg iron block for Mirafit Adjustable Weighted Vests. ,Fits all sizes of our vest ,Single unit }	Mirafit Replacement 1kg Iron Block for Adjustable Weighted Vests	6.95	Replacement 1kg iron block for the Mirafit Adjustable Weighted Vest.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/m/i/mirafit-replacement-1kg-iron-block-adjustable-weighted-vests.jpg	wearable-weights	weights-and-bars	0
146	{textArr: \nMirafit Self Fastening Badges\n,\nThese patches are ideal for adding a custom look to your gym\naccessories, tactical bags or weight vests \n,\nAvailable in a choice of design\n\n\nDesign A - 60mm Mirafit Logo Circle Badge\n\n\nDesign B - 5x7 UK Flag Badge\n\n\nDesign C - 5x5 Fit Dont Quit Badge\n\n\nDesign D - 5x7 Black Mirafit Badge\n\n\nDesign E - 4x4 100 Badge\n\n\nDesign F - 10x3 Coach Badge\n\n\nDesign G - 7x5 UK Flag (Colour) Badge\n\n\nDesign H - 4x7 Black and Orange Mirafit Badge\n\n\nDesign I - 10x3 No Excuses Badge\n\n\nSet of Four Badges (one each of designs A-D)\n\n\nSet of Three Badges (one of each of designs G-I)\n\n\n,\nDesign A - 60mm Mirafit Logo Circle Badge\n,\nDesign B - 5x7 UK Flag Badge\n,\nDesign C - 5x5 Fit Dont Quit Badge\n,\nDesign D - 5x7 Black Mirafit Badge\n,\nDesign E - 4x4 100 Badge\n,\nDesign F - 10x3 Coach Badge\n,\nDesign G - 7x5 UK Flag (Colour) Badge\n,\nDesign H - 4x7 Black and Orange Mirafit Badge\n,\nDesign I - 10x3 No Excuses Badge\n,\nSet of Four Badges (one each of designs A-D)\n,\nSet of Three Badges (one of each of designs G-I)\n,\n\nSelf fastening material on back ideal for any velcro surface\n\n}	Mirafit Badge Patches	1.95	Mirafit badges are great for showcasing your love of fitness. Available in a range of designs these self fastening patches are ideal for weighted vests, jackets or gym bags that feature a velcro surface.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Badges_1.jpg	wearable-weights	weights-and-bars	0
147	{textArr: \nMirafit Tactical Weight Vest\n,\nPlate carrier design in black or military style khaki colour\n,\nAvailable with a choice of slide in steel weight plates\n,\nWeights are supplied in pairs, allowing a maximum weight of up to 10kg\nin total\n,\nVest alone weighs approx 1.4kg without plates\n,\n2 x 2.35kg plates (orange) - total weight with vest approx. 6kg\n,\n2 x 3.4kg plates (black) - total weight with vest approx. 8kg\n,\n2 x 4.3kg plates (orange) - total weight with vest approx. 10kg\n,\nPlates slot into the front and back of the vest to provide equal\nweight distribution\n,\nPlease see below for a video of the vest including a guide on how to\nload the plates\n,\nPadded shoulder straps for extra comfort during use\n,\nLarge front pocket on upper chest with self fastening closure\n,\nPlate carrier vests are ideal for endurance training, rucking and\nconditioning exercises.\n,\nFlat plate design spreads weight across the chest making these vests\nmore comfortable for jogging and running than standard weighted vests\n,\nAdded weight forces your muscles to work harder during your session\n,\nIncludes four removable Mirafit badge patches\n,\nVest is designed for a maximum total weight of 10kg. It is not\nsuitable for loading additional plates beyond that.\n,\nVest measurements:\n,\nWidth: 32cm\n,\nHeight from shoulder mid-point: 51cm\n,\nShoulder strap width: 8cm\n,\nTotal shoulder height: 52cm\n,\nNeck opening: 15cm x 25cm\n,\nPlate measurements (per plate):\n,\nHeight: 30cm\n,\nWidth: 25cm\n,\nThickness: 7.75/6.5/4.5cm\n,\nNote: This vest is designed for exercise purposes only and is not\nsuitable for security use. The plates are not suitable for use as body\narmour. \n,\nWeight\nPlates for Tactical Vests are also available to purchase separately\nhere\n}	Mirafit Tactical Weight Vest	69.95	Our Tactical Weighted Vests are perfect for pushing your workouts to the next level. With a choice of weight size these plate carrier vests are great for endurance training, rucking and conditioning exercises. Available in black or khaki.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/K/h/Khaki-Mirafit-Tactical-Weight-Vest-on-a-white-background.jpg	wearable-weights	weights-and-bars	0.05
148	{textArr: \nMirafit Weight Plates for Tactical Plate Carrier Vests\n,\nSupplied in pairs in a choice of weight\n,\n2 x 2.35kg (orange colour)\n,\n2 x 3.4kg (black colour)\n,\n2 x 4.3kg (orange colour)\n,\nFlat profile ideal for sliding inside plate carrier vests\n,\nAlso suitable for rucking and hiking use\n,\nStrong steel plates with powder coated finish\n,\nLaser logo/emblem\n,\nPlate measurements (per plate):\n,\nWeight: 30cm\n,\nWidth: 25cm\n,\nThickness: 7.75/6.5/4.5cm\n,\nNote: These plates are not suitable for use as body armour\n}	Mirafit Weight Plates for Tactical Plate Carrier Vests	34.95	These steel weight plates are suitable for Tactical Plate Carriers and help to increase the range of intensity you can perform with your weighted vest. The flat steel plates can also be used for rucking.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/w/e/weight-plates-for-mirafit-tactical-weight-vest.jpg	wearable-weights	weights-and-bars	0.05
149	{textArr: Mirafit Battle Rope ,Available in choice of 9m, 12m or 15m length ,Comfortable 38mm diameter ,All black or black and orange intertwined polyester rope ,Durable plastic coated hand grips with Mirafit logo ,Anti-fray end caps ,Battle rope training increases vo2 levels and improves cardiovascular health ,Targets core strength areas including arms, legs, back and shoulders ,Helps to build grip strength ,Measurements:\n\nRope length: 9m/12m/15m \nRope diameter: 38mm \nRope weight: 7.2kg/9.4kg/11.8kg ,Rope length: 9m/12m/15m ,Rope diameter: 38mm ,Rope weight: 7.2kg/9.4kg/11.8kg }	Mirafit 38mm Black & Orange Battle Rope - 9/12/15m	49.95	Our Battle Ropes are perfect for building strength, power and speed. Durable and versatile, they come in a choice of 9m, 12m and 15m and are ideal for circuits as well as conditioning work. Each rope is 38mm thick and comes with anti-fray end caps	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/m/i/mirafit-black-and-orange-38mm-9m-battle-rope.jpg	battle-ropes	conditioning	0.048
150	{textArr: \nMirafit Battle Jump Rope\n,\nAvailable in a choice of length and thickness\n,\nLengths available:\n\n\n2.8M (9.2ft)\n\n\n3M (9.8ft)\n\n\n,\n2.8M (9.2ft)\n,\n3M (9.8ft)\n,\nThicknesses available:\n\n\n1" (2.5cm)\n\n\n1.5" (3.8cm)\n\n\n2" (5cm)\n\n\n,\n1" (2.5cm)\n,\n1.5" (3.8cm)\n,\n2" (5cm)\n,\nWeighted skipping ropes provide a full body strength and endurance\nworkout\n,\nGreat for adding variety and intensity to your conditioning routine\nand existing jump rope exercises\n,\nChoose the 1" or 1.5" diameter rope to focus on general fitness, fat\nloss and cardio\n,\nChoose the thick, 2" diameter rope for a more challenging workout\nfocussed on building grip, shoulder and arm strength \n,\nDurable, black polyester weave\n,\nRubber coated handles provide a more comfortable grip and prevent\nfraying\n,\nApprox. Net weights:\n\n\n2.8M X 1": 1.1kg\n\n\n2.8M X 1.5": 2.3kg\n\n\n2.8M X 2": 3.6kg\n\n\n3M X 1": 1.2kg\n\n\n3M X 1.5": 2.6kg\n\n\n3M X 2": 3.9kg\n\n\n,\n2.8M X 1": 1.1kg\n,\n2.8M X 1.5": 2.3kg\n,\n2.8M X 2": 3.6kg\n,\n3M X 1": 1.2kg\n,\n3M X 1.5": 2.6kg\n,\n3M X 2": 3.9kg\n}	Mirafit Battle Jump Rope	14.95	Our Battle Jump Ropes are much more than your average skipping rope. The ropes range in weight from 1.1kg to 3.9kg and are 1-2 inches thick. Great for conditioning and endurance training.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-1-5-inch-Battle-Jump-Rope-Coiled-Up_2.jpg	battle-ropes	conditioning	0.048
151	{textArr: \nMirafit 9M Battle Rope & Heavy Duty Anchor\n,\nSingle polyester rope with solid steel anchor point\n,\nExercising with a battle rope can increase vo2 levels & improves\ncardiovascular health\n,\nTargets core strength areas, including:\n\n\nArms\n\n\nLegs\n\n\nBack\n\n\nShoulders\n\n\n,\nArms\n,\nLegs\n,\nBack\n,\nShoulders\n,\nRope length: 9M\n,\nRope diameter: 38mm\n,\nRope weight: 9kg\n,\nAnchor mounts to walls & floors & creates a permanent fixing point for\nropes & resistance bands etc\n,\nIncludes 4 wall/floor bolts\n,\nLoop diameter: 2.5cm\n,\nLoop height: 12cm\n,\nLoop depth: 13.5cm\n,\nInternal loop: 9.5cm X 9cm\n,\nBase length: 29cm\n,\nBase width: 6.5cm\n,\nBase thickness: 0.4cm\n}	Mirafit 9m Battle Rope & Anchor Set	59.95	Our Battle Rope and Anchor sets include a 9m battle rope and a semi circular anchor which can be bolted to either the wall or floor. The rope weighs 9kg and is perfect for cardiovascular work as well as strengthening your core and upper body.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-9m-Battle-Rope-and-Anchor-Set.jpg	battle-ropes	conditioning	0.05
152	{textArr: Mirafit Battle Rope Anchor ,Creates a permanent fixing point for battle ropes & resistance bands etc ,Suitable for mounting to walls & floors ,Heavy duty solid steel anchor ,Includes 4 wall/floor bolts ,Dimensions:\n\nLoop diameter: 2.5cm \nLoop height: 12cm \nLoop depth: 13.5cm \nInternal loop: 9.5cm X 9cm \nBase length: 29cm \nBase width: 6.5cm \nBase thickness: 0.4cm ,Loop diameter: 2.5cm ,Loop height: 12cm ,Loop depth: 13.5cm ,Internal loop: 9.5cm X 9cm ,Base length: 29cm ,Base width: 6.5cm ,Base thickness: 0.4cm }	Mirafit Ground/Wall Battle Rope Anchor	13.95	Keep your battle rope secure and in place while you train using our Battle Rope Anchors. Bolt them to either a wall or the floor so that you can train regularly either outside or in the gym. Great for supplementing your strength training.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/m/i/mirafit-battle-rope-anchor.jpg	battle-ropes	conditioning	0.05
153	{textArr: Mirafit Battle Rope Anchor Strap Kit ,Creates a quick and easy portable anchor point ,Reinforced double stitched nylon webbing ,Includes two straps and carabiner clip ,Helps prolong life span of rope due to less direct wear and tear ,Anchors to most durable objects such as fixed fitness equipment, fence posts, trees etc ,Simply secure one strap around the middle of battle rope, one around your anchor point of choice and connect with carabiner ,Strap dimensions: 42cm X 4cm ,Please note battle rope shown is not included }	Mirafit Battle Rope Anchor Strap Kit	12.95	For a secure battle rope anchor point, use our Battle Rope Strap Kits. Made of woven nylon and complete with two straps and carabiners, the kit helps to prolong the lifespan of the rope by causing less direct wear and tear.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/m/i/mirafit-battle-rope-strap-kit-on-post-and-battle-rope.jpg	battle-ropes	conditioning	0.05
154	{textArr: Mirafit Battle Rope Ground Anchor ,Creates an outdoor fixing point for battle ropes & resistance bands etc ,Heavy duty solid steel anchor ,Simply push into soft ground with your foot or knock in using a mallet ,Please ensure the stake is secure before use ,Dimensions:\n\nLength: 35cm \nInternal loop: 8cm X 8.8cm ,Length: 35cm ,Internal loop: 8cm X 8.8cm }	Mirafit Battle Rope Outdoor Stake/Spike Ground Anchor	14.95	Our Ground Anchor Spikes are easy to use and essential for keeping your battle rope secure while you train outside. Each spike is 35cm long, and provides a stable and secure grip as you train. Top loop is suitable for a range of battle rope sizes.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Battle-Rope-Outdoor-Stake-Ground-Anchor-on-White-Background.jpg	battle-ropes	conditioning	0.05
155	{textArr: Mirafit Circular Anchor ,Cross bar design ,Suitable for mounting to walls, floors & ceilings ,Creates a permanent fixing point for battle ropes & resistance bands etc ,Made from heavy duty solid steel ,Includes 4 wall/floor bolts ,Dimensions:\n\nOverall diameter: 11.8cm \nInternal loop height: 3.8cm \nInternal loop width: 6cm \nBase thickness: 0.5cm ,Overall diameter: 11.8cm ,Internal loop height: 3.8cm ,Internal loop width: 6cm ,Base thickness: 0.5cm ,Please note battle rope shown is for illustrative purposes only }	Mirafit Circular Battle Rope & Strap Anchor	14.95	Our circular Battle Rope Anchors provide a fixed base for your rope. Features include a cross style design to keep your battle rope secure, and two heavy duty bolts so that the anchor can be secured to either the wall, floor or ceiling.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Circular-Battle-Rope-and-Strap-Anchor-on-White-Background.jpg	battle-ropes	conditioning	0.05
156	{textArr: Mirafit Multi Purpose Battle Rope Chain ,Strong 1M steel chain & 2 carabiner clips ,Creates a quick & easy portable anchor point ,Simply knot or loop rope through chain & clip to secure ,Also suitable for weight belts, head & neck harnesses etc ,Total length (inc. Clips): 113cm ,Chain width: 2.5cm ,Battle rope not included }	Mirafit 1m Multi Purpose Battle Rope Anchor Chain	11.95	Keep your battle rope firmly in place using a Mirafit Battle Rope Chain. Quick and easy to use, simply thread the chain through the knotted rope and secure it round trees, posts and more.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Battle-Rope-Anchor-Chain-With-Battle-Rope-Tied.jpg	battle-ropes	conditioning	0
157	{textArr: Mirafit Battle Rope Protective Sleeve ,Designed for 38mm diameter battle ropes ,Position this sheath around rope to reduce rubbing and wear at contact points ,Ideal for adding protection or replacing a lost or worn sleeve ,May also be compatible with other 38mm diameter ropes  ,Please note this item will require periodic replacement ,50cm long }	Mirafit Battle Rope Protective Sleeve	3.95	This 50cm long sleeve is designed to fit onto a 38mm diameter battle rope for added protection when using the rope around an anchor or fixing point.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Protective-Sheath-for-Battle-Rope.jpg	battle-ropes	conditioning	0
158	{textArr: \nMirafit PU Boxing Gloves\n,\nSold as a pair\n,\nAvailable in a range of weights\n,\nPadding on gloves increases as the weight grows\n,\n10oz and 12oz boxing gloves feature slightly less padding so are\nbetter for reducing fatigue and improving control\n,\n14oz and 16oz boxing gloves feature more padding for additional\nprotection and increased resistance\n,\nEnclosed thumb makes these gloves suitable for both pad work and\nsparring\n,\nLarge, easy to use straps\n,\nVibrant orange and black design makes it easy to locate your gloves in\na crowded gym\n,\nIncludes a clear weight identifier on the inside of the wrist\n,\nDurable inner foam with polyurethane covers\n,\nSuitable for home use. Not recommended for commercial use\n,\nMatching focus mitts & kick shield also available\n}	Mirafit PU Boxing Gloves	27.95	Get an intense workout with these Mirafit PU Boxing Gloves. Available in a range of weights, these durable boxing gloves are suitable for sparring, as well as using on bags and pads. Matching focus mitts & kick shield also available	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-PU-Boxing-Gloves-12oz_2.jpg	boxing-equipment	conditioning	0
159	{textArr: \nMirafit M4 Boxing Bag Hanger\n,\nCompatible with the Mirafit M4 power rack and rigs\n,\nBolts to the upright and includes an eyelet for a carabiner to attach\n(carabiner not included)\n,\nEyelet has built in bearings for smooth rotation\n,\nRack or rig must always be bolted down if this hanger is installed\n,\nPlease note the Mirafit hanging punch bag shown in the images is only\nsuitable for use with the 254cm rack due to the height of the bag. You\nwill also require this\ncarabiner for installation\n,\nFixings included allow this hanger to share holes with other\ncomponents on the reverse side of the upright\n,\nMeasurements:\n,\nHeight: 51cm\n,\nWidth: 7.5cm\n,\nDepth: 65cm\n}	Mirafit M4 Rack Punch Bag Hanger	79.95	Add a boxing bag to your M4 series power rack or rig with this bolt on punch bag hanger. Attaches to the upright and includes an eyelet with bearings for a smooth rotation during use.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-M4-Boxing-Bag-Hanger.jpg	boxing-equipment	conditioning	0
160	{textArr: \nMirafit Leather Boxing Gloves\n,\nGenuine leather covers for excellent durability\n,\nSold as a pair\n,\nAvailable in a range of weights\n,\nPadding on gloves increases as the weight grows\n,\n10oz and 12oz boxing gloves feature slightly less padding so are\nbetter for reducing fatigue and improving control\n,\n14oz and 16oz boxing gloves feature more padding for additional\nprotection and increased resistance\n,\nEnclosed thumb makes these gloves suitable for both pad work and\nsparring\n,\nLarge, easy to use straps\n,\nSleek black design with white Mirafit logos\n,\nIncludes a clear weight identifier on the inside of the wrist\n,\nDurable inner foam with black, real leather covers\n,\nSuitable for home or commercial gym use\n,\nMatching focus mitts & kick shield also available\n}	Mirafit Leather Boxing Gloves	39.95	Increase your speed, power and endurance with these Mirafit Leather Boxing Gloves. Available in a range of weights, these fully enclosed boxing gloves are suitable for a range of exercises and classes. Ideal for gyms, studios and personal trainers	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Leather-Boxing-Gloves-12oz_1.jpg	boxing-equipment	conditioning	0
161	{textArr: \nMirafit Hanging Punch Bag\n,\nIncludes metal D rings on the straps,clip and carabiner as shown in\nimage 1\n,\nCan be attached to a suitable bracket, swivel hook or to a Mirafit\npower rack with shackle attachment (not included)\n,\nSoft inner foam walls help absorb impact and protect user\n,\nDurable polyurethane (PU) cover\n,\nStrong nylon straps\n,\nLogo and weight label in white on straps\n,\nAdditional D ring underneath to reduce unwanted swinging\n,\nRecommended hanging height: between 2.15m and 2.6m\n,\nMeasurements:\n\n\nTotal height: 147cm\n\n\nBag height: 128cm\n\n\nBag diameter: 36cm\n\n\n,\nTotal height: 147cm\n,\nBag height: 128cm\n,\nBag diameter: 36cm\n}	Mirafit Hanging Punch Bag	139.95	Master your boxing combos and get a superb workout with this Mirafit Hanging Punch Bag. Improve your punching accuracy, speed and fitness levels with this durable 30kg bag in sleek all black design. Includes carabiner.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Hanging-Punch-Bag_1.jpg	boxing-equipment	conditioning	0
162	{textArr: Mirafit Leather Focus Mitts ,Genuine leather cover for excellent durability ,Sold as a pair ,One size fits all ,Slip-on design for quick changes ,Improve coordination, speed, defence and boxing technique ,Sleek all black leather covers ,Suitable for home or commercial gym use ,Ideal for use with the Mirafit Leather Boxing Gloves ,Matching leather kick shield also available here }	Mirafit Leather Focus Mitts	34.95	Take your boxing to the next level with these Mirafit Leather Focus Mitts. These durable leather mitts have a large surface area and are ideal for training attack and defensive skills. Matching leather boxing gloves and kick pad also available.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Leather-Boxing-Mitts.jpg	boxing-equipment	conditioning	0
163	{textArr: Mirafit PU Boxing Mitts ,Sold as a pair ,One size fits all ,Slip-on design for quick changes ,Use to improve your punching speed and technique ,Orange and black polyurethane cover ,Suitable for home use. Not recommended for commercial use ,Ideal for use with the Mirafit PU Boxing Gloves ,Matching kick shield available here }	Mirafit PU Boxing Mitts	24.95	Improve your boxing speed with these durable Mirafit PU Boxing Mitts. The slip-on design makes it quick and easy to swap over during training sessions. One size fits all and supplied in pairs. Matching gloves also available.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-PU-Boxing-Mitts.jpg	boxing-equipment	conditioning	0
164	{textArr: \nMirafit PU Boxing Gloves and Mitts\n,\nSet includes a pair of boxing gloves in a choice of weight and two\nfocus mitts\n,\nPerfect for beginners and those looking to add boxing drills into\ntheir cardio workouts\n,\nOne size fits all\n,\nPadding on gloves increases as the weight grows\n,\n10oz and 12oz boxing gloves feature slightly less padding so are\nbetter for reducing fatigue and improving control\n,\n14oz and 16oz boxing gloves feature more padding for additional\nprotection and increased resistance\n,\nEnclosed thumb on gloves makes them suitable for both pad work and\nsparring\n,\nLarge, easy to use straps on gloves\n,\nSimple slip-on focus mitts for quick changes\n,\nGloves include a clear weight identifier on the inside of the wrist\n,\nDurable inner foam with polyurethane covers\n,\nSuitable for home use. Not recommended for commercial use\n,\nMatching kick shield available\nhere \n}	Mirafit PU Boxing Gloves and Mitts	27.95	Get an intense boxing workout with these Mirafit PU Boxing Gloves and Mitts. With a vibrant, black and orange design, these one size fits all gloves and easy slip-on focus mitts make it easy to swap over during training. Available from 10oz to 16oz	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-PU-Boxing-Gloves-and-Mitts-Kit-14oz_1.jpg	boxing-equipment	conditioning	0
165	{textArr: Mirafit Leather Boxing Gloves and Mitts ,Set includes a pair of boxing gloves in a choice of weight and two focus mitts ,Genuine leather covers for excellent durability ,Ideal for gyms, personal trainer and those looking to take their boxing training to the next level ,One size fits all ,Padding on gloves increases as the weight grows ,10oz and 12oz boxing gloves feature slightly less padding so are better for reducing fatigue and improving control ,14oz and 16oz boxing gloves feature more padding for additional protection and increased resistance ,Enclosed thumb on gloves makes them suitable for both pad work and sparring ,Large, easy to use straps on gloves ,Simple slip-on focus mitts for quick changes ,Gloves include a clear weight identifier on the inside of the wrist ,Durable inner foam with black, real leather covers ,Suitable for home or commercial gym use ,Matching leather kick shield also available here }	Mirafit Leather Boxing Gloves and Mitts	69.95	Take your boxing to the next level with these Mirafit Leather Boxing Gloves and Mitts. This stylish black glove and focus pad set features real leather covers and a choice of glove weight from 10oz to 16oz. Ideal for gyms, clubs and trainers.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Leather-Boxing-Gloves-16oz-and-Mitts_1.jpg	boxing-equipment	conditioning	0
166	{textArr: Mirafit Leather Kick Pad ,Genuine leather cover for excellent durability ,Large surface area allows for a variety of kick placements ,Self fastening straps for quick transitions during training ,Durable core able to withstand hard impacts ,Easy slip-on design ,One size fits all ,Improves coordination and kicking technique ,Sleek all black leather cover ,Suitable for home or commercial gym use ,Matching leather punch pads available here }	Mirafit Leather Kick Pad	44.95	Improve your kick power and technique with the Mirafit Leather Kick Pad. With a genuine leather cover in stylish all black design this kick shield is ideal for practicing kicks as part of your combat workout. Also suitable for gyms and clubs.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Leather-Kick-Pad.jpg	boxing-equipment	conditioning	0
168	{textArr: \nMirafit Punch Bag Floor Suction Cups - Set of 12\n,\nOptional add-on designed to screw directly into the base of our free\nstanding punch bag\n,\nDesigned to improve stability on smooth floors (such as tiles) where\nthe base easily moves around\n,\nPlease also ensure your base is filled with water or sand as usual\n,\nNote 1: These suction cups must only be used on perfectly smooth\nsurfaces, such as tiles, where they can achieve a suitable seal\nagainst the floor. Using these on other surfaces will destabilise the\npunch bag.\n,\nNote 2: This product can only be used on Mirafit punch bags which have\nthe required screw holes present. Please check your punch bag has\nthese holes before purchasing as these were not present until recently.\n}	Mirafit Free Standing Punch Bag Floor Suction Cups	14.95	These screw in suction cups for the Mirafit Free Standing Punch Bag are ideal for increasing the stability of the base on smooth floors. These come as a set of 12 and are designed to install directly into the holes on the bottom of the base.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Free-Standing-Punch-Bag-Floor-Suction-Cup.jpg	boxing-equipment	conditioning	0.05
169	{textArr: Concept2 SkiErg with PM5 Monitor ,Available with optional floor stand ,Target your legs, core and arms in a single workout ,Builds strength and endurance ,Supplied with PM5 performance monitor ,Connects via Bluetooth and ANT+ to the Concept2 ErgData app and several other applications ,Optional floor stand enables SkiErg to be freestanding rather than wall mounted ,Black colour ,Measurements: ,Width at bottom: 48.3cm ,Width at top: 52cm ,Depth: 40.6cm ,Height: 216cm ,SkiErg with floor stand fitted: 60cm (w) x 127cm (d) x 216 cm (h) ,SkiErg weight: 20.9kg ,Floor stand weight: 18kg }	Concept2 SkiErg with PM5 Monitor	814.95	Tone your legs, arms and core with this Concept2 SkiErg. With an optional stand for portability, this exercise machine provides the benefits of Nordic skiing in your own home.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/c/o/concept2-skierg-diagonal.jpg	cardio-equipment	conditioning	0.05
170	{textArr: Concept2 BikeErg with PM5 Monitor ,Flywheel uses air resistance to create a smooth, quiet ride ,In-built clutch allows the flywheel to keep spinning when you stop pedaling ,Adjustable saddle and handlebars ,Includes smartphone cradle ,Supplied with PM5 performance monitor ,Connects via Bluetooth and ANT+ to the Concept2 ErgData app and several other applications such as Zwift ,Black colour ,Measurements: ,Overall length: 122cm ,Width: 61cm ,Seat height: approx. 79cm-103cm ,BikeErg weight: 31kg ,Maximum user weight: 300lb / 136kg }	Concept2 BikeErg Bike with PM5 Monitor	1159.95	Get a great cardio workout with this Concept2 BikeErg with PM5 monitor. Featuring app connectivity and a smartphone cradle, exercise bikes have never been more fun.	\N	cardio-equipment	conditioning	0.05
171	{textArr: Concept2 SkiErg Floor Stand ,Suitable for use with the Concept 2 SkiErg (not included) ,Freestanding design ,Portable floor stand makes it easier to move your machine and avoids having to wall mount ,Anti slip deck ,Measurements:\n\nFloor stand weight: 18kg \nSize with SkiErg fitted: 60cm (w) x 127cm (d) x 216cm (h)  ,Floor stand weight: 18kg ,Size with SkiErg fitted: 60cm (w) x 127cm (d) x 216cm (h)  }	Concept2 SkiErg Floor Stand	234.95	Keep your SkiErg portable and avoid drilling into walls with this freestanding Concept2 SkiErg Floor Stand.	\N	cardio-equipment	conditioning	0
172	{textArr: Mirafit Aerobic Weighted Body Bar ,Available in a choice of 2kg, 4kg, 6kg, 8kg or 10kg ,Evenly distributed weight ,Improves balance, flexibility and core strength ,Perfect for both individual and group exercises ,Soft rubberised foam coating provides comfort and bar protection ,Signature black and orange Mirafit design ,Embossed end caps allow for easy weight identification ,Easily wipes clean ,Measurements (total length X grip diameter):\n\n2kg body bar: 120cm X 3cm \n4kg body bar: 120cm X 3.2cm \n6kg body bar: 120cm X 3.4cm \n8kg body bar: 120cm X 3.9cm \n10kg body bar: 120cm X 4.2cm ,2kg body bar: 120cm X 3cm ,4kg body bar: 120cm X 3.2cm ,6kg body bar: 120cm X 3.4cm ,8kg body bar: 120cm X 3.9cm ,10kg body bar: 120cm X 4.2cm }	Mirafit Aerobic Weighted Body Bar	19.95	A simple solution to building strength and sculpting your body. Our slimline Body Bars have a padded, rubberized covering, making them easy to grip and comfortable on your shoulders. Perfect for studio style fitness. Ideal for beginners.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Weighted-Workout-Bars.jpg	cardio-equipment	conditioning	0.05
173	{textArr: Mirafit 390G Fit Bars ,Weight 390g ,Length 120cm ,Ideal for children and schools ,Durable and versatile ,Evenly distributed weight ,Can also be used as training tools for learning good lifting technique ,Soft rubberised foam coating provides comfort and bar protection ,Easily wipes clean }	Mirafit 390g Fit Bar	12.95	Our aerobic exercise bars are designed fitness sessions in schools. At 390g, they're lightweight and easy to hold. The bars are durable and have a soft, rubber coating for a comfortable grip.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-390g-Fit-Bar.jpg	cardio-equipment	conditioning	0
174	{textArr: \nMirafit Core Exercise Sliders\n,\nSet of 2\n,\nChoice of colour -\n\n\nBlack\n\n\nOrange\n\n\n,\nBlack\n,\nOrange\n,\nSuitable for a wide range of workout intensities, including back pain\nrehabilitation, resistance training, high intensity interval training\n& general core strength\n,\nLightweight & portable\n,\nDual sided design\n,\nSmooth side to be used on soft surfaces such as carpets & rugs\n,\nFabric side is suited for hard floors such as tiles, wood & laminate\n,\nDimensions -\n\n\nDiameter: 17.8cm\n\n\nThickness: 0.7cm\n\n\n,\nDiameter: 17.8cm\n,\nThickness: 0.7cm\n}	Mirafit Core Exercise Sliders	7.95	Add an extra dimension to your core exercises and push ups using our Core Sliders. Double-sided for a variety of surfaces, use to strengthen your whole body and intensify your training. Simple yet effective, perfect for home and gym use.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/O/r/Orange-Mirafit-Core-Exercise-Sliders-on-White-Background-.jpg	core-sliders	conditioning	0.045
175	{textArr: \nMirafit Set of 9 x 15mm Thick Exercise Mats\n,\nIdeal set for fitness instructors & studio classes - includes 9 mats\n,\n15mm thick for extra comfort\n,\nSuperior quality NBR foam\n,\nIdeal for use on hard floors\n,\nLightweight - easy to roll up & take to gym classes\n,\nAlso suitable for camping, picnics & gardens etc\n,\nKeeps damp & cold out of sleeping bags for improved\ncamping/hiking/mountaineering experience\n,\nIncludes straps to keep each mat rolled neatly\n,\nDimensions:\n\n\nLength: 183cm\n\n\nWidth: 60cm\n\n\nThickness: 15mm\n\n\n,\nLength: 183cm\n,\nWidth: 60cm\n,\nThickness: 15mm\n}	Mirafit Set of 9 x 15mm Exercise Mats	129.95	Our soft padded Exercise Mats protect, support and cushion your joints while you stretch and strengthen. Suitable for both indoors and outdoors, they're easy to keep clean and store when not in use. Bulk pack ideal for instructors.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/S/e/Set-of-9-Black-Mirafit-15mm-Thick-Exercise-Floor-Mats_1.jpg	exercise-mats	conditioning	0.04
176	{textArr: \nMirafit 15mm Extra Thick Exercise Mat\n,\nAvailable in a choice of colours:\n\n\nBlack\n\n\nOrange\n\n\n,\nBlack\n,\nOrange\n,\n15mm thick for extra comfort\n,\nSuperior quality NBR foam\n,\nIdeal for use on hard floors\n,\nLightweight - easy to roll up and take to gym classes\n,\nAlso suitable for camping, picnics and gardens etc\n,\nKeeps damp and cold out of sleeping bags for improved camping, hiking\nand mountaineering\n,\nIncludes straps to keep mat rolled neatly\n,\nMeasurements:\n\n\nLength: 183cm\n\n\nWidth: 60cm\n\n\nThickness: 15mm\n\n\n,\nLength: 183cm\n,\nWidth: 60cm\n,\nThickness: 15mm\n}	Mirafit 15mm Thick Exercise Floor Mat	18.95	At 15mm thick, our Exercise Floor Mats help you take care of your joints and cushion your body against hard floors while you stretch, strengthen and tone. Can be used both inside and outside for a range of activities. Choice of colours available.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/B/l/Black-and-Orange-Mirafit-15mm-Thick-Exercise-Floor-Mats.jpg	exercise-mats	conditioning	0.049
177	{textArr: \nMirafit 6ft Folding Exercise Mat - 4cm Thick\n,\n40mm thick high density sponge padding for extra comfort\n,\nIdeal for stretching, resistance training, Yoga and pilates, etc\n,\nAvailable in black, orange or blue colour\n,\nTri-fold design means these mats are easy to store and transport\n,\nIncludes built in carry straps\n,\nDurable, wipe clean PVC\n,\nMeasurements (lxwxd):\n\n\nUnfolded: 180cm X 60cm X 4cm\n\n\nFolded: 60cm X 60cm X 12cm\n\n\n,\nUnfolded: 180cm X 60cm X 4cm\n,\nFolded: 60cm X 60cm X 12cm\n}	Mirafit 6ft Folding Exercise Gym Mat	24.95	Train, stretch and recover using our 6ft Folding Exercise Mats. The 4cm thick, high-density padding supports and cushions your joints while you train. The tri-fold design means mats can be carried and stored away easily. Choice of colours available.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/m/i/mirafit-6ft-black-folding-exercise-mat-open-and-folded-on-white-background.jpg	exercise-mats	conditioning	0.05
178	{textArr: \nMirafit 2 Tone TPE Yoga Mat With Eyelets\n,\nAvailable in a choice of orange/black or grey/black\n,\nIdeal choice for those running studios or fitness classes\n,\nCompact 124cm length is ideal for most exercises and easy to store\n,\nHandy metal eyelets allow mats to be kept safe and tidy when not in\nuse using the Mirafit wall hanger (sold separately)\n,\n8mm thick for joint comfort and protection\n,\nHigh density TPE foam material with textured non slip surface\n,\nEasily wipes clean with a soft cloth and mild soapy water\n,\nMeasurements:\n\n\nLength: 124cm\n\n\nWidth: 61.5cm\n\n\nThickness: 0.8cm\n\n\nDistance between eyelets: 41.5cm\n\n\n,\nLength: 124cm\n,\nWidth: 61.5cm\n,\nThickness: 0.8cm\n,\nDistance between eyelets: 41.5cm\n}	Mirafit 2 Tone TPE Exercise Mat with Eyelets - 124cm	16.95	Kit out your fitness studio using our Two Tone Hanging Exercise Mats. Each mat comes with two holes at the top for handy storage via our Mirafit Wall Hangers (sold separately).	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Orange-TPE-Hanging-Exercise-Mat.jpg	exercise-mats	conditioning	0.05
179	{textArr: Mirafit Exercise Mats And Wall Hanger Set ,Includes 12 high density TPE foam mats and wall hanger ,Mats available in a choice of orange/black or grey/black ,Space-saving gym storage allows mats to be hung vertically ,Helps protect mats from potential damage and creasing ,Perfect for fitness classes and gym studios ,Exercise mats are a compact 124cm in length - helping you to save on space ,Textured, non-slip surface gives you extra grip when working out ,Each mat is 8mm thick providing both comfort and joint protection ,Handy metal eyelets allow mats to be easily stored away when not in use ,Black powder-coated steel hanger comfortably holds up to 12 exercise mats ,Keep mats in top condition by regularly wiping down with a soft cloth and mild soapy water ,Mat measurements:\n\nLength: 124cm \nWidth: 61.5cm \nThickness: 0.8cm ,Length: 124cm ,Width: 61.5cm ,Thickness: 0.8cm ,Hanger measurements:\n\nWidth: 55cm \nDepth: 14cm \nHeight: 10cm ,Width: 55cm ,Depth: 14cm ,Height: 10cm ,Please note: standard wall fixings provided, please ensure suitable for intended use and replace if necessary }	Mirafit Set of 12 TPE Non Slip Exercise Mats and Wall Hanger	169.95	Our Two Tone Mat Sets are ideal for kitting out your exercise class. The textured surface is non-slip giving you a secure and comfortable surface to work out on. And the set comes with a wall-mounted hanger for easy, curl-free storage. Includes 12 ma	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Yoga-Mat-Hanger-and-12-Mat-Package-on-White-Background.jpg	exercise-mats	conditioning	0
180	{textArr: \nMirafit 6mm Yoga Mat\n,\nEco friendly 100% natural cork surface\n,\nBlack TPE foam backing\n,\nBonded using eco-friendly adhesive\n,\nCork has natural antibacterial properties\n,\nEasily wiped clean \n,\nCork surface improves in grip as you sweat\n,\nPerfect for yoga, Pilates & fitness classes\n,\nIdeal for use on hard surfaces\n,\nAbsorbs impact and keeps hands/feet steady during use\n,\nLightweight and easy to roll\n,\nIncludes handy carry strap\n,\nMeasurements:\n\n\nLength: 183cm\n\n\nWidth: 61.5cm\n\n\nThickness: 0.6cm\n\n\n,\nLength: 183cm\n,\nWidth: 61.5cm\n,\nThickness: 0.6cm\n}	Mirafit 6mm Cork Yoga Mat	24.95	Our gorgeous Cork Yoga Mats are the natural choice for any aspiring Yogi. The cork finish provides a smooth, natural surface for you to perfect your poses and the grip actually improves as you sweat. Great for advanced users.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-6mm-Cork-Natural-Yoga-Mat-Rolled-Up.jpg	exercise-mats	conditioning	0.04
181	{textArr: \nMirafit Deadlift Platform\n,\nAvailable with or without heavy duty black rubber matting\n,\nFrame only option is ideal for customers wishing to build a wooden\ndeadlift platform\n,\nRubber mat option includes 8 x 61cm square crumb rubber tiles (TUV\napproved)\n,\nShock absorbing, 40mm thick mats dampen noise and reduce wear and tear\non your equipment\n,\nTarget and strengthen your back, legs and forearm muscles\n,\n50mm x 50mm x 3mm (11 gauge) steel frame with black powder coated\nfinish\n,\nReinforced corner bracing with Mirafit laser cut emblems\n,\nInternal size of workout area is 244cm x 122cm (8ft x 4ft)\n,\nOptional resistance band pole set includes:\n,\n4 x 25mm solid steel poles with 8mm arm\n,\n8 x frame installation bolts\n,\n4 x floor brackets\n}	Mirafit Deadlift Platform	69.95	The Mirafit Deadlift Platform provides a dedicated 8ft x 4ft workout area ideal for taking your gym training to the next level. Available with or without our heavy duty black crumb rubber floor tiles. Optional resistance band poles also available.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/m/i/mirafit-deadlift-platform.jpg	exercise-mats	conditioning	0.05
230	{textArr: Mirafit 5 Standard Bar Floor Stand ,Holds 5 X 1" standard weight bars ,Suitable for barbells, ez bars, tricep bars etc ,Stores bars vertically to save floor space ,5mm black solid steel frame ,Free standing design ,Measurements:\n\nWidth: 31cm \nDepth: 31cm \nHeight: 21.5cm \nBar tube height: 17.5cm ,Width: 31cm ,Depth: 31cm ,Height: 21.5cm ,Bar tube height: 17.5cm }	Mirafit 5 Standard Bar Floor Stand	69.95	Storage problems are a thing of the past with our 5 Weight Bar Floor Stand. Great for keeping your bars tidy when not in use and the finishing touch for any home gym.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/m/i/mirafit-5-standard-bar-floor-stand.jpg	bar-storage	storage	0.05
182	{textArr: \nMirafit Ab Trainer Exercise Mat\n,\nFold out panel provides additional comfort & support\n,\nHelps target core & ab muscles\n,\nEnables full range of motion to work your entire abdominal muscle group\n,\nContoured design fits the natural curve of your back to provide\nsupport during training\n,\nIsolates upper abs, lower ABS & lower back muscles\n,\nFirm foam cushion\n,\nDurable PU leather cover\n,\nEasily wipes clean\n,\nFolded dimensions -\n\n\nHeight: 9cm\n\n\nWidth: 30.5cm\n\n\nDepth: 36cm\n\n\n,\nHeight: 9cm\n,\nWidth: 30.5cm\n,\nDepth: 36cm\n,\nFold out dimensions -\n\n\nHeight: 7cm\n\n\nWidth: 30.5cm\n\n\nDepth: 72\n\n\n,\nHeight: 7cm\n,\nWidth: 30.5cm\n,\nDepth: 72\n}	Mirafit Ab Trainer Pad Fold Out Exercise Mat	16.95	Our Fold Out Ab Trainer Exercise Mats support while allowing you to fully extend your ab muscles for optimised training. Protect your spine and take the strain out of your gain while you build up your core strength with precision.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Ab-Trainer-Fold-Out-Exercise-Mat-Orange.jpg	exercise-mats	conditioning	0.05
183	{textArr: Mirafit Ab Pad Exercise Wedge Mat ,Helps target core & ab muscles ,Enables full range of motion to work your entire abdominal muscle group ,Contoured design fits the natural curve of the back to provide support during training ,30 degree sloped end ,Isolates upper abs, lower ABS & lower back muscles ,Perfect training aid ,Firm foam cushion ,Durable PU leather material - wipe clean ,One size fits all ,Dimensions -\n\nLength - 365mm \nWidth - 310mm \nHeight - 75mm ,Length - 365mm ,Width - 310mm ,Height - 75mm }	Mirafit Ab Pad Mat - Black	14.95	Working your core muscles is vital for stability and balance. Our Padded Ab Mats allow you to fully extend your core while providing support to help you perform high intensity core muscle workouts. Perfect for using at home or at the gym.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/m/i/mirafit-black-ab-pad-mat.jpg	exercise-mats	conditioning	0.047
184	{textArr: \nMirafit Non Slip Gym Equipment Mat\n,\nShock resistant PVC - ideal for use with treadmills, exercise bikes,\ncross trainers etc\n,\nCan also be used with weight benches, towers, multigyms etc\n,\nHelps reduce vibrations and improve stability for a quieter for\ncomfortable workout\n,\nKeeps your original flooring clean and provides protection from any\nunwanted marks and scratches\n,\nImproves gym equipment life by reducing vibrations\n,\nPosition multiple mats side by side to create your own custom size\nworkout space\n,\nDimensions -\n\n\nLength - 195cm\n\n\nWidth - 100cm\n\n\nThickness - 0.6cm\n\n\n,\nLength - 195cm\n,\nWidth - 100cm\n,\nThickness - 0.6cm\n}	Mirafit PVC Gym Equipment Mat - 195cm x 100cm	37.95	Our Large Gym Equipment Mats measure in at a huge 195x100cm. Perfect for protecting your flooring from damage, they also help to reduce noise and the non slip surface keeps your equipment safely in place.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-PVC-Large-Gym-Equipment-Mat-Rolled-Up_1.jpg	exercise-mats	conditioning	0.05
185	{textArr: Mirafit Non Slip Gym Equipment Mat ,Shock resistant PVC - ideal for use with treadmills, exercise bikes, cross trainers etc ,Can also be used with weight benches, towers, multigyms etc ,Helps reduce vibrations and improve stability for a quieter for comfortable workout ,Keeps your original flooring clean and provides protection from any unwanted marks and scratches ,Improves gym equipment life by reducing vibrations ,Position multiple mats side by side to create your own custom size workout space ,Dimensions -\n\nLength - 180cm \nWidth - 70cm \nThickness - 0.6cm ,Length - 180cm ,Width - 70cm ,Thickness - 0.6cm }	Mirafit PVC Gym Equipment Mat - 180cm x 70cm	27.95	Our Shock Resistant Gym Equipment Mats will help you get the most out of your workout while protecting your floors and equipment. Perfect for kitting out your home gym, they're ideal for use with weight benches, power racks, squat racks and more.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/m/i/mirafit-pvc-shock-resistant-gym-equipment-mat-rolled-up.jpg	exercise-mats	conditioning	0.05
186	{textArr: Mirafit Deluxe Aerobic Step Board ,Adjustable 3 level design - includes 4 large riser blocks/feet ,9Cm, 15cm and 21cm height levels ,Black anti-slip ridged top ,Adjustable height helps vary intensity of workouts ,Helps improve coordination, agility, leg strength, muscular and cardiovascular endurance ,Can also be used as an aid to increase sit up intensity ,Dimensions -\n\nWidth - 108cm \nDepth - 41cm \nHeight - 9cm/15cm/21cm ,Width - 108cm ,Depth - 41cm ,Height - 9cm/15cm/21cm }	Mirafit Premium Exercise Step	49.95	Our Premium Exercise Step is easy-to-use and extremely versatile. Perfect for training at home, each step comes with four raiser blocks and has a ridged, anti-slip top for improved grip. Lightweight and slimline for easy storage.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/m/i/mirafit-premium-exercise-step-orange.jpg	exercise-steps	conditioning	0.049
187	{textArr: \nMirafit Aerobic Step Board\n,\n3 level design - 10cm, 15cm and 20cm height levels\n,\nHeight blocks cleverly store underneath - easy to store and transport\n,\nAdjustable height helps vary intensity of workouts\n,\nHelps improve coordination, agility, leg strength, muscular and\ncardiovascular endurance\n,\nCan also be used as an aid to increase sit up intensity\n,\nDimensions -\n\n\nWidth - 80cm\n\n\nDepth - 30cm\n\n\nHeight - 10cm/15cm/20cm\n\n\n\n,\nWidth - 80cm\n,\nDepth - 30cm\n,\nHeight - 10cm/15cm/20cm\n\n}	Mirafit Aerobic Exercise Step	29.95	Get a great cardio workout at home using our Aerobic Exercise Step. They're ideal for burning calories as well as developing strength around your legs, glutes and core. Each step comes with raiser blocks to challenge your workouts.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Black-and-Orange-Aerobic-Exercise-Step-on-White-Background.jpg	exercise-steps	conditioning	0.046
188	{textArr: \nMirafit Deluxe Aerobic Step Board\n,\n5 level design\n,\nAdjustable height helps vary intensity of workouts\n,\nAnti-slip ridged top for comfort and stability\n,\nHelps improve coordination, agility, leg strength, muscular &\ncardiovascular endurance\n,\nCan also be used as an aid to increase sit up intensity\n,\nDimensions:\n,\nHeight: 10cm/15cm/20cm/25cm/30cm\n,\nDepth: 40cm\n,\nWidth: 40cm\n}	Mirafit 5 Level Mini Exercise Step	34.95	Get a full body workout and save on space using our Five Level Premium Mini Exercise Step. Great for cardio, it's perfect for burning calories while you strengthen your lower body. Up the level for a more challenging workout.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/m/i/mirafit-orange-and-black-5-level-mini-exercise-step.jpg	exercise-steps	conditioning	0.046
299	{textArr: Mirafit Women's Loose-Fit Exercise Vest - Black ,Available in a range of sizes - from size 6 to size 20 ,Primarily black gym vest featuring subtle Mirafit branding ,Flattering dropped hem ,Detailed, flat neck straps ,Model is 5'6" and wears a size 8 }	Mirafit Women's Loose-Fit Exercise Vest - Black	24.95	Stay focused on your workout in this Mirafit Women's Loose-Fit Exercise Vest. The body has a relaxed, non-clinging fit, and the neck straps lay flat and won't distract from your exercise.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Womens-Loose-Fit-Exercise-Vest-Front-and-Back_8.jpg	clothing-apparel	accessories	0
189	{textArr: Mirafit Step Raiser Blocks ,Please note this is the black blocks only - not the entire step ,Suitable for use with Mirafit Premium Exercise Step and the Mirafit 5 Level Mini Exercise Step ,Step boards helps improve coordination, agility, leg strength, muscular and cardiovascular endurance ,Increases intensity of aerobic workouts ,Raises step board height by 6cm }	Mirafit Extra Raiser Blocks for Premium Exercise Step	17.95	Challenge your workouts using our step Raiser Blocks. Suitable for our Premium Exercise Step and Mini Exercise Step, the added height will allow you to burn more calories while you strengthen your legs and core as well as improve your endurance.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/P/a/Pair-of-Mirafit-Extra-Raiser-Blocks-For-Premium-Exercise-Step.jpg	exercise-steps	conditioning	0.046
190	{textArr: Fitness-Mad Air Dome Pro II ,Used for almost any bodyweight exercise which is normally performed on an aerobic step or the floor ,Unstable surface provides an extra level of exercise intensity ,Works the core, adding more challenge to workouts ,Quickly change from a wobble board to a half Swiss ball ,Perform a truly challenging and varied full body workout ,TPR anti-slip base ,Eyelets can be used to clip resistance tubes ,Comes with an 8" hand pump to inflate the dome ,Measurements:\n\nWeight: 6kg \nHeight: 23cm \nDiameter: 59cm \nMaximum user weight: 140kg ,Weight: 6kg ,Height: 23cm ,Diameter: 59cm ,Maximum user weight: 140kg ,Warning: Do not over-inflate the dome higher than 23cm. }	Air Dome Pro II With Pump	99.95	Reach new heights of exercise intensity with this Fitness-Mad Air Dome Pro II. It can be used as half Swiss Ball or as a wobble board and provides a full body workout.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/A/i/Air-Dome-Pro-II-01.jpg	exercise-steps	conditioning	0
191	{textArr: Mirafit Ridged Weighted Fitness Hula Hoop ,Choice of colour ,Padded eva foam with wavy surface for increased muscle stimulation ,Helps to tone abs, stomach, back, hip and buttock muscles ,Aids mobility of the spine and hips, helping to ensure the joints remain flexible ,Extremely effective for losing weight ,Strengthen inner core muscles to improve posture and reduce risk of back problems ,Adds variety to your workout routine - ideal for beginners and pros ,Burn up calories and burn away excess fat ,Six piece design - splits down in seconds for easy transportation ,Measurements:\n\nDiameter: 100cm \nWeight: 1.2kg ,Diameter: 100cm ,Weight: 1.2kg }	Mirafit Ridged Weighted Hula Hoop	8.95	Our Weighted Hula Hoops are ridged for deep muscle stimulation and allow you to target, tighten and strengthen your core. Each hoop has a soft cover and breaks down into six, easy-to-store pieces when done. Fun to use and a great calorie burner.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Ridged-Weighted-Hula-Hoops.jpg	hula-hoops	conditioning	0.048
192	{textArr: \nMirafit 15mm Extra Thick Exercise Mat\n,\nAvailable in a choice of colours:\n\n\nBlack\n\n\nOrange\n\n\n,\nBlack\n,\nOrange\n,\n15mm thick for extra comfort\n,\nSuperior quality NBR foam\n,\nIdeal for use on hard floors\n,\nLightweight - easy to roll up and take to gym classes\n,\nAlso suitable for camping, picnics and gardens etc\n,\nKeeps damp and cold out of sleeping bags for improved camping, hiking\nand mountaineering\n,\nIncludes straps to keep mat rolled neatly\n,\nMeasurements:\n\n\nLength: 183cm\n\n\nWidth: 60cm\n\n\nThickness: 15mm\n\n\n,\nLength: 183cm\n,\nWidth: 60cm\n,\nThickness: 15mm\n}	Mirafit 15mm Thick Exercise Floor Mat	18.95	At 15mm thick, our Exercise Floor Mats help you take care of your joints and cushion your body against hard floors while you stretch, strengthen and tone. Can be used both inside and outside for a range of activities. Choice of colours available.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/B/l/Black-and-Orange-Mirafit-15mm-Thick-Exercise-Floor-Mats.jpg	pilates-yoga	conditioning	0.049
193	{textArr: \nStudio Pro Anti-Burst Swiss Ball\n,\n500kg burst resistant gym ball for serious workouts\n,\nAvailable in a choice of diameter:\n,\n55cm\n,\n65cm\n,\n75cm\n,\nRated as being suitable for loads of up to 300kg in normal use\n,\nManufactured by Fitness-Mad, this swiss ball has been\nindependently tested with a static load of 500kg\n,\nOne of the toughest swiss balls on the market\n,\nPerfect for fitness ball workouts, weight training, yoga, pilates or\nphysiotherapy\n,\nCan also be used as a chair to aid with postural problems and develop\ncore strength\n,\nMaterial: 6 phthalate and heavy metal free PVC\n,\nWeight: 1.4kg/1.7kg/2.1kg\n,\nPlease note: a pump is not included with this ball\n,\nWarning: Never leave the swiss ball near a heat source\n}	Studio Pro 500kg Anti-Burst Swiss Ball	21.95	Develop core strength and switch up your workout routine with this Anti-Burst Gym Swiss Ball. Great for strength training, yoga, pilates and fitness workouts, this ball is independently tested with a static load of over 500kg.	\N	pilates-yoga	conditioning	0
194	{textArr: \nMirafit Yoga Blocks\n,\nSet of 2\n,\nProvides stability whilst improving your balance, strength & posture\n,\nHigh density foam\n,\nLightweight & portable\n,\nIdeal for use in the home, studio or gym\n,\nDimensions -\n\n\nHeight - 15cm\n\n\nWidth - 23cm\n\n\nDepth - 8cm\n\n\n,\nHeight - 15cm\n,\nWidth - 23cm\n,\nDepth - 8cm\n}	Mirafit Hi Density Yoga Blocks - Pair	9.95	Our Foam Yoga Blocks support your body as you stretch and strengthen your way through your Yoga or Pilates routine. Perfect for supporting your head, hips, back and arms or use to stand on as you stretch and tone.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/B/l/Black-Mirafit-Hi-Density-Yoga-Blocks-on-White-Background_2.jpg	pilates-yoga	conditioning	0.048
195	{textArr: \nMirafit 6mm Yoga Mat\n,\nEco friendly 100% natural cork surface\n,\nBlack TPE foam backing\n,\nBonded using eco-friendly adhesive\n,\nCork has natural antibacterial properties\n,\nEasily wiped clean \n,\nCork surface improves in grip as you sweat\n,\nPerfect for yoga, Pilates & fitness classes\n,\nIdeal for use on hard surfaces\n,\nAbsorbs impact and keeps hands/feet steady during use\n,\nLightweight and easy to roll\n,\nIncludes handy carry strap\n,\nMeasurements:\n\n\nLength: 183cm\n\n\nWidth: 61.5cm\n\n\nThickness: 0.6cm\n\n\n,\nLength: 183cm\n,\nWidth: 61.5cm\n,\nThickness: 0.6cm\n}	Mirafit 6mm Cork Yoga Mat	24.95	Our gorgeous Cork Yoga Mats are the natural choice for any aspiring Yogi. The cork finish provides a smooth, natural surface for you to perfect your poses and the grip actually improves as you sweat. Great for advanced users.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-6mm-Cork-Natural-Yoga-Mat-Rolled-Up.jpg	pilates-yoga	conditioning	0.04
196	{textArr: \nMirafit Pilates & Yoga Exercise ball\n,\nChoice of colour -\n\n\nBlack\n\n\nOrange\n\n\n,\nBlack\n,\nOrange\n,\nAdd into your existing Pilates/Yoga routines to intensify workouts\n,\nPromotes relaxation whilst improving strength, concentration,\ncoordination & endurance\n,\nEasy grip soft PVC\n,\nIncludes straw & stopper for inflation\n,\nDiameter: 20cm\n}	Mirafit Pilates Ball	5.95	Our Pilates Balls are essential for anyone looking to build their core strength while incorporating stretching and balance into their resistance routine. Versatile and fun to use, the ball gives support and focus while you work your whole body.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/B/l/Black-Mirafit-Pilates-Ball-on-White-Background--_1.jpg	pilates-yoga	conditioning	0.03
197	{textArr: \nMirafit Pilates Ball Multipack\n,\nContains 10 balls\n,\nAvailable in a choice of colour: Black or Orange. We also have a\nlimited quanity available in a green/yellow colour which are available\nat a discounted price to clear. These are slightly more yellow in\ncolour than pictured.\n,\nAdd into your existing Pilates/Yoga routines to intensify workouts\n,\nPromotes relaxation whilst improving strength, concentration,\ncoordination & endurance\n,\nEasy grip soft PVC\n,\nIncludes straw & stopper for inflation\n,\nDiameter: 20cm\n}	Mirafit Pilates Ball Multipack	29.95	Intensify your Pilates or Yoga routines with our easy grip Pilates Balls. This multipack contains 10 balls in a choice of colour: black, green or orange. Includes straws and stoppers for inflation.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/1/0/10-Mirafit-Black-Pilates-Balls-on-White-Background-_1.jpg	pilates-yoga	conditioning	0.042
198	{textArr: Mirafit Set Of 10 Pilates Rings ,Ideal set for fitness instructors and studios classes - includes 10 rings ,Deluxe double handle design ,Commonly used to increase intensity of Pilates floor exercises ,Perfect for toning problem areas and developing core muscles and back strength ,Resistance band speeds up toning by targeting specific muscle groups ,Can be used to tone upper arms, inner and outer thighs, ABS and pelvic muscles ,Enhances mobility, agility and stamina ,Double sided foam handles with inner and outer grips for a wider workout range ,Foam covered plastic ring for added comfort ,Lightweight design ,Measurements: ,Total diameter inc pads: 41cm ,Internal diameter: 34cm ,Inner pads: 12.5cm X 5cm ,Outer pads: 14.5cm X 5cm }	Mirafit Set of 10 Pilates Rings	99.95	Guide your resistance workouts using our sets of Pilates Rings. The deluxe, double-handle design can be used to tone and strengthen your upper arms, thighs and core as well as improve your agility and stamina. Perfect for Yoga and Pilates classes.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/S/e/Set-of-10-Black-Mirafit-Pilates-Rings-on-White-Background.jpg	pilates-yoga	conditioning	0.05
199	{textArr: \nMirafit Balance Pods\n,\nSet of two\n,\nAvailable in a choice of black or orange\n,\nMulti-function pods improve balance, coordination and stability\n,\nIdeal for incorporating into your lower body workout\n,\nGreat for increasing balance difficulty whilst performing Yoga and\nPilates exercises\n,\nAlso suitable for rehabilitation programmes to aid in accident and\ninjury recovery\n,\nDouble-sided design features a smooth, flat side and spiky dome\n,\nIncludes pump and valve attachment\n,\nInflate/deflate to desired height to increase/decrease difficulty\n,\nSoft pliable PVC\n,\nMeasurements:\n\n\nDiameter: 16cm\n\n\nApprox. Height: 8cm\n\n\n,\nDiameter: 16cm\n,\nApprox. Height: 8cm\n}	Mirafit Balance Pods	11.95	Our Balance Pods are perfect for Yoga and Pilates as well as strength and rehabilitation work. Each dome has a spiky side and a smooth side for a variety of exercises. Great for improving joint and core stability. Sold in pairs, in black or orange.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/B/l/Black-Mirafit-Balance-Pods.jpg	pilates-yoga	conditioning	0.05
200	{textArr: \nMirafit Pilates Ring\n,\nDeluxe double handle design\n,\nCommonly used to increase intensity of Pilates floor exercises\n,\nPerfect for toning problem areas, developing core muscles and back\nstrength\n,\nCan be used to tone upper arms, inner and outer thighs, ABS and pelvic\nmuscles\n,\nEnhances mobility, agility and stamina\n,\nDouble sided foam handles with inner and outer grips for a wider\nworkout range\n,\nFoam covered plastic ring for added comfort\n,\nLightweight design\n,\nMeasurements:\n\n\nTotal diameter inc pads: 41cm\n\n\nInternal diameter: 34cm\n\n\nInner pads: 12.5cm X 5cm\n\n\nOuter pads: 14.5cm X 5cm\n\n\n,\nTotal diameter inc pads: 41cm\n,\nInternal diameter: 34cm\n,\nInner pads: 12.5cm X 5cm\n,\nOuter pads: 14.5cm X 5cm\n}	Mirafit Double Handle Pilates Ring	12.95	Our Pilates Rings allow you to take your training to the next level. Each ring comes with two handles which allow you to maintain tension throughout your exercises as well as perfect your form. Versatile and durable, use at home or at the gym.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/B/l/Black-Mirafit-Pilates-Ring.jpg	pilates-yoga	conditioning	0.048
201	{textArr: \nMirafit Yoga Block\n,\nProvides stability whilst improving your balance, strength & posture\n,\nHigh density foam\n,\nLightweight & portable\n,\nIdeal for use in the home, studio or gym\n,\nDimensions -\n\n\nHeight - 15cm\n\n\nWidth - 23cm\n\n\nDepth - 8cm\n\n\n,\nHeight - 15cm\n,\nWidth - 23cm\n,\nDepth - 8cm\n}	Mirafit Yoga Block	5.95	Use these High Density Foam Yoga Blocks by Mirafit to support your body as you stretch and strengthen your way through your Yoga or Pilates routine. Perfect for supporting your head, hips, back and arms or use to stand on as you stretch and tone.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/B/l/Black-Mirafit-Hi-Density-Yoga-Blocks-on-White-Background_4.jpg	pilates-yoga	conditioning	0
202	{textArr: \nMirafit Steel Plyo Jump Box\n,\nAvailable in choice of heights:\n\n\n12" plyo box\n\n\n18" plyo box\n\n\nAs a set of two boxes (one 12" high and one 18" high)\n\n\n,\n12" plyo box\n,\n18" plyo box\n,\nAs a set of two boxes (one 12" high and one 18" high)\n,\nMade from strong 1" square steel tubing with a non-slip black rubber\ntop\n,\nNest design allows you to easily store jump boxes inside each other\n,\nNon-slip rubber feet ensure box stays in place even with high-impact\nworkouts\n,\nTapered design allows for increased stability\n,\nPerfect for helping you develop speed, strength and explosive power\n,\nMeasurements:\n\n\n12"/ 30cm plyo box\n\n\n18"/ 46cm plyo box\n\n\n,\n12"/ 30cm plyo box\n,\n18"/ 46cm plyo box\n}	Mirafit Steel Plyo Jump Box - Choice of Size	59.95	Built for strength and built to last, our Steel Plyo Jump Boxes are both durable and versatile. The steel frame allows them to handle high impact workouts. And the rubber tops and anti-slip feet make them a secure and reliable platform to train with.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Set-of-Steel-Plyo-Boxes.jpg	plyo-jump-boxes	conditioning	0.05
208	{textArr: Mirafit 3In1 Wooden Plyo jump Box ,3 jump heights: ,30" ,24" ,20" ,Strong 18mm plywood construction with internal reinforcement structure ,Maximum user weight 150kg ,Handle cut outs allow for easy movement ,Develop speed, strength and explosive power ,Box jumps improve the reaction of fast-twitch muscle fibres throughout the body ,Great to incorporate into weight loss training ,Arrives flat packed ,Easy to assemble ,Please note: tools required for assembly are not included ,We strongly recommend the addition of wood glue (not included) along all joins before screwing the box together, this will provide additional strength. This is essential for use in commercial settings or for users over 113kg/250lbs ,Important: plyo boxes should not be used on smooth surfaces unless they are positioned against a wall where they cannot slip ,Measurements:  ,20" / 51cm ,24" / 61cm ,30" / 76cm }	Mirafit 3in1 Wooden Plyo Jump Box - 30" x 24" x 20"	89.95	Our Wooden Plyo Jump Boxes are the perfect way to supplement your strength training. The largest of our collection, place this versatile jump box onto its sides to change up the height. Provides a durable platform suitable for high-impact workouts.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-3in1-Wooden-Plyo-Jump-Box-30x24x20-on-White-Background.jpg	plyo-jump-boxes	conditioning	0.045
203	{textArr: \nMirafit Soft Stackable Plyo Box\n,\nAvailable in choice of heights or as a full set:\n\n\n4" / 10cm plyo box\n\n\n6" / 15cm plyo box\n\n\n12" / 30cm plyo box\n\n\n18" / 46cm plyo box\n\n\n24" / 61cm plyo box\n\n\nFull Set: 64" / 162cm\n\n\n,\n4" / 10cm plyo box\n,\n6" / 15cm plyo box\n,\n12" / 30cm plyo box\n,\n18" / 46cm plyo box\n,\n24" / 61cm plyo box\n,\nFull Set: 64" / 162cm\n,\nNew design now with improved covers and foam\n,\nCombine blocks together to achieve your desired jump height\n,\nMade from high density foam with a non skid durable black PVC cover\n,\nStackable design allows you to customise your jump height\n,\nSoft landing surface absorbs impact - eases shock and decreases stress\non ankles, knees and hips\n,\nReduces risk of injury to shins if you miss\n,\nDevelop speed, strength and explosive power\n,\nLarge self fastening strips ensure boxes stay securely stacked\n,\nEasily wipes clean\n,\nImportant: plyo boxes should not be used on smooth surfaces unless\nthey are positioned against a wall where they cannot slip\n,\nDimensions: 71cm x 71cm x chosen height\n}	Mirafit Soft Stackable Plyo Box - Choice of Height	59.95	Gain strength, power and explosivity using our stackable Soft Plyo Boxes. Great for improving your functional fitness levels, jump boxes start at 4" and go up to 24". Each box has a self-fastening strip so they can be stacked and secured together.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/S/t/Stackable-Plyo-Boxes-Mirafit_1.jpg	plyo-jump-boxes	conditioning	0.05
204	{textArr: Mirafit 3 In 1 Soft Plyo Box ,Three height options:\n\n24" \n20" \n16" ,24" ,20" ,16" ,Please note we do not recommend the 24" height of this box for jumping due to the small footprint when set at that height. For box jumps at 24" please purchase the 30" x 24" x 20" model.,Perfect for introducing plyometrics into your workouts ,Made from high density foam with a non skid durable black PVC cover ,Soft landing surface absorbs impact - eases shock and decreases stress on ankles, knees and hips ,Reduces risk of injury to shins if you miss ,Develop speed, strength and explosive power ,Easily wipes clean ,Important: plyo boxes should not be used on smooth surfaces unless they are positioned against a wall where they cannot slip ,Measurements:\n\n24" / 61cm \n20" / 51cm \n16" / 40.5cm ,24" / 61cm ,20" / 51cm ,16" / 40.5cm }	Mirafit 3 In 1 Soft Plyo Jump Box - 24" x 20" x 16"	149.95	Supplement your heavy lifts using our 3 in 1 Plyo Jump Boxes. Great for building power and explosivity, they're made from high-density foam which supports landings and absorbs impact.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-3-in-1-Soft-Plyo-Jump-Box-24x20x16.jpg	plyo-jump-boxes	conditioning	0.042
205	{textArr: Mirafit 3 In 1 Soft Plyo Jump Box ,Three height options:\n\n30" \n24" \n20" ,30" ,24" ,20" ,Suitable for a wide range of exercises including box jumps, step ups, single leg squats and incline/decline push ups ,Perfect for introducing plyometrics into your workouts ,Made from high density foam with a non skid durable black PVC cover ,Soft landing surface absorbs impact - eases shock and decreases stress on ankles, knees and hips ,Reduces risk of injury to shins if you miss ,Develop speed, strength and explosive power ,Easily wipes clean ,Important: plyo boxes should not be used on smooth surfaces unless they are positioned against a wall where they cannot slip ,Measurements:\n\n30" / 76cm \n24" / 61cm \n20" / 51cm ,30" / 76cm ,24" / 61cm ,20" / 51cm }	Mirafit 3 In 1 Soft Plyo Jump Box - 30" x 24" x 20"	189.95	Our Soft Plyo Jump Boxes are really versatile and are perfect for increasing your power and explosivity. The 3 in 1 design means you can mix up your routine and up the level as you go. Used for jumping as well as incline and decline training.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/m/i/mirafit-3-in-1-soft-plyo-jump-box-30x24x20.jpg	plyo-jump-boxes	conditioning	0.047
206	{textArr: Mirafit 3In1 Wooden Plyo Jump Box ,3 jump heights:\n\n18" \n16" \n12" ,18" ,16" ,12" ,Strong 18mm plywood construction with internal reinforcement structure ,Maximum user weight 150kg ,Handle cut outs allow for easy movement ,Develop speed, strength and explosive power ,Box jumps improve the reaction of fast-twitch muscle fibres throughout the body ,Great to incorporate into weight loss training ,Arrives flat packed ,Easy to assemble ,Please note: tools required for assembly are not included ,We strongly recommend the addition of wood glue (not included) along all joins before screwing the box together, this will provide additional strength. This is essential for use in commercial settings or for users over 113kg/250lbs ,Important: plyo boxes should not be used on smooth surfaces unless they are positioned against a wall where they cannot slip ,Measurements:\n\n18" / 46cm \n16" / 40.5cm \n12" / 30.5cm ,18" / 46cm ,16" / 40.5cm ,12" / 30.5cm }	Mirafit 3in1 Wooden Plyo Jump Box - 18" x 16" x 12"	59.95	Don't let your equipment limit your training. Our Wooden Plyo Boxes give you the power to build speed, endurance and explosivity. These 3-in-1 boxes can be turned to vary your jump height. Can also be used for incline and decline work.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/m/i/mirafit-3in1-wooden-plyo-jump-box-18x16x12.jpg	plyo-jump-boxes	conditioning	0.05
207	{textArr: Mirafit 3In1 Wooden Plyo Jump Box ,3 jump heights:\n\n24" \n20" \n16" ,24" ,20" ,16" ,Strong 18mm plywood construction with internal reinforcement structure ,Maximum user weight 150kg ,Handle cut outs allow for easy movement ,Develop speed, strength and explosive power ,Box jumps improve the reaction of fast-twitch muscle fibres throughout the body ,Great to incorporate into weight loss training ,Arrives flat packed ,Easy to assemble ,Please note: tools required for assembly are not included ,We strongly recommend the addition of wood glue (not included) along all joins before screwing the box together, this will provide additional strength. This is essential for use in commercial settings or for users over 113kg/250lbs ,Important: plyo boxes should not be used on smooth surfaces unless they are positioned against a wall where they cannot slip ,Measurements:\n\n24" / 61cm \n20" / 51cm \n16" / 40.5cm ,24" / 61cm ,20" / 51cm ,16" / 40.5cm }	Mirafit 3in1 Wooden Plyo Jump Box - 24" x 20" x 16"	79.95	Combine strength and speed using our Wooden Plyo Jump Boxes. The solid base can be used for box jumps as well as incline and decline work. Turn to vary the height for a versatile workout that allows you to build maximum power and explosivity.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/m/i/mirafit-wooden-plyo-box-24x20x16_1.jpg	plyo-jump-boxes	conditioning	0.05
231	{textArr: Mirafit Horizontal Barbell rack ,Choice of colour: black or orange ,Six bar storage capacity ,Wall mounted design ,Safely store and protect bars ,Suitable for both standard and Olympic weight bars ,Powder coated steel frame ,Anti scratch black high density plastic liners - avoids damage to bars ,Standard wall fixings included ,Bracket dimensions:\n\nHeight: 80cm \nDepth: 14cm ,Height: 80cm ,Depth: 14cm }	Mirafit 6 Barbell Wall Rack	79.95	Ideal for keeping your gym area neat and tidy, our Barbell Wall Rack can safely store 6 standard or Olympic barbells. Choose between orange or black to match your equipment set up. HDPE liners protect barbells against damage.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Orange-6-Barbell-Wall-Rack-Holding-Barbell.jpg	bar-storage	storage	0.05
209	{textArr: \nMirafit Hybrid 3in1 Plyo Jump Boxes\n,\nLatest design combining our reinforced wooden plyo box, with foam\nouter padding and an anti-slip cover\n,\nAvailable in a choice of 3 sizes :\n,\n20" x 18" x 16"\n,\n24" x 20" x 16"\n,\n30" x 24" x 20"\n,\nEach box allows 3 different jump heights\n,\nPlyometric jump boxes are fantastic for building strength\nand explosive power \n,\nPerform box jumps or use as an accessory for a wide range of other\nexercises\n,\nStrong 18mm plywood construction with internal reinforcement structure\n,\nPadded EVA foam covering around the wooden box improves impact\nabsorption, for a softer landing \n,\nAnti-slip cover with strong YKK zipper\n,\nMaximum user weight 150kg\n,\nNo assembly required\n,\nImportant: plyo boxes should not be used on smooth surfaces unless\nthey are positioned against a wall where they cannot slide\n}	Mirafit Hybrid Plyo Jump Boxes	99.95	Enjoy a fantastic conditioning workout with these Mirafit Hybrid Plyo Jump Boxes. These sturdy 3in1 plyometric boxes have a reinforced wooded box design with a comfortable, padded foam cover, for a softer landing compared to standard plyo jump boxes.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-3in1-Covered-Wooden-Plyo-Jump-Boxes_1.jpg	plyo-jump-boxes	conditioning	0.05
210	{textArr: Mirafit 3In1 Wooden Plyo Jump Boxes - Set Of 3 ,Each box has 3 jump heights:\n\n30 X 24 X 20" \n24 X 20 X 16" \n18 X 16 X 12" ,30 X 24 X 20" ,24 X 20 X 16" ,18 X 16 X 12" ,Strong 18mm plywood construction with internal reinforcement structure ,Maximum user weight 150kg ,Handle cut-outs allow for easy movement ,Develop speed, strength and explosive power ,Box jumps improve the reaction of fast-twitch muscle fibres throughout the body ,Great to incorporate into weight loss training ,Arrives flat packed ,Easy to assemble ,Please note: tools required for assembly are not included ,We strongly recommend the addition of wood glue (not included) along all joins before screwing the box together, this will provide additional strength. This is essential for use in commercial settings or for users over 113kg/250lbs ,Important: plyo boxes should not be used on smooth surfaces unless they are positioned against a wall where they cannot slip ,Measurements:\n\n30 x 24 x 20" / 76 x 61 x 51cm \n24 x 20 x 16" / 61 x 51 x 40.5cm \n18 x 16 x 12" / 46 x 40.5 x 30.5cm ,30 x 24 x 20" / 76 x 61 x 51cm ,24 x 20 x 16" / 61 x 51 x 40.5cm ,18 x 16 x 12" / 46 x 40.5 x 30.5cm }	Mirafit 3in1 Wooden Plyo Jump Boxes - Set of 3	219.95	One of the best ways to improve your strength, speed and power, our Wooden Plyo Jump Box Sets include three plyo boxes for the ultimate workout. Hard wearing, they provide a solid base for high impact training. Use also for incline and decline work.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-3-in-1-Wooden-Plyo-Jump-Box-Set-of-3-Boxes.jpg	plyo-jump-boxes	conditioning	0
211	{textArr: Mirafit 3in1 Anti-Slip Wood Plyo Box - 18" x 16" x 12" ,Small jump box ideal for beginners or those with limited space ,Anti-slip textured surface for improved grip ,Box has handles built in for easy movement ,Strong 18mm plywood construction with an internal suppport structure ,Maximum user weight 150kg ,Arrives flat packed ,Easy to assemble ,Please note: tools required for assembly are not included ,We strongly recommend the addition of wood glue (not included) along all the joins before screwing the box together as this will provide additional strength. This is essential for use in commercial settings for for users over 113kg/250lbs ,Important: Plyo boxes should not be used on smooth surfaces unless they are positioned against a wall where they cannot slip ,Measurements: ,18 x 16 x 12" / 46 x 40.5 x 30.5cm }	Mirafit 3in1 Anti-Slip Wood Plyo Box - 18" x 16" x 12"	69.95	Work on your jumps with this Mirafit 3in1 Anti-Slip Wooden Plyo Box. It has a compact footprint making it ideal for those with limited workout space and is perfect for beginners.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-3in1-Anti-Slip-Wood-Plyo-Box-18x16x12.jpg	plyo-jump-boxes	conditioning	0
212	{textArr: Mirafit 3in1 Anti-Slip Wood Plyo Box - 30" x 24" x 20" ,Larger size makes this 3 in 1 jump box ideal for more challenging workouts ,Anti-slip textured surface for improved grip ,Box has handles built in for easy movement ,Strong 18mm plywood construction with an internal suppport structure ,Maximum user weight 150kg ,Arrives flat packed ,Easy to assemble ,Please note: tools required for assembly are not included ,We strongly recommend the addition of wood glue (not included) along all the joins before screwing the box together as this will provide additional strength. This is essential for use in commercial settings or for users over 113kg/250lbs ,Important: Plyo boxes should not be used on smooth surfaces unless they are positioned against a wall where they cannot slip ,Measurements: ,30 x 24 x 20" / 76 x 61 x 51cm }	Mirafit 3in1 Anti-Slip Wood Plyo Box - 30" x 24" x 20"	99.95	Practice your plyometrics with our Mirafit 3in1 Anti-Slip Wood Plyo Box. Featuring handles for easy movement and a thick plywood construction. Three different heights ranging from 20" to 30" make this plyo box ideal for a range of exercises.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-3in1-Anti-Slip-Wood-Plyo-Box-30x24x20.jpg	plyo-jump-boxes	conditioning	0
213	{textArr: Mirafit Rotating Push Up Bars ,Enhance the benefits of standard push up workouts ,Improves comfort over standard push ups and reduces strain on wrists ,Rotating design allows for a wider range of exercises ,Improve your posture, flexibility & full body strength ,Quality, smooth ball bearing movement ,Comfort grips ,Non slip base ,Max user weight: 100kg ,Diameter: 20cm }	Mirafit Rotating Push Up Bars	14.95	Our non-slip Rotating Push Up Bars help you to improve your press ups as well as get the most out of your workouts. Switch up your form easily to target a full range of muscles. Helps to ease any strain on your shoulders while you train.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Rotating-Push-Up-Handles-on-White-Background.jpg	push-up-handles	conditioning	0.048
220	{textArr: \nMirafit Power Roller Abdominal Exercise Wheel\n,\nDevelops core stability & improves definition in ABS and upper body\n,\nCan be used for a variety exercises\n,\nComfortable thick foam grip handles\n,\nTwin wheels for a smoother motion\n,\nThick foam knee pad included\n,\nCompact and portable - ideal for home gyms and exercise classes\n,\nMeasurements:\n\n\nOverall width: 22.5cm\n\n\nWheel diameter: 18.5cm\n\n\nKnee pad length: 37.5cm\n\n\nKnee pad width: 17cm\n\n\nKnee pad thickness: 1.5cm\n\n\n,\nOverall width: 22.5cm\n,\nWheel diameter: 18.5cm\n,\nKnee pad length: 37.5cm\n,\nKnee pad width: 17cm\n,\nKnee pad thickness: 1.5cm\n}	Mirafit Power Ab Roller & Knee Pad	10.95	Work your arms and core in one combined motion using our Ab Roller and Knee Pad kits. Each session, take it up a level and really raise your game. A simple yet grueling addition to your home gym.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Orange-Power-Ab-Roller-and-Knee-Pad.jpg	rollers	conditioning	0.049
214	{textArr: Mirafit resistance Bands  ,Available in a choice of resistance levels: \n\n#1 grey (15-25lb) \n#2 grey (45 -50lb) \n#3 orange (75-100lb) \n#4 orange (100-120lb) \n#5 black (120-175lb) \n#6 black (175-230lb) \nFull set - includes one of each band ,#1 grey (15-25lb) ,#2 grey (45 -50lb) ,#3 orange (75-100lb) ,#4 orange (100-120lb) ,#5 black (120-175lb) ,#6 black (175-230lb) ,Full set - includes one of each band ,Versatile fitness bands are the perfect addition to a vast variety of exercises ,Helps develop and strengthen specific muscle groups, improve flexibility, mobility and muscle power ,Effective in both upper and lower body training ,Weight trainers can incorporate bands into exercises such as bench press, deadlifts and press ups ,Great for working on balance and general stretching in Yoga and Pilates ,Perform a variety of shoulder exercises with resistance bands ,Also ideal for physiotherapy and rehabilitation users ,Suitable for both men and women of all ages and abilities ,Non-snap 100% natural latex construction ,Measurements (total length x width x thickness): \n\n#1: 208cm x 1.3cm x 0.45cm \n#2: 208cm x 2.1cm x 0.45cm \n#3: 208cm x 3.2cm x 0.45cm \n#4: 208cm x 4.5cm x 0.45cm \n#5: 208cm x 6.4cm x 0.45cm \n#6: 208cm x 8.3cm x 0.45cm ,#1: 208cm x 1.3cm x 0.45cm ,#2: 208cm x 2.1cm x 0.45cm ,#3: 208cm x 3.2cm x 0.45cm ,#4: 208cm x 4.5cm x 0.45cm ,#5: 208cm x 6.4cm x 0.45cm ,#6: 208cm x 8.3cm x 0.45cm }	Mirafit Resistance Bands	8.95	Our Resistance Bands come in a range of sizes and are suitable for a wide variety of exercises. Use them on their own or with a pull up bar or squat rack to stretch, strengthen and rehabilitate. A great addition to any home or garage gym.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Resistance-Bands-on-White-Background.jpg	resistance-bands	conditioning	0.049
215	{textArr: Mirafit Fabric Resistance Band Set ,Set of three lower body resistance exercise bands ,Perfect for targeting your glutes, hips and thighs ,Light, medium and heavy bands allow for beginner, intermediate and advanced level workouts ,Glute bands are a great tool for improving mobility and flexibility as well as toning muscle ,Non-slip material keeps the bands in place during squats and butt workout exercises ,Includes mesh carry bag ,45% Polyester, 55% Latex construction ,Measurements: ,Width: 8cm ,Total length: 76cm ,Tensile Strength: ,Grey #1 band is 15-25lbs (7-12kg) ,Orange #2 band is 25-35lbs (12-16kg) ,Black #3 band is 40-50lbs (18-23kg) }	Mirafit Fabric Resistance Bands Set	19.95	Our Fabric Resistance Bands Set is perfect for toning your glutes, hips and thighs. Provided in three different strengths, the bands allow for a range of exercises and resistance levels.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Fabric-Resistance-Bands-Set-on-White-Background_1.jpg	resistance-bands	conditioning	0.047
216	{textArr: \nMirafit Floss Bands\n,\nAvailable in a choice of size:\n,\n5cm Set (includes 1.3mm and 1.5mm)\n,\n10cm Set (includes 1.3mm and 1.5mm)\n,\n5cm + 10cm set (includes four bands - one of each size)\n,\nMuscle flossing helps to relieve pain and improve range of motion and\nmobility through compression\n,\nAll our bands are 208cm in length with white printed Mirafit logos\n,\nStandard 1.3mm thick (orange) bands provide regular compression\n,\nThicker 1.5mm (black) bands provide increased compression for deeper\ntargetting or for athletes with large muscles\n,\n5cm (2") width bands are ideal for target specific muscles\n,\n10cm (4") wide bands are suitable for larger muscle groups. Please\nbear in mind that 10cm wide bands will be more difficult to apply due\nto their size. \n,\nIncludes mesh carry bag and central tube for easier re-rolling\n,\nAdult use only. Remove immediately if you experience pain or\ndiscomfort.\n,\nMax stretch is 150% of original length. Do not stretch bands beyond\nthis.\n,\nPlease Note: These floss bands are made from natural latex and are\nnot suitable for anyone with a latex allergy.\n}	Mirafit Floss Bands	12.95	Mirafit Floss Bands are perfect for creating tight compression on aching muscles and joints. Available in a range of sizes you'll be able to find the right one for your muscle flossing needs and keep yourself at the top of your game.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/m/i/mirafit-floss-bands.jpg	resistance-bands	conditioning	0.03
217	{textArr: Mirafit M3 Resistance Band Pegs ,Set of four 16mm exercise band pegs ,Compatible with the M3 Power Rack, Strongman Yoke and Wall Mounted Accessory Rail  ,Easy installation, simply slide through the cage ,Simple slide in design allows for easy installation and removal ,T-bar shape prevents bands from slipping during workout ,Solid steel construction with hard wearing chrome finish ,Please note: band pegs should only be used if the rack is bolted to the floor ,Measurements:\n\nDiameter: 1.6cm \nPeg Length: 25cm ,Diameter: 1.6cm ,Peg Length: 25cm }	Mirafit M3 Resistance Band Pegs	29.95	Add resistance training into your workouts with our M3 Resistance Band Pegs. Compatible with the M3 Power Rack, their T-bar design prevent the bands from slipping while you're exercising. Easy installation, simply slide them through the cage.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/S/e/Set-of-4-Mirafit-M3-Resistance-Band-Pegs.jpg	resistance-bands	conditioning	0.05
218	{textArr: Replacement Resistance Bands for the Mirafit Slimline Vibration Plate ,Replaces lost or worn bands ,Allows the user to perform arm exercises whilst using the machine ,Supplied in pairs with carabiners for attaching as shown }	Mirafit Replacement Resistance Bands for Vibration Plate	14.95	Pair of replacement resistance bands for the Mirafit Slimline Vibration Plate.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Replacement-Cord-Vibration-Plate.jpg	resistance-bands	conditioning	0.05
219	{textArr: Ironmind Expand-Your-Hand-Bands - 10 Bands ,Improve your hand health, muscle balance and your grip strength with these IronMind bands ,Comes with five different strengths, with two bands per strength ,Portable and can be used quickly during down-time ,Excellent for stress relief, warm up and rehab ,Made of latex-free rubber for greater stretch and longer life ,For more information checkout the video below by Ironmind }	Ironmind Expand-Your-Hand-Bands - 10 Bands	19.95	Increase your strength and improve your hand health with these Expand-Your-Hand-Bands from IronMind. Suitable for al levels, these ten bands come in five different strengths, making it easy to mark your progression.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/I/r/IronMind-Expand-Your-Hand-Bands.jpg	resistance-bands	conditioning	0
229	{textArr: Mirafit 5 Olympic Bar Floor Stand ,Holds 5 X 2" Olympic weight bars ,Suitable for barbells, ez bars, tricep bars etc ,Stores bars vertically to save floor space ,5mm black solid steel frame ,Free standing design ,Measurements:\n\nWidth: 31cm \nDepth: 31cm \nHeight: 21.5cm \nBar tube height: 17.8cm ,Width: 31cm ,Depth: 31cm ,Height: 21.5cm ,Bar tube height: 17.8cm }	Mirafit 5 Olympic Bar Floor Stand	69.95	Keep your bars safe and close by using our Olympic Weight Bar Storage Stands. Perfect for keeping your gym tidy as well as helping you make your way through your training quickly and easily. Holds up to five Olympic weight bars.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-5-Olympic-Barbell-Floor-Stand.jpg	bar-storage	storage	0.049
221	{textArr: \nMirafit Glute Ham Roller\n,\nIdeal for building posterior chain strength\n,\nWork your core, glutes and hamstrings by using the roller with your\nfeet\n,\nWork your arms, chest and back by using the roller with your hands\n,\nTwo 25mm diameter handle bars\n,\nConvenient V shape centre platform for anchoring heels/toes\n,\nPortable and easy to store when not in use\n,\nStrong 3mm (11 gauge) steel construction with 8mm thick end plates\n,\nDurable 75mm wheels with ball bearings for a smooth glide\n,\nBlack powder coated finish\n,\nMeasurements:\n,\nTotal height: 7.5cm\n,\nDepth: 30.5cm\n,\nWidth: 72cm\n}	Mirafit Glute Ham Roller	59.95	Get a full body workout with this Mirafit Glute Ham Roller. Suitable for use with hands or feet, this glider is ideal for working on the posterior chain, building strength and muscle. The portable, compact design is easy to store when not in use	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/G/l/Glute-Ham-Roller-Mirafit.jpg	rollers	conditioning	0
222	{textArr: \nMirafit High Density Foam Roller\n,\nUsed for sports massage, injury/muscle repair and great for aiding\nworkouts\n,\nAlso ideal for Pilates and Yoga classes\n,\nRoll over the firm, raised and flexible bumps on the body\n,\nBumps act like a massage therapists thumbs, stretching skin, eroding\ntrigger points and restoring flexibility\n,\nAlso great for relieving muscle pain and improving circulation\n,\nAvailable in:\n\n\nBlack\n\n\nOrange\n\n\n,\nBlack\n,\nOrange\n}	Mirafit Deluxe Hi-Density Foam Roller	12.95	Ease trigger points and aid recovery using our Foam Rollers. With a mix of ridged and smooth sections, they help you target different muscles around the body. Ideal for runners, use them on your IT band as well as on your hamstrings after leg day.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Black-and-Orange-Deluxe-Hi-Density-Foam-Rollers-on-White-Background_2.jpg	rollers	conditioning	0.04
223	{textArr: Mirafit EPE Foam Roller - 91cm ,Smooth black and orange design ,High density EPE foam withstands high pressure providing a deeper self-myofascial massage ,Used for sports massage, muscle repair and assisting workouts ,Great for pilates, Yoga and gym classes ,Long 91cm length is ideal for targeting larger areas such as quads, back and hamstrings ,Measurements:\n\nLength: 91cm \nDiameter: 14cm ,Length: 91cm ,Diameter: 14cm }	Mirafit EPE Foam Roller - 91cm	19.95	Our Foam Rollers are extremely effective at helping you release muscle tension and improve mobility and circulation. The EPE foam is firm but still gentle on your hips, joints and lower back. At 91cm, they're perfect for Yoga and Pilates classes. 	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/m/i/mirafit-91cm-epe-foam-roller.jpg	rollers	conditioning	0.05
224	{textArr: Mirafit EPE Foam Roller - 45cm ,Smooth black and orange design ,High density EPE foam withstands high pressure providing a deeper self-myofascial massage ,Used for sports massage, muscle repair and assisting workouts ,Great for pilates, Yoga and gym classes ,Position roller upright to help support and stabilise during standing exercises ,Measurements:\n\nLength: 45cm \nDiameter: 15cm ,Length: 45cm ,Diameter: 15cm }	Mirafit EPE Foam Roller - 45cm	11.95	Target trigger points and speed up muscle recovery using our High Density Foam Rollers. Ideal for runners, use on your glutes and IT band to help release tension. Rollers have both ridged and smooth sections. Available in a range of colours.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-45cm-Foam-Roller-on-White-Background.jpg	rollers	conditioning	0.05
225	{textArr: Mirafit Wrist Roller ,Improves forearm and grip strength ,11 gauge steel construction ,Thick 48mm diameter grip ,Matt black powder coated finish ,Strong nylon strap with 10 adjustable length settings ,Includes black steel carabiner ,Measurements: ,Strap length: 150cm ,Handle length: 38cm ,Grip length: 15cm ,Grip diameter: 4.8cm }	Mirafit Wrist Roller	34.95	Our Wrist Rollers allow you to build grip and forearm strength. Each roller comes with an adjustable strap and an accompanying carabiner clip for weight plates and kettlebells. The thick grip handles have a 4.8cm diameter to challenge your workouts.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Wrist-Roller_1.jpg	rollers	conditioning	0.048
226	{textArr: Mirafit Adjustable Speed Skipping Rope ,Black aluminium handles provide comfort, strength and grip ,360 degree ball bearing swivel system ensures smooth, tangle-free rotations ,Easily adjustable rope length - simply loosen screws on side of handles, pull cord through to desired length and re-tighten ,Lightweight and portable design is perfect for fitness/boxing classes etc. ,Measurements:\n\nCable length: 3 metres/10ft \nCable diameter: 2.6mm \nHandle length: 15cm ,Cable length: 3 metres/10ft ,Cable diameter: 2.6mm ,Handle length: 15cm }	Mirafit 3m Adjustable Ball Bearing Speed Rope	11.95	Our 3m Adjustable Speed Ropes with aluminium handles are durable and lightweight. The ball bearings allow for a smooth 360 degree spin for uninterrupted training. Adjust the length quickly and easily.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/m/i/mirafit-aluminium-handle-skipping-rope.jpg	skipping-ropes	conditioning	0.05
227	{textArr: \nMirafit Battle Jump Rope\n,\nAvailable in a choice of length and thickness\n,\nLengths available:\n\n\n2.8M (9.2ft)\n\n\n3M (9.8ft)\n\n\n,\n2.8M (9.2ft)\n,\n3M (9.8ft)\n,\nThicknesses available:\n\n\n1" (2.5cm)\n\n\n1.5" (3.8cm)\n\n\n2" (5cm)\n\n\n,\n1" (2.5cm)\n,\n1.5" (3.8cm)\n,\n2" (5cm)\n,\nWeighted skipping ropes provide a full body strength and endurance\nworkout\n,\nGreat for adding variety and intensity to your conditioning routine\nand existing jump rope exercises\n,\nChoose the 1" or 1.5" diameter rope to focus on general fitness, fat\nloss and cardio\n,\nChoose the thick, 2" diameter rope for a more challenging workout\nfocussed on building grip, shoulder and arm strength \n,\nDurable, black polyester weave\n,\nRubber coated handles provide a more comfortable grip and prevent\nfraying\n,\nApprox. Net weights:\n\n\n2.8M X 1": 1.1kg\n\n\n2.8M X 1.5": 2.3kg\n\n\n2.8M X 2": 3.6kg\n\n\n3M X 1": 1.2kg\n\n\n3M X 1.5": 2.6kg\n\n\n3M X 2": 3.9kg\n\n\n,\n2.8M X 1": 1.1kg\n,\n2.8M X 1.5": 2.3kg\n,\n2.8M X 2": 3.6kg\n,\n3M X 1": 1.2kg\n,\n3M X 1.5": 2.6kg\n,\n3M X 2": 3.9kg\n}	Mirafit Battle Jump Rope	14.95	Our Battle Jump Ropes are much more than your average skipping rope. The ropes range in weight from 1.1kg to 3.9kg and are 1-2 inches thick. Great for conditioning and endurance training.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-1-5-inch-Battle-Jump-Rope-Coiled-Up_2.jpg	skipping-ropes	conditioning	0.048
228	{textArr: Mirafit M4 Rack 3 Barbell Holder ,Compatible with the Mirafit M4 Power Rack ,Holds three Olympic bars vertically ,Pads protect the bars from scratches ,Black powder-coated steel ,Includes all required fixings ,Measurements:\n\nHeight: 10cm \nWidth: 30.5cm \nDepth: 14cm ,Height: 10cm ,Width: 30.5cm ,Depth: 14cm }	Mirafit M4 Rack 3 Barbell Holder	49.95	Keep your gym organised with this Mirafit M4 Vertical Barbell Holder. This rack mounted barbell holder keeps your bars within easy reach and your gym clutter-free. Stores three bars.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-M4-Vertical-Barbell-Holder.jpg	bar-storage	storage	0
232	{textArr: \nMirafit Horizontal Barbell Rack\n,\nChoice of colour: black or orange\n,\nThree bar storage capacity\n,\nWall mounted design\n,\nSafely store and protect bars\n,\nSuitable for both standard and Olympic weight bars\n,\nPowder coated steel frame\n,\nAnti scratch black HDPE liners - avoids damage to bars\n,\nStandard wall fixings included\n,\nBracket dimensions:\n\n\nHeight: 41cm\n\n\nDepth: 14cm\n\n\n,\nHeight: 41cm\n,\nDepth: 14cm\n}	Mirafit 3 Barbell Wall Rack	49.95	Suitable for both standard and Olympic weight bars, our horizontal barbell wall rack is perfect for home or commercial gyms. Safely store and protect your bars with its anti scratch high density plastic liners.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Orange-3-Barbell-Wall-Rack-Holding-Barbell.jpg	bar-storage	storage	0.05
233	{textArr: Mirafit Vertical Barbell Rack And Collar Storage ,Three bar storage capacity ,Two handy collar storage poles ,Suitable for olympic diameter weight bars ,Anti-scratch HDPE liners protect bars from damage ,Black powder-coated steel frame ,Wall mounted design ,Standard wall fixings provided ,Measurements:\n\nHeight: 11cm \nWidth: 48cm \nDepth: 12.5cm ,Height: 11cm ,Width: 48cm ,Depth: 12.5cm }	Mirafit 3 Bar Vertical Wall Rack with Collar Storage	54.95	Gyms look neat and tidy with our Vertical Wall Rack With Collar Storage. Perfect for quick and easy bar changes, the rack has room for three weight bars and two collars. Keeps your kit off the floor to save on space and avoid damage.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/m/i/mirafit-3-bar-vertical-wall-rack-with-collar-storage.jpg	bar-storage	storage	0.049
234	{textArr: Mirafit Vertical Barbell Rack ,Three bar storage capacity ,Suitable for Olympic diameter weight bars ,Anti-scratch HDPE liners protect bars from damage ,Black powder-coated steel frame ,Wall mounted design ,Standard wall fixings provided ,Measurements:\n\nHeight: 11cm \nWidth: 30cm \nDepth: 12.5cm ,Height: 11cm ,Width: 30cm ,Depth: 12.5cm }	Mirafit 3 Bar Vertical Wall Rack	49.95	Our Vertical Wall Racks have been designed to fit neatly on your wall helping you to save on space around your home gym. Bars can then be easily removed whenever you need. Holds three Olympic barbells.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-3-Barbell-Vertical-Wall-Rack.jpg	bar-storage	storage	0.049
235	{textArr: Mirafit M3 Rack 3 Barbell Holder ,Bolts directly onto the M3 rack  ,Neatly stores three Olympic weight bars vertically ,Black powder-coated steel frame ,Anti-scratch HDPE liners protect bars from damage ,Simple two bolt installation ,Includes all required fixings ,Measurements:\n\nHeight: 6cm \nWidth: 30cm \nDepth: 12.5cm ,Height: 6cm ,Width: 30cm ,Depth: 12.5cm }	Mirafit M3 Rack 3 Barbell Holder	39.95	Our Rack Mounted Barbell Holder will keep your gym neat and tidy. Bolting directly onto the cross member of the M3 rack this holder has a three bar capacity and HDPE liners to protect bars from damage.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-M3-Rack-Mounted-Barbell-Holder.jpg	bar-storage	storage	0
236	{textArr: Mirafit Olympic Storage Adaptors - Set Of 2 ,Adapts Olympic diameter hole to standard 1" bar size ,Ideal for weight storage racks - enables standard 1" bars to be stored in Olympic floor racks ,Compatible with all Mirafit Olympic bar floor stands ,Measurements: ,Total height: 20.5cm ,Diameter: 4.9cm ,Internal diameter: 2.6cm }	Mirafit Olympic to Standard Size Bar Stand Adaptors - Set of 2	14.95	Store your standard sized bars alongside your Olympic bars using our bar storage adaptor set. No need to buy a separate storage unit, simply insert the adaptor and you can safely store your 1" barbells in Olympic sized floor stands.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/m/i/mirafit-olympic-to-standard-bar-storage-adapters-in-stand.jpg	bar-storage	storage	0
237	{textArr: Mirafit Horizontal Plate Rack ,Versatile storage solution for a range of weight plates ,Includes two vertical Olympic barbell holders ,Rubber feet provide maximum stability whilst protecting flooring ,Black powder-coated steel construction ,Measurements: ,Height: 27.5cm ,Width: 109.5cm ,Depth: 34.5cm ,Plate slot width: 10cm }	Mirafit Horizontal Plate Rack & Bar Stand	99.95	Our Horizontal Plate Rack And Bar Stands keep your weight plates secure and within easy reach. The rack includes two Olympic barbell holders so you can switch bars easily and keep them off the floor.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Horizontal-Plate-Rack-and-Bar-Stand.jpg	bar-storage	storage	0.049
238	{textArr: \nMirafit Complete 2 Bay Gym Storage System\n,\nIdeal for storing a wide range of exercise equipment  \n,\nPackage contains:\n\n\n3 X 6ft end frames with non-marking rubber foot caps\n\n\nBumper plate rack (300kg max load)\n\n\nDumbbell rack (260kg max load)\n\n\nMulti purpose kettlebell tray (280kg max load)\n\n\nLarge ball rack (150kg max load)\n\n\nMedicine ball rack (130kg max load)\n\n\n2 X Olympic barbell holders\n\n\n2 X accessory hangers\n\n\n,\n3 X 6ft end frames with non-marking rubber foot caps\n,\nBumper plate rack (300kg max load)\n,\nDumbbell rack (260kg max load)\n,\nMulti purpose kettlebell tray (280kg max load)\n,\nLarge ball rack (150kg max load)\n,\nMedicine ball rack (130kg max load)\n,\n2 X Olympic barbell holders\n,\n2 X accessory hangers\n,\nEach frame includes 34 adjustable height positions\n,\nAll necessary fixings are packaged within each component for quick and\neasy installation\n,\nHeavy duty 60mm X 60mm steel construction\n,\nMeasurements:\n\n\nTotal height: 176cm\n\n\nTotal width: 289cm (width not including barbell holders and\naccessory hangers is 253cm)\n\n\nTotal depth: 47cm\n\n\n,\nTotal height: 176cm\n,\nTotal width: 289cm (width not including barbell holders and\naccessory hangers is 253cm)\n,\nTotal depth: 47cm\n,\nPlease note: tools required for assembly are not included\n,\nDumbbell rack must be placed with the back fixings one position\nhigher on the metal post than on the front - this is designed to give\nthe best angle for loading/unloading\n}	Mirafit 2 Bay Gym Storage System	19.95	Robust, durable and secure. Kit out your gym and install a professional storage system in an instant. Multi-purpose, solid storage and fantastic versatility, our storage systems come with everything you need to keep your workout area organised.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-2-Bay-Gym-Storage-System.jpg	freestanding-gym-storage	storage	0.05
262	{textArr: Mirafit Horizontal Plate Rack ,Versatile storage solution for a range of weight plates ,Includes two vertical Olympic barbell holders ,Rubber feet provide maximum stability whilst protecting flooring ,Black powder-coated steel construction ,Measurements: ,Height: 27.5cm ,Width: 109.5cm ,Depth: 34.5cm ,Plate slot width: 10cm }	Mirafit Horizontal Plate Rack & Bar Stand	99.95	Our Horizontal Plate Rack And Bar Stands keep your weight plates secure and within easy reach. The rack includes two Olympic barbell holders so you can switch bars easily and keep them off the floor.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Horizontal-Plate-Rack-and-Bar-Stand.jpg	plate-storage	storage	0.049
239	{textArr: \nMirafit Single Bay Gym Storage System\n,\nPerfect solution for storing a variety of exercise equipment\n,\nPackage contains:\n,\n2 X 6ft end frames with non-marking rubber foot caps\n,\nBumper plate rack (300kg max load)\n,\nMulti-purpose kettlebell/dumbbell tray (280kg max load)\n,\nMedicine ball rack (130kg max load)\n,\nLarge ball rack (150kg max load)\n,\n2 X Olympic barbell holders\n,\nEach frame consists of 34 adjustable height positions\n,\nAll necessary fixings are packaged within each component for quick and\neasy installation\n,\nHeavy duty 60mm X 60mm steel construction\n,\nMeasurements:\n\n\nTotal width: 140cm\n\n\nTotal depth: 47cm\n\n\nTotal height: 176cm\n\n\n,\nTotal width: 140cm\n,\nTotal depth: 47cm\n,\nTotal height: 176cm\n,\nPlease note: tools required for assembly are not included \n}	Mirafit Single Bay Gym Storage System	17.95	Keep your gym looking clean and professional with our Single Bay Gym Storage System. Perfect for storing bumper plates, kettlebells, medicine balls, exercise balls and more. Includes holders for two Olympic bars. Strong, solid and reliable.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Single-Bay-Gym-Storage-System-on-White-Background.jpg	freestanding-gym-storage	storage	0.05
240	{textArr: \nMirafit Fully Customisable Gym Storage System\n,\nDesign and create your own personalised storage rack\n,\nAvailable in a choice of black or orange colour\n,\nHighly configurable system allows for endless expansion capabilities -\ncreate the perfect system for your space\n,\nUprights available in a choice of 3 heights (176cm, 126cm and 87cm)\n,\nStorage shelves and racks available in a choice of 2 widths (115cm and\n180cm)\n,\nEach additional bay adds 121cm (if using 115cm shelves) or 186cm (if\nusing 180cm shelves)\n,\nMix and match uprights and shelves to create exactly the storage\nsolution you require\n,\nShelf height positions are separated by 5cm gaps\n,\nNon-marking black rubber foot caps on uprights protect floors against\ndamage\n,\nEach component includes all required fixings to allow for quick and\neasy installation\n,\nHeavy duty 60mm X 60mm steel construction\n,\nEach bay is 47cm deep including the feet\n,\nPurchase options:\n}	Mirafit Fully Customisable Gym Storage System	17.95	A durable storage system for your gym that's fully customisable. Design your rack to store the exact equipment you need. Add extra bays and a range of attachments with dumbbell, kettlebell, weight plate, bar and accessory racks. In orange and black.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-2-Bay-Gym-Storage-System-on-White-Background.jpg	freestanding-gym-storage	storage	0.045
241	{textArr: Mirafit M3 Commercial Dumbbell Rack ,Commercially rated storage solution suitable for use as a single or multi bay setup ,Single bay includes 2 uprights and 2 shelves ,Extension bays include 1 upright and 2 shelves ,Purchase the single bay to use alone or extend your storage with one or more extension bays ,To build a twin bay rack you need to buy 1 single bay plus 1 extension bay. For a triple bay rack you need to buy 1 single bay plus 2 extensions bays etc. ,Each bay holds 5 pairs of dumbbells with a load capacity of 400kg ,Each extension bay adds an extra 109cm to total width (total 2 bay width is therefore 231cm, 3 bay is 340cm etc) ,Arc shaped saddles keep dumbbells secure ,Ideal for round Mirafit rubber dumbbells including the Mirafit M3 range ,Strong 80mm x 40mm oval shaped steel frame ,Black powder coated finish ,Rubber feet provides floor protection ,Measurements:\n\nHeight - 80cm \nDepth - 56cm \nWidth:\n\nSingle Bay - 122cm \nExtension bay - adds 109cm \nWidths stated are measured to the widest point ,Height - 80cm ,Depth - 56cm ,Width:\n\nSingle Bay - 122cm \nExtension bay - adds 109cm \nWidths stated are measured to the widest point ,Single Bay - 122cm ,Extension bay - adds 109cm ,Widths stated are measured to the widest point }	Mirafit M3 Commercial Dumbbell Rack	149.95	Our Mirafit M3 Commercial Dumbbell Rack provides an extendable, stylish way to store your dumbbells. Each bay has a weight capacity of 400kgs with saddles to keep your weights secure. Purchase extension bays to continue increasing your storage.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-M3-Commercial-Dumbbell-Rack.jpg	freestanding-gym-storage	storage	0.05
242	{textArr: \nMirafit 3 Tier 400kg Dumbbell Rack\n,\nAvailable in a choice of two colours:\n\n\nBlack\n\n\nOrange and black\n\n\n,\nBlack\n,\nOrange and black\n,\nThree 47" storage trays - suitable for dumbbells with 11cm minimum\nhandle handle width\n,\nIdeal for our hex or rubber dumbbells. Not suitable for mini soft\ntouch dumbbells\n,\nFreestanding design\n,\nPerfect for home gyms and garages\n,\nPowder coated steel construction\n,\n400kg maximum load\n,\nMeasurements:\n\n\nWidth: 131.5cm\n\n\nDepth: 56cm\n\n\nHeight: 88cm\n\n\nTray: 120cm X 25.5cm\n\n\n,\nWidth: 131.5cm\n,\nDepth: 56cm\n,\nHeight: 88cm\n,\nTray: 120cm X 25.5cm\n}	Mirafit 3 Tier 400kg Dumbbell Rack	149.95	Stay tidy and ready to train with our Three Tier Dumbbell Racks. The racks come in a choice of colours and can handle up to 400kg. Ideal for home or garage gyms.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-3-Tier-400kg-Dumbbell-Rack-in-Orange.jpg	freestanding-gym-storage	storage	0.05
243	{textArr: \nMirafit 2 Tier 250kg Dumbbell Rack\n,\nFreestanding dumbbell storage stand to keep your gym neat and tidy\n,\nChoice of black or orange powder coated finish\n,\nStrong 60mm x 60mm steel construction\n,\nTwo storage trays suitable for dumbbells with 11cm minimum handle width\n,\nIdeal for our hex or rubber dumbbells. Not suitable for mini soft\ntouch dumbbells\n,\nProtective foot caps with Mirafit emblem\n,\n250kg maximum load\n,\nMeasurements:\n,\nWidth: 102cm\n,\nDepth: 42.5cm\n,\nHeight: 60.5cm\n,\nTray: 90cm x 27cm\n}	Mirafit 2 Tier Dumbbell Rack	119.95	Keep your gym tidy with our 2 Tier 250kg Dumbbell Rack. In black or orange this free standing dumbbell storage rack will keep your weights organised and help to reduce the amount of time you spend changing between weights.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/m/i/mirafit-2-tier-250kg-dumbbell-rack-in-orange.jpg	freestanding-gym-storage	storage	0.05
244	{textArr: \nMirafit 2 Tier Dumbbell Rack\n,\nChoice of colour: black or orange\n,\nIdeal rack for storing hex weights and dumbbells\n,\nTwo 26" storage trays - suitable for dumbbells with 11cm minimum\nhandle size\n,\nKeeps your home gym area tidy and organised\n,\nAllows you to easily find desired weights quickly and easily\n,\nFreestanding design, perfect for home gyms and garages\n,\nPowder-coated steel construction\n,\n150kg maximum load\n,\nMeasurements:\n\n\nWidth: 73cm\n\n\nDepth: 50cm\n\n\nHeight: 74cm\n\n\nTray: 66.5cm X 22cm\n\n\nFrame: 60mm X 30mm\n\n\n,\nWidth: 73cm\n,\nDepth: 50cm\n,\nHeight: 74cm\n,\nTray: 66.5cm X 22cm\n,\nFrame: 60mm X 30mm\n}	Mirafit 2 Tier 150kg Dumbbell Rack	69.95	Keep your home gym tidy and organised with our freestanding Two Tier 150kg Dumbbell Rack. Two 26" storage trays are ideal for arranging your hex weights and dumbbells for easy retrieval. Available in black or orange.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Orange-2-Tier-Dumbbell-Rack-swatches.jpg	freestanding-gym-storage	storage	0.046
245	{textArr: \nMirafit Vertical Dumbbell Rack\n,\nHolds up to 6 pairs of hex weights (max dumbbell size 20kg)\n,\nNot suitable for our round dumbbells, it is only suitable for hex\nweights\n,\nA frame design\n,\nSuitable for weight handles up to 1.5" diameter\n,\nOpen sides allow easy lifting off stand\n,\nConvenient angled rubber top rest plate\n,\nKeeps weights neat and tidy\n,\n1.5mm steel construction\n,\nBlack powder coated finish\n,\nRubber feet protects floor from scratches\n,\nFor a guide to what weights will fit please see the photos\n,\nMax load: 200kg\n,\nPlease note: tools required for assembly are not included.\n,\nDimensions -\n\n\nHeight - 95.5cm\n\n\nWidth - 61cm\n\n\nDepth - 54cm\n\n\nFrame tube - 50mm X 50mm\n\n\nSpace between cut out rests 10.5cm\n\n\n,\nHeight - 95.5cm\n,\nWidth - 61cm\n,\nDepth - 54cm\n,\nFrame tube - 50mm X 50mm\n,\nSpace between cut out rests 10.5cm\n}	Mirafit Vertical Dumbbell Stand	69.95	Keep your home gym in order and your weights to hand using our Vertical Dumbbell Stands. With room for six pairs of dumbbells, it's easy to keep your gym equipment neat, tidy and organised.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/B/l/Black-Mirafit-Vertical-Dumbbell-Stand-on-White-Backdrop_1.jpg	freestanding-gym-storage	storage	0.047
246	{textArr: \nMirafit 2 Tier Kettlebell Rack\n,\nTwo 38" kettlebell trays, suitable for storing a range of eight to ten\nweights (depending on size)\n,\nSecured rubber tray liners protect against knocks and scratches\n,\nTwo tier design helps maximise storage space, keeping your workout\narea tidy and organised\n,\nPerfect for home gyms, studios and garages\n,\nBlack powder coated steel construction\n,\n300kg maximum load\n,\nMeasurements:\n\n\nHeight: 75cm\n\n\nWidth: 104cm\n\n\nDepth: 50.5cm\n\n\nTray: 96cm X 24cm\n\n\n,\nHeight: 75cm\n,\nWidth: 104cm\n,\nDepth: 50.5cm\n,\nTray: 96cm X 24cm\n,\nPlease note: tools required for assembly are not included\n}	Mirafit 2 Tier Kettlebell Rack	159.95	Get gym storage that you can trust with our Two Tier Kettlebell Racks. The twin level can handle up to 300kg and the rack also features secured rubber linings on each layer to help protect your kettlebells from marks or scratches.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Kettlebell-Storage-Rack_2.jpg	freestanding-gym-storage	storage	0.05
247	{textArr: Mirafit Horizontal Plate Rack ,Versatile storage solution for a range of weight plates ,Includes two vertical Olympic barbell holders ,Rubber feet provide maximum stability whilst protecting flooring ,Black powder-coated steel construction ,Measurements: ,Height: 27.5cm ,Width: 109.5cm ,Depth: 34.5cm ,Plate slot width: 10cm }	Mirafit Horizontal Plate Rack & Bar Stand	99.95	Our Horizontal Plate Rack And Bar Stands keep your weight plates secure and within easy reach. The rack includes two Olympic barbell holders so you can switch bars easily and keep them off the floor.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Horizontal-Plate-Rack-and-Bar-Stand.jpg	freestanding-gym-storage	storage	0.049
248	{textArr: \nMirafit Olympic Weight Tree & Bar Stand\n,\nHome storage rack with six horizontal weight poles and two bar holders\n,\nSuitable for all 2"/50mm Olympic plates\n,\nSpacing allows all six poles to store full size 45cm diameter Olympic\nplates simultaneously (see images)\n,\nTwo upright Olympic barbell holders\n,\nBlack and orange powder-coated steel construction\n,\nDesign tested to 400kg (60kg per pole, 20kg per bar holder)\n,\nMeasurements:\n\n\nHeight: 130cm\n\n\nWidth: 70cm\n\n\nDepth: 63cm\n\n\n,\nHeight: 130cm\n,\nWidth: 70cm\n,\nDepth: 63cm\n,\nPlease note: tools required for assembly are not included \n}	Mirafit Olympic Weight Tree with Bar Stand	129.95	Ideal for organising your home gym for quick and easy weight changes. Includes six horizontal storage poles as well as storage space for two Olympic barbells.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/o/r/orange-mirafit-olympic-weight-plate-and-bar-rack.jpg	freestanding-gym-storage	storage	0.05
249	{textArr: \nMirafit 2 Tier Kettlebell Rack\n,\nTwo 38" kettlebell trays, suitable for storing a range of eight to ten\nweights (depending on size)\n,\nSecured rubber tray liners protect against knocks and scratches\n,\nTwo tier design helps maximise storage space, keeping your workout\narea tidy and organised\n,\nPerfect for home gyms, studios and garages\n,\nBlack powder coated steel construction\n,\n300kg maximum load\n,\nMeasurements:\n\n\nHeight: 75cm\n\n\nWidth: 104cm\n\n\nDepth: 50.5cm\n\n\nTray: 96cm X 24cm\n\n\n,\nHeight: 75cm\n,\nWidth: 104cm\n,\nDepth: 50.5cm\n,\nTray: 96cm X 24cm\n,\nPlease note: tools required for assembly are not included\n}	Mirafit 2 Tier Kettlebell Rack	159.95	Get gym storage that you can trust with our Two Tier Kettlebell Racks. The twin level can handle up to 300kg and the rack also features secured rubber linings on each layer to help protect your kettlebells from marks or scratches.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Kettlebell-Storage-Rack_2.jpg	kettlebell-storage	storage	0.05
250	{textArr: Mirafit Kettlebell Set and Weight Rack ,Package includes:\n\n4kg cast iron kettlebell \n6kg cast iron kettlebell \n8kg cast iron kettlebell \n10kg cast iron kettlebell \n12kg cast iron kettlebell \n16kg cast iron kettlebell \n20kg cast iron kettlebell \n24kg cast iron kettlebell \n28kg cast iron kettlebell \n32kg cast iron kettlebell \n2 tier kettlebell rack ,4kg cast iron kettlebell ,6kg cast iron kettlebell ,8kg cast iron kettlebell ,10kg cast iron kettlebell ,12kg cast iron kettlebell ,16kg cast iron kettlebell ,20kg cast iron kettlebell ,24kg cast iron kettlebell ,28kg cast iron kettlebell ,32kg cast iron kettlebell ,2 tier kettlebell rack ,Powder coated matt black finish with orange styling ,Handle is easy to grip and comfortable to use ,Flat non-wobble base prevents rolling ,Two 38" kettlebell trays, suitable for storing up to 10 weights ,Secured rubber tray liners protect against knocks and scratches ,300kg maximum load ,Rack measurements:\n\nHeight: 75cm \nWidth: 104cm \nDepth: 50.5cm \nTray: 96cm x 24cm ,Height: 75cm ,Width: 104cm ,Depth: 50.5cm ,Tray: 96cm x 24cm ,Please note: tools required for assembly are not included }	Mirafit Kettlebell Set & Weight Rack	599.95	Kit out your gym with our purpose-built Cast Iron Kettlebell Set and Rack. The set includes a full range of weights starting at 4kg and going right up to 32kg. Each rack tray is lined with a soft rubber to protect your equipment from marks and damage	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Kettlebell-Set-and-Weight-Rack.jpg	kettlebell-storage	storage	0
263	{textArr: Mirafit Portable Bumper Plate Trolley Rack ,Horizontal storage allows easy loading and unloading ,Varying slot widths to suit a range of bumper plates ,Smaller section for fractional plates ,Rear castor wheels and front handle for easy mobility ,Black powder-coated steel construction ,Load testing: 300kg ,Measurements:\n\nTotal height: 30cm \nTotal width: 154.5cm \nTotal depth: 40cm ,Total height: 30cm ,Total width: 154.5cm ,Total depth: 40cm }	Mirafit Portable Bumper Plate Trolley Rack	129.95	Keep weights to hand using our Portable Bumper Plate Racks. Fitted with castor wheels and a secure handle, use them to hold a range of different sized weight plates. Suitable for full size bumper plates and even smaller, fractional change plates.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Portable-Bumper-Plate-Trolley-Rack.jpg	plate-storage	storage	0.05
251	{textArr: \nMirafit Complete 2 Bay Gym Storage System\n,\nIdeal for storing a wide range of exercise equipment  \n,\nPackage contains:\n\n\n3 X 6ft end frames with non-marking rubber foot caps\n\n\nBumper plate rack (300kg max load)\n\n\nDumbbell rack (260kg max load)\n\n\nMulti purpose kettlebell tray (280kg max load)\n\n\nLarge ball rack (150kg max load)\n\n\nMedicine ball rack (130kg max load)\n\n\n2 X Olympic barbell holders\n\n\n2 X accessory hangers\n\n\n,\n3 X 6ft end frames with non-marking rubber foot caps\n,\nBumper plate rack (300kg max load)\n,\nDumbbell rack (260kg max load)\n,\nMulti purpose kettlebell tray (280kg max load)\n,\nLarge ball rack (150kg max load)\n,\nMedicine ball rack (130kg max load)\n,\n2 X Olympic barbell holders\n,\n2 X accessory hangers\n,\nEach frame includes 34 adjustable height positions\n,\nAll necessary fixings are packaged within each component for quick and\neasy installation\n,\nHeavy duty 60mm X 60mm steel construction\n,\nMeasurements:\n\n\nTotal height: 176cm\n\n\nTotal width: 289cm (width not including barbell holders and\naccessory hangers is 253cm)\n\n\nTotal depth: 47cm\n\n\n,\nTotal height: 176cm\n,\nTotal width: 289cm (width not including barbell holders and\naccessory hangers is 253cm)\n,\nTotal depth: 47cm\n,\nPlease note: tools required for assembly are not included\n,\nDumbbell rack must be placed with the back fixings one position\nhigher on the metal post than on the front - this is designed to give\nthe best angle for loading/unloading\n}	Mirafit 2 Bay Gym Storage System	19.95	Robust, durable and secure. Kit out your gym and install a professional storage system in an instant. Multi-purpose, solid storage and fantastic versatility, our storage systems come with everything you need to keep your workout area organised.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-2-Bay-Gym-Storage-System.jpg	kettlebell-storage	storage	0.05
252	{textArr: \nMirafit Single Bay Gym Storage System\n,\nPerfect solution for storing a variety of exercise equipment\n,\nPackage contains:\n,\n2 X 6ft end frames with non-marking rubber foot caps\n,\nBumper plate rack (300kg max load)\n,\nMulti-purpose kettlebell/dumbbell tray (280kg max load)\n,\nMedicine ball rack (130kg max load)\n,\nLarge ball rack (150kg max load)\n,\n2 X Olympic barbell holders\n,\nEach frame consists of 34 adjustable height positions\n,\nAll necessary fixings are packaged within each component for quick and\neasy installation\n,\nHeavy duty 60mm X 60mm steel construction\n,\nMeasurements:\n\n\nTotal width: 140cm\n\n\nTotal depth: 47cm\n\n\nTotal height: 176cm\n\n\n,\nTotal width: 140cm\n,\nTotal depth: 47cm\n,\nTotal height: 176cm\n,\nPlease note: tools required for assembly are not included \n}	Mirafit Single Bay Gym Storage System	17.95	Keep your gym looking clean and professional with our Single Bay Gym Storage System. Perfect for storing bumper plates, kettlebells, medicine balls, exercise balls and more. Includes holders for two Olympic bars. Strong, solid and reliable.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Single-Bay-Gym-Storage-System-on-White-Background.jpg	kettlebell-storage	storage	0.05
253	{textArr: \nMirafit Fully Customisable Gym Storage System\n,\nDesign and create your own personalised storage rack\n,\nAvailable in a choice of black or orange colour\n,\nHighly configurable system allows for endless expansion capabilities -\ncreate the perfect system for your space\n,\nUprights available in a choice of 3 heights (176cm, 126cm and 87cm)\n,\nStorage shelves and racks available in a choice of 2 widths (115cm and\n180cm)\n,\nEach additional bay adds 121cm (if using 115cm shelves) or 186cm (if\nusing 180cm shelves)\n,\nMix and match uprights and shelves to create exactly the storage\nsolution you require\n,\nShelf height positions are separated by 5cm gaps\n,\nNon-marking black rubber foot caps on uprights protect floors against\ndamage\n,\nEach component includes all required fixings to allow for quick and\neasy installation\n,\nHeavy duty 60mm X 60mm steel construction\n,\nEach bay is 47cm deep including the feet\n,\nPurchase options:\n}	Mirafit Fully Customisable Gym Storage System	17.95	A durable storage system for your gym that's fully customisable. Design your rack to store the exact equipment you need. Add extra bays and a range of attachments with dumbbell, kettlebell, weight plate, bar and accessory racks. In orange and black.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-2-Bay-Gym-Storage-System-on-White-Background.jpg	kettlebell-storage	storage	0.045
254	{textArr: Mirafit Competition Kettlebell Set & Weight Rack ,Package includes:\n\n8kg competition kettlebell (light pink rings) \n10kg competition kettlebell (dark pink rings) \n12kg competition kettlebell (blue rings) \n16kg competition kettlebell (yellow rings) \n20kg competition kettlebell (purple rings) \n24kg competition kettlebell (green rings) \n28kg competition kettlebell (orange rings) \n32kg competition kettlebell (red rings) \n2 tier kettlebell storage rack ,8kg competition kettlebell (light pink rings) ,10kg competition kettlebell (dark pink rings) ,12kg competition kettlebell (blue rings) ,16kg competition kettlebell (yellow rings) ,20kg competition kettlebell (purple rings) ,24kg competition kettlebell (green rings) ,28kg competition kettlebell (orange rings) ,32kg competition kettlebell (red rings) ,2 tier kettlebell storage rack ,Colour rings on handles make identification easy and fast ,Ideal for gyms, studios and personal trainers ,All kettlebells have the same dimensions for ease of use ,Flat base prevents the kettlebell from rolling away or rocking during exercise ,Hollow steel ball with a sand and iron sand filling ,Kettlebell storage rack includes two 38" kettlebell trays, ideal for storing the full set ,Secured rubber tray liners protect against knocks and scratches ,300kg maximum load ,Measurements:\n\nKettlebells:\n\n28cm x 21cm x 21cm (handle 34mm) \nRack:\n\nHeight: 75cm \nWidth: 104cm \nDepth: 50.5cm \nTray: 96cm x 24cm ,Kettlebells:\n\n28cm x 21cm x 21cm (handle 34mm) ,28cm x 21cm x 21cm (handle 34mm) ,Rack:\n\nHeight: 75cm \nWidth: 104cm \nDepth: 50.5cm \nTray: 96cm x 24cm ,Height: 75cm ,Width: 104cm ,Depth: 50.5cm ,Tray: 96cm x 24cm ,Please note: tools required for rack assembly are not included }	Mirafit Competition Kettlebell Set & Weight Rack	499.95	Enhance your training with the Mirafit Competition Kettlebell Set & Weight Rack. This kit includes eight kettlebells ranging from 8kg to 32kg kettlebell size plus weight storage rack. Kettlebells are colour coded and a uniform size for ease of use.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Competition-Kettlebells-in-Rack-on-White-Background_2.jpg	kettlebell-storage	storage	0
255	{textArr: Mirafit Soft Touch Kettlebell Set & Weight Rack ,Package Includes:\n\n6kg kettlebell (orange) \n8kg kettlebell (orange) \n10kg kettlebell (orange) \n12kg kettlebell (orange) \n16kg kettlebell (orange) \n20kg kettlebell (black) \n24kg kettlebell (black) \n28kg kettlebell (black) \n32kg kettlebell (black) \n2 tier kettlebell rack ,6kg kettlebell (orange) ,8kg kettlebell (orange) ,10kg kettlebell (orange) ,12kg kettlebell (orange) ,16kg kettlebell (orange) ,20kg kettlebell (black) ,24kg kettlebell (black) ,28kg kettlebell (black) ,32kg kettlebell (black) ,2 tier kettlebell rack ,Soft touch kettlebell coating is floor friendly and ideal for home gyms and studios ,Kettlebell workouts are a great way to exercise the full body including leg, arm, core and back muscles ,Handles are easy to grip and comfortable during use ,Mirafit logo and weight label is printed in white on each kettlebell, improving visibility ,Sturdy kettlebell rack with two 38" trays for easy storage ,Secured rubber tray liners protect against knocks and scratches ,300kg maximum load ,Rack measurements:\n\nHeight: 75cm \nWdith: 104cm \nDepth: 50.5cm \nTray: 96cm x 24cm ,Height: 75cm ,Wdith: 104cm ,Depth: 50.5cm ,Tray: 96cm x 24cm ,Please note: tools required for assembly are not included }	Mirafit Soft Touch Kettlebell Set & Weight Rack	599.95	Get a ready made gym setup with the Mirafit Soft Touch Kettlebell Set & Weight Rack. Ranging from a 6kg kettlebell to a 32kg kettlebell you get 9 weights and a 2 tier rack. The soft touch coating makes the weights floor friendly.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Soft-Touch-Kettlebells-with-stand-on-white-background_1.jpg	kettlebell-storage	storage	0
256	{textArr: \nMirafit Competition Kettlebell Set & Weight Rack\n,\nSet of 7 kettlebells and a 2 tier weight rack\n,\nDurable cast steel kettlebells with stainless steel handles\n,\nEach kettlebell is calibrated to +/- 200g\n,\nAll kettlebells have the same dimensions for ease of use \n,\nFlat bases prevent the kettlebells rolling away or rocking\n,\nBlack powder coated finish\n,\nPremium stainless steel handles for an excellent feeling in the hand.\nPlease note stainless handle will show polishing marks\n,\nContrasting debossed Mirafit logos and weight labels on front of each\nkettlebell in white for easy identification\n,\nKettlebell storage rack includes two 38" kettlebell trays, ideal for\nstoring the full set\n,\nSecured rubber tray liners protect against knocks and scratches\n,\n300kg maximum load\n,\nMeasurements:\n\n\nKettlebells:\n\n\n28cm x 21cm x 21cm (handle 34mm)\n\n\n\n\nRack:\n\n\nHeight: 75cm\n\n\nWidth: 104cm\n\n\nDepth: 50.5cm\n\n\nTray: 96cm x 24cm\n\n\n\n\n,\nKettlebells:\n\n\n28cm x 21cm x 21cm (handle 34mm)\n\n\n,\n28cm x 21cm x 21cm (handle 34mm)\n,\nRack:\n\n\nHeight: 75cm\n\n\nWidth: 104cm\n\n\nDepth: 50.5cm\n\n\nTray: 96cm x 24cm\n\n\n,\nHeight: 75cm\n,\nWidth: 104cm\n,\nDepth: 50.5cm\n,\nTray: 96cm x 24cm\n,\nPlease note: tools required for rack assembly are not included.\n}	Mirafit Black Competition Kettlebell Set & Weight Rack	699.95	This Competition Kettlebell Set features a consistent size from 8kg to 32kg. Each kettlebell has a black body and a stainless-steel handle for excellent feel. The included kettlebell storage rack ensures your gym space stays neat and well organized	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/S/e/Set-of-Mirafit-Gen-II-Competition-Kettlebells-with-Storage-Rack.jpg	kettlebell-storage	storage	0
257	{textArr: \nMirafit Olympic Weight Tree & Bar Stand\n,\nHome storage rack with six horizontal weight poles and two bar holders\n,\nSuitable for all 2"/50mm Olympic plates\n,\nSpacing allows all six poles to store full size 45cm diameter Olympic\nplates simultaneously (see images)\n,\nTwo upright Olympic barbell holders\n,\nBlack and orange powder-coated steel construction\n,\nDesign tested to 400kg (60kg per pole, 20kg per bar holder)\n,\nMeasurements:\n\n\nHeight: 130cm\n\n\nWidth: 70cm\n\n\nDepth: 63cm\n\n\n,\nHeight: 130cm\n,\nWidth: 70cm\n,\nDepth: 63cm\n,\nPlease note: tools required for assembly are not included \n}	Mirafit Olympic Weight Tree with Bar Stand	129.95	Ideal for organising your home gym for quick and easy weight changes. Includes six horizontal storage poles as well as storage space for two Olympic barbells.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/o/r/orange-mirafit-olympic-weight-plate-and-bar-rack.jpg	plate-storage	storage	0.05
258	{textArr: Mirafit 2" Olympic Weight Rack ,Heavy duty metal stand 7 plate holders ,Black finish ,Designed for Olympic size 2" barbell weights with a standard thickness ,Angled design ensures weights do not fall off ,Keeps plates safely suspended off the floor for easy storage and removal ,Prevents both your floor and your weights from becoming damaged ,Dimensions:\n\nHeight: 86cm \nLength: 73cm \nWidth: 35cm \nPost length: 19cm/10.5cm ,Height: 86cm ,Length: 73cm ,Width: 35cm ,Post length: 19cm/10.5cm ,Please note:\n\nThis product is not designed to hold bumper plates \nRequires assembly \nInstructions and fixings are included \nWeights are not included ,This product is not designed to hold bumper plates ,Requires assembly ,Instructions and fixings are included ,Weights are not included }	Mirafit 2" Olympic Weight Rack	59.95	Keep your cast iron plates tidy and organised using our Olympic Weight Storage Racks. With seven plate holder storage bars which keep your weights off the floor for easy storage and safe removal. Suitable for 2" Olympic cast iron weight plates.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-2-Inch-Olympic-Weight-Rack.jpg	plate-storage	storage	0.048
259	{textArr: Mirafit 1" Standard Weight Rack ,Heavy duty metal stand ,7 plate holders ,Black finish ,Designed for standard 1" barbell weights ,Angled design ensures weights do not fall off ,Keeps plates safely suspended off the floor for easy storage and removal ,Prevents both your floor and your weights from becoming damaged ,Dimensions -\n\nHeight - 86cm \nLength - 73cm \nWidth - 35cm \nPost length - 19cm/11cm ,Height - 86cm ,Length - 73cm ,Width - 35cm ,Post length - 19cm/11cm ,Requires assembly ,Instructions & fixings included ,Weights not included }	Mirafit 1" Standard Weight Rack	59.95	Keep your garage gym tidy and your weights to hand using our Standard Weight Storage Racks. Each rack has seven storage poles which are angled to keep your plates secure when not in use. Suitable for 1" weight plates.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-1-Inch-Standard-Weight-Rack.jpg	plate-storage	storage	0.049
260	{textArr: \nMirafit Olympic Weight Plate Wall Storage Rack\n,\nSteel wall plate with three welded storage poles\n,\nAvailable as either a single or twin pack\n,\nSuitable for 2" Olympic weight plates\n,\nRubber back stops prevent plates touching wall\n,\nPole spacing allows full size bumper plates to be stored on all three\npoles simultaneously\n,\nPosition vertically or horizontally\n,\nNeatly store weight plates when not in use\n,\nIdeal for home, studio and professional use\n,\nStandard wall fixings included\n,\nLoad tested to 300kg (100kg max per pole)\n,\nMeasurements:\n,\nHeight: 10cm\n,\nWidth: 115cm\n,\nDepth: 32.5cm\n,\nLoadable pole length: 30.5cm\n,\nPole diameter: 48mm\n,\nPlease note: standard wall fixings are provided. These may not be\nsuitable for your wall type. If in doubt, always check with a\nprofessional before installation.\n}	Mirafit Olympic Weight Plate Wall Storage Rack	59.95	Keep your gym in check using our Olympic Weight Plate Wall Storage Racks. Ideal for saving on floor space to allow you more room for your gym equipment.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Olympic-Weight-Plate-Wall-Storage-Rack_1.jpg	plate-storage	storage	0.05
261	{textArr: \nMirafit Standard Weight Plate Wall Storage Rack\n,\nSteel wall plate with three welded storage poles\n,\nAvailable as either a single or twin pack\n,\nSuitable for 1" standard weight plates\n,\nRubber back stops prevent plates touching wall\n,\nPosition vertically or horizontally\n,\nNeatly store weight plates when not in use\n,\nIdeal for home, studio and professional use\n,\nStandard wall fixings included\n,\nStore up to 50kg max per pole\n,\nMeasurements -\n\n\nHeight - 10cm\n\n\nWidth - 115cm\n\n\nDepth - 32.5cm\n\n\nLoadable pole length - 30.5cm\n\n\nPole diameter - 25mm\n\n\n,\nHeight - 10cm\n,\nWidth - 115cm\n,\nDepth - 32.5cm\n,\nLoadable pole length - 30.5cm\n,\nPole diameter - 25mm\n,\nPlease note: standard wall fixings are provided. These may not be\nsuitable for your wall type. If in doubt, always check with a\nprofessional before installation.\n}	Mirafit Standard Weight Plate Wall Storage Rack	59.95	This wall mounted weight storage rack is suitable for standard 1" weight discs. Simple to install and ideal for keeping plates neat and tidy between sessions. For Olympic plate storage please see our Olympic version of this rack.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/m/i/mirafit-standard-weight-plate-wall-storage-rack.jpg	plate-storage	storage	0.05
264	{textArr: Mirafit Bumper Plate Stacker Trolley ,Ideal solution for storing bumpers neatly ,Vertical storage saves valuable floor space ,Cross-shaped base provides maximum stability ,Movable design with lockable castor wheels ,Black powder-coated steel construction ,Please note the trolley is designed for use on smooth floors. Pushing the trolley over rough floors can damage the castors. ,Measurements:\n\nTotal height: 103.5cm \nTotal width: 60.5cm \nWeight sleeve: 88cm ,Total height: 103.5cm ,Total width: 60.5cm ,Weight sleeve: 88cm }	Mirafit Bumper Plate Stacker Trolley	79.95	Store your weights and keep them close by as you squat, press and deadlift using our Bumper Plate Stacker Trolley. The handy compact design with castors is perfect for anyone looking for movable storage.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/m/i/mirafit-bumper-plate-stacker-trolley.jpg	plate-storage	storage	0.049
265	{textArr: \nMirafit M100 Weight Storage Poles\n,\nCompatible with the M100 power rack\n,\nAvailable in two lengths to suit Olympic plates or Olympic fractional\nplates\n,\nSupplied in pairs\n,\nAlso now available to suit standard 1" plates\n,\nEach upright has a large hole at the bottom suitable for the Olympic\nweight plate poles or standard weight plate poles\n,\nEach upright has smaller holes at the top of each upright. These holes\nare suitable for the fractional poles. Remember to use collars to\navoid the risk of plates falling if the rack is knocked\n,\nNot compatible with M200 or M2 models\n,\nThe olympic and standard plate storage poles are also compatible with\nthe old M1 rack but the fractional poles are not as it did not have\nthe holes for them\n,\nPowder coated matt black finish\n,\nIncludes all required fixings\n,\nMeasurements:\n\n\nOlympic Plate Storage Poles:\n\n\nTotal Length: 25cm\n\n\nUsable Sleeve Length: 20cm\n\n\nSleeve Diameter: 4.8cm\n\n\n\n\nOlympic Fractional Plate Storage Poles:\n\n\nTotal Length: 13.1cm\n\n\nUsable Sleeve Length: 11.5cm\n\n\nSleeve Diameter: 4.8cm\n\n\n\n\nStandard Plate Storage Poles:\n\n\nTotal Length: 25cm\n\n\nUsable Sleeve Length: 19.5cm\n\n\nSleeve Diameter: 2.4cm\n\n\n\n\n,\nOlympic Plate Storage Poles:\n\n\nTotal Length: 25cm\n\n\nUsable Sleeve Length: 20cm\n\n\nSleeve Diameter: 4.8cm\n\n\n,\nTotal Length: 25cm\n,\nUsable Sleeve Length: 20cm\n,\nSleeve Diameter: 4.8cm\n,\nOlympic Fractional Plate Storage Poles:\n\n\nTotal Length: 13.1cm\n\n\nUsable Sleeve Length: 11.5cm\n\n\nSleeve Diameter: 4.8cm\n\n\n,\nTotal Length: 13.1cm\n,\nUsable Sleeve Length: 11.5cm\n,\nSleeve Diameter: 4.8cm\n,\nStandard Plate Storage Poles:\n\n\nTotal Length: 25cm\n\n\nUsable Sleeve Length: 19.5cm\n\n\nSleeve Diameter: 2.4cm\n\n\n,\nTotal Length: 25cm\n,\nUsable Sleeve Length: 19.5cm\n,\nSleeve Diameter: 2.4cm\n}	Mirafit M100 Weight Storage Poles	19.95	Our M100 Weight Storage Poles keep your home gym tidy while allowing easy access to your plates. Supplied as a pair they come in a choice of size to suit regular standard, olympic plates or fractional storage.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/F/u/Full-Set-of-Mirafit-M100-Olympic-Weight-Storage-Poles.jpg	plate-storage	storage	0.049
266	{textArr: \nMirafit M200 Weight Storage Poles\n,\nCompatible with the M200, M210 and M220 power racks\n,\nAvailable in two lengths to suit Olympic plates or Olympic fractional\nplates\n,\nSupplied in pairs\n,\nInstallation positions:\n,\nM200 has positions at top and bottom of 4 uprights \n,\nM200S has positions at bottom (not top) of 4 uprights\n,\nM210 has positions at top and bottom of 2 uprights\n,\nM220 has positions at bottom (not top) of 2 uprights\n,\nPositions at top of upright should only be used to store lighter,\nfractional plates. Remember to use 48mm collars to secure the weights\nand avoid the risk of plates falling if the rack is knocked.\n,\nNot compatible with M100, M1 or previous generation M2 models\n,\nPowder coated matt black finish\n,\nIncludes all required fixings\n,\nMeasurements:\n,\nPlate Storage Poles:\n,\nTotal Length: 27.5cm\n,\nUsable Sleeve Length: 23cm\n,\nSleeve Diameter: 4.8cm\n,\nFractional Plate Storage Poles:\n,\nTotal Length: 17.5cm\n,\nUsable Sleeve Length: 13cm\n,\nSleeve Diameter: 4.8cm\n}	Mirafit M200 Weight Storage Poles	22.95	These plate storage poles are designed to fit the Mirafit M200 Series power racks and are available in two lengths to suit either regular or fractional weight plate storage. Supplied in pairs with all required fixings.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-M200-Weight-Storage-Poles.jpg	plate-storage	storage	0.049
267	{textArr: Mirafit M3 Chrome Weight Storage Poles ,Available in the following pairs or sets:\n\n2 Fractional Poles \n2 Olympic Poles \n4 Olympic Poles \n6 Olympic Poles + 2 Fractional Poles ,2 Fractional Poles ,2 Olympic Poles ,4 Olympic Poles ,6 Olympic Poles + 2 Fractional Poles ,Compatible with M3 series power racks ,Not compatible with M100 or M200 ranges ,Available in two lengths to store Olympic weight plates or Olympic fractional plates ,Chrome finish ,Rubber end cap protects the plates from scratches when loading (includes tool) ,20mm impact ring prevents weight plates from touching the fixing bolts ,8mm mounting plate ,Includes all required fixing bolts ,Measurements: ,Sleeve diameter: 4.8cm ,Total length: 16cm / 34cm ,Useable length: 15cm / 33cm ,Base Plate: 19cm x 6cm,Please Note: The set of 8 storage poles contains 4 extra bolts. These are needed as it will be necessary to use the same holes that the cross member uses, if fitting to our 82" high power rack. Longer bolts are therefore included to allow for this. These will be surplus to requirements if fitting to our 92" high model. ,The fractional poles could alternatively be installed on the front to back beams. }	Mirafit M3 Chrome Weight Storage Poles	34.95	Keep your gym organised and your plates at the ready with these Mirafit M3 Chrome Weight Storage Poles. Suitable for storing both fractional Olympic weight plates and regular Olympic plates, these are compatible with our M3 Power Racks and Half Rack.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-M300-Chrome-Weight-Storage-Poles.jpg	plate-storage	storage	0.05
268	{textArr: Mirafit M4 Rack Mounted Barbell Holder ,Vertical connection plate is for fitment to an upright,Horizontal connection plate is for fitment to a side/cross bar,Holds one Olympic weight bar,Nylon sleeve and foam pad protects bar from scratches ,Made from black powder-coated steel ,17mm hole size,Includes required fixings,Measurements: ,Inner sleeve length: 18.5cm ,Sleeve diameter: 5cm }	Mirafit M4 Rack Barbell Holder	34.95	Rack mounted barbell holder to fit the Mirafit M4 Power rack series. Available to fit either an upright or a cross member. These convenient barbell holders include a nylon sleeve to prevent barbell damage and include all required fixings.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-M4-Horizontal-Bar-Holder_2.jpg	rack-mounted-storage	storage	0
269	{textArr: \nMirafit M100 Weight Storage Poles\n,\nCompatible with the M100 power rack\n,\nAvailable in two lengths to suit Olympic plates or Olympic fractional\nplates\n,\nSupplied in pairs\n,\nAlso now available to suit standard 1" plates\n,\nEach upright has a large hole at the bottom suitable for the Olympic\nweight plate poles or standard weight plate poles\n,\nEach upright has smaller holes at the top of each upright. These holes\nare suitable for the fractional poles. Remember to use collars to\navoid the risk of plates falling if the rack is knocked\n,\nNot compatible with M200 or M2 models\n,\nThe olympic and standard plate storage poles are also compatible with\nthe old M1 rack but the fractional poles are not as it did not have\nthe holes for them\n,\nPowder coated matt black finish\n,\nIncludes all required fixings\n,\nMeasurements:\n\n\nOlympic Plate Storage Poles:\n\n\nTotal Length: 25cm\n\n\nUsable Sleeve Length: 20cm\n\n\nSleeve Diameter: 4.8cm\n\n\n\n\nOlympic Fractional Plate Storage Poles:\n\n\nTotal Length: 13.1cm\n\n\nUsable Sleeve Length: 11.5cm\n\n\nSleeve Diameter: 4.8cm\n\n\n\n\nStandard Plate Storage Poles:\n\n\nTotal Length: 25cm\n\n\nUsable Sleeve Length: 19.5cm\n\n\nSleeve Diameter: 2.4cm\n\n\n\n\n,\nOlympic Plate Storage Poles:\n\n\nTotal Length: 25cm\n\n\nUsable Sleeve Length: 20cm\n\n\nSleeve Diameter: 4.8cm\n\n\n,\nTotal Length: 25cm\n,\nUsable Sleeve Length: 20cm\n,\nSleeve Diameter: 4.8cm\n,\nOlympic Fractional Plate Storage Poles:\n\n\nTotal Length: 13.1cm\n\n\nUsable Sleeve Length: 11.5cm\n\n\nSleeve Diameter: 4.8cm\n\n\n,\nTotal Length: 13.1cm\n,\nUsable Sleeve Length: 11.5cm\n,\nSleeve Diameter: 4.8cm\n,\nStandard Plate Storage Poles:\n\n\nTotal Length: 25cm\n\n\nUsable Sleeve Length: 19.5cm\n\n\nSleeve Diameter: 2.4cm\n\n\n,\nTotal Length: 25cm\n,\nUsable Sleeve Length: 19.5cm\n,\nSleeve Diameter: 2.4cm\n}	Mirafit M100 Weight Storage Poles	19.95	Our M100 Weight Storage Poles keep your home gym tidy while allowing easy access to your plates. Supplied as a pair they come in a choice of size to suit regular standard, olympic plates or fractional storage.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/F/u/Full-Set-of-Mirafit-M100-Olympic-Weight-Storage-Poles.jpg	rack-mounted-storage	storage	0.049
270	{textArr: \nMirafit M200 Weight Storage Poles\n,\nCompatible with the M200, M210 and M220 power racks\n,\nAvailable in two lengths to suit Olympic plates or Olympic fractional\nplates\n,\nSupplied in pairs\n,\nInstallation positions:\n,\nM200 has positions at top and bottom of 4 uprights \n,\nM200S has positions at bottom (not top) of 4 uprights\n,\nM210 has positions at top and bottom of 2 uprights\n,\nM220 has positions at bottom (not top) of 2 uprights\n,\nPositions at top of upright should only be used to store lighter,\nfractional plates. Remember to use 48mm collars to secure the weights\nand avoid the risk of plates falling if the rack is knocked.\n,\nNot compatible with M100, M1 or previous generation M2 models\n,\nPowder coated matt black finish\n,\nIncludes all required fixings\n,\nMeasurements:\n,\nPlate Storage Poles:\n,\nTotal Length: 27.5cm\n,\nUsable Sleeve Length: 23cm\n,\nSleeve Diameter: 4.8cm\n,\nFractional Plate Storage Poles:\n,\nTotal Length: 17.5cm\n,\nUsable Sleeve Length: 13cm\n,\nSleeve Diameter: 4.8cm\n}	Mirafit M200 Weight Storage Poles	22.95	These plate storage poles are designed to fit the Mirafit M200 Series power racks and are available in two lengths to suit either regular or fractional weight plate storage. Supplied in pairs with all required fixings.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-M200-Weight-Storage-Poles.jpg	rack-mounted-storage	storage	0.049
271	{textArr: \nMirafit M3 Rack Weight Storage Poles\n,\nCompatible with the M3 power rack, strongman yoke and wall mounted\naccessory rail (not compatible with M1 or M2 range)\n,\nChoice of model/design: Quick Release or Bolt On\n,\nQuick release model allows you to easily install and remove for fast\nchanges to your rack setup\n,\nBolt on model allows for more permanent installation of weight plate\nstorage\n,\nSuitable for 2" Olympic weight plates\n,\nBoth models are supplied in pairs\n,\nPowder coated black finish\n,\nSupplied with all required fixings\n,\nPoles must be installed with the pin/bolt at the top as the item is\nwelded at a 5 degree slope\n,\nMeasurements:\n\n\nTotal length: 39.5cm\n\n\nSleeve length: 32.5cm\n\n\nDiameter: 4.8cm\n\n\n,\nTotal length: 39.5cm\n,\nSleeve length: 32.5cm\n,\nDiameter: 4.8cm\n}	Mirafit M3 Rack Weight Storage Poles	34.95	The ideal storage solution for your 2" Olympic weight plates. Our M3 Rack Weight Storage Poles come in a choice of models, quick release or bolt on and are compatible with the M3 cage, extension kit, strongman yoke and wall accessory rail.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-M3-Rack-Weight-Storage-Poles.jpg	rack-mounted-storage	storage	0.04
272	{textArr: Mirafit M3 Rack 3 Barbell Holder ,Bolts directly onto the M3 rack  ,Neatly stores three Olympic weight bars vertically ,Black powder-coated steel frame ,Anti-scratch HDPE liners protect bars from damage ,Simple two bolt installation ,Includes all required fixings ,Measurements:\n\nHeight: 6cm \nWidth: 30cm \nDepth: 12.5cm ,Height: 6cm ,Width: 30cm ,Depth: 12.5cm }	Mirafit M3 Rack 3 Barbell Holder	39.95	Our Rack Mounted Barbell Holder will keep your gym neat and tidy. Bolting directly onto the cross member of the M3 rack this holder has a three bar capacity and HDPE liners to protect bars from damage.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-M3-Rack-Mounted-Barbell-Holder.jpg	rack-mounted-storage	storage	0
273	{textArr: Mirafit M3 Power Rack Extension Kit ,Please note this is just the extension kit. This does not include the rack itself. You will need to already own an M3 power rack to use product. Weight storage poles are not included and are sold here. ,Choice of size and colour ,Extends rack by 66cm allowing weight storage poles to be used without sacrificing workout space inside the cage ,Increased depth also enables you to attach more of the M3 accessory range to your cage at any given time ,17mm hole size compatible with a full range of M3 attachments ,Laser-cut number markings for easy height identification at 5 hole intervals ,Strong 60mm x 60mm x 3mm (11 gauge) steel frame ,Choice of height: ,228cm (90") ,208cm (82") ,188cm (74") ,Internal Depth: 60cm ,External Depth: adds 66cm to standard rack depth ,Please refer to measurements image for further dimensions }	Mirafit M3 Power Rack Extension Kit	189.95	Increase storage capacity for your M3 Power Rack by extending its depth with the M3 Power Rack Extension Kit. It also improves stability and comes in a range of sizes and colours to suit your requirements.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-M3-Power-Rack-with-228cm-Black-Extension-Kit.jpg	rack-mounted-storage	storage	0.05
274	{textArr: Mirafit Storage System for M210 Half Power Rack (this only fits the M210 half rack, no other models) ,Power rack not included - this is purely the weight storage system as highlighted in image 1. ,Includes extension kit with eight Olympic weight storage poles ,Simple bolt on design attaches directly to the pre-drilled holes in the M210 frame (not suitable for other models) ,Keeps weights conveniently located for quick and easy changes ,Strong 50mm steel construction with powder coated finish ,Poles are positioned far enough apart to allow bumper plates to be loaded onto all poles simultaneously ,Includes all required fixings ,Assembly Note: Tighten fixings by hand in the beginning to allow for proper alignment. Once all fixings are in place tighten fully. ,Specification:\n\nHeight: 187cm \nWidth (including storage poles): 161cm \nDepth: 48cm \nSleeve length: 20cm ,Height: 187cm ,Width (including storage poles): 161cm ,Depth: 48cm ,Sleeve length: 20cm }	Mirafit Storage System for M210 Half Power Rack	129.95	Upgrade your existing Mirafit M210 Half Power Rack with our bolt on weight storage system. Ideal for quick and easy weight plate changes as well as for keeping your gym flooring neat and tidy. Includes eight Olympic weight storage poles.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-M210-Storage-System_1.jpg	rack-mounted-storage	storage	0.05
275	{textArr: \nMirafit M4 Weight Storage Poles\n,\nAvailable in the following pairs or sets:\n\n\n2 Fractional Poles\n\n\n2 Olympic Poles\n\n\n4 Olympic Poles\n\n\n,\n2 Fractional Poles\n,\n2 Olympic Poles\n,\n4 Olympic Poles\n,\nCompatible with the Mirafit M4 series\n,\nAvailable with a loadable sleeve length of 330mm or 150mm\n,\n330mm designed for bumper plates and Olympic weight plates\n,\n150mm designed for fractional plates\n,\nSteel construction with black powder coated finish\n,\nImpact ring to prevent plates touching fixing bolts\n,\nIncludes all required fixings\n,\nMeasurements:\n,\nSleeve diameter: 5cm\n,\nTotal length: 17cm / 36cm\n,\nUsable sleeve length: 15cm / 33cm\n,\nBase plate height: 19cm\n,\nBase plate width: 5cm \n}	Mirafit M4 Weight Storage Poles	29.95	Reduce the clutter in your gym with these Mirafit M4 Weight Storage Poles. Suitable for bumper plates and regular Olympic plates, these come in a choice of depth and will keep your plates close at hand while exercising.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-M4-Power-Rack-Weight-Storage-Poles.jpg	rack-mounted-storage	storage	0
276	{textArr: Mirafit M3 Chrome Weight Storage Poles ,Available in the following pairs or sets:\n\n2 Fractional Poles \n2 Olympic Poles \n4 Olympic Poles \n6 Olympic Poles + 2 Fractional Poles ,2 Fractional Poles ,2 Olympic Poles ,4 Olympic Poles ,6 Olympic Poles + 2 Fractional Poles ,Compatible with M3 series power racks ,Not compatible with M100 or M200 ranges ,Available in two lengths to store Olympic weight plates or Olympic fractional plates ,Chrome finish ,Rubber end cap protects the plates from scratches when loading (includes tool) ,20mm impact ring prevents weight plates from touching the fixing bolts ,8mm mounting plate ,Includes all required fixing bolts ,Measurements: ,Sleeve diameter: 4.8cm ,Total length: 16cm / 34cm ,Useable length: 15cm / 33cm ,Base Plate: 19cm x 6cm,Please Note: The set of 8 storage poles contains 4 extra bolts. These are needed as it will be necessary to use the same holes that the cross member uses, if fitting to our 82" high power rack. Longer bolts are therefore included to allow for this. These will be surplus to requirements if fitting to our 92" high model. ,The fractional poles could alternatively be installed on the front to back beams. }	Mirafit M3 Chrome Weight Storage Poles	34.95	Keep your gym organised and your plates at the ready with these Mirafit M3 Chrome Weight Storage Poles. Suitable for storing both fractional Olympic weight plates and regular Olympic plates, these are compatible with our M3 Power Racks and Half Rack.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-M300-Chrome-Weight-Storage-Poles.jpg	rack-mounted-storage	storage	0.05
277	{textArr: \nMirafit Storage System for M4 Tall Squat Rack\n,\nConverts M4 Tall Squat Rack into M4 Half Rack\n,\nPower rack and spotters not included - this is purely the weight\nstorage system as highlighted in image 1.\n,\nPlease note the angled logo bars are delivered in a separate box and\nshould be used in place of the straight logo bars that are in the main\nbox\n,\nBlack powder coated steel\n,\n75mm x 75mm x 3mm box section\n,\nHeavy duty support brace with laser logo\n,\nChoice of black or chrome weight storage poles\n,\nFour Olympic weight poles\n,\nTwo Olympic fractional weight poles\n,\nSpecification:\n\n\nHeight: 182cm\n\n\nWidth: 194cm (including storage poles)\n\n\nDepth: 47cm\n\n\n,\nHeight: 182cm\n,\nWidth: 194cm (including storage poles)\n,\nDepth: 47cm\n}	Mirafit Storage System for M4 Tall Squat Rack	299.95	Convert your M4 Tall Squat Rack into a M4 Half Rack with this Storage System add on. This bolt on system adds a rear bay with six storage poles suitable for Olympic and Fractional weight plates. Ideal for keeping your gym tidy and plates close by.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/S/t/Storage-System-with-Chrome-Storage-Poles-for-Mirafit-M4-Half-Rack_1.jpg	rack-mounted-storage	storage	0
278	{textArr: Mirafit M4 Rack 3 Barbell Holder ,Compatible with the Mirafit M4 Power Rack ,Holds three Olympic bars vertically ,Pads protect the bars from scratches ,Black powder-coated steel ,Includes all required fixings ,Measurements:\n\nHeight: 10cm \nWidth: 30.5cm \nDepth: 14cm ,Height: 10cm ,Width: 30.5cm ,Depth: 14cm }	Mirafit M4 Rack 3 Barbell Holder	49.95	Keep your gym organised with this Mirafit M4 Vertical Barbell Holder. This rack mounted barbell holder keeps your bars within easy reach and your gym clutter-free. Stores three bars.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-M4-Vertical-Barbell-Holder.jpg	rack-mounted-storage	storage	0
279	{textArr: \nMirafit M4 Chrome Weight Storage Poles\n,\nAvailable in the following pairs or sets:\n\n\n2 Fractional Poles\n\n\n2 Olympic Poles\n\n\n4 Olympic Poles\n\n\n,\n2 Fractional Poles\n,\n2 Olympic Poles\n,\n4 Olympic Poles\n,\nCompatible with the Mirafit M4 series\n,\nAvailable with a loadable sleeve length of 330mm or 150mm\n,\n330mm designed for bumper plates and Olympic weight plates\n,\n150mm designed for fractional plates\n,\nSteel construction with hard wearing chrome finish\n,\nImpact ring to prevent plates touching fixing bolts\n,\nIncludes all required fixings\n,\nMeasurements:\n,\nSleeve diameter: 5cm\n,\nTotal length: 17cm / 36cm\n,\nUsable sleeve length: 15cm / 33cm\n,\nBase plate height: 19cm\n,\nBase plate width: 5cm \n}	Mirafit M4 Chrome Weight Storage Poles	39.95	Keep your gym tidy with these Mirafit M4 Chrome Weight Storage Poles. Available in two lengths, these poles are suitable for both regular and fractional Olympic weight plates. Steel construction with a hard wearing chrome finish.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-M4-Chrome-Power-Rack-Olympic-Plate-Holders.jpg	rack-mounted-storage	storage	0
280	{textArr: \nMirafit Olympic Weight Plate Wall Storage Rack\n,\nSteel wall plate with three welded storage poles\n,\nAvailable as either a single or twin pack\n,\nSuitable for 2" Olympic weight plates\n,\nRubber back stops prevent plates touching wall\n,\nPole spacing allows full size bumper plates to be stored on all three\npoles simultaneously\n,\nPosition vertically or horizontally\n,\nNeatly store weight plates when not in use\n,\nIdeal for home, studio and professional use\n,\nStandard wall fixings included\n,\nLoad tested to 300kg (100kg max per pole)\n,\nMeasurements:\n,\nHeight: 10cm\n,\nWidth: 115cm\n,\nDepth: 32.5cm\n,\nLoadable pole length: 30.5cm\n,\nPole diameter: 48mm\n,\nPlease note: standard wall fixings are provided. These may not be\nsuitable for your wall type. If in doubt, always check with a\nprofessional before installation.\n}	Mirafit Olympic Weight Plate Wall Storage Rack	59.95	Keep your gym in check using our Olympic Weight Plate Wall Storage Racks. Ideal for saving on floor space to allow you more room for your gym equipment.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Olympic-Weight-Plate-Wall-Storage-Rack_1.jpg	wall-mounted-storage	storage	0.05
281	{textArr: Mirafit Wall Hanger for Folding Weight Bench ,Compatible with the Mirafit Folding Weight Bench ,Designed to store the bench in an unfolded position as shown,Keeps your home gym organised and increases floor space ,Please note this only fits our folding bench as shown in the images. It is not suitable for other benches in our range. ,Includes wall fixings }	Mirafit Wall Hanger for Folding Weight Bench	24.95	Organise your home gym with this Mirafit Wall Hanger for our Folding Weight Bench. This wall mounted weight bench storage solution will allow you to free-up floor space for additional exercises. Only suitable for our folding weight bench as shown.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Wall-Hanger-For-Folding-Weight-Bench.jpg	wall-mounted-storage	storage	0
297	{textArr: Mirafit Muscle Fit T-Shirt - Khaki,Available in the following sizes:\n\nSmall \nMedium \nLarge \nXL \n2XL ,Small ,Medium ,Large ,XL ,2XL ,Stylish khaki green sports t-shirt ,Perfect for athleisure and gym workouts ,Soft feel cotton for all-day comfort ,Mirafit branding printed on the chest and nape ,Union Jack flag printed on right sleeve  ,Ribbed crew neck ,165gsm single jersey ,Twin needle stitch to the sleeves and hem ,Our model is 5'7" (170cm) and wears a size M }	Mirafit Muscle Fit T-Shirt - Khaki	19.95	Workout in style with the Mirafit Muscle Fit T-Shirt in khaki green. This comfortable cotton t-shirt features printed branding on the chest and nape with Union Jack flag on the sleeve.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Muscle-Fit-T-Shirt-Khaki_6.jpg	clothing-apparel	accessories	0.045
282	{textArr: \nMirafit Standard Weight Plate Wall Storage Rack\n,\nSteel wall plate with three welded storage poles\n,\nAvailable as either a single or twin pack\n,\nSuitable for 1" standard weight plates\n,\nRubber back stops prevent plates touching wall\n,\nPosition vertically or horizontally\n,\nNeatly store weight plates when not in use\n,\nIdeal for home, studio and professional use\n,\nStandard wall fixings included\n,\nStore up to 50kg max per pole\n,\nMeasurements -\n\n\nHeight - 10cm\n\n\nWidth - 115cm\n\n\nDepth - 32.5cm\n\n\nLoadable pole length - 30.5cm\n\n\nPole diameter - 25mm\n\n\n,\nHeight - 10cm\n,\nWidth - 115cm\n,\nDepth - 32.5cm\n,\nLoadable pole length - 30.5cm\n,\nPole diameter - 25mm\n,\nPlease note: standard wall fixings are provided. These may not be\nsuitable for your wall type. If in doubt, always check with a\nprofessional before installation.\n}	Mirafit Standard Weight Plate Wall Storage Rack	59.95	This wall mounted weight storage rack is suitable for standard 1" weight discs. Simple to install and ideal for keeping plates neat and tidy between sessions. For Olympic plate storage please see our Olympic version of this rack.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/m/i/mirafit-standard-weight-plate-wall-storage-rack.jpg	wall-mounted-storage	storage	0.05
283	{textArr: Mirafit Horizontal Barbell rack ,Choice of colour: black or orange ,Six bar storage capacity ,Wall mounted design ,Safely store and protect bars ,Suitable for both standard and Olympic weight bars ,Powder coated steel frame ,Anti scratch black high density plastic liners - avoids damage to bars ,Standard wall fixings included ,Bracket dimensions:\n\nHeight: 80cm \nDepth: 14cm ,Height: 80cm ,Depth: 14cm }	Mirafit 6 Barbell Wall Rack	79.95	Ideal for keeping your gym area neat and tidy, our Barbell Wall Rack can safely store 6 standard or Olympic barbells. Choose between orange or black to match your equipment set up. HDPE liners protect barbells against damage.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Orange-6-Barbell-Wall-Rack-Holding-Barbell.jpg	wall-mounted-storage	storage	0.05
284	{textArr: \nMirafit Horizontal Barbell Rack\n,\nChoice of colour: black or orange\n,\nThree bar storage capacity\n,\nWall mounted design\n,\nSafely store and protect bars\n,\nSuitable for both standard and Olympic weight bars\n,\nPowder coated steel frame\n,\nAnti scratch black HDPE liners - avoids damage to bars\n,\nStandard wall fixings included\n,\nBracket dimensions:\n\n\nHeight: 41cm\n\n\nDepth: 14cm\n\n\n,\nHeight: 41cm\n,\nDepth: 14cm\n}	Mirafit 3 Barbell Wall Rack	49.95	Suitable for both standard and Olympic weight bars, our horizontal barbell wall rack is perfect for home or commercial gyms. Safely store and protect your bars with its anti scratch high density plastic liners.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Orange-3-Barbell-Wall-Rack-Holding-Barbell.jpg	wall-mounted-storage	storage	0.05
285	{textArr: Mirafit Multi Function Wall Rack ,Six flat hooks ideal for storing gym accessories including skipping ropes, bands, belts, chains, clothing, towels etc ,4mm steel construction - each hook can handle up to 10kg ,Please note: the shape of this product is not suitable for storing weight bars ,Helps keep your training space clean and tidy ,Allows you to quickly and easily find the equipment you require ,Black powder coated steel construction with Mirafit laser logo ,Standard wall fixings provided ,Measurements: ,Height: 10cm ,Width: 60cm ,Depth: 11.5cm }	Mirafit Multi Function Gym Wall Storage Rack - 6 Hook	34.95	This handy wall mounted storage rack is ideal for storing accessories like ropes, bands, belts, chains and clothing. Keep your garage gym in check and your floor space clear as you train. 	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Multi-Function-Gym-Wall-Storage-Rack-6-Hook.jpg	wall-mounted-storage	storage	0.05
286	{textArr: Mirafit Multi Function Wall Rack ,Five flat hooks ideal for storing gym accessories including skipping ropes, bands, belts, chains, clothing, towels etc. ,4mm steel construction - each hook can handle up to 10kg ,Please note: the shape of this product is not suitable for storing weight bars ,Helps keep your training space clean and tidy ,Allows you to quickly and easily find the equipment you require ,Black powder coated steel construction with Mirafit laser logo ,Standard wall fixings provided ,Measurements:\n\nHeight: 10cm \nWidth: 49cm \nDepth: 11.5cm ,Height: 10cm ,Width: 49cm ,Depth: 11.5cm }	Mirafit Multi Function Gym Wall Storage Rack - 5 Hook	29.95	Keep your gym tidy and organised using our Multi Function Gym Wall Storage Racks. The wall-mounted, five hook racks are suitable for a range of fitness accessories. Perfect for making sure your floors stay clear while you train. Fixings included.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-5-Hook-Multi-Function-Gym-Wall-Storage-Rack-on-White-Background.jpg	wall-mounted-storage	storage	0.05
287	{textArr: Mirafit Vertical Barbell Rack And Collar Storage ,Three bar storage capacity ,Two handy collar storage poles ,Suitable for olympic diameter weight bars ,Anti-scratch HDPE liners protect bars from damage ,Black powder-coated steel frame ,Wall mounted design ,Standard wall fixings provided ,Measurements:\n\nHeight: 11cm \nWidth: 48cm \nDepth: 12.5cm ,Height: 11cm ,Width: 48cm ,Depth: 12.5cm }	Mirafit 3 Bar Vertical Wall Rack with Collar Storage	54.95	Gyms look neat and tidy with our Vertical Wall Rack With Collar Storage. Perfect for quick and easy bar changes, the rack has room for three weight bars and two collars. Keeps your kit off the floor to save on space and avoid damage.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/m/i/mirafit-3-bar-vertical-wall-rack-with-collar-storage.jpg	wall-mounted-storage	storage	0.049
288	{textArr: Mirafit Vertical Barbell Rack ,Three bar storage capacity ,Suitable for Olympic diameter weight bars ,Anti-scratch HDPE liners protect bars from damage ,Black powder-coated steel frame ,Wall mounted design ,Standard wall fixings provided ,Measurements:\n\nHeight: 11cm \nWidth: 30cm \nDepth: 12.5cm ,Height: 11cm ,Width: 30cm ,Depth: 12.5cm }	Mirafit 3 Bar Vertical Wall Rack	49.95	Our Vertical Wall Racks have been designed to fit neatly on your wall helping you to save on space around your home gym. Bars can then be easily removed whenever you need. Holds three Olympic barbells.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-3-Barbell-Vertical-Wall-Rack.jpg	wall-mounted-storage	storage	0.049
298	{textArr: Mirafit Sports Cap ,Black sports cap with raised Mirafit logo to the front and white Mirafit logo to the side ,Vented design makes it perfect for working out in warmer weather ,Lightweight, breathable fabric ,Buckle fastening ,Stylish, shortened, pre-shaped peak }	Mirafit Sports Cap	1.95	Work out in comfort with this Mirafit Sports Cap. The vented design makes it perfect for keeping cool in hot weather, the fabric is light and breathable, and the buckle fastening means you can get a perfect fit.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Sports-Cap-Black_2.jpg	clothing-apparel	accessories	0
289	{textArr: Mirafit Wall Hanger For TPE Mat With Eyelets ,Neatly store exercise mats when not in use ,Space-saving gym storage allows mats to be hung vertically ,Protects mats from damage and creasing ,Ideal for home, studio and professional use ,Standard wall fixings included ,Holds up to 12 X 8mm thick exercise mats ,Measurements:\n\nWidth: 55cm \nDepth: 14cm \nHeight: 10cm \nDistance between poles: 41cm \nPole length: 14cm \nPole diameter: 10mm ,Width: 55cm ,Depth: 14cm ,Height: 10cm ,Distance between poles: 41cm ,Pole length: 14cm ,Pole diameter: 10mm ,Please ensure supplied wall fixings are suitable for intended use and replace if necessary }	Mirafit Exercise Mat Wall Hanger	29.95	Keep exercise mats flat and clean while saving on floor space using our Wall Mounted Mat Hangers. Made of sturdy steel and stenciled with the Mirafit logo. Holds up to 12 exercise mats.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Yoga-Mat-Hanger.jpg	wall-mounted-storage	storage	0
290	{textArr: \nMirafit Wall Mounted Ball Rack\n,\nWall mounted storage solution suitable for various gym balls\n,\nIncludes two wall mount plates with shelf poles and securing collars\n,\nMultiple holes allow various pole configurations to suit\ndifferent diameter workout balls\n,\nCreates storage suitable for most medicine balls, wall balls, slam\nballs and gym workout balls \n,\nBlack powder coated finish with laser Mirafit logo\n,\n32mm pole diameter\n,\nStandard wall fixings are provided. Please note these may not be\nsuitable for your wall type. If in doubt, always check with a\nprofessional before installation\n,\nMeasurements:\n,\nWidth: 130cm\n,\nHeight: 20.5cm\n,\nDepth: 39cm\n}	Mirafit Wall Mounted Ball Rack	14.95	Keep your gym tidy and organized with this Mirafit Wall Mounted Ball Rack. With various shelf pole positions, the rack is ideal for storing medicine balls, slam balls, wall balls or workout balls. Standard wall fixings are included.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Wall-Mounted-Medicine-Ball-Rack-Single_1.jpg	wall-mounted-storage	storage	0
291	{textArr: Mirafit M3 Wall Mounted Attachment Rail ,Suitable for use with various M3 range attachments  ,Customise with accessories to suit your needs ,Multi functional design is suitable for storage or strength training attachments (subject to wall strength) ,17mm holes with 20 level adjustments ,3mm steel strip shaped frame with laser logo  ,Measurements:\n\nHeight: 100cm \nWidth: 6cm \nDepth: 6cm \nNet weight: 5.2kg ,Height: 100cm ,Width: 6cm ,Depth: 6cm ,Net weight: 5.2kg ,Includes standard wall fixings ,WARNING: Fixing to an unsuitable surface could lead to the product falling during use which could cause injury and/or damage. ,It is essential to verify that the wall is suitable and strong enough before installation. ,We recommend consulting with a builder or surveyor before installation. ,This product is NOT suitable for installation on plasterboard or standard stud walls. }	Mirafit M3 Wall Mounted Attachment Rail	39.95	The M3 Wall Mounted Rail is designed for use with various M3 Range attachments including the weight storage poles, landmines or dip bar. The 3mm steel frame construction uses the same size 17mm holes as the M3 rack.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Gen-II-M3-Rack-Storage-Wall-Bracket.jpg	wall-mounted-storage	storage	0
292	{textArr: \nMirafit Olympic Barbell Pad\n,\nAvailable in choice of colours -\n\n\nBlack\n\n\nOrange\n\n\nGreen\n\n\n,\nBlack\n,\nOrange\n,\nGreen\n,\nIncreases comfort when bar rests on shoulders during squats\n,\nSuitable for all Olympic bars\n,\nAnti slip foam will not shift or roll during workouts\n,\nLightweight & portable\n,\nDimensions -\n\n\nLength: 44.5cm\n\n\nDiameter: 10cm\n\n\n,\nLength: 44.5cm\n,\nDiameter: 10cm\n}	Mirafit Barbell Squat Pad	14.95	Don't let pain get in the way of your gain - use these Mirafit Barbell Squat Pads to cushion your shoulders as you increase your weight load. The pad has been expertly designed to distribute the pressure across your upper back as you workout.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Barbell-Squat-Pads-on-White-Background-.jpg	barbell-pads	accessories	0.047
293	{textArr: Mirafit Barbell Pad ,Increases comfort when bar rests on shoulders during squats ,Fits all standard and Olympic bars (approx 25-30mm diameter) ,Thick foam padding ,Durable, wipe clean PU cover (non removable) ,Full length closure for secure fitment ,Available in black or orange ,Dimensions -\n\nLength - 39cm \nDiameter - 9cm ,Length - 39cm ,Diameter - 9cm }	Mirafit Barbell Weight Bar Pad	11.95	Avoid shoulder and hip pain when using your barbell with our thick squat pads. Simply add one to your weight bar to prevent pain from regular use. Protects your shoulders and hip bones and makes working with heavy loads more comfortable.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/m/i/mirafit-barbell-weight-bar-pads-on-white-background-.jpg	barbell-pads	accessories	0.048
294	{textArr: Mirafit Sports Headband ,Available in a choice of design or as a pack of two,One size fits most ,Unisex design ,Ideal for sports, running, climbing and general gym-wear ,Keeps hair and sweat from getting in your eyes ,Comfortable soft polyester outer fabric ,Stretchy looped design, easy to slip on and off }	Mirafit Sports Headband	7.95	Exercise in comfort with these Mirafit Sports Headbands. Available in a choice of designs, these gym headbands are suitable for indoor and outdoor use and help to keep the sweat and hair out of your eyes.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Sports-Headband-pack-of-two_1.jpg	clothing-apparel	accessories	0
295	{textArr: \nMirafit Men's Midnight Camo Lightweight Gym T-Shirt\n,\nAvailable in the following sizes:\n\n\nSmall\n\n\nMedium\n\n\nLarge\n\n\nExtra Large\n\n\n2XL\n\n\n3XL\n\n\n4XL\n\n\n,\nSmall\n,\nMedium\n,\nLarge\n,\nExtra Large\n,\n2XL\n,\n3XL\n,\n4XL\n,\nUltra-light exercise shirt with mesh back\n,\nWicks sweat from your skin, keeping you cool during heavy workouts\n,\nStylish black and dark grey camo with orange accents\n,\nMade from vented, breathable polyester\n,\nShort sleeves\n,\nOur model is 5'7" and wears a size M\n}	Mirafit Men's Midnight Camo Lightweight Gym T-Shirt	24.95	Keep cool during the hardest workouts with this Mirafit Men's Lightweight Gym T-Shirt. Made from a sweat-wicking, breathable fabric, this dark camo shirt is perfect for running or a heavy gym session.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Mens-Lightweight-Gym_T-shirt_6.jpg	clothing-apparel	accessories	0
296	{textArr: \nMirafit Unisex Oversized Gym T-Shirt\n,\nAvailable in a range of sizes:\n\n\nSmall\n\n\nMedium\n\n\nLarge\n\n\nXL\n\n\n2XL\n\n\n3XL\n\n\n,\nSmall\n,\nMedium\n,\nLarge\n,\nXL\n,\n2XL\n,\n3XL\n,\nThis luxury oversized training t-shirt is designed to look baggy. We\nrecommend buying your usual size.\n,\nDesigned for both working out and for relaxing in style\n,\nBlack on black tone\n,\nFeatures high density raised rubber Mirafit branding\n,\nRelaxed fit\n,\nSoft feel, 100% cotton\n,\nRibbed crew neck\n,\nDropped sleeve\n,\nOur model is 5'7" and wears a size M\n}	Mirafit Unisex Oversized Gym T-Shirt	24.95	Look stylish and be comfortable while wearing our Mirafit Unisex Oversized Gym T-Shirt. Suitable for working out, and for relaxing with friends. Relaxed fit, with a ribbed crew neck. Made from 100% cotton.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Unisex-Oversized-Gym-T-Shirt_7.jpg	clothing-apparel	accessories	0
300	{textArr: Mirafit Women's Technical Gym T-Shirt - White ,Available in a range of sizes - from size 6 to size 20 ,Lightweight t-shirt ideal for running or wearing in the gym ,Understated white front with Mirafit branding ,Flared vented panel down the back ensures a cooler workout ,Flattering capped sleeves ,Model is 5'6" and wears a size 8 }	Mirafit Women's Technical Gym T-Shirt - White	24.95	Have a great workout with this Mirafit Women's Technical Gym T-Shirt. In white, with orange detail, this t-shirt features an eye-catching vented back panel and capped sleeves. Available from size 6 through to size 20.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Womens-Technical-Gym-T-Shirt_8.jpg	clothing-apparel	accessories	0
301	{textArr: \nMirafit Unisex Oversized Sweater\n,\nAvailable in a range of sizes:\n\n\nSmall\n\n\nMedium\n\n\nLarge\n\n\nXL\n\n\n2XL\n\n\n3XL\n\n\n,\nSmall\n,\nMedium\n,\nLarge\n,\nXL\n,\n2XL\n,\n3XL\n,\nThis luxury gym sweatshirt is designed to look baggy. We recommend\nbuying your usual size.\n,\nIn black with black Mirafit branding, in a high density raised rubber\nprint.\n,\nLook great for your gym commute or rest day in this premium garment\n,\n85% cotton, 15% recycled polyester\n,\nRibbed collar and fashion cuff\n,\nSuitable for machine washing up to 40 degrees\n,\nOur model is 5'7" and wears a size M\n}	Mirafit Oversized Sweater	39.95	Keep warm on your gym commute, or just enjoy rest day with this comfortable Mirafit Unisex Oversized Sweater. Available in six sizes, this stylish and baggy sweater is great for everyday wear.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Oversized-Sweater-front_7.jpg	clothing-apparel	accessories	0
302	{textArr: Mirafit Trainer Socks - Black & Orange ,Available in a choice of size:\n\nMedium (shoe size 3.5 - 5) \nLarge (shoe size 6 - 11) \nXL (shoe size 12 - 14) ,Medium (shoe size 3.5 - 5) ,Large (shoe size 6 - 11) ,XL (shoe size 12 - 14) ,High performance knitted socks ,Breathable elastic ribbing provides a comfortable and secure fit ,Enhanced arch support ,Padded terry cloth sole keeps your foot warm, ideal for both indoor and outdoor workouts ,Manufactured in the UK }	Mirafit Trainer Socks - Black & Orange	5.95	Workout in comfort with these Mirafit Trainer Socks in black and orange. These eye-catching technical socks feature enhanced arch support and a padded sole for a high-performance workout.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Trainer-Socks-Black-and-Orange_3.jpg	clothing-apparel	accessories	0
303	{textArr: Mirafit Sports Socks - Black & Grey ,Available in a choice of size:\n\nMedium (shoe size 3 - 5.5) \nLarge (shoe size 6 - 11) \nXL (shoe size 12 - 14) ,Medium (shoe size 3 - 5.5) ,Large (shoe size 6 - 11) ,XL (shoe size 12 - 14) ,High performance knitted socks ,Suitable for a range of sports, training and everyday wear ,Enriched elastic provides enhanced arch support ,Cushioning terry cloth sole ensures comfort while exercising ,Manufactured in the UK }	Mirafit Sports Sock - Black & Grey	5.95	Enjoy a comfortable workout in these Mirafit Sports Socks in black and charcoal grey. These premium socks feature a padded sole and enhanced arch support, making them suitable for a range of sports.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Sports-Socks-Black-and-Charcoal_3.jpg	clothing-apparel	accessories	0
304	{textArr: Mirafit Muscle Fit T-Shirt - Black ,Available in the following sizes:\n\nSmall \nMedium \nLarge \nXL \n2XL ,Small ,Medium ,Large ,XL ,2XL ,Stylish black sports t-shirt ,Perfect for athleisure and gym workouts ,Soft feel cotton for all-day comfort ,Mirafit branding printed on the chest and nape ,Union Jack flag printed on right sleeve  ,Ribbed crew neck ,165gsm single jersey ,Twin needle stitch to the sleeves and hem ,Our model is 5'7" (170cm) and wears a size M }	Mirafit Muscle Fit T-Shirt - Black	19.95	Showcase your biceps with this Mirafit Muscle Fit T-Shirt. Our t-shirt is enzyme washed for a soft feel and provides comfort and style for general gym use or just looking good while you chill out.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/m/a/man-wearing-black-Mirafit-Muscle-Fit-T-Shirt_5.jpg	clothing-apparel	accessories	0.05
305	{textArr: \nMirafit Women's Gym T-Shirt - Black\n,\nAvailable in a range of sizes - from size 10 to size 18\n,\nEnzyme washed cotton-elastane t-shirt\n,\nSoft feel makes for a comfortable workout\n,\nTriple branded at the chest, sleeve and nape\n,\nRibbed crew neck with a twin needle stitch to the sleeves and hem\n,\n165gsm single jersey\n,\nModel is 5'6" and wears a size 10\n}	Mirafit Women's Gym T-Shirt	19.95	Work out in style with our Mirafit Women's Gym T-Shirt in black. Triple branded with a soft cotton mix.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/w/o/woman-wearing-a-black-Mirafit-Womens-Gym-T-Shirt.jpg	clothing-apparel	accessories	0
306	{textArr: \nMirafit Pinch Block\n,\nFantastic tool for improving grip strength\n,\nSuitable for climbers, strongman training or anyone who wants to\nimprove their grip strength\n,\nDesigned for one-handed lifting\n,\nChoice of sizes allows you to target narrow or wide grip positions \n,\nCan also be used as a training tool for pull ups if two are purchased\n,\nIncludes pinch block, carabiner and strap\n,\nConnect strap to a suitable kettlebell or weight plate handle \n,\nAlso compatible with our Olympic Plate Loading Pin (available\nhere)\n,\nStrong 3mm steel construction\n,\nSpecially designed powder coating for improved grip\n,\nIf you are looking to improve your raw grip strength then this is the\ntool you need. Avoid grip strength being a limitation in other\nexercises such as deadlift or farmers walk\n,\nHow much can you lift? Share your videos with us on Instagram and\nTiktok by tagging @mirafitofficial\n,\nMeasurements:\n,\nWidth: 150mm\n,\nThickness: 50mm / 75mm \n,\nHeight: 100mm / 75mm \n}	Mirafit Pinch Block	24.95	Improve your one-handed grip with this Mirafit Pinch Block. Available in a choice of size to target narrow or wide grips, these pinch blocks are ideal for building supreme hand strength. Includes pinch grip block, carabiner and connecting strap.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-50mm-Pinch-Block_1.jpg	grip-training	accessories	0
307	{textArr: \nMirafit Pinch Grip Finger Trainer \n,\nHub style pinch gripper ideal for climbers and athletes looking to\nwork on grip strength\n,\nAvailable in a choice of grip heights, the difficulty increases as\nthe height of the grip reduces\n,\nIncludes pinch grip, carabiner and strap \n,\nConnect strap to a suitable kettlebell or weight plate handle \n,\nAlso compatible with our Olympic Plate Loading Pin (available\nhere)\n,\nStrong steel construction with 3"/76mm grip diameter\n,\nSpecially designed powder coating for improved grip\n,\nIdeal training tool for building superb pinch grip strength\n,\nHow much can you lift? Share your videos with us on Instagram and\nTiktok by tagging @mirafitofficial\n,\nMeasurements:\n,\nGrip Height: 15mm, 30mm or 45mm\n,\nGrip Diameter: 76mm\n,\nTotal Diameter: 100mm\n}	Mirafit Pinch Grip Finger Trainer	19.95	Improve your pinch grip strength with the Mirafit Pinch Grip Finger Trainer. These pinch grip trainers are perfect for climbers and other athletes who want to build improved grip strength. Includes a carabiner and strap. Available in 3 sizes.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Pinch-Grip-Finger-Trainers.jpg	grip-training	accessories	0
308	{textArr: \nMirafit Pinch Plate\n,\nNarrow steel plate provides a challenging grip workout\n,\nIdeal for improving finger and thumb strength\n,\nIncludes pinch plate, carabiner and strap\n,\nConnect strap to a suitable kettlebell or weight plate handle \n,\nAlso compatible with our Olympic Plate Loading Pin (available\nhere)\n,\nStrong 6mm thick steel plate\n,\nSpecially designed powder coating for improved grip\n,\nIdeal training tool for taking your grip and hand strength to the next\nlevel\n,\nHow much can you lift? Share your videos with us on Instagram and\nTiktok by tagging @mirafitofficial\n,\nMeasurements:\n,\nThickness: 6mm\n,\nWidth: 150mm\n,\nHeight: 120mm\n}	Mirafit Pinch Plate	19.95	Improve your grip strength with this Mirafit Pinch Plate. Ideal for developing hand and grip strength for climbing and other strength sports. Includes 6mm thick pinch plate with strap and carabiner. Ideal for use with kettlebells or weight plates.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Pinch-Plate.jpg	grip-training	accessories	0
309	{textArr: \nMirafit Two Handed Pinch Block\n,\nLonger 250mm version of our pinch block designed for lifting with both\nhands at once\n,\nUsing two hands will provide a different challenge to one handed\nblocks and will also workout additional muscles as the weight is\nlifted. For the ultimate test try performing a front raise to 90\ndegrees and holding for as long as possible!\n,\nChoice of sizes allows you to target narrow or wide grip positions \n,\nIncludes pinch block, carabiner and strap\n,\nConnect strap to a suitable kettlebell or weight plate handle \n,\nAlso compatible with our Olympic Plate Loading Pin (available\nhere)\n,\nStrong 3mm steel construction\n,\nSpecially designed powder coating for improved grip\n,\nIf you are looking to improve your raw two handed grip strength then\nthis is the tool you need. Avoid grip strength being a limitation in\nother exercises such as deadlift or farmers walk\n,\nHow much can you lift? Share your videos with us on Instagram and\nTiktok by tagging @mirafitofficial\n,\nMeasurements:\n,\nWidth: 250mm\n,\nThickness: 50mm / 75mm \n,\nHeight: 100mm / 75mm \n}	Mirafit Two Handed Pinch Block	29.95	Get the ultimate grip workout with this two hand pinch block. Supplied with carabiner and strap for connecting to a kettlebell or weight plate handle, this 250mm gripper block is ideal for anyone looking for a challenging grip workout.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-75mm-Two-Handed-Pinch-Block_1.jpg	grip-training	accessories	0
310	{textArr: \nCaptains of Crush Hand Gripper\n,\nTorsion-spring gripper provides the ultimate test of your grip strength\n,\nAvailable in a choice of 11 sizes:\n,\nGuide - c. 60lbs\n,\nSport - c. 80lbs\n,\nTrainer - c. 100lbs\n,\nNo. 0.5 - c. 120lbs\n,\nNo. 1 - c. 140lbs\n,\nNo. 1.5 - c.167.5lbs\n,\nNo. 2 - c. 195lbs\n,\nNo. 2.5 - c. 237.5lbs\n,\nNo. 3. - c. 280lbs\n,\nNo. 3.5 - c.322.5lbs\n,\nNo. 4 - c. 365lbs\n,\nAircraft grade aluminum handles\n,\nHandle knurling provides a secure grip\n,\nProduces quick gains in your grip strength, start low and work your\nway up the range \n,\nOnly five people have ever been certified as successfully closing the\nNo. 4 gripper!\n,\nFor more information checkout the video below by Ironmind\n}	Captains of Crush Hand Gripper	27.95	Get the strongest grip around with these Captains of Crush Hand Grippers. Available in a full range of strengths, you're sure to find your perfect challenge.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/C/a/Captains-of-Crush-Hand-Gripper-4_1.jpg	grip-training	accessories	0.05
311	{textArr: \nMirafit Rolling Grip Handle\n,\nAvailable in a choice of 50mm, 60mm or 70mm grip diameter \n,\nRevolving handle rotates through 360 degrees\n,\nGreat tool for building grip and forearm strength\n,\nMade from steel with a chrome finish\n,\nLight knurling on rolling grip area\n,\nIdeal for strongman training, climbers and arm wrestlers\n,\nPackages also available including Mirafit Olympic weight loading pin\nand carabiner\n,\nMeasurements:\n\n\nDiameter: 5cm / 6cm / 7cm\n\n\nTotal width: 19cm\n\n\n,\nDiameter: 5cm / 6cm / 7cm\n,\nTotal width: 19cm\n}	Mirafit Rolling Grip Handle	34.95	Get a stronger grip with this Mirafit Rolling Grip Handle. Ideal for building forearm and grip strength, the central area of this carry handle fully rotates and is available in 50mm, 60mm, or 70mm diameter. Also available with weight loading pin.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Rotating-Grip-Handles_1.jpg	grip-training	accessories	0.05
312	{textArr: Mirafit Olympic Plate Loading Pin ,Includes carabiner clip ,Suitable for use with the mirafit loading pin handle ,Also compatible with certain other bars, handles and cable attachments ,Simply load plates, attach handle and lift ,Fits 2" Olympic sized weight plates ,Steel construction with matt black power coated finish ,Measurements:\n\nHeight: 34cm \nSleeve length: 29.5cm \nSleeve diameter: 5cm ,Height: 34cm ,Sleeve length: 29.5cm ,Sleeve diameter: 5cm }	Mirafit Olympic Plate Loading Pin	24.95	Our Olympic Plate Loading Pins are essential for building grip and forearm strength. The loadable pin is suitable for 2" Olympic weight plates. Simply load the pin and attach a handle of your choice to the carabiner clip at the top.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/m/i/mirafit-olympic-plate-loading-pin.jpg	grip-training	accessories	0.05
313	{textArr: \nIMTUG: The Two-Finger Utility Gripper\n,\nFrom Ironmind, makers of the world famous Captains of Crush grippers\n,\nAvailable from strength 1 (easiest) through to strength 7 (hardest)\n,\nFine-tune your grip strength training, one or two fingers at a time\n,\nTrain individual fingers and thumbs or pairs of fingers \n,\nIncreases your finger strength and your pinch grip\n,\nImproves the overall health and condition of your hands\n,\nIncreases muscle balance, flexibility and range of motion\n,\nKnurled handles prevent gripper from slipping\n,\nFor more information checkout the video below by Ironmind\n}	IMTUG Two-Finger Utility Gripper	29.95	Strengthen your fingers with the IMTUG Two-Finger Utility Grippers. These grippers allow you to fine tune your grip strength training, one or two fingers at a time.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/I/M/IMTUG-No-1_1.jpg	grip-training	accessories	0
314	{textArr: \nCoC Silver Bullet\n,\nThe Silver Bullet Hold is the perfect test of grip strength\n,\nAttach a 2.5kg plate to the included strap\n,\nHold the bullet between the handles of a Captains of Crush Hand\nGripper and see how long you can hold it closed for\n,\nWhen you run out of grip the plate will drop so remember to keep your\nfeet safely out of the way!\n,\nProduct comes with full instruction leaflet\n,\nWeight plate not included\n}	CoC Silver Bullet	21.95	Test your grip strength and endurance with the CoC Silver Bullet. Combines with the Captains of Crush Hand Grippers for the Silver Bullet Hold grip test. Attach the strap to a 2.5kg weight plate and see how long you can hold the gripper closed for.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/C/o/CoC-Silver-Bullet.jpg	grip-training	accessories	0.05
315	{textArr: \nCoC Key: Miles to Mils\n,\nAccurately measures the gap between your Captains of Crush hand\ngrippers\n,\nKey contains the following distances: 2, 4, 6, 8, 10, 12, 14, 16, 19\nand 54mm\n,\nReduce the distance over time until you can fully close your hand\ngripper\n,\nMade from aircraft grade aluminum\n,\nWeight: 0.25lbs\n,\nTotal length: 2.125"\n}	CoC Key: Miles to Mils	14.95	Train ultimate grip strength with this CoC Key: Miles to Mils. Featuring ten measurements, you can track your progress towards conquering the Captains of Crush hand grippers.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/C/o/CoC-Key-Miles-to-Mils.jpg	grip-training	accessories	0.05
316	{textArr: Ironmind Expand-Your-Hand-Bands - 10 Bands ,Improve your hand health, muscle balance and your grip strength with these IronMind bands ,Comes with five different strengths, with two bands per strength ,Portable and can be used quickly during down-time ,Excellent for stress relief, warm up and rehab ,Made of latex-free rubber for greater stretch and longer life ,For more information checkout the video below by Ironmind }	Ironmind Expand-Your-Hand-Bands - 10 Bands	19.95	Increase your strength and improve your hand health with these Expand-Your-Hand-Bands from IronMind. Suitable for al levels, these ten bands come in five different strengths, making it easy to mark your progression.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/I/r/IronMind-Expand-Your-Hand-Bands.jpg	grip-training	accessories	0
317	{textArr: \nMirafit Farmers Walk Handles - Pair\n,\nIncludes 4 x 48mm grey quick release collars\n,\nHeavy duty black steel bars\n,\nMatt black powder coated finish\n,\nKnurled grip handles with 40mm diameter\n,\nFor use with 2"\nweight plates and bumpers\n,\nIndividual handle weight: 9.2kg\n,\nCapacity:\n,\n250kg per handle (based on 25kg Mirafit tri grip plates)\n,\n200kg per handle (based on Mirafit classic bumper plates)\n,\nDimensions:\n,\nTotal length: 150cm\n,\nTotal height: 24cm\n,\nWeight sleeve: 34cm\n,\nSleeve diameter: 48mm\n,\nGrip length: 27.4cm\n,\nGrip diameter: 4cm\n}	Mirafit Farmers Walk Handles	99.95	Improve your functional fitness levels tenfold using our Farmers Walk Handles. Perfect for improving grip strength and strongman training. Each handle has a thick 40mm knurled grip. Now with collars.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Olympic-Farmers-Walk-Handles-On-White-Background.jpg	grip-training	accessories	0.039
318	{textArr: Mirafit Gym Wall Flag - Curling in my Squat Rack ,The perfect flag to celebrate having a home gym and working out your way! ,Four metal eyelets allow for wall mounting with ease ,100D black polyester with an orange and white design ,Can be ironed on a low setting ,Approx. Measurements: 94cm x 150cm }	Mirafit Gym Wall Flag - Curling in My Squat Rack	4.95	In your gym, you make the rules. Save the curling in the squat rack for home and workout your way! Easy to attach and brightens up any wall.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/f/l/flag-curling-in-my-squat-rack.jpg	gym-flags	accessories	0.05
319	{textArr: Mirafit Gym Wall Flag - Home Gym Revolution ,Four metal eyelets allow for wall mounting with ease ,100D black polyester with white and orange print ,Can be ironed on a low setting ,Approx. Measurements: 150cm x 94cm }	Mirafit Gym Wall Flag - Home Gym Revolution	7.95	Want to shout your love for your home gym from the rooftops? This Mirafit Gym Flag is easy to attach and will brighten up any wall. Be part of the home gym revolution!	\N	gym-flags	accessories	0.05
320	{textArr: Mirafit Gym Wall Flag - My Gym My Rules ,Attaches easily to the wall with four metal eyelets ,100D black polyester with white and orange print ,Can be ironed on a low setting ,Approx. Measurements: 150cm x 94cm }	Mirafit Gym Wall Flag - My Gym My Rules	7.95	If you own the gym, you set the rules! This Mirafit Gym Wall Flag is perfect for home & garage gym owners. Measures 150cmx94cm. Four in built eyelets for easy installation.	\N	gym-flags	accessories	0
321	{textArr: Mirafit Gym Wall Flag - We The Strong ,Made from 100D black polyester with white & orange print ,Features four metal eyelets for wall mounting ,Can be ironed on a low setting ,Approx. Measurements: 150cm x 94cm }	Mirafit Gym Wall Flag - We The Strong	7.95	Remind yourself what you're working for with our We The Strong wall flag. Measuring 150cm x 94cm this flag easily attaches to any wall and is ideal for home and garage gyms.	\N	gym-flags	accessories	0
322	{textArr: Mirafit Gym Wall Flag - Powered By Mirafit ,Made from 100D black polyester with white print ,Features four metal eyelets for wall mounting ,Can be ironed on a low setting ,Approx. Measurements: 150cm x 94cm }	Mirafit Gym Wall Flag - Powered By Mirafit	4.95	Spruce up your gym with our Powered by Mirafit gym flag. Measuring 150cm x 94cm this flag is easily attached to the wall via the four built in eyelets.	\N	gym-flags	accessories	0
323	{textArr: Mirafit Gym Wall Flag - Logo ,Four metal eyelets allow the gym flag to be mounted to the wall ,100D black polyester with grey print ,Can be ironed on a low setting ,Approx. Measurements: 150cm x 94cm }	Mirafit Gym Wall Flag - Logo	7.95	Show your part of Team Mirafit with this black gym flag with logo. Easily attachable to any wall.	\N	gym-flags	accessories	0
324	{textArr: Mirafit Gym Wall Flag - Union Jack ,Inspirational design adds character to your gym ,Great for focus and motivation ,Four metal eyelets allow for wall mounting with ease ,100D black polyester with white and orange print ,Can be ironed on a low setting ,Approx. Measurements: 150cm X 94cm }	Mirafit Gym Wall Flag - Union Jack	7.95	Complete your home gym using our Union Jack Gym Wall Flags. Each flag measures 150cm by 94cm and comes with metal eyelets so it can be hung up easily. Great for motivation as well as giving your gym the edge you've been looking for.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Gym-Wall-Flag-Union-Jack.jpg	gym-flags	accessories	0.05
325	{textArr: Mirafit Gym Wall Flag - Fit Dont Quit ,Inspirational design adds character to your gym ,Great for focus and motivation ,Four metal eyelets allow for wall mounting with ease ,100D black polyester with white and orange print ,Can be ironed on a low setting ,Approx. Measurements: 150cm X 94cm }	Mirafit Gym Wall Flag - Fit Dont Quit	7.95	Stay motivated whenever you train with our Fit Don't Quit Gym Flags. Each flag is 150cm by 94cm and comes with eyelets so it can be hung up easily. Great for adding focus and giving your gym the edge you've been looking for.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Gym-Wall-Flag-Fit-Dont-Quit-on-White-Background.jpg	gym-flags	accessories	0.05
326	{textArr: Mirafit Merchandise Bundle ,Includes:\n\n1 x Mirafit Wall Flag \n1 x Mirafit Drinks Shaker \n1 x Mirafit Key Clip \n4 x Mirafit Drink Coasters ,1 x Mirafit Wall Flag ,1 x Mirafit Drinks Shaker ,1 x Mirafit Key Clip ,4 x Mirafit Drink Coasters ,A collection of some of our most popular merchandise ,Makes a great present for any gym lover  ,Measurements: ,Flag: 150cm x 94cm ,Key clip: 20cm length ,Drinks shaker: 700ml capacity ,Coasters: 8.7cm diameter }	Mirafit Merchandise Bundle	14.95	The ideal gift for any gym enthusiast! Includes a Mirafit wall flag, 700ml drink shaker, key clip and four bumper plate style drink coasters. Makes a great stocking filler for anyone who loves their home gym.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/F/MF_merch_pack.jpg	gym-flags	accessories	0
327	{textArr: Mirafit Gym Banners ,Available in a choice of sizes to suit any gym or room,Made from durable black 510gsm PVC ,Premium black eyelets ensure the banner remains in place ,Welded hems for a neat finish ,Delivered in a tube to ensure safe receipt,Wall fixings and ties are not included}	Mirafit Large Gym Wall Banners	34.95	Spruce up your gym walls with these Mirafit Gym Banners. These premium quality banners, feature the Mirafit logo and emblem and have matching black eyelets for easy installation. Available in a range of sizes from small to extra large.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Vinyl-Gym-Banners.jpg	gym-flags	accessories	0
328	{textArr: \nMirafit TX1 Gym Timer\n,\nOptional Height Adjustable Timer Stand\n,\nLarge timer ideal for a wide variety of workouts including HIIT,\nTabata and strength training\n,\nComes with 9 built in functions:\n\n\nClock (12 or 24 hour display)\n\n\nCountdown timer (programmable or pre-programmed)\n\n\nCount up timer (programmable or pre-programmed)\n\n\nInterval timer\n\n\nTabata timer\n\n\nFight gone bad timer\n\n\nStopwatch\n\n\n,\nClock (12 or 24 hour display)\n,\nCountdown timer (programmable or pre-programmed)\n,\nCount up timer (programmable or pre-programmed)\n,\nInterval timer\n,\nTabata timer\n,\nFight gone bad timer\n,\nStopwatch\n,\nIncludes an optional 10 second preparation timer in-between rounds\n,\nHighly visible red and green LED display\n,\nIncludes remote control (batteries not included - requires 2x AAA) and\nmains power supply\n,\nPlease note this timer requires mains power at all times, it is not\nwireless \n,\nFixings points on the back of the timer also allow for easy mounting\nto walls\n,\nSuitable for use in home gyms and personal trainer studios\n,\nMeasurements:\n\n\nTimer:\n\n\nHeight: 20cm\n\n\nWidth: 64cm\n\n\nDepth: 5cm\n\n\nWeight: 2.5kg (approx)\n\n\n\n\nStand:\n\n\nMinimum height (without timer): 103.5cm\n\n\nMaximum height (without timer): 211cm\n\n\nWidth: 65.5cm\n\n\nDepth: 8cm\n\n\n\n\n,\nTimer:\n\n\nHeight: 20cm\n\n\nWidth: 64cm\n\n\nDepth: 5cm\n\n\nWeight: 2.5kg (approx)\n\n\n,\nHeight: 20cm\n,\nWidth: 64cm\n,\nDepth: 5cm\n,\nWeight: 2.5kg (approx)\n,\nStand:\n\n\nMinimum height (without timer): 103.5cm\n\n\nMaximum height (without timer): 211cm\n\n\nWidth: 65.5cm\n\n\nDepth: 8cm\n\n\n,\nMinimum height (without timer): 103.5cm\n,\nMaximum height (without timer): 211cm\n,\nWidth: 65.5cm\n,\nDepth: 8cm\n}	Mirafit TX1 Gym Timer	199.95	Train harder and faster with the Mirafit TX1 Gym Timer. Remote controlled, this large timer comes with 9 functions and is ideal for use in home gyms, studios or commercial settings. Perfect for HIIT, Tabata and strength training workouts.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Large-Home-Gym-Timer-and-Stand-on-White-Background.jpg	gym-interval-timers	accessories	0
329	{textArr: Mirafit Gym Timer Stand ,Designed to hold the Mirafit TX1 Gym Timer ,Tripod stand with a sturdy wide base ,Ideal for use when wall mounting of timers is not convenient ,Easy to assemble and folds away quickly ,Adjustable height ,Measurements: ,Maximum height: 211cm ,Minimum height: 103.5cm ,Width: 65.5cm ,Depth: 8cm ,Timer not included }	Mirafit Gym Timer Stand	39.95	See your interval timer from more positions and avoid drilling into walls with the Mirafit Large Gym Timer Stand. With three legs for a sturdy base, this tripod stand is perfect for use in gyms and personal trainer studios.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/m/i/mirafit-large-home-gym-timer-stand.jpg	gym-interval-timers	accessories	0
330	{textArr: \nMirafit Replacement Remote Control for TX1 Gym Timer\n,\nReplaces a lost or damaged remote\n,\nBatteries not included (2x AAA required)\n}	Mirafit Replacement Remote Control for Gym Timer	12.95	Replacement remote control for the Mirafit TX1 Gym Timer.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/m/i/mirafit-remote-for-large-home-gym-timer.jpg	gym-interval-timers	accessories	0
331	{textArr: \nMirafit Personal Training Equipment Package\n,\nPortable fitness training kit for workouts on the move\n,\nIdeal for varying up your training location or for personal trainers\nvisiting clients\n,\nIncludes our latest tactical backpack with a range of popular Mirafit\nproducts (click each product for more info):\n,\nBackpack\nand Badge Set \n,\n8mm\nTPE Exercise Mat \n,\nCore\nSliders \n,\n3m\nAdjustable Speed Rope \n,\nFabric\nResistance Bands Set \n,\nAb\nRoller and Knee Pad \n,\nHi-Density\nFoam Roller \n,\nCoach\nBackpack Badge \n,\nDrinks\nShaker \n,\nKey Clip \n,\nIdeal set for anyone looking to start exercising and getting fitter\n,\nAll items can be stored in/on the backpack, making this equipment set\nboth portable and easy to store\n,\nOur tactical backpack also includes multiple other storage pockets so\nthere is still plenty of room left for other small items\n,\nTake your workouts further with the Mirafit Personal Training\nEquipment package\n,\nPlease note: the resistance bands are unsuitable for people with a\nlatex allergy\n,\nMeasurements:\n,\nTactical backpack: 45l capacity\n,\nExercise mat: 183cm x 61cm x 8mm\n,\nDrinks shaker: 700ml capacity\n,\nSpeed rope: 3m cable length\n,\nResistance bands: 7 -12kg / 12 -16kg / 18 -23kg strength\n}	Mirafit Personal Training Equipment Package	149.95	Take your workouts further with the Mirafit Personal Training Equipment Package. This handy kit includes our tactical backpack with a range of exercise equipment that stores neatly away inside. Ideal for personal trainers or workouts on the move.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Personal-Training-Equipment-Package.jpg	merchandise	accessories	0
332	{textArr: \nMirafit Self Fastening Badges\n,\nThese patches are ideal for adding a custom look to your gym\naccessories, tactical bags or weight vests \n,\nAvailable in a choice of design\n\n\nDesign A - 60mm Mirafit Logo Circle Badge\n\n\nDesign B - 5x7 UK Flag Badge\n\n\nDesign C - 5x5 Fit Dont Quit Badge\n\n\nDesign D - 5x7 Black Mirafit Badge\n\n\nDesign E - 4x4 100 Badge\n\n\nDesign F - 10x3 Coach Badge\n\n\nDesign G - 7x5 UK Flag (Colour) Badge\n\n\nDesign H - 4x7 Black and Orange Mirafit Badge\n\n\nDesign I - 10x3 No Excuses Badge\n\n\nSet of Four Badges (one each of designs A-D)\n\n\nSet of Three Badges (one of each of designs G-I)\n\n\n,\nDesign A - 60mm Mirafit Logo Circle Badge\n,\nDesign B - 5x7 UK Flag Badge\n,\nDesign C - 5x5 Fit Dont Quit Badge\n,\nDesign D - 5x7 Black Mirafit Badge\n,\nDesign E - 4x4 100 Badge\n,\nDesign F - 10x3 Coach Badge\n,\nDesign G - 7x5 UK Flag (Colour) Badge\n,\nDesign H - 4x7 Black and Orange Mirafit Badge\n,\nDesign I - 10x3 No Excuses Badge\n,\nSet of Four Badges (one each of designs A-D)\n,\nSet of Three Badges (one of each of designs G-I)\n,\n\nSelf fastening material on back ideal for any velcro surface\n\n}	Mirafit Badge Patches	1.95	Mirafit badges are great for showcasing your love of fitness. Available in a range of designs these self fastening patches are ideal for weighted vests, jackets or gym bags that feature a velcro surface.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Badges_1.jpg	merchandise	accessories	0
333	{textArr: Mirafit Merchandise Bundle ,Includes:\n\n1 x Mirafit Wall Flag \n1 x Mirafit Drinks Shaker \n1 x Mirafit Key Clip \n4 x Mirafit Drink Coasters ,1 x Mirafit Wall Flag ,1 x Mirafit Drinks Shaker ,1 x Mirafit Key Clip ,4 x Mirafit Drink Coasters ,A collection of some of our most popular merchandise ,Makes a great present for any gym lover  ,Measurements: ,Flag: 150cm x 94cm ,Key clip: 20cm length ,Drinks shaker: 700ml capacity ,Coasters: 8.7cm diameter }	Mirafit Merchandise Bundle	14.95	The ideal gift for any gym enthusiast! Includes a Mirafit wall flag, 700ml drink shaker, key clip and four bumper plate style drink coasters. Makes a great stocking filler for anyone who loves their home gym.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/F/MF_merch_pack.jpg	merchandise	accessories	0
334	{textArr: \nMirafit Protein Shaker\n,\nPremium, robust gym bottle\n,\nAvailable in single units or bulk packs \n,\nSmoke see through black design with black lid\n,\nMirafit branding across the drinks bottle\n,\nScrew top with an easy pour opening\n,\nFirm close lid to avoid leaks\n,\nMesh insert breaks up protein powder\n,\nUnique turbine shape moves the powder around the shaker for a\nconsistent mix without lumps\n,\n700ml capacity\n,\nMeasuring scale printed on the side of the bottle to get the perfect\namount, every time\n,\nDishwasher safe\n}	Mirafit Protein Shaker	4.95	Get a smooth and consistent mix every time with this Mirafit Protein Shaker. Featuring a firm close, screw top lid with an easy pour opening, this 700ml gym bottle is a must-have. Available in singles or bulk packs.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Drinks-Shaker_4.jpg	merchandise	accessories	0
335	{textArr: Mirafit Camo Gym Duffle Bag ,Traditional barrel bag design is perfect for carrying your gym gear ,Medium size bag; can fit gym shoes, clothing, towel, phone, and key ,Chunky zip topped opening ,Zipped pocket to keep valuables concealed ,Shoulder strap for easy carrying ,Features a Mirafit print on the side ,Made from a waterproof, robust fabric }	Mirafit Camo Gym Duffle Bag	24.95	Keep your gym gear organised with this Mirafit Gym Duffle Bag. This medium gym bag can fit all your essentials and is made from waterproof fabric.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Camo-Gym-Duffle-Bag.jpg	merchandise	accessories	0.05
336	{textArr: \nMirafit Chilly's Drink Bottle\n,\nCo-branded product between Mirafit and Chilly's\n,\nSeries 2 500ml Bottle\n,\nAvailable in a stylish black abyss colour\n,\nKeeps cold liquids cold for up to 24 hours\n,\nKeeps hot liquids hot for up to 12 hours\n,\nMade from dual-walled stainless steel\n,\nSoft-touch antimicrobial collar\n,\nRubber non-slip base\n,\nComfortable ergonomic design with a carry loop holder\n,\nClean with hot, soapy water\n,\nMeasurements:\n,\nHeight: 22cm\n,\nWidth: 7.5cm\n,\nNet Weight: 390g\n}	Mirafit Chilly's Drink Bottle	19.95	Keep on top of your hydration with this collaborative Mirafit Chilly's Drink Bottle. With a 500ml capacity this bottle keeps liquids cold or hot and is made from dual-walled stainless steel.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Chillys-Drink-Bottle_1.jpg	merchandise	accessories	0
337	{textArr: Mirafit Drawstring Gym Sack ,Available in a choice of colour:\n\nGrey bag with black Mirafit branding \nBlack bag with tonal Anthracite Mirafit branding ,Grey bag with black Mirafit branding ,Black bag with tonal Anthracite Mirafit branding ,Black zipper and drawstrings,Ideal bag for gym clothing and sports kit ,Zippered pocket for safely storing valuables ,Generous 15 litre capacity ,Made from recycled 300D polyester ,Measurements:\n\nWidth: 40cm \nHeight: 48cm ,Width: 40cm ,Height: 48cm }	Mirafit Drawstring Gym Sack	12.95	Take your workout outdoors with this Mirafit Gym Sack. With a 15 litre capacity and a zippered pocket, this gym bag is perfect for taking your workout gear wherever you want to go. Available in a choice of colour.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Black-Gym-Sacks-Grey-and-Black.jpg	merchandise	accessories	0
338	{textArr: Mirafit Drinks Coasters - 4 in 1 Set ,Contains four drink mats in a bumper plate theme ,Designed to resemble Mirafit competition weight plates ,Colour coded to match IWF colours - green 10kg, yellow 15kg, blue 20kg and red 25kg ,Raised grey centre circle and white lettering ,Made from a washable soft PVC material ,Hand wash only ,Measurements:\n\nThickness: 4mm \nDiameter: 8.7cm ,Thickness: 4mm ,Diameter: 8.7cm }	Mirafit Bumper Plate Drinks Coasters Set	9.95	Our Mirafit Bumper Plate Style Drinks Coasters Set is a must have for the home or office of any weight lifting enthusiast. Resembling our Mirafit weight plates these four coasters are IWF colour coded and made from a soft, washable PVC material.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Drinks-Coasters.jpg	merchandise	accessories	0.047
339	{textArr: Mirafit Key Clip ,Ideal for use on a gym bag ,Mirafit branding on both sides ,Robust, spring-loaded clip to keep your keys secure ,Quick release clasp for manoeuvrability ,Ribbed heavyweight woven nylon ,Measurements: ,Length: 20cm approx. }	Mirafit Key Clip	4.95	Keep your keys secure with this Mirafit Key Clip. Made with a heavyweight woven nylon, this clip is ideal for use with a Mirafit gym bag.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Key-Clip.jpg	merchandise	accessories	0
340	{textArr: \nMirafit Classic Lanyard\n,\nAvailable in a choice of colour: black/grey or black/charcoal\n,\nFeatures embroidered Mirafit branding\n,\nDouble stitched loop for extra security\n,\nMade from a high-quality woven polyester\n,\nIncludes an ID clip and a fastening clip\n,\nComes with a clip on / clip off design\n,\nClip is a black colour\n,\nWidth: 20mm\n}	Mirafit Classic Lanyard	2.95	Keep your belongings secure with this Mirafit Classic Lanyard - in black with either grey or charcoal text. Features an easy clip on and clip off design and made from high quality polyester.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Black-and-Grey-Lanyard_1.jpg	merchandise	accessories	0
341	{textArr: Mirafit Lanyard ,Ideal for keeping your keys or gym fob safe and secure ,Use for keys or attach to a card holder ,High quality woven polyester with embroidered logo ,Double stitched loop for extra security ,Easy clip on and clip off metal trigger hook ,Black plastic safety snap fastening clip  ,Width: 20mm }	Mirafit Lanyard	2.95	Keep your keys and gym fob safe with this Mirafit Lanyard. Made from high quality woven polyester with metal hook and safety snap clip. Orange & white Mirafit logo on a hard wearing polyester fabric that will stay looking fresher for longer.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Lanyard.jpg	merchandise	accessories	0
342	{textArr: Mirafit Replacement Locking Pin For M1 Folding Adjustable Weight Bench ,Compatible with both black/orange and black/grey benches ,Ideal for replacing lost or damaged locking pins }	Mirafit Replacement Locking Pin for M1 Folding Adjustable Weight Bench	4.95	Get the most out of your gym and keep everything safe and secure with our range of replacement parts. These Locking Pins are suitable for M1 Folding Adjustable Weight Benches. Perfect for replacing lost or damaged pins.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Replacement-Locking-Pin-for-M1-Folding-Adjustable-Weight-Bench.jpg	spares-replacements	accessories	0
343	{textArr: Mirafit Replacement Fixings For 2 Tier 150kg Dumbbell Rack ,Compatible with:\n\nMirafit 2 tier 150kg dumbbell rack - silver \nMirafit 2 tier 150kg dumbbell rack - orange ,Mirafit 2 tier 150kg dumbbell rack - silver ,Mirafit 2 tier 150kg dumbbell rack - orange ,Contains:\n\n16 X part 5 - bolts \n16 X part 6 - nuts \n32 X part 7 - washers ,16 X part 5 - bolts ,16 X part 6 - nuts ,32 X part 7 - washers }	Mirafit Replacement Fixings for 2 Tier 150kg Dumbbell Rack	9.95	Make sure your gym is always safe to train in with our sets of Replacement nuts, bolts and screws. Compatible with 2 Tier Dumbbell Stands, our packs contain everything you need to make sure your gym storage is reliably secure.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Replacement-Fixings-for-2-Tier-150kg-Dumbbell-Rack.jpg	spares-replacements	accessories	0
344	{textArr: Mirafit Replacement Fixing Pack for Vertical Dumbbell Stand ,Contains:\n\n4 part 1 - nut, bolt and washers \n8 part 2 - nut, bolt and washers ,4 part 1 - nut, bolt and washers ,8 part 2 - nut, bolt and washers }	Mirafit Replacement Fixing Pack for Vertical Dumbbell Stand	9.95	Includes a full set of fixings for our Vertical Dumbell Stand.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Replacement-Vertical-Dumbbell-Stand-Fixing-Pack.jpg	spares-replacements	accessories	0
345	{textArr: \nMirafit M20 Adjustment Knob\n,\nQuick release adjustment\n,\nSuitable for:\n,\nM120 Squat Rack\n,\nM130 Squat Rack\n}	Mirafit M20 Adjustment Knob for M120 and M130 Squat Rack	7.95	Replace lost, worn or damaged pins using our replacement M20 quick release knobs. Please check this is the correct size for your product prior to purchase. M16 version also available.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Replacement-Adjustment-Pin-for-M1-Squat-Dip-Racks-on-Mats.jpg	spares-replacements	accessories	0.05
346	{textArr: Mirafit Replacement Fixings For M2 Multi Grip Pull Up Bar ,Compatible with:\n\nMirafit M2 multi grip wall mounted pull up bar - black/silver \nMirafit M2 multi grip wall mounted pull up bar - black/orange ,Mirafit M2 multi grip wall mounted pull up bar - black/silver ,Mirafit M2 multi grip wall mounted pull up bar - black/orange ,Contains:\n\n6 X part 1 - wall fixings \n4 X part 4 - nut, bolt and washers ,6 X part 1 - wall fixings ,4 X part 4 - nut, bolt and washers }	Mirafit Replacement Fixings for M2 Multi Grip Pull Up Bar	9.95	Keep your Pull Up Bar safe and secure with our packs of Replacement Bolts. Suitable for our Multi Grip Pull Up Bars, the sets include all the nuts, bolts and washers you need to fix your bar securely to the wall.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/F/i/Fixings-M2-Multi-Grip-Pull-Up-Bar-Sat-on-Gym-Mats.jpg	spares-replacements	accessories	0
347	{textArr: Mirafit Replacement Fixings For M3 Wall Mounted Pull Up Bar ,Contains:\n\n4 X bolts \n6 X wall anchor bolts ,4 X bolts ,6 X wall anchor bolts }	Mirafit Replacement Fixings for M3 Wall Mounted Pull Up Bar	9.95	Replace old, lost or damaged fixings with our Replacement Fixings Packs. Suitable for M3 Wall Mounted Pull Up Bars, they're essential for ensuring maximum safety in your home or garage gym. 	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/f/i/fixings-for-m3-wall-mounted-pull-up-bar.jpg	spares-replacements	accessories	0
348	{textArr: \nMirafit Replacement Fixings For Single Leg Split Squat Stand\n,\nContains:\n\n\nPart 8 X 4 - nut, bolt and washers\n\n\n,\nPart 8 X 4 - nut, bolt and washers\n}	Mirafit Replacement Fixings for Single Leg Split Squat Stand	9.95	Make sure your gym equipment is always safe and secure with our selection of spare and replacement parts. These fixings are suitable for Single Leg Split Squat Stands and are ideal for replacing lost, damaged or old bolts. 	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/R/e/Replacement-Fixings-for-Single-Leg-Split-Squat-Stand-.jpg	spares-replacements	accessories	0
349	{textArr: Mirafit Replacement Screws for Wooden Plyo Boxes ,Compatible with:\n\nMirafit 3in1 wooden plyo box - 30" X 24" X 20" \nMirafit 3in1 wooden plyo box - 18" X 16" X 12" \nMirafit 3in1 wooden plyo box - 24" X 20" X 16" ,Mirafit 3in1 wooden plyo box - 30" X 24" X 20" ,Mirafit 3in1 wooden plyo box - 18" X 16" X 12" ,Mirafit 3in1 wooden plyo box - 24" X 20" X 16" ,Includes 37 screws }	Mirafit Replacement Screws for Wooden Plyo Boxes	4.95	Suitable for our Wooden Plyo Boxes and compatible with all three sizes. Set includes 37 screws.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/m/i/mirafit-replacement-screws-for-3in1-wooden-plyo-boxes.jpg	spares-replacements	accessories	0
350	{textArr: Mirafit Replacement Fixings For 3 and 6 Bar Horizontal Wall Racks ,Contains:\n\n6 X rawl plugs \n6 X screws \n6 X washers ,6 X rawl plugs ,6 X screws ,6 X washers }	Mirafit Replacement Fixings for 3 & 6 Bar Horizontal Wall Racks	9.95	Keep your bar racks in place with our packs of Replacement Fixings. Suitable for both 3 and 6 Bar Horizontal Wall Racks, they're ideal for making sure your weight bars are held securely. Ideal for replacing lost or damaged bolts.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/R/e/Replacement-Fixings-for-Bar-Horizontal-Wall-Racks.jpg	spares-replacements	accessories	0
351	{textArr: Mirafit Replacement Foam Roller For VKR Power Tower ,Ideal for replacing lost or damaged rollers on the adjustable sit up bar }	Mirafit Replacement Foam Roller for VKR Power Tower	4.95	Replace old, damaged or lost parts with our range of replacements. Our Replacement Foam Rollers are suitable for VKR Power Towers. Easy to fit and ideal for keeping your gear in perfect condition.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Foam-Roller-for-VKR-Power-Tower.jpg	spares-replacements	accessories	0
352	{textArr: Mirafit Replacement Locking Pin ,Compatible with Mirafit M1 Folding Weight Bench with Dip Station ,Ideal for replacing lost or damaged pins ,May also be suitable for use with other gym equipment ,Measurements:\n\nPin diameter: 1cm \nPin length: 7.4cm ,Pin diameter: 1cm ,Pin length: 7.4cm }	Mirafit Replacement Locking Pin	4.95	Make sure you train safely with our range of replacement parts - perfect for keeping your gear in great condition. Our Replacement Locking Pins are suitable for M1 Weight Benches With Dip Stations and are ideal for replacing damaged or lost pins.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Replacement-Locking-Pin.jpg	spares-replacements	accessories	0
353	{textArr: Mirafit 8 Piece Combination Spanner Set ,Includes:\n\n2 x 10mm spanner \n2 x 14mm spanner \n2 x 17mm spanner \n2 x 19mm spanner ,2 x 10mm spanner ,2 x 14mm spanner ,2 x 17mm spanner ,2 x 19mm spanner ,Suitable for M6, M8, M10 and M12 size bolts ,Double ended design features standard open wrench and ratchet ring for fast assembly ,Superior Chromium-Vanadium steel construction (CRV) ,Engraved sizes on both sides for each identification ,Includes handy nylon storage case ,The set will cover most bolts used on our M1 and M2 equipment. ,Please refer to your Mirafit instruction manual for bolt sizes used on your specific equipment before purchase. }	Mirafit CRV Spanner Set (10/14/17/19mm)	29.95	Our 8 Piece Spanner Set contains two each of 10, 14, 17 and 19mm combination wrenches. Designed for use on M6 to M12 bolts they come with a nylon case and are perfect for putting your equipment together quickly and easily.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Spanner-Set.jpg	tools	accessories	0.05
354	{textArr: \nMirafit 2 Piece Combination Spanner Set\n,\nIncludes:\n,\n2 x 24mm spanner\n,\nSuitable for M16 size bolts\n,\nDouble ended design features standard open wrench and ratchet ring for\nfast assembly\n,\nSuperior Chromium-Vanadium steel construction (CRV)\n,\nEngraved sizes on both sides for each identification\n,\nIncludes handy nylon storage case\n,\nThis size bolt is only common on our M3 and M4 racks.\n,\nPlease refer to your Mirafit instruction manual for bolt sizes used on\nyour specific equipment before purchase.\n}	Mirafit CRV Spanner Set (24mm)	19.95	Includes two 24mm CRV ratchet spanners. Suitable for use on M16 bolts this pair of wrenches include a handy nylon case to keep them organised and are perfect for putting your M3 cage together quickly and easily.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-24mm-Spanner-Set.jpg	tools	accessories	0.05
355	{textArr: \nMirafit Weightlifting Belt\n,\nClassic Mirafit black styling\n,\nSupports lower back during heavy lifting\n,\nAvailable in 4 sizes:\n\n\nSmall (28 - 34")\n\n\nMedium (33 - 38")\n\n\nLarge (37 - 42")\n\n\nExtra large (41 - 46")\n\n\n,\nSmall (28 - 34")\n,\nMedium (33 - 38")\n,\nLarge (37 - 42")\n,\nExtra large (41 - 46")\n,\nProvides firm and comfortable lumbar support\n,\nErgonomically designed to fit body shape\n,\nMesh outer with soft felt lining\n,\nStrong fastening with stainless steel hook and loop closure\n,\nMeasurements:\n\n\nBack height - 14.5cm\n\n\nSide height - 9cm\n\n\nFront height - 12cm\n\n\n,\nBack height - 14.5cm\n,\nSide height - 9cm\n,\nFront height - 12cm\n}	Mirafit Weightlifting Belt	9.95	Lightweight and durable, our Weightlifting Belts are available in four different sizes, each one ergonomically designed to add support whilst lifting. Features include a breathable, Neoprene outer and a secure, steel loop fastening.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Pro-Range-Weightlifting-Belt-on-White-Background.jpg	weightlifting-belts	accessories	0.04
356	{textArr: Mirafit Weight Belt With Chain ,Classic Mirafit black styling ,Add extra weight to dips, pull ups and chin ups ,Simply attach weights to chain and dip or pull beyond your own bodyweight ,Ergonomically designed to fit body shape - very comfortable ,Wide back support and secure fit ,Steel quick release clips - easily add and remove weights ,Mesh outer with soft felt lining ,One size fits all - simply adjust chain to correct length ,Chain width is approx 16mm - fine for use with all standard or Olympic weight discs ,Max recommended load: 40kg ,Measurements:\n\nBelt length - 78cm \nBack height - 18cm \nSide height - 11cm \nChain total length - 97cm ,Belt length - 78cm ,Back height - 18cm ,Side height - 11cm ,Chain total length - 97cm }	Mirafit Weight Belt with Chain	14.95	Take your dips, chin ups and pull ups to the next level with our Weightlifting Chain Belts. The quick release clips allow you to add and remove weights quickly and easily so you can adjust as you train. Comfortable with a secure fit.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/m/i/mirafit-pro-range-weight-belt-with-chain-two-views.jpg	weightlifting-belts	accessories	0.048
357	{textArr: Mirafit Weight Belt With Chain ,Classic Mirafit black and orange styling ,Add extra weight to dips, pull ups and chin ups ,Simply attach weights to chain and dip or pull beyond your own bodyweight ,Ergonomically designed to fit body shape - very comfortable ,Wide back support and secure fit ,Steel quick release clips - easily add and remove weights ,Mesh outer with soft felt lining ,One size fits all - simply adjust chain to correct length ,Chain width is approx 16mm - fine for use with all standard or Olympic weight discs ,Max recommended load: 40kg ,Measurements:\n\nBelt length - 78cm \nBack height - 18cm \nSide height - 11cm \nChain total length - 97cm ,Belt length - 78cm ,Back height - 18cm ,Side height - 11cm ,Chain total length - 97cm }	Mirafit Weight Belt with Chain - Black & Orange	14.95	Increase power and strength using our Weight Belts With Chain. The breathable belt is slim-fit and can handle up to 40kg. Features include a 16mm steel chain which attaches to two D-rings with a carabiner clip.	https://mirafit.co.uk/media/catalog/product/cache/79c51d00d9e5a83841cf49a27ce77240/M/i/Mirafit-Pro-Range-Weight-Belt-with-Chain-Two-Views-Orange.jpg	weightlifting-belts	accessories	0.05
\.


--
-- TOC entry 4928 (class 0 OID 25107)
-- Dependencies: 230
-- Data for Name: review; Type: TABLE DATA; Schema: public; Owner: e_commerce_emxk_user
--

COPY public.review (id, author, body, date, product_id, rating, title) FROM stdin;
1	Richard 	Really enjoying the bar. Chunky and well made. Hand positions available really add some great new training depth to the pulldown move. Fast delivery and great service as always. 	2023-07-04 23:00:00.000+00	1	1	Great Bar 
2	Sam 	Just perfect! 	2022-07-22 23:00:00.000+00	1	1	Great 
3	AdzGio 	The m3 attachment has really helped me develop my lats and upper back in general. I can definitely pull more weight down with the grips angled as they are opposed to the standard straight bar. Service from mirafit was faultless, bar arrived really quickly and will be using you guys again, thanks 	2022-02-07 00:00:00.000+00	1	1	Amazing piece of kit 
4	Gary 	Superb kit, well made, so many different angles to hit. Great product. 	2022-01-13 00:00:00.000+00	1	1	Excellent 
5	darren 	definitely cant fault this item, excellent multi grip bar 	2021-12-23 00:00:00.000+00	1	1	100% 
6	Hazel 	I was so pleased to pick this new lat pull-down up. I’ve just moved house am upgrading the home gym. Really easy to build, solid, sturdy and smooth mechanism (don’t forget your 3-1 oil). Got this along with the new m3 half rack. Highly recommend! 	2022-10-02 23:00:00.000+00	3	1	Amazing addition to the home gym 
7	John 	Absolutely fantastic piece of kit, very robust and gym quality. I am really delighted with this machine, easy to assemble and really smooth to use, great job Mirafit 	2023-06-08 23:00:00.000+00	4	1	Great piece of kit 
8	Barney 	Bought as the final addition/upgrade (honest!) to my home gym.Perfectly delivered in a sealed wooden crate 520 x 400 x 2140mm.1 Man assembly was easy (didn’t use the included tools).Nice solid, smooth, well-designed bit of kit !Would highly recommend.Worth ordering these attachments with it.MIRAFIT MULTI PURPOSE GYM CABLE ATTACHMENTMIRAFIT GYM CABLE MACHINE ATTACHMENT SET - 5 HANDLES	2023-02-09 00:00:00.000+00	4	1	Nice solid, smooth, well-designed bit of kit ! 
9	Steve 	Like all M3 items this is a solid piece of kit. This replaces my old standalone Mirafit cable pull tower. It doesn't take long to put together and fits on the 208cm rack extension perfectly. Very happy. 	2022-12-15 00:00:00.000+00	5	1	Very well built 
10	Denzchamps 	I’ve been waiting for this to be released and not disappointed. Replacing an iron master cable tower due to space issues in garage. I assembled on my own and took about an hour. I followed the video and had no issues. Works really well and a great addition to my m3 rack. 	2022-08-24 23:00:00.000+00	5	1	Top cable machine 
11	Colin 	It arrived with a faulty part but 10/10 to Roshan at customer services for arranging for a replacement.The pulley is very good indeed, typical solid M3 quality, my only criticism is that the attachments that come with it are not the best. The straight bar has no rotation so is rather awkward on some exercises but overall I would certainly recommend the product. I think 4/5 is fair bearing in mind the attachments supplied really are pretty basic. 	2023-02-13 00:00:00.000+00	5	0.8	Solid and smooth 
12	GP95 	Bought this to fit to my M3 power rack, more than half the price of other pulley systems but still does a great job. Smaller footprint than other cable machines also so ideal for a limited space home gym set up. 	2023-02-19 00:00:00.000+00	6	1	Good cheaper choice for pulley workouts 
13	BillyR96 	Bought the 208cm starter kit to try on my 188cm rack. Works fine great. Feels very smooth and sturdy. 100% recommended this to anyone considering purchasing. 	2021-01-18 00:00:00.000+00	6	1	188cm M3 rack 
14	Dan 	Purchased this attachment to add to me smith machineVery pleased with it ,nice to work with and a good price 	2022-11-22 00:00:00.000+00	7	1	Good quality 
15	Geordie 	as with everything I`ve bought from Mirafit this is a solid well made piece of equipment, perfect for T bar rows, belted squats, goblet squats, I've even fitted a bracket to my wall where I can slide one foot plate under securing it in place and use the other side for calf raises. well worth the money 	2022-12-31 00:00:00.000+00	8	1	excellent piece of kit 
16	Kez 	I get full rom with this platform when doing rows with the T bar.. its also great for goblet squats 	2021-08-26 23:00:00.000+00	8	1	Full rom and weighed squats 
17	David Jackson 	Arrived on time, Excellent quality and value for money. easy to assemble very robust build Landmine Row Platform. 	2021-05-19 23:00:00.000+00	8	1	Landmine Row Platform 
18	Highlander 	This has to be the best piece of Equipment for Bent-over Rows. You get such a deep stretch on the back Muscles. Major Gains with this product. I would Highly Recommend this. Just Amazing! 	2021-05-06 23:00:00.000+00	8	1	Takes Bent-over rows to next level 
19	IRONMAN 	Great company great equipment and hasn’t killed the bank , still waiting are more stuff to come back in stock soon hopefully 	2021-02-10 00:00:00.000+00	8	1	Lots of equipment for home gym 
20	Monica 	This is a brilliant addition to the landmine and the 3 different handles mean a great variant in any workout. Great price and first class quality. 	2023-08-11 23:00:00.000+00	9	1	Brilliant bit of kit 
21	Nath 	This is the 3rd piece of equipment I've bought from Mirafit and as per previous orders, the quality is absolutely excellent. Highly recommended bit of kit and does exactly what you'd hope for. 	2023-02-02 00:00:00.000+00	9	1	Excellent Quality 
22	Anndy 	Excellent piece of kit to add to my home gym. Well made and good price. Speedy delivery 	2022-10-04 23:00:00.000+00	9	1	Excellent 
23	David 	I bought this to enhance my back workout and it works a treat. You can really feel the muscles working with the multi position handle. Sturdy piece of kit too, highly recommended 	2022-09-16 23:00:00.000+00	9	1	Landmine multi use handle 
24	chris 	I brought the bar for bent over rows, but it has multiple use's for large range of movements, use with land mine rack attachment i do find there is a sweet spot to feel in right muscles, great quality and mirafit backup their products if there is a problem 	2022-08-31 23:00:00.000+00	9	1	Versatile 
25	Robin 	Excellent bit of kit. Works brilliantly!! 	2023-08-10 23:00:00.000+00	10	1	Landmine 
26	Pat 	Great quality, it's awesome to have in my home gym. 	2023-07-04 23:00:00.000+00	10	1	Awesome bit of kit 
27	Trev 	Brilliant product, great quality and will be used a lot of the coming years 	2023-06-29 23:00:00.000+00	10	1	Brill 
28	Arran 	Really good quality, used for ghetto belt squatting and is great, I thought it might lift out of the bumper plates but it’s not done it so far 	2022-08-09 23:00:00.000+00	10	1	Good stuff 
29	GavS 	As with all Mirafit items solid built and great for T Baylor rows 	2022-03-10 00:00:00.000+00	10	1	Excellent product 
30	Paul 	Well made, easy to use landmine attachment. 	2023-10-10 23:00:00.000+00	11	1	Landmine attachment. 
31	Kez 	Easy to fit, very useful addition to my squat rack, very happy with this purchase 	2023-09-14 23:00:00.000+00	11	1	Useful piece of kit 
32	Broseph 	It's an affordable and ergonomic way to expand the potential of your home gym. I've attached this to my squat rack.I tend to use this every workout to warm up, and to work the core. In theory, there's the potential to develop some power aside from the standard olympic lifts - Look up Landmine University or Phil Daru's landmine drills. 	2023-07-27 23:00:00.000+00	11	1	Loads of fun 
33	Mark 	Easy to install to base of my power rack. Versatile and well made. Cannot think of another piece of kit that can give you so many exercise options for such minimal cost. 	2023-05-29 23:00:00.000+00	11	1	Excellent Kit 
34	welshwizard 	It enables me to carry on training with reasonable weight while recovering from a shoulder injury which rules out the OHP and barbell squat. 	2023-05-07 23:00:00.000+00	11	1	Useful kit 
35	Daz 	Great piece of kit for the landmine, a must have 	2023-04-12 23:00:00.000+00	12	1	Heavy time 
36	Dan 	Fantastic product! Highly recommend for use with an Olympic bar! 	2022-10-13 23:00:00.000+00	12	1	Landmine handle 
37	Colin B 	Quality product as always from Mirafit. 	2022-04-20 23:00:00.000+00	12	1	Landmine handle 
38	JJW 	Great handle, very comfortable to use. Well made. Brilliant. 	2020-12-10 00:00:00.000+00	12	1	Landmine Handle 
39	Ken 	Absolutely brilliant for t-bar rows, even with 15kg plates you get a full range of motion. The new center piece has made it so much stronger. 	2020-12-07 00:00:00.000+00	12	1	Absolutely brilliant 
40	Mark 	Bought this as my dumbbells are too light for one arm rows. Really is excellent allows me to really overload and get a really good ROM. 	2023-05-29 23:00:00.000+00	13	1	Best Rows 
41	eddiesson03 	An excellent product in both manufacture and function. It adds plenty of new dimensions to the use of the Landmine exercises. 	2022-11-29 00:00:00.000+00	13	1	Quality and value. 
42	Mark 	Well made, goes what it's required to 	2022-07-15 23:00:00.000+00	13	1	Great for price 
43	Milly 	Great addition sturdy and gives confidence while using and the price WOW 	2022-06-24 23:00:00.000+00	13	1	Another great piece of kit 
44	Trevor 	Great addition and cheap. Usual well made and solid bit of kit. 	2022-02-06 00:00:00.000+00	13	1	Solid and well made 
45	Ameet 	As expected amazing quality from Mirafit. Solid piece of kit 	2023-09-20 23:00:00.000+00	14	1	Good kit 
46	Dan 	Outstanding product, well-built and promptly delivered. 	2022-09-29 23:00:00.000+00	14	1	Excellent product and service 
47	Milly 	Bigger than expected but great kit. 	2022-06-24 23:00:00.000+00	14	1	Great bit of kit 
48	Olly 	- 	2022-04-06 23:00:00.000+00	14	1	Excellent bit of kit 
49	Bal 	Great heavy duty 	2021-01-29 00:00:00.000+00	14	1	Brilliant well made 
50	anthony 	well made piece of kit, good solid chunky handles, wish id got one sooner 	2023-03-11 00:00:00.000+00	15	1	viking press 
51	Maria 	Really great attachment for landmine - I didn’t actually realise it would be as big as it is .. so a bit too big for me to use in my gym room but nonetheless is a great attachment if you’re able to use 	2023-03-10 00:00:00.000+00	15	1	Great attachment 
52	AC 	Ordered most of my home gym from Mirafit and all of their products have been very well made and high quality 	2023-01-08 00:00:00.000+00	15	1	Top quality 
53	Pete3 	A great productWorth buying definitely buy from this company again 	2022-06-04 23:00:00.000+00	15	1	A great product 
54	GuynoblePt 	Love this bit of kit and as always it’s quality at a great price from the guys at Mirafit 	2022-04-20 23:00:00.000+00	15	1	Very functional 
55	Flex 	Beast of a narrow grip attachment. Strong and secure, ideal for landmine related row workouts fitting snuggly around an Olympic bar. Can also be used for low row and pull downs on a cable machine. Essential item for back day. 	2023-08-30 23:00:00.000+00	16	1	Landmine narrow grip attachment 
56	Mr woods 	What a monster this is! Really well made, this will take some proper weight & hammer. Brilliant addition to my home gym, well recommend! 	2022-07-22 23:00:00.000+00	16	1	Monster 
57	Scot 	Another addition purchased with the landmine straight bar adding to a great workout in back day 	2022-06-01 23:00:00.000+00	16	1	Excellent 
58	Davey boy 	What can I say very good piece of kit for the Doris muscle plus the back. 	2022-03-07 00:00:00.000+00	16	1	Excellent product 
59	Conor 	Useful for bent over rows and other variations you can think of when used with the landmine. Good piece if kit 	2021-09-27 23:00:00.000+00	16	1	Great product 
60	JJ 	Love it, sturdy and versatile for many different exercise. Very happy 	2021-09-02 23:00:00.000+00	17	1	So good for stability and overhead pressing 
61	Barbill 	Perfect piece of equipment, sits out the way in the corner and is easy to assemble, overhead presses, t bar rows are just more natural with one of these.I did find mine moving a bit, but this was actually expected by me since it's sitting on a slippery hard laminated floor so i used some heavy duty double sided tape to stick the plate down and its solid. Well thought out piece of kit at a sensible price. 	2021-02-06 00:00:00.000+00	18	1	A must have for rowing etc. 
62	Dave 	Bought this with lat blaster bar and wow well built equipment and can do lots with this shoulders back legs etc great value. 	2020-12-21 00:00:00.000+00	18	1	Solid excellent kit 
63	Terry 	I wanted a landmine in my garage but don't own a power rack to fix it too, this is an ideal alternative due it its shape, weight and flexibility. Very reasonable price too. 	2020-11-29 00:00:00.000+00	18	1	Versatile 
64	Zammiefitness 	I bought this for home use to avoid damage to floors and walls whilst using my Olympic bar for rows and pressing exercises. It’s fairly light weight, easy to assemble and it’s a lot smoother to use than the ones I’ve used in gyms. 	2020-11-27 00:00:00.000+00	18	1	Happy 
833	Lianne 	Looks good, sturdy, fixings provided holds all the bars I have 	2022-07-18 23:00:00.000+00	284	1	Fab 
65	Kieron 	This along with the landline handle attachment are probably my best purchases from mirafit, great company & great equipment. 	2020-11-07 00:00:00.000+00	18	1	AMAZING 
66	Joesoap 	Excellent quality, easy to put together would highly recommended it 	2023-06-30 23:00:00.000+00	19	1	Fantastic 
67	Andy 	Excellent build quality and easy to attach to the M100 rack, only used a few times so far but very happy 	2023-03-27 23:00:00.000+00	19	1	Great addition 
68	Pete N 	Decent solid bit of kit, which easily attaches to the M100 rack.Easy to use and a really reasonably priced option. 	2023-01-17 00:00:00.000+00	19	1	Adds workout variety 
69	RJ 	Nicely manufactured. Easy to fit and a good addition to the rack 	2022-08-19 23:00:00.000+00	19	1	Good addition 
70	Jason 	Nice accessory and easy to fit 	2022-06-24 23:00:00.000+00	19	1	Nice 
71	Merrionite 	These are good, solid dip bars. Recommended. 	2023-09-12 23:00:00.000+00	20	1	Solid bars 
72	Em 	Great service from Mirafit; delivered early and with care. Well made and sturdy. I also bought width bar and it fits perfectly. A really effective piece of equipment. Recommended 	2023-02-28 00:00:00.000+00	20	1	Excellent 
73	siGuy 	Bought these dip bars after reading the reviews, and also researching on dip bars online with mirafit coming on top.I bought the orange ones and love them, easy to assemble and stable when doing dips.Thoroughly recommend them. 	2023-02-15 00:00:00.000+00	20	1	Does what it says on the tin 
74	Ginger 28 	Well made, Solid and strong these are. I'm so happy now that I can do dips at home. 	2023-02-12 00:00:00.000+00	20	1	Amazing product. 
75	WF 	Excellent product, sturdy weight, doesn’t wobble. Easy to build and can be stored neatly. 	2023-01-12 00:00:00.000+00	20	1	Dip Bars 
76	Hank 	Absolute game changer from lifting weights. Great solid bars 100% recommended for anyone trying to gain serious strength. 	2023-10-25 23:00:00.000+00	21	1	Solid 
77	Jugjit 	Learning to use the parallettes and a great tool to have to do l-sits and hand stand etc. Way more to learn but overall good for keeping healthy and flexbile. 	2023-06-03 23:00:00.000+00	21	1	Keeping flexible and gaining strength 
78	Good product 	I have been using the mini parallettes for a couple of weeks now and I've been very impressed. They add great variety to push-ups and dips, and I have also been using them for core training. 	2023-05-31 23:00:00.000+00	21	1	MIRAFIT MINI PARALLETTES 
79	dumbum 	YES.Easy to assemble, great build quality, sturdy as possible, perfect bar thickness with the grips; you'll be doing planches in no time!Portability can be a pain, like trying to fit through a very narrow gym door with a weighted vest in your bag; if an issue, go for smaller ones.Highly recommended! 	2023-05-29 23:00:00.000+00	21	1	Should you buy them? 
80	VASILII 	Really good quality but the only draw back is that they are a little large for mini parralletes 	2023-05-14 23:00:00.000+00	21	1	AMAZING PRODUCT 
81	Odin 	Looked at a few different makes before buying these but wasn't sure. Decided on mirafit due to the quality of there products and I wasn't disappointed. Handle my 105kg no problem , really happy with them. Watch the youtube video before assembly and away you go. 	2023-09-18 23:00:00.000+00	22	1	Sturdy stuff 
82	Aura Fitness 	Considering the price is very competitive with other brands, I found there was a much higher quality in the finish and stability of these bars. If you like your body weight/gymnastic exercises as part of your routine, this is such a simple investment. A great addition to any home gym set up. 	2023-07-20 23:00:00.000+00	22	1	Excellent quality apparatus 
83	Karen 	These are great for doing dips and bodyweight skills. Sturdy enough for all the movements I've tried including upside down calisthenics. The addition of the extension bar gives a greater stability and allows for easy adjustment of the width. 	2023-03-25 00:00:00.000+00	22	1	Stable and well made 
84	Stan 	Sturdy well made paralettes at a competitive price. Usual well made Mirafit quality 	2022-08-17 23:00:00.000+00	22	1	Great quality! 
85	Alex 	Great and sturdy product. I was slightly worried about the height given that I am 6ft 5” but these are perfect.Easy to construct, I made sure not to over tighten the screws after reading that the hex heads were prone to rounding so no problems on that front.I would definitely recommend	2021-11-26 00:00:00.000+00	22	1	Top drawer 
86	Robbo77 	I've bought several items from Mirafit for my home gym and everytime they don't let me down on quality and delivery. All good ???? 	2023-08-17 23:00:00.000+00	23	1	Always Good 
87	Cali 	Great price and came exactly as expected. Delivery was quick too.All in all a great bit of kit. Easy to assemble. Comes with Alan keys.Very sturdy when using. No rattling or wobbles.I would highly recommend. 	2023-07-01 23:00:00.000+00	23	1	Very good indeed. 
88	Clarence 	Great price for what you getThey are very strong and if put together right they won’t wobbleRecently transitioning into mainly bodyweight workouts and these are amazing and don’t require much room to use. Makes working out at home far more enjoyable. Would be nice if they brought out a pull up bar which didn’t need a wall mount to complete the set 	2023-05-18 23:00:00.000+00	23	1	Great for starting bodyweight training 
89	WeenyArmsBuffLegs 	These are really well made and feel solid. The grips are good and the bars are easily stored when you aren't using them. I'm really happy I bought these and they arrived sooner than expected too. 	2022-06-25 23:00:00.000+00	23	1	These are a great bit of kit 
90	Quality item 	Delivered ahead of schedule, well made and fits perfectly. Genuinely adds to the effectiveness of the dip bars by through stability and accuracy of spacing. Recommend Mirafit for sure; excellent service 	2023-02-23 00:00:00.000+00	24	1	Well made, sturdy, great service 
91	DrSpark 	Great way to make your dip bars more stable to do some more adventurous exercises 	2022-02-19 00:00:00.000+00	24	1	Nice add on 
92	Charlie 	Better than I expected. Great value bundle! 	2023-09-12 23:00:00.000+00	26	1	Great bundle 
93	R&J 	Thoroughly pleased with the rack. High quality throughout. R 	2023-07-22 23:00:00.000+00	26	1	Excellent. 
94	Mandy 	I don't normally leave reviews but the kit is awesome, easy to assemble, great to use, looks fab. 	2023-07-18 23:00:00.000+00	26	1	Awesome 
155	Rich 	An excellent an mat, quick delivery and really great quality product at an affordable price. Spot on. 	2021-01-27 00:00:00.000+00	54	1	Excellent product 
95	Dunks 	Really good quality, package deal with Barbell and bumbers well worth it. Frame easy to assemble, took about 15mins making sure I followed instructions and not rush it.Delivery courier kept me up to date and helpful to drop where requested. 	2023-05-22 23:00:00.000+00	26	1	Great quality kit 
96	Railside 	Great quality item for the money compared to some other brands, and looks good too.Delivery charges are mega low and delivery is quick.What’s not to like 	2023-04-23 23:00:00.000+00	26	1	Impressed 
97	Becks 	Can't go wrong for the price... excellent bit of kit!! 	2023-09-15 23:00:00.000+00	28	1	M100 power rack 
98	KB 	Love this equipment, used by myself and my son everyday. High quality equipment, easy to assemble, very robust.....great service, excellent delivery comms......very impressed !!! 	2023-08-09 23:00:00.000+00	28	1	Great equipment, great service ! 
99	Mike 	Excellent kit 	2022-09-27 23:00:00.000+00	28	1	Great rack 
100	Arron Barber 	Absolutely delighted with this product better than anticipated.Build quality exceptional and looks great.In terms of value for money Mirafit are without doubt the best on the market.Fast delivery and very informative regards timeframe... Highly recommended. 	2022-08-27 23:00:00.000+00	28	1	M100 Power Rack and Cable System 
101	Lianne 	Sturdy, well built, perfect bit of kit. Love the orange colour. 	2022-07-18 23:00:00.000+00	28	1	Fab 
102	Steve 	I have been waiting to get these for a while. I had been using the Mirafit M3 Safety Spotters, but they do not go the full width of the inside of the rack.As all M3 stuff they are very well built and definitely an upgrade on the pin and pipe spotters that come with the rack. 	2022-12-15 00:00:00.000+00	29	1	The wait is over 
103	Norris 	Just like the rack itself, really good quality and confident they'll save me if I bail out. Can be a bit fiddly to align one end with the other with the westside spacing if you're in a hurry. 	2022-05-10 23:00:00.000+00	29	1	Great quality, bit fiddly 
104	B weddy 	Found myself racking the bar uneven and it being a pain to centre again when it's loaded, this is a pretty good fix for it and it's a good price too :) 	2023-05-15 23:00:00.000+00	30	1	Handy attachment 
105	Dave BW 	Bought these on a whim rather than the sandwich cups, and the only thing I regret is that the M3 doesn't come with these in the first place! Superb idea - I'll be getting another set.Dunno about longevity but it terms of practicality/usage (i.e. why you buy them), they are great. 	2022-04-02 23:00:00.000+00	30	1	Ideal 
106	Ross 	These are perfect for shuffling the bar so it's centered properly before a lift. I don't use the safety knobs as they're a pain to add and remove and to be fair they don't sway that much if at all without them. Again really high quality from Mirafit and very happy with these. 	2022-03-15 00:00:00.000+00	30	1	Just what I needed 
107	Denz 	Brilliant upgrade of the original pull up bar for different variations. It’s also higher than the original pull up bar which works much better for me with my height. 	2023-08-09 23:00:00.000+00	36	1	Great improvement on supplied pull up bar 
108	Yoz 	Great upgrade from the standard M3 pull up bar. 	2023-01-24 00:00:00.000+00	36	1	M3 multi grip pull up bar. 
109	Sean 	This is a great upgrade to the standard straight bar that comes with the M3 rack 	2022-12-05 00:00:00.000+00	36	1	Pull up bar 
110	cathy 	Ordered to provide more pull up options on the M3 rack. Really pleased. As always, efficient delivery service. 	2022-03-11 00:00:00.000+00	36	1	pull up bar 
111	No name Nick. 	Ordered for my son to fit some racks that he already had. He seems to like it so jobs a good one. Ordered and arrived several days later which is great considering it was Christmas and the fact that the item weighed quite a lot. Good service and product. 	2022-01-05 00:00:00.000+00	36	1	Review of above 
112	Ferrari93 	Fits really well on the m200 and keeps the gym nice and tidy. A must have add on. 	2023-08-26 23:00:00.000+00	37	1	Great for a tidy gym 
113	Dan 	Well made ,great way to store bars and keep gym tidy 	2022-11-06 00:00:00.000+00	37	1	Barbell holders 
114	Alex 	With a small garage gym setup there aren't many options for barbell storage. I wanted to avoid a wall mounted holder, and this pair of rack mounted holders worked out perfectly. They're simple and substantial, can recommend. 	2022-06-01 23:00:00.000+00	37	1	Do the job perfectly. 
115	Jonesy 	I fixed this to a wooden wall so was extra careful with the fixing, but, this is an awesome quality piece of kit and frankly the best quality kit ive got in my gym.I weigh 120kg and it holds me absolutely no problem.There is high quality knurling to the hand holds for extra grip and can easily accommodate a resistance band (which im using whilst I get stronger) 	2023-07-22 23:00:00.000+00	39	1	Awesome bit of kit 
116	Russ 	It's sound, and suitable for it's purpose.I used the bolts provided and fit it to an internal brick wall. It's holding my weight (93kgs / 14st 6lbs) no problem at all. 	2023-01-18 00:00:00.000+00	39	1	Very Good Quality 
117	Rory 	Amazing pull up bar thats solid and very easy to install. 	2022-09-16 23:00:00.000+00	39	1	Great product 
118	Mr Apple 	There are plenty of cheaper alternatives out there but I like the build quality of Mirafit items. I have bought a few over the years and they always last, so happy to keep to the same brand. Very pleased with the pull up bar, I had some extra studs put in when the wall was being built so confident on it taking my weight (79kg). I actually used the supplied bolts which may not be designed for wood but seem to have done the trick... fingers crossed. 	2022-08-17 23:00:00.000+00	39	1	Excellent build quality 
119	Matt 	Really like this pull up bar, was a bit nervous of mounting it onto a timber stud wall but with buying some different fixings to the ones it come with it isn’t going anywhere. Highly recommend due to build quality and various grips you can use. 	2022-07-16 23:00:00.000+00	39	1	Great pull up bar 
120	Paul 	Solid build , feels strong and easy to put up ...use this daily now . All black looks great . 	2023-07-30 23:00:00.000+00	40	1	Great product 
121	Stonecoldsd 	Excellent quality,very well made,easy to install 	2023-06-19 23:00:00.000+00	40	1	Wall mounted pull up bar 
122	Adam 	Excellent product made of good quality at a reasonable price. The fixings that came with it would of probably been fine but i decided to resin in some rods for piece of mind and it’s very sturdy. I’ll definitely be ordering some more gear from these guys. I’m hoping to get an outdoor one next time that can cope with the harsh weather , sort it out mirafit! 	2022-08-26 23:00:00.000+00	40	1	Love it! 
123	Gary 	Some small spots of rust around some welds which needed touching up.I resin bonded some M10 Rawlplug studs into the wall rather than using the supplied fittings as my garage has weak thermalite blocks.Extremely solid with absolutely no movement. 	2022-08-19 23:00:00.000+00	40	1	Solid 
124	Knoxy 	Well made and just what I needed to do my pull ups and hanging upside down. 	2022-08-19 23:00:00.000+00	40	1	Just what I needed 
125	Dave 	Very fast delivery and a great piece of kit. It's very well made and I'd highly recommend it. 	2021-03-26 00:00:00.000+00	41	1	Great Chinning Bar 
126	Gos 	Very sturdy, well worth money easy to fix 	2021-03-21 00:00:00.000+00	41	1	Excellent 
127	Annabelle 	Couldn’t of asked for a better bit of kit. Easy to put up compact and sturdy. 	2021-02-22 00:00:00.000+00	41	1	Perfect 
128	Steve 	Exactly as described and great for home work out. Also great to hook up resistant bands with Mirafit straight bar and carabiners to offer even greater choice of exercises. Highly recommend. 	2020-11-27 00:00:00.000+00	41	1	Great piece of kit 
129	Dan N 	This pull up bar is exactly what I needed. It's super solid, sturdy, and has all the grip positions you would need. Very happy with my purchase. 	2020-11-10 00:00:00.000+00	41	1	Great Sturdy Bar 
130	PESTcrEEper 	Was a great buy. Well worth the money, and good strong craftsmanship, not like some cheap tat from Amazon. 	2021-01-30 00:00:00.000+00	42	1	Great Product 
131	Allin 	Easy use, high quality 	2022-12-14 00:00:00.000+00	44	1	Great product 
132	Samairb 	I love this. The quality is outstanding, super fun 	2022-02-18 00:00:00.000+00	44	1	Peg board 
133	Haggis 	Love the board, any suggestions for the pegs? Don’t appear as good quality and rip my calascs abit. Thinking chalk or something? 	2022-08-18 23:00:00.000+00	44	0.8	Pretty good 
134	Claire 	Really robust, very high quality product at a very reasonable price. Highly recommended 	2023-10-14 23:00:00.000+00	48	1	Excellent quality product 
135	MC 	Very happy with the purchase. Good quality product that feels very robust. Competitive pricing as well as speedy despatch. 	2022-08-31 23:00:00.000+00	48	1	Great Product 
136	Arc 	Like the above review I got this bar for my M220 rack, you just need smaller bolts. 	2022-02-12 00:00:00.000+00	49	1	Fits M220 rack 
137	Karl 	I wanted this for my M220 rack, couldnt get confirmation it would fit anywhere - well it does but with smaller bolts, adds a bit of stability as well as somewhere to do some low level ring work and my son to do pull ups! 	2021-08-10 23:00:00.000+00	49	1	Good 
138	Lee 	Very good sit up bench makes your abs burn, quick delivery would definitely order something else from mirafit 	2023-05-18 23:00:00.000+00	50	1	Sit up bench 
139	Paul 	Never expect anything less than great quality equipment from Mirafit & that includes the sit up bench.Love it 	2023-04-03 23:00:00.000+00	50	1	Love Mirafit 
140	Shelton 	I already owned a sit up bench but wanted a more professional one with more of an incline. Then I found this baby. Fast delivery and good price, I could not ask for more. The 12 incline settings are fantastic. Easy to put together too. I don’t always leave reviews but mirafit products are ace in my experience! 	2023-03-10 00:00:00.000+00	50	1	The bomb! 
141	Zig 	Excellent quality really strong bit of kit.loads of adjustments 	2023-01-02 00:00:00.000+00	50	1	Great bench 
142	Al 	A great bit of kit, very strong and great value 	2022-11-10 00:00:00.000+00	50	1	Very sturdy 
143	Annaleen Venter 	I absolutely love the GHD! It is very sturdy. I use it all the time for different exercises!I ABSOLUTELY LOVE IT!!100% recommend it if you love to do glute, hamstring and core exercises! It is incredible 	2023-01-23 00:00:00.000+00	51	1	Amazing 
144	Daz 	Excellent service. The GHD arrived promptly and well packaged so no damage or imperfections. The GHD itself is exactly what I needed to strength my weak lower back. I did buy some black caps ( at little extra cost) to cover the bolt heads but that’s just my OCD. The assembly was very straight forward with simple instructions. Overall really impressed. 	2022-11-08 00:00:00.000+00	51	1	Great piece of kit 
145	Gareth 	Good piece of kit, I have mine attached to the bottom of my Cage (fits well with a bit to spare). If I was super critical the bars/pads could do with being a bit longer but for a tenner this is a bargain.As always, so glad I found this company, top class! 	2022-11-21 00:00:00.000+00	52	1	good purchase 
146	Langy 	Great bit of kit you can take with you when on your travels. Build quality is really good. I bought sit up board on the strength of the sit up bar. Quality equipment! 	2022-03-05 00:00:00.000+00	52	1	Excellent 
147	Pav 	It’s larger than I expected but it’s comfy and supports my back . Great purchase. 	2022-10-10 23:00:00.000+00	53	1	Large and comfortable 
148	Matt 	Great addition to the home gym, looks after your lower back. Well made. 	2022-06-28 23:00:00.000+00	53	1	Good bit of kit 
149	Harry 	Very helpful if you have a bad back and want to continue working out. Has a solid amount of cushion and can be tucked away. 	2022-05-30 23:00:00.000+00	53	1	Helpful 
150	Trev 	As well as good support for sit up/crunch I find this excellent for back extender exercises. Lifts you off the ground a little further to give bigger range of movement. 	2021-12-07 00:00:00.000+00	53	1	Good support 
151	Belly Bear 	I brought this just to save wear and tear on my lower back, I usually used a folded up towel but this tends to move.I was pleasently surprised when I discovered this does more than just protect your back, it actually works and stretches your abbs more due to the curvature of the matt, following the natural line of your back.This has definitely made my abbs pop visually alongside the more important benefits of health and fitness.Best bit of kit I've brought for the money to function ratio 	2021-08-31 23:00:00.000+00	53	1	Better than expected 
152	Luke 	Great product as always from Mira Fit. Doesnt slip. Excellent shape for sit ups and floor press. Excellent price and quick delivery. 	2021-02-09 00:00:00.000+00	54	1	Great product 
153	Bernie 	Just what I was looking for. Excellent quality, great size, quick delivery. Good firmness, not rock hard but not super squishy. Have been using for HSPU and sit ups and great for both. 	2021-02-04 00:00:00.000+00	54	1	Great Product 
154	Becka 	Really quick service, great products and good value 	2021-01-30 00:00:00.000+00	54	1	Great service and products 
156	LMP 	More than happy with the ab mat. It's good quality and very firm. Good value for money and quick delivery, as always from Mirafit. Thank you. 	2020-12-28 00:00:00.000+00	54	1	Great product 
157	cam96ell 	Really happy with it. Solid and easy to build ???????? 	2023-09-23 23:00:00.000+00	55	1	Solid piece of kit 
158	Andy 	Easy to put together, feels really solid, looks good and a decent price. Can’t fault it. 	2023-09-11 23:00:00.000+00	55	1	Quality rack at good price 
159	Ewan 	Great product, no flaws, easy to set up, even looks good too. If you don't put one of the plastic squares over the orange tube the paint will get scratched off when adjusting the width of the rack. 	2023-09-10 23:00:00.000+00	55	1	Very good 
160	Chris 	Easy to assemble and use feels strong 	2023-05-21 23:00:00.000+00	55	1	Good rack 
161	G 	Quick to assemble. If you warm up the rubber feet with a hairdryer first, it makes them very easy to fit. Perfect for small spaces due to adjustable width. Sufficient barbell rack and spotter arm intervals. On receipt there were a couple of scratches and chips on some of the posts, probably due to the delivery process, but these were purely cosmetic and will not be noticed. Overall very sturdy and feels very safe. Good quality and value for money. 	2023-05-10 23:00:00.000+00	55	1	Excellent 
162	Ash 	This rack is perfect for a home gym, top quality and I just like others I also bought the m3 fat grip pull up bar to add as extra stability and also to be able to do pull-ups and muscle ups with. Make sure you get 4x m10x100mm bolts and not 80mm as they are to small. 	2023-08-13 23:00:00.000+00	56	1	Excellent all round 
163	Antony 	Been using this rack for a good 2/3years and it solid and fit well in my spare room as it the only place in my flat I can have a home it very well built I went for the orange colour but noticed when removing spotters arms and j cups a top layer of the powered coated can still fall off but apart from that well worth the money and I have just it more than any gym membership I have ever had 	2023-08-11 23:00:00.000+00	56	1	Happy 
164	Malleus 	Brilliant rack especially considering the cost. Very sturdy and easily assembled and holds a good amount of weight, plus it looks great 	2023-04-30 23:00:00.000+00	56	1	Great Rack 
165	Steve 	Great product at a great price. Surprised at how sturdy the rack is for this price point. No issues what so ever. Great addition to my garage gym. 	2023-03-19 00:00:00.000+00	56	1	Great rack. 
166	Jimbob 	Well packaged, prompt delivery, easy to assemble, sturdy (more so than existing one). Good value for money, would recommend. 	2023-03-09 00:00:00.000+00	56	1	Excellent 
167	P 	Sturdy, does what you want. 	2023-04-16 23:00:00.000+00	57	1	Solid 
168	Tom 	Happy with my purchase, good quality and does exactly what I wanted. 	2023-03-14 00:00:00.000+00	57	1	Good Combo Rack 
169	Fiona 	I was pleased with the speed of delivery and conscientious packaging. The squat rack is great, good quality and easy to assemble. 	2023-03-13 00:00:00.000+00	57	1	Mirafit M230 squat and bench press rack 
170	D Att 	Rock solid, easy to put together, feels and looks a lot more expensive than it actually is 	2023-02-22 00:00:00.000+00	57	1	Solid 
171	david 	Seems solid but as yet I have not really pushed it near it's limit weight wise. Personally I would prefer adjustment pins that feed right through both sides of the bar rests and outer posts but I am sure the system used for these will be man enough for the job. 	2022-10-12 23:00:00.000+00	57	1	Nice rack 
172	James 	These really are excellent, as soon as you open the box and see them you know you've bought quality. Really thick heavy metal, absolutely solid under the fully loaded bar, so versatile for positioning for small spaces. If you are really pressed for space as I was, you can easily in a couple of minutes take off the stands from the base for easier storage. So many different heights you can have them at. The perfect addition to any home gym! 	2023-08-01 23:00:00.000+00	58	1	Super Quality Stands! 
173	DJ 	Been looking to upgrade my home gym rack for a while and since I'm very limited on space I had limited options so I decided to get this one, and so glad I did. This thing is so ridiculously sturdy and well built it really comes at a bargain. Had been using a £60 amazon thing for the longest time so I'd been used to having a wobbly set up, but this thing doesn't move at all. Absolutely amazing! Only thing I'd say is have two people for the setup, no way I could've done it on my own. 	2023-07-17 23:00:00.000+00	58	1	Excellent 
174	Arran 	Sturdier than they look and really easy to put together. 100% recommend. 	2023-06-27 23:00:00.000+00	58	1	Top product 
175	MttWlls 	Very sturdy - inspire real confidence. Well made and easy to assemble. Great product, would recommend. 	2023-03-20 00:00:00.000+00	58	1	Great Squat Stands 
176	John 	Perfect. Heavy enough to hold the weight but light enough to be able to move around. Flexibility to change heights so it works for squats and bench press. Paid a premium vs other options due to the brand/reviews and glad I did it. Recommended. 	2022-12-11 00:00:00.000+00	58	1	Really good 
177	Luc 	I love this, I’m a regular at Mirafit but was yet to take the plunge on something bigger. It’s exactly what I was looking for, superb quality, excellent service as always. A great addition to the garage gym. 	2023-05-05 23:00:00.000+00	60	1	Love it. 
178	Neil 	Excellent quality and delivery times. great value. 	2023-05-05 23:00:00.000+00	60	1	Excellent quality & quick delivery 
179	Andrew 	Bought this for the garage gym, quick delivery and high quality! Really good value for money 	2022-05-24 23:00:00.000+00	60	1	Perfect for garage gym 
180	Stacey 	This is a great bundle if you are relatively new to home gyming. I would advise to get some pt lessons first to demonstrate correct lifting form but after that, its a great job. It has plenty of room for growth and additional plates can be added when required. Love th 	2022-05-23 23:00:00.000+00	60	1	Great bundle for starters 
181	Ross 	I’m loving my morning work outs with this set and the land mine kit that I bought together.Squat work for legs and back is really helping me and my golf swing ⛳️ 	2022-03-16 00:00:00.000+00	60	1	Loving this set with the landmine kit 
182	Silverback 	Very good for a wide variety of gym exercises 	2023-08-23 23:00:00.000+00	61	1	Brilliant 
183	James 	This bench is ideal for our members. Great design, easy to use, and overall we’re thrilled with it. Highly recommended. 	2023-05-06 23:00:00.000+00	61	1	Awesome product 
865	matt 	Great tee, Great fit and nice material. 	2023-02-05 00:00:00.000+00	297	1	m 
184	Jas 	I bought this to add box squats to my routine. It's stable and sturdy as many have said. I would recommend taking some time to find the right seat heights for the exercises you want to use it for. The height can be adjusted in small increments and shows how well it has been designed. 	2023-03-14 00:00:00.000+00	61	1	Great design and great value for money 
185	Jay 	Very useful addition to my home gym equipment. Allows me to do exercises such as Barbell hip thrusts and box squats with a nice solid comfortable position and it’s not to large so can be stored away comfortably to. 	2023-03-11 00:00:00.000+00	61	1	Sturdy and compact 
186	Chuck 	Great robust piece of kit 	2023-02-17 00:00:00.000+00	61	1	Excellent 
187	Vega 	I’m tall and over 100kg, this bench does move at all when doing any exercise on it even tri dips. Pad is comfortable for everything I use it for although I’m not doing heavy bench press but even if I was I still think it would be ok.Only issue was one end of the pad was a bit mouldy when I unpacked it, wiped off no issue and everything else was sturdy and extremely well built. Highly recommended but of kit. 	2023-03-28 23:00:00.000+00	62	1	Solid bit of kit 
188	D Att 	Solid and sturdy bench, easy to the put together on your own, feels like it will last a very long time and super trippy pad to keep you locked in place 	2023-02-17 00:00:00.000+00	62	1	Bench 
189	nickcl 	I thought this was an excellent bench. Pleased with my purchase. Some benches do not measure up (they are too narrow/small) but this is perfect and solid. 	2023-01-09 00:00:00.000+00	62	1	Really sturdy 
190	Lucy 	My new Mirafit bench looks great in my gym. It seems to be a quality product which was easy to assemble and I enjoy using it. 	2022-09-16 23:00:00.000+00	62	1	Looks great, very sturdy and easy to assemble 
191	T 	Looking for that ultimate comfort?Bench your way to a bigger chest with this amazing flat couch, also doubles up as work from home office chair.Keep it up Mira! 	2022-06-01 23:00:00.000+00	62	1	The only way to chill 
192	Kirsteen 	Title says it all. Great quality and does exactly as it should. 	2023-04-13 23:00:00.000+00	63	1	Perfect 
193	Lewis 	This is a great bundle. Bench took a bit of faffing to set up but easy enough. Definitely need an adjustable spanner or two though.When built, the bench seems solid. I've used 30k dumbbells and all seems good so far. 	2023-02-28 00:00:00.000+00	63	1	Great bench 
194	Coldem 	Had other benches before ,but were not as good . Quality of the bench is great , supportive and sturdy. Wasted so much money on other benches, very happy with the purchase. The hex weights are great ,as I was looking to up the resistance for shoulder isolation exercises. 5 star , will definitely be a returning customer. 	2022-05-14 23:00:00.000+00	63	1	Super bundle . 
195	Max 	Excellent service, excellent product 	2023-08-15 23:00:00.000+00	64	1	Great 
196	D 	I received the product very quickly and it was in perfect condition. Didn’t take long to put together at all.Sturdy and looks nice too! Excellent addition to my home gym 	2023-06-23 23:00:00.000+00	64	1	Excellent! 
197	Chaz 	very pleased with this, well priced step up from the adjustable pad types. good width on the pad and very sturdy. Good quality finish. Only negatives, could have more than one set of catchers. 	2022-12-16 00:00:00.000+00	64	0.8	Great build quality and good ergonomic feel 
198	Jules 	A good quality preacher bench which took 30 min to put tog very easy . Does the job .only negative is the tripod design an make it unstable when getting up if you aren’t careful but you do learn not to put your weight on one side as standing. 	2022-12-01 00:00:00.000+00	64	0.8	Good quality 
199	Dan 	I was looking for a reasonably priced bench with an open front to be used with a multigym, and this fitted the bill perfectly.Very good quality product - especially at this price point. Easy to put together.Delivery was quick. I would certainly recommend it. 	2023-08-26 23:00:00.000+00	65	1	Preacher Curl Bench 
200	Len Webb 	The best benches and equipment you can buy for the money.Excellent quality, bordering on commercial. 	2022-09-27 23:00:00.000+00	65	1	Preachers curl bench 
201	Gazza 	As always Mirafit service has been excellent. Extremely pleased with quality of the preacher bench. 5 stars 	2022-06-11 23:00:00.000+00	65	1	Perfect as always 
202	SGtheGhost85 	Good strong preacher curl bench! The first box came with damage I couldn’t fit the armrest because the screw holes were dinted but I give 5 stars because mirafit staff returned my emails within 15 min every time and sorted a swap out within 48 hour. 	2022-02-21 00:00:00.000+00	65	1	Good strong bench at good price 
203	Dan 	Great bench ,good value and a nice addition to our home gym .Dan 	2022-01-21 00:00:00.000+00	65	1	Preacher curl bench 
204	Dominic 	Really pleased with this bench. Easy to put together and sturdy build quality. Folding and storing it is super straightforward which is ideal for smaller spaces. Would certainly recommend this item. 	2023-10-19 23:00:00.000+00	66	1	Great quality and value 
205	James 	I was actually hesitant about buying this initially because of the great price... Fear not though, this is excellent quality! Far superior than the other junk you'd get off Amazon or such like for the same price. Solid construction, very stable when under the bar, good for small spaces, portable, foldable... What more could you want. Buy it :) 	2023-08-01 23:00:00.000+00	66	1	Perfect Portable Bench 
206	Toby 	Strong and sturdy bench with plenty of adjustment for everyday workouts. Doesn't creak or wobble. Just what I wanted. 	2023-07-06 23:00:00.000+00	66	1	Brilliant bit of kit 
207	Mr G 	A lightweight bench that easily folds away and is comfortable to use. Perfect. 	2023-07-02 23:00:00.000+00	66	1	Very Good 
208	Sjames 	Lovely bench feels very secure,great service prompt delivery 	2023-04-21 23:00:00.000+00	66	1	Bench 
209	Ironrich 	Perfect for the home gym, can't fault and a decent price. 	2023-08-27 23:00:00.000+00	67	1	Good bench at a decent price 
210	Dave 	Nice study bench my 6ft 2 Son loves it 	2023-05-22 23:00:00.000+00	67	1	Top Class Bench 
211	Hakki 	This is a great bench. very sturdy and easiy to put together. i highly recommend 	2023-05-05 23:00:00.000+00	67	1	Great bench 
237	Rich 	This platform is so good. Professional standard and I've already bounced 260kg off it and it just absorbs the shock and sound wonderfully. And compared to other brands the value for money is probably unbeatable. I am a Mirafit fan boy however 	2023-09-14 23:00:00.000+00	76	1	Another quality piece of kit 
212	Ckt73 	Been looking for a bench like this for a while, I've ordered from mirafit before and was very happy with item and the quality, so decided to order said products, what can I say worth every pound note .Build quality is very good and sturdy and service was on point if your looking for an adjustable work bench that doesn't break the bank ,you can't go wrong with this one ,would definitely recommend.Thank you Mirafit. 	2023-02-15 00:00:00.000+00	67	1	Worth every pound note. 
213	Hutchie 	Amazing bench for the same money would be very hard to find 1 as good as this. 1 thing to note though and the reason I'm leaving this review is If you have a small space double check the measurements the length in particular its the longest bench I have ever seen lol 	2023-02-03 00:00:00.000+00	67	1	Great quality 
214	Paddy 	This bench does everything and at a really reasonable price. It’s easy to put together and it has all the angles. Looks good and it’s well made. The best bit for me is it’s compact and light so ideal for my home gym setup. Very impressive indeed. 	2023-10-15 23:00:00.000+00	68	1	The best bench for home gyms 
215	Simon 	Good quality, sturdy, at the right height and easy to adjust.Top drawer 	2023-09-15 23:00:00.000+00	68	1	Great bench 
216	SR 	Bought after lots of research. Not disappointed. Easy assembly for one person, very solid sturdy bench. Really great bench 	2023-09-13 23:00:00.000+00	68	1	Great Incline bench 
217	Scotty 	Top quality bench I would recommend to everyone very sturdy. It can take my weight plus a 100kg worth of weights so I can't complain. Looks the part also 	2023-09-13 23:00:00.000+00	68	1	Brilliant 
218	Flex 	I got 99 problems but a bench aint one.Well built, sleek design, good quality and will support you with whatever weight you are pushing. Feels sturdy and has a range of angle adjustments you can make based on your flat, incline, or upright preference.Only point to improve could be if it lowered to a decline angle but you can make that work in other ways, if required. 5* bench. 	2023-08-30 23:00:00.000+00	68	1	M150 Weight Bench 
219	Kibs 	This bench is really high quality, the padding is very satisfying for some reason. If your comfortable doing things on a incline bench then possibly this is not needed but this bench makes things so much easier and productive for me personally, much easier for using with a cable machine than a normal bench, it allows me to person exercises with more ease = single arm pull downs, cable flys, any cable behind the back movements, allows more room for dumbell movements also. very pleased. 	2023-08-01 23:00:00.000+00	69	1	Great bench 
220	Sazbadger 	Fantastic bench for my home gym. Sturdy and high quality. The material is nice and non slippy and it’s adjusts quickly. Top quality. 	2023-07-10 23:00:00.000+00	70	1	Brilliant bench 
221	Martin R 	Very solid construction and comfortable. Non slip material is very grippy and secure. 	2023-06-18 23:00:00.000+00	70	1	Very sturdy 
222	ChrisD 	Good quality item, solid as a rock and does exactly what it’s supposed to 	2023-04-07 23:00:00.000+00	70	1	Mirafit weight Bench 
223	Edderz 	Bench arrived today easy to put together , great quality and solid will last for years 	2023-03-24 00:00:00.000+00	70	1	Excellent 
224	Sean 	best bench I have owned...well worth the price 	2023-02-22 00:00:00.000+00	70	1	home gym 
225	Eddiesson03 	Excellent quality with multiple uses in addition to technique work. 	2022-12-22 00:00:00.000+00	71	1	Great product 
226	Peter 	Good quality tib trainer, feels good in use and gives you a decent pump on the tibs. A good addition to any gym. 	2023-06-14 23:00:00.000+00	72	1	It works. 
227	Daniel 	Really high quality, very well made and extremely strong, this thing would survive a direct nuclear strike. Very impressed. 	2023-08-06 23:00:00.000+00	73	1	High quality 
228	Broseph 	This is super helpful when working on deadlifts in a small space. Takes the fuss out of loading the bar. Allows you to focus on the important stuff.And it's probably indestructible. Nice one mirafit. 	2023-07-27 23:00:00.000+00	73	1	Ergonomic bliss 
229	RAW 	Regardless if you are your new or seasoned lifter, if you deadlift heavy, you need this!Save your strength for extra sets rather than fumbling changing plates from the ground. This make life so easy, wish I would have invested in this years ago! 	2023-01-31 00:00:00.000+00	73	1	Don’t hesitate on this purchase 
230	Martin 	I pondered buying this for a while, but really glad I did, makes deadlifting weight changes far quicker and removes the risk of putting my back out trying to yank plates off whilst against the floor. it is very quick and easy to use, you can Jack the weights up in less than 5 seconds 	2023-01-24 00:00:00.000+00	73	1	Big help 
231	BriPo 	Good Jack works well with my shrug bar as well as barbell. 	2023-01-05 00:00:00.000+00	73	1	Works well with shrug bar ( trap bar) 
232	Chalky 	Very pleased with this barbell jack. Like the other Mirafit products I have purchased it is well made and sturdy. Have jacked a 200kg bar with it no problem, and will easily jack a heavier one. Very reasonable price, or you could pay over a grand for an Eleiko jack which will do the same thing. Delivered promptly as usual. 	2022-12-16 00:00:00.000+00	74	1	Excellent product 
233	Adz 	Quick search for a deadlift jack had this as the cheapest so I took a punt.Arrived quickly although the box was a bit battered.All was intact inside and the quality is decent. No dodgy welds and good paint finish.Pops 300kg up off the floor no problems, nylon pads move a bit but can't argue for the cost 	2022-12-03 00:00:00.000+00	74	1	Good buy 
234	James 	Fantastic product - won’t get better for the price anywhere 	2022-11-10 00:00:00.000+00	74	1	10/10 
235	Peter 	I have had these for around a month now and found them to be of high quality. They feel strong and don't deform when weights are placed on them. I use the 6" version for simulating rack pull deadlifts of which they have performed with no issues. The stitching and material is strong and looks like it will last a considerable time. The velcro used to stabilise multiple blocks when stacked is very strong. No issues recommending this product if you are in the market for blocks. 	2021-02-01 00:00:00.000+00	75	1	So far so good! 
236	mttldhm 	Really great product - specifically sought them out not only as a set of jerk/lifting boxes but also more general plyo box use in a space confined home gym. Nothing else on the market compares 	2020-12-06 00:00:00.000+00	75	1	Great product - delighted with them 
238	paul 	Really good, easy to put together.Would recommend to anyone.	2023-02-06 00:00:00.000+00	76	1	great 
239	Littlea34 	Perfect for what I wanted for my basement gym, order was handled really well, great service and communication and arrived quickly, thank you! Would definitely recommend 	2020-11-26 00:00:00.000+00	76	1	Great 
240	Tman 	Been doing weighted dips with both chains hanging from my neck. They look big and will get you big. High quality metal. 	2023-10-20 23:00:00.000+00	79	1	Big, thick and intimidating chains! 
241	Anndy 	Love the chains. Never used them before. They add weight and alter the balance of the bar. Quality goods and speedy delivery. Well pleased 	2023-05-25 23:00:00.000+00	79	1	Excellent piece of kit 
242	BIG MAC 	Looks massive feels massive it is massive. Love these chains i got the 32kg set well worth it looks mint in my gym. 	2022-07-16 23:00:00.000+00	79	1	Massive 
243	Sean 	Brilliant product at a reasonable price also fast shipping 	2022-01-07 00:00:00.000+00	79	1	16kg chains 
244	Euan 	I bought 16kg pair of chains, just as described on Mirafit website - great addition to gym, just watch your fingers when you pick them up for first time ;) As usual great service and delivery from Mirafit 	2022-01-07 00:00:00.000+00	79	1	Clanging and a banging - great 
245	Gav 	Does what it says on the tin. Strong piece of equipment as always. Increases mobility in the hips. You'll be doing Jeanne Claude Van damme splits in no time. 	2023-08-23 23:00:00.000+00	80	1	Excellent 
246	Karla 	Really enjoy using this. This really shows where you are tight and stretches the upper hamstring/flute/ adductors. I love it and use it daily. Have never concentrated on mobility until 2 years ago and I am improving so much. Helps with recovery. 	2023-08-13 23:00:00.000+00	80	1	Fantastic piece of equipment 
247	Bryce 	For years I was going to buy these..and thought they were a waste of money..when I seen this for £25 I thought why no..so I bought it and use it most days..and it deffo wasn't a waste of money. Strong piece of equipment and I love using it. 	2022-12-08 00:00:00.000+00	80	1	Leg stretcher 
248	SyebeZ 	It’s reasonably easy to change stretch tho can be a little fiddly at times to position whilst stretching. Well built to withstand the job, has strong joints…I can’t see this breaking. Overall does the job and excellent value. 	2022-11-28 00:00:00.000+00	80	1	Pretty good piece of kit 
249	Dragon1764 	Excellent product and delivery very pleased 	2022-08-17 23:00:00.000+00	80	1	Excellent 
250	Drew 	Brilliant bar, loving it 	2023-01-09 00:00:00.000+00	81	1	Perfect 
251	NanaP 	Great quality product . Excellent service from mirafit 	2022-12-26 00:00:00.000+00	81	1	Gym equipment 
252	Dan Brown 	Arrived within days. Happy with quality and no evidence of bowing or misshaping a month in. 	2022-12-21 00:00:00.000+00	81	1	Exactly as advertised 
253	Wendy 	Looks good and does the job! 	2022-12-06 00:00:00.000+00	81	1	Great Product 
254	James 	Really nice barbell, top notch quality. Only very minor issue is the finish comes off quite easily, which is a shame, as I haven’t had it long and it looks great. Would love to know how to restore the paint job on this down the road because I’ve used some touch-up paint on the dings but it doesn’t quite look the same. Apart from that, which isn’t really a criticism, it’s excellent. 	2021-12-25 00:00:00.000+00	81	1	Great bar 
255	Rhodri 	It’s title advertised as 7ft but it’s really a bit longer at 220cm. This may seem subtle but it meant the barbell holder I bought for the M3 powerrack was not compatible as my ceiling height was a couple cm too short, so more of a slight annoyance as I will need to find a alternative barbell holder now. 	2023-07-21 23:00:00.000+00	82	1	Looks great but 
256	Flexology 	Incredible quality, very impressed with the bar. Great looking bit of kit ! 	2023-06-26 23:00:00.000+00	82	1	Barbell 
257	Jonathan Stevenson 	Very nice piece of kit, great finish and feel 	2022-11-18 00:00:00.000+00	82	1	Great Barbell Bar 
258	DJ 	Looks good, the black coated ends helps the weights slide on and off, the knurled orange bar is perfect for a good comfortable grip and the hand placement rings going around the bar help you set your hands to the perfect width for a nice even grip on both sides of the bar. Capable of handling more than enough weight for anyone. Highly recommend. 	2022-08-28 23:00:00.000+00	82	1	GREAT OLYMPIC BAR 
259	Johnnybhoy 	Quality piece of kit,great company to deal with,would highly recommend 	2022-08-10 23:00:00.000+00	82	1	Quality 
260	Joe 	Nice finish, good knurling, good delivery and speed of dispatch. Right length for my other oly equipment - like the bench and rack. The spinning collars are fine for me but are not that precise. Is rated for 680kg of load but realistically there's only room on the bar for 150kg in plate, and less in bumper. This is as I expected and not a problem at all. The bar diameter of 25mm is great for smaller hands or less confident grippers. It's also cool looking. 	2023-01-03 00:00:00.000+00	83	1	Great Bar 
261	Laura 	Amazing, stands out from a standard barbell and moves so nicely 	2021-12-20 00:00:00.000+00	83	1	Love it 
262	Liz 	Bought this bar as have restrictions on space. Sure its a little smaller but has proved great for all barbell movements and I love the orange coating. 	2021-03-03 00:00:00.000+00	83	1	Great bar 
263	Nicky08 	Great product, excellent quality 	2022-12-20 00:00:00.000+00	83	0.8	15kg bar 
264	StrongLabUk 	I have a number of female clients I train outside in parks. I bought this as a non junk bar that I don't mind throwing around in the mud and rain. The finish is good and the knurling is acceptable (a bit aggressive for Olympic lifting in my opinion).If you are a woman training the Olympic lifts at home I would suggest getting a more specific bar. For general use for female clients I have found it a good buy. 	2021-05-02 23:00:00.000+00	83	0.6	Ok ladies bar for the price 
265	Darren 	Bought it for neutral grip bench work and I love it, great way to take a little pressure off the front delt. 	2023-09-17 23:00:00.000+00	84	1	Great bar 
266	William 	Mirafit products truly are the best! This bar (it will surprise you with its weight) is absolutely first class! Different positions available - suitable for different hand widths, has given me the ability to bench press again, following rotator cuff injury. Heartily recommend this bar. 	2023-08-15 23:00:00.000+00	84	1	Excellent Bar! 
267	AndyH 	Mirafits kit is second to none.Well made and made to last. 	2022-12-20 00:00:00.000+00	84	1	Great bit of kit 
362	Lorraine 	Been after one of these for awhileThey are amazingGreat quality	2022-03-14 00:00:00.000+00	119	1	Mirafit slam ball 
268	Dan ‘the mirafit man’ 	Decided to get this bar to ease the pressure on my shoulders while benching loved the feel of the grip and used it for bent over rows weight of the bar states 25kg which meant I didn’t have to put much weight plates on to get the desired effect intensity so all a great bar just one thing why the hell a football bar 	2022-04-24 23:00:00.000+00	84	1	Swiss bar 
269	David 	I bought this bar with my brother after trying to obtain it for a while, but it was usually out of stock.It is very tough to use and causes me to reduce the weight because of the difficulty of stabilisation. The bench press is more comfortable with the Swiss bar.Effectively, I get more intensity at a lower weight. It's a great bar! 	2022-02-19 00:00:00.000+00	84	1	Excellent and challenging 
270	James 	This is a high quality bar, just the same as you would find in commercial gyms (probably better than some gyms I've been in). Highly recommend and will be buying more length bars to make a full kit! Fast delivery too. 	2023-08-01 23:00:00.000+00	85	1	Excellent Quality 
271	Simon 	I purchased the 7ft version. I use it as an all round bar and it does not disappoint on every level. Feels good to hold and use. Fits great in the Mirafit power racks as well. Great value for money. I have used the other length bars in the same series and again all match up to expectations, the 7ft bar was just my personal preference for the equipment that I have. 	2023-07-27 23:00:00.000+00	85	1	Another Mirafit Addition To My Gym 
272	Deadlift Lover 	Prompt delivery, as described. 5 foot bar is perfect for my space. Not as usual if you do squat deadlifts as you may need a longer bar but other than that, perfect. 	2023-07-17 23:00:00.000+00	85	1	Great Item 
273	Shah 	Good customer service and excellent service delivery on time best items strong weight plates and weight bar 	2023-07-16 23:00:00.000+00	85	1	Good 
274	Karen 	Brought this whole weights set for my teenage son to go in our garage home gym. He absolutely loves it very stylish amazing customer service from Mirafit had an issue with delivery but Mirafit resolved it. Thank you 	2023-06-18 23:00:00.000+00	85	1	2” Olympic barbell bar, dumbbells, thin weight plates, bench and rack kit 
275	Maccie 	This is a really lovely bar, feels nice to use, looks good - what more could you want?! 	2022-11-10 00:00:00.000+00	86	1	Lovely bit of kit! 
276	Dan 	Great bar looks fantastic with orange & black crumb bumper plates on it or the orange bumpers ,well made ,well packaged ,nice bar 	2022-11-06 00:00:00.000+00	86	1	Black Olympic bar 
277	Andyt 	It's not up there with expensive bars. The knurling is a bit "sharp" but for the price it's great. Comes well packaged... It took me half and hour to get it out of the tube. Recommended. 	2022-06-23 23:00:00.000+00	86	1	Decent 
278	Mossy 	Great Product 	2022-06-14 23:00:00.000+00	86	1	Great Product 
279	Sparky 	Great service, great bar . Swapped my 6,ft 8 inch bar for this full sized 7footerWell worth it 	2022-06-11 23:00:00.000+00	86	1	Excellent 
280	Max 	Never used one of theses bars before but now that I have - I have to say, brilliant. Always suffered with a niggling twinge in my shoulder when I bench, not anymore. Gradually building up to the weight I would normally do with a straight bar and so for so good. The multi position handles means great variation and in my own opinion a better all round workout. 	2023-06-17 23:00:00.000+00	87	1	Great bit of kit 
281	Simon 	I’m delighted with the bar. It’s a high quality, well balanced bar. 	2023-06-12 23:00:00.000+00	87	1	Great bar, very happy 
282	Ray 	Great bar. Fantastic feel and quality. Looks great too. 	2023-01-29 00:00:00.000+00	87	1	Proper piece of kit 
283	BIG MAC 	Love this bar it’s massive looks mint feels mint it is mint . Looks mint in my gym. 	2022-07-16 23:00:00.000+00	87	1	Mint 
284	Powerlifting girlie 	Fantastic bar .....I've now had 2 of these! 	2022-02-26 00:00:00.000+00	87	1	Bar 
285	Gez 	I've just purchased the 10kg set. Needless to say I will be buying more. I love them. Quality product, fantastic company. 	2023-09-29 23:00:00.000+00	88	1	Niiiiice 
286	Simon 	I purchased two of the 5kg plates for my home gym and they are really good quality. I thought perhaps that being the smaller plates they may deteriorate when used with the heavier plates, but no. They are really good quality and value for money and I will be purchasing more in the same range. 	2023-08-18 23:00:00.000+00	88	1	Geat Weight Plates 
287	Railside 	Quality bumper plates and a very good price.Delivery is super cheap and quickWill buy from these guys again and have done since 	2023-04-23 23:00:00.000+00	88	1	Great items 
288	Fed Tom 	Very happy with my set of heavy circles. As you add more to the bar it becomes harder to move, just as I wanted. 	2022-08-22 23:00:00.000+00	88	1	Heavy circles 
289	Rickybobby 	Bought a couple of these bumper plates to see the build quality these are top quality I work out in spare room with carpet and these are more or less silent when dropped onto mats on carpet iv bought more since very happy with them will be buying more in future. 	2022-07-18 23:00:00.000+00	88	1	Bumper plates 
290	James 	So cool, really well made and durable! They look great. 	2023-10-23 23:00:00.000+00	92	1	A thing of beauty 
291	Damien 	Fantastic plates, great value and great service. Ideal for any that does not want to spend loads on bumper plates but still wants them to look good as well 	2023-10-22 23:00:00.000+00	93	1	Great value! 
292	James Fisher 	The plates look nice, dropped them from shoulder height onto concrete floor but do not break! They look nice too! 	2023-06-05 23:00:00.000+00	93	1	Nothing wrong 
293	Kane 	These weights look incredible and are built really well 	2023-05-29 23:00:00.000+00	93	1	Love these weights 
294	Sparky 	Excellent experience from start to finishGreat customer serviceWeights look even better close up 	2022-05-10 23:00:00.000+00	93	1	Bumper plates 
295	Lukey 	Thank you once again Mirafit for the quick delivery of top quality product. Plates are growing for my collection. 	2022-03-31 23:00:00.000+00	93	1	Excellent Quality 
296	Micksmick 	Quick delivery, excellent product for use in my garage 	2023-03-04 00:00:00.000+00	94	1	Starter pack 
297	Iain 	From ordering to delivery, it was an easy transaction. Kit arrived within a few day, well wrapped and protected.The weights themselves are excellent, the bar is also excellent too. 	2023-07-03 23:00:00.000+00	95	1	Outstanding 
298	Weir 	Made to last. Great products 	2023-06-22 23:00:00.000+00	95	1	Great products 
299	Boz 	Needed a shorter bar for the space we have, so went for the 5ft bar with 60kg. Both the bar and the plates are excellent and I don’t actually notice it being smaller than a standard Olympic. The plates also look excellent and have really smartened up my home gym - just need to get the matching flooring now…..!Have since purchased some of the incremental plates which are also excellent - overall very pleased! 	2023-05-04 23:00:00.000+00	95	1	Perfect! 
300	SaharaFee 	Exactly as is says on the website, prompt delivery and loving using these weights. 	2022-11-21 00:00:00.000+00	95	1	Perfect set for home use 
301	Master Chief 	Very good plates especially on unprotected floors but still best to be carful. Bought in conjunction withmirafit calibrated cast iron weight plates and power bar as these plates are a bit thick you can only get about 4 on each side maybe 5 without collars 	2023-10-22 23:00:00.000+00	96	1	Very Good and stylish 
302	Karen 	These were purchased as an addition to the same plates I had purchased from Mirafit a year previously. They look great, are robust and are looking as good as the day I purchased them. Very happy and would totally recommend them. 	2023-03-23 00:00:00.000+00	96	1	Solid construction and durable 
303	Mr Blenham 	Awesome plates we run the 10kg and 5kg plates at our work gym. The plates are high quality and look like they will last years. 	2022-09-18 23:00:00.000+00	96	1	Good Plates 
304	Konrad 	Very good lates got some yesterday and they are just what I was looking for 	2022-09-05 23:00:00.000+00	96	1	Awesome plates 
305	Rons 	Top quality plates, great value 	2022-06-11 23:00:00.000+00	96	1	. 
306	Thewkout 	Everything I’ve brought is quality 	2023-07-15 23:00:00.000+00	97	1	I’ve brought almost everything they do 
307	Dave 	These plates are just brilliant. They are getting plenty of use by myself and my clients. Amazing 	2023-04-13 23:00:00.000+00	97	1	Great plates . Perfect for myself and my clients 
308	NM 	Very Good Quality backed up with Good Customer Support. 	2022-07-17 23:00:00.000+00	97	1	Nice Kit 
309	Beynsy 	Great quality productsQuick delivery and service tooIdeal for home gym use and anyone interested in working hard at keeping fit 	2022-02-27 00:00:00.000+00	97	1	Olympic bar and bumpers 
310	Vonovine 	I don’t know why, but I can bench an extra 10kg with these slim competition plates than my normal ones.Maybe it’s because the weights aren’t as wide?Great quality too! 	2021-06-05 23:00:00.000+00	97	1	Great weights 
311	Harry S 	Very good quality and finish on these Kettlebells, great value for money. Pleased with all of the Mirafit gear I've bought over the years. 	2023-10-23 23:00:00.000+00	100	1	Great quality and competitively priced. 
312	P! 	I 100% recommend this site. KB arrived ahead of time! Enjoy their products and stay strong! 	2023-10-08 23:00:00.000+00	100	1	Top product! 
313	Jude 	I am very pleased with my kettlebells good value for money and solid cast iron good grip and is just the right ones for me. 	2023-10-07 23:00:00.000+00	100	1	Excellent quality 
314	Red 	Fantastic bit of kit. Solid cast iron. Great quality. Well woth the money. 	2023-06-19 23:00:00.000+00	100	1	24kg Kettlebell 
315	Nabs 	Smooth, stress free experience when purchasing kettlebells, definitely ordering again in the near future 	2023-06-16 23:00:00.000+00	100	1	Will buy again 
316	Arnold S 	Very happy with the short turnaround time, fast delivery and high quality products at acceptable prices. 	2023-09-05 23:00:00.000+00	101	1	Prompt delivery, great quality 
317	Billy 	Bought 6 kg kettle bell. Really great purchase, worth the money, extremely versatile with regards to the different types of work you can do. The handle is very comfortable to hold. So overall, a great little purchase and would definitely recommend. 	2023-03-26 00:00:00.000+00	101	1	Kettle bell review 
318	Sylvia 	I ordered 10, 12, 20 and 18kg Kettlebells. Exactly as described. Great quality that shows. Quick delivery. Very helpful customer service. Highly recommend 	2023-01-08 00:00:00.000+00	101	1	Great quality Great price 
319	Jamie 	Arrived promptly, weighs exactly the amount printed on the outside, all very Ronseal (does exactly what it says on the tin)Plus it’s orange - which is awesome.	2022-11-16 00:00:00.000+00	101	1	Very Ronseal 
320	Trevor sharp 	This is great for the work out that do for my golf swing. 	2022-06-11 23:00:00.000+00	101	1	6 kg kettlebell 
321	cazza 	great product at a great price and super quick delivery, highly recommend 	2022-11-23 00:00:00.000+00	104	1	Kettle Bells 
322	Chez 	Great item very quick deliveryGreat quality 	2022-05-03 23:00:00.000+00	104	1	Great 
323	Ness 	I’ve orders several products form Mirafit and the products have always been good quality and arrive quickly 	2021-10-09 23:00:00.000+00	104	1	Great Product & Service 
324	Mr Brown 	Mirafit gear is great quality and reasonable prices aswel.Great stuff 	2021-08-29 23:00:00.000+00	104	1	Great quality 
325	Yoshi fitness 	Great product, perfect for outdoor training and easy to carry, perfect for someone new to training 	2021-06-13 23:00:00.000+00	104	1	Great product 
326	Andy 	Really good to add some functional strength. Sturdy. 	2023-09-22 23:00:00.000+00	105	1	Great kit 
327	Em 	I’m currently prepping for the world championships and needed an adjustable handle fast to built the weights up. It’s been great and is a really sturdy bit of kit even surviving a fall off of the top of some power stairs loaded over 100kg 	2023-05-26 23:00:00.000+00	105	1	Great little duck walk! 
328	James 	Well worth the money, can use it for some heavy Swings too! 	2022-05-10 23:00:00.000+00	105	1	Defo worth it! 
329	Tom 	So pleased with this product. Amazingly durable and can take heavy load with no issues at all. The adjustable height on the pin is great and I would recommend this product to anyone interested 	2021-06-12 23:00:00.000+00	105	1	Fantastic product 
330	Mike 	Good piece of equipment, only holds 5x 20kg plates so you have to improvise if you want to add more weight. 	2022-12-12 00:00:00.000+00	105	0.6	Worth the money 
331	Jonesy 	Great bit of kit...really well made. Keeps its shape perfectly. 	2022-11-22 00:00:00.000+00	110	1	6kg Wall ball 
332	Geesypeeps 	Great product. Well made and quick delivery 	2022-10-03 23:00:00.000+00	110	1	Great product 
333	Louise P 	Yet another excellent purchase from Mirafit it is very sturdy maddd we from great materials well with the buy 	2022-07-03 23:00:00.000+00	110	1	Med ball 
334	Jeff 	This is the second one I have bought.I got the 7kg one first (primarily for Russian Twists) and have just bought the 9kg.Both great to use and have seen no signs of wear despite being used on the floor of my garage gymwould definitely recommend 	2023-08-13 23:00:00.000+00	111	1	Excellent 
335	Ric 	Bought to improve my flexibility. Had it for a couple of weeks . I was a bit stiff at first but it’s working well and I’m scoring well at golf 	2023-01-31 00:00:00.000+00	111	1	Medicine ball with handles 
336	VBR Fitness 	I use this in my Circuit Training classes for a variety of exercises. My clients love it. It’s easy to grip and easy to clean. 	2022-04-30 23:00:00.000+00	111	1	Clients love it 
337	Flex 	Looking for a medicine ball that adds versatility to your workouts and is aesthetically pleasing? This is the one.The range of sizes means you can build a collection or find the weight that suits you best for your Russian twists, rolling push ups, lunge & twist, etc.And, when not in use, looks good displayed with a nice quality material and stitching detail. Recommended. 	2023-08-30 23:00:00.000+00	113	1	Mirafit Medicine Wall Ball 
338	UG Strongman 	Very impress with the sandbag that we ended up buying a whole set from 50kg through to 150kg. The size is pretty accurate for kiln dried sand. (e.g. 5 x 20kg bags of sand fill the 100kg bag nicely). They have been a great addition to the gym and great for a end of work out burn up for distance or over bar/yoke etc. Love them. Thanks Mirafit. 	2022-10-20 23:00:00.000+00	114	1	Mirafit Sandbags 
339	Hans 	If you’re struggling with sand, pop to Wikes or any merchant. And each ‘major bag’ is 25kg.It will fit, even if you swear it won’t. I have a 75 kg bag, after two I would have said it was full. But no. I shovelled the third bag in a bit at a time, shook it, manually moved the contents and yes, three full bags went in and it weighs around 75kg. 	2022-07-19 23:00:00.000+00	114	1	3 bags of ‘sharp’ sand 
340	Emily 	We've got the 50kg and 75kg bags and they're brilliant. Very robust and good for taking a beating. Looking to buy the 100kg bag next, so I'd definitely recommend 	2022-07-18 23:00:00.000+00	114	1	Great item 
341	Matt 	Couldn’t be happier brought the 50kg and 75kg bags they are spot on 	2022-04-09 23:00:00.000+00	114	1	Excellent product 
342	Anthony 	Great price and arrived within 2 days. Very well made and easy to use. I used building sand which is £2.50 a bag from B&Q. Started off with the 50kg as it's a dead weight it's heavier than you think. Will be getting the 75kg soon. 	2022-02-08 00:00:00.000+00	114	1	Brilliant purchase 
343	El Kevo 	I have the 15k and it is well made and tough. I have managed to get 16k in it which makes for a challenging enough workout when used for longer sessions. Very pleased as I got it on special offer and would be happy to pay the normal price too. 	2023-07-24 23:00:00.000+00	115	1	Great 
344	Dropandgiveme20 	Got the 30kg bag. Love it. Not sure I'll get 30k's of sand in there but maybe that's more about my sand handling skills and probably better for my not overdoing it. I'm no exercise expert but feels good to chuck around. Will probs get the 60 soon for legs. Loads of handle options, very well made, like the Tango of sports equipment. Jolly. Cheers, Mira. 	2022-02-26 00:00:00.000+00	115	1	Gains 
345	Oli 	Hard wearing, well built and versatile. Makes workouts fun but not fun. fill with dry sand. Large bags from B&Q weigh 19.5kg. You can actually if patient fit the sand in the polythene bag into the filler bag to prevent sand getting out. 	2021-03-17 00:00:00.000+00	115	1	Versatile 
346	Chris 	My new favourite bit of kit, full stop. Got the 30kg bag, and loved it so much I now have the 60kg. I'll be honest the 60kg bag is an absolute beast, but amazing fun.Also, for anyone who's never used sandbags before. Suck it up buttercup, whatever you were lifting on a bar before, you're going to be nowhere near that.If you need the ego boost of seeing big numbers on your weights, sandbags are not for you :-D 	2021-02-15 00:00:00.000+00	115	1	Absolutely brilliant bit of kit 
347	Paulie 	Good , strong and well built , would 100% recommended it 	2021-01-10 00:00:00.000+00	115	1	Quality 
348	Silverback 	Nice and compact. Got the 25 kg one. Good for upper body exercises 	2023-06-23 23:00:00.000+00	116	1	Excellent 
349	Mike 	Like all products, quality is brilliant. Hoping to purchase more from Mirafit! 	2023-06-19 23:00:00.000+00	116	1	Really good product 
350	J 	Good company with good shit. Buy da good shit! 	2023-05-30 23:00:00.000+00	116	1	Good shit 
351	PT Guru 	Setting up my work gym and purchased many many items from MIRAFIT. The products are fab quality, as is the price. Customer service and delivery are also excellent. Highly recommended 	2023-03-26 00:00:00.000+00	116	1	Mirafitastic 
352	Magdalena 	This bag is excellent, great quality and looks. 	2023-02-17 00:00:00.000+00	116	1	Great product 
353	AF 	This bag is excellent, good quality and perfect if you just starting out as the weight can be varied, start with a lower weight and increase over time as you get stronger. Good for those who are on the budget the price is right and quality is very good. 	2023-03-18 00:00:00.000+00	117	1	Excellent 
354	Mike 	The sacks arrived promptly, quality is good and they have been well used since I received them. The inner bags are fine and I know reading the reviews this has been a problem but at this time mine are fin. They have been a worthy piece of equipment added to my training regime. 	2022-01-21 00:00:00.000+00	117	1	Sacks 
355	Russ 	Reading some of the other reviews, it seems there have been issues with the inner bags; since these reviews the bags themselves have been updated. That being said, I have this older model and have had zero issues at all. Filled to 50kg with no issues whatsoever. No rips, tears or leaks. My bag has been used and abused, too. 	2021-12-24 00:00:00.000+00	117	1	No issues 
356	Karl 	Great - for me this was an outer for a bag that had split, good price and an easy fix for my split bag. 	2021-08-10 23:00:00.000+00	117	1	Very Good 
357	Ant 	Excellent product! 	2021-07-25 23:00:00.000+00	117	1	100kg sandbag 
358	Julian 	Using for slams and wall throw warms ups every workout so it's taking a pounding and all good so far. 	2022-10-12 23:00:00.000+00	119	1	Robust so far 
359	Aymeric 	Heavy duty and versatile equipment, a must have for home gym. Well worth the price, great quality and fast delivery for a "bulky" item. 	2022-09-20 23:00:00.000+00	119	1	Fantastic product 
360	Viv 	Seems to be working well so far 	2022-05-23 23:00:00.000+00	119	1	Perfect 
361	Rich 	Great addition to my gym. Heart rate to the max 	2022-04-17 23:00:00.000+00	119	1	Awesome 
363	Al 	I've got three of these - the 12kg, 20kg and 30kg. Strangely, the 30kg is slightly smaller than the 20kg, The tread is thick, which allows great grip (especially when you're sweaty). They're solid, and I certainly don't feel like they're going to split any time soon.Highly recommended. 	2023-05-16 23:00:00.000+00	120	1	Excellent 
364	PT Guru 	Ive purchased a few of these balls for my clients to use. They are very well made, very tough and durable. Highly recommended 	2023-03-28 23:00:00.000+00	120	1	Excellent 
365	RichardP 	Feels really good in the hands, with the tyre tread giving reassuring grip. Will probably return for a lighter and heavier ball at some point for more variety. 	2023-03-27 23:00:00.000+00	120	1	10kg slam ball 
366	Bernie 	Great product, arrived in good time, very happy with price 	2023-03-05 00:00:00.000+00	120	1	Great product great price 
367	Jordon 	Excellent quality, very versatile, highly recommended. 	2023-02-04 00:00:00.000+00	120	1	30kg slam ball 
368	Master Chief 	Very Good quality, weights are bang on not even 1 gram out, thin plates good if you want to stack as many as you can on a single bar for those heavy lifts. 	2023-10-22 23:00:00.000+00	122	1	Very Good 
369	Lisa 	always deliver good quality equipment and yes this is a girly comment, but I love the different colors :) 	2023-01-04 00:00:00.000+00	122	1	great quality 
370	Nicky H 	As always good product for reasonable price and prompt delivery 	2022-11-28 00:00:00.000+00	122	1	Very pleased with the plates 
371	Pamie 	Fantastic quality as usual from mirafit 	2022-01-29 00:00:00.000+00	122	1	Plates 
372	happy 	Not much to say other than that it's great equipment, and on top prompt delivery with excellent customer service. I'd only add that maybe a metal ring could (?) make it easier to slide on and off the bar. 	2021-12-04 00:00:00.000+00	122	1	worth it 
373	J 	Really good quality. I prefer these to the thin steel ones. And these are a lot cheaper. 	2023-07-14 23:00:00.000+00	125	1	Well worth the money 
374	Andy 	Absolutely essential for micro-loading the bar and nice to look at as well, with a smooth chrome finish and laser-etched numbers. Carry case is a useful extra. 	2023-08-18 23:00:00.000+00	126	1	Useful and pretty too! 
375	Broseph 	I realised I'd need these to stick to my training program's progressions - they look and feel so good (it's almost weird how much you can appreciate a piece of metal. Even my mum appreciated the craft when she called by for a cuppa - she doesn't lift). Thanks Mirafit, great job. As always. 	2023-07-27 23:00:00.000+00	126	1	Super Sleek 
376	John-Lee 	Great set and easily used thanks to the carry bag they come in. The set covers every aspect of functional weights when trying to get some gains. 	2023-07-25 23:00:00.000+00	126	1	Love these and the bag they come in! 
377	Stephen 	Nicely finished, allow me to make progress on strong lifts 	2023-07-22 23:00:00.000+00	126	1	Good plates 
378	Naomi 	Currently doing Stronglifts 5x5 and realised pretty quickly that I was going to need smaller increments for the overhead press, and soon for the bench press and row. Super handy to be able to increase the weight in smaller increments, and it doesn't hurt that the set is aesthetically pleasing. Extra marks for the useful carry case - currently take the .75s and 1s to the gym and they cover all my bases at the moment. 	2023-05-26 23:00:00.000+00	126	1	Super useful 
379	MartinB 	Bought a selection of these to train arms at home.They are finished well and feel like they should last.They do come with a slightly oily residue on them but it just wipes off.I have no regrets, they are brilliant plates. 	2023-09-25 23:00:00.000+00	127	1	Pair well with my Mirafit EZ bar 
380	Winky 	Very solid and well made and delivery was brilliant couldn't ask for any better 	2023-06-27 23:00:00.000+00	127	1	Hex 15kg Olympic weights 
381	Guy 	I've bought 5kg plates to supplement the bumper plates I have..Great weights, well made and easy to grip ! 	2023-04-21 23:00:00.000+00	127	1	Great value 
382	Colin 	I just needed some small weights for chest press, these are well made perfect for olympic size bar. 	2023-04-03 23:00:00.000+00	127	1	Weights 
383	Dorian 	Good quality plates if You can forget about very strange and not nice smell . 	2023-03-31 23:00:00.000+00	127	1	Good quality 
384	Luka 	Ideally sized for a rucksack and weighs what is is supposed to! Not sure what else I can say about it.Seller is also very good, quick delivery and well packaged. 	2023-04-16 23:00:00.000+00	128	1	5 stars 
385	PH 	Bought for a GoRuck backpack I bought off eBay and these plates are a perfect fit as per previous reviews. Bought the whole set and they're getting tons of use. Allows me to walk with a weighted pack but not look at all military which is what I was after. 	2023-02-14 00:00:00.000+00	128	1	Good product 
386	Phil 	I bought this for my GoRuck Rucker 4.0. It fits the large pouch perfectly. 	2022-10-15 23:00:00.000+00	128	1	Exactly what it says on the cast iron plate 
387	Paulski 	Very useful kit.....pound for pound, well worth it! Use for rucking and resistance style workouts.....very effective! 	2021-02-11 00:00:00.000+00	128	1	10kg ruck ruck plate 
388	Simon B 	Just got a 5kg plate to start rucking with. Plate fits perfectly in a GR Rucker and is well finished and (obviously) very sturdy. 	2021-01-26 00:00:00.000+00	128	1	5kg plate - excellent! 
389	JC 	Just simple but effective 	2023-08-16 23:00:00.000+00	129	1	Great 
390	Chris 	Great high quality weights, will be buying more cheers 	2023-07-10 23:00:00.000+00	129	1	2 x 25kg 
391	Ioan 	Very nice weights, will order more at different sizes 	2023-03-26 00:00:00.000+00	129	1	Tri grip weights 
392	CJ 	I haven't ever weighed one of these, so I have no idea if they're exactly the weight they're supposed to be. Having said that, they certainly feel appropriately weighted. The gaps for shifting the weights about are great and they have a snug fit on mira 1" bars. These weights are the main reason I use mirafit for my weights related needs. 	2023-03-05 00:00:00.000+00	129	1	Handy gaps for carrying the weights 
393	Kristians 	Recommended. 	2023-03-01 00:00:00.000+00	129	1	Good product for good price! 
394	Hopskinz 	These plates are really great quality! I was hesitant about investing in new weights, but I’ve not regretted it. In fact I’ve just ordered more! 	2023-07-01 23:00:00.000+00	130	1	Great value 
456	Jon P 	Brilliant bit of kit. Wish I'd bought one sooner,instead of ground anchor. 	2021-03-01 00:00:00.000+00	152	1	Great kit 
395	Dan 	Received these weights as additional to an order for one of the EZ bar sets great quality weights and fair price too will be buying more 	2023-06-01 23:00:00.000+00	130	1	Great Value and Great Quality 
396	TM28 	They all arrived in super secure packaging and condition. I love the look and feel of them and how easy they are to pick up, I couldn't be happier. 	2023-05-14 23:00:00.000+00	130	1	Superb 
397	Physiques Gym Bexhill 	Shiny, easy to load and unload, quick delivery so all round awesome! 	2023-04-22 23:00:00.000+00	130	1	Shiny weights 
398	Dan Dawson 	Hard to go wrong here, cast iron weights, no issues 	2023-04-13 23:00:00.000+00	130	1	Does what it's meant to 
399	Iain 	From ordering to delivery, it was an easy transaction. Kit arrived within a few day, well wrapped and protected.The weights themselves are excellent, the bar is also excellent too. 	2023-07-03 23:00:00.000+00	133	1	Outstanding 
400	Weir 	Made to last. Great products 	2023-06-22 23:00:00.000+00	133	1	Great products 
401	Boz 	Needed a shorter bar for the space we have, so went for the 5ft bar with 60kg. Both the bar and the plates are excellent and I don’t actually notice it being smaller than a standard Olympic. The plates also look excellent and have really smartened up my home gym - just need to get the matching flooring now…..!Have since purchased some of the incremental plates which are also excellent - overall very pleased! 	2023-05-04 23:00:00.000+00	133	1	Perfect! 
402	SaharaFee 	Exactly as is says on the website, prompt delivery and loving using these weights. 	2022-11-21 00:00:00.000+00	133	1	Perfect set for home use 
403	Keely 	Bought to replace a cheap set of bought from Argos , and am so happy! So easy to quickly change weights, and I love that I can also buy extra plates too to fit. Highly recommend! 	2022-12-26 00:00:00.000+00	134	1	Great! 
404	Nynke20 	I've been putting off buying a pump set because I had no idea that the weights and bar was do affordable. It's exactly what a wanted for my pump class at home. Quick delivery too. Very happy :) 	2022-12-17 00:00:00.000+00	134	1	Perfect - exactly what I wanted 
405	Lizzie 	This was recommended to me as an alternative for LM body pump at home. The padded bar is great on cold mornings, the plates can be used as hand weights independent of the bar, the quick-release clips enable fast changing between sets and all at an affordable price. Am very happy with my purchase! 	2022-10-15 23:00:00.000+00	134	1	Great Pump Set 
406	Wenfy 	This bar + weights came highly recommended and I’m really happy with this affordable set. The bar is slightly padded providing extra cushioning and grip. The quick release fastening makes changing weights between sets really easy. The weights are excellent used as free weights too. Now I’m recommending it to my friends. 	2022-09-01 23:00:00.000+00	134	1	Perfect for the beginning of weight training journey 
407	Scholesy 	Great little bar for my home gym, use it for warm ups in main 	2022-04-13 23:00:00.000+00	134	1	Amazing Bar 
408	DARREN 	Had these delivered very recently and absolutely blown away with the quality of these dumbells & orange rack. Very easy to put together & took about 30 minutes, delivery was spot on & would recommend mirafit to anyone who is interested in keeping fit. 	2023-07-13 23:00:00.000+00	135	1	Dumbell & weight rack 
409	Kane 	These weight look unreal and are perfect for use, I massively recommend them 	2023-05-29 23:00:00.000+00	135	1	Best buy 
410	Nick Davo 	Speedy delivery and the weight are really good quality. Very happy with the purchase!Thanks 	2023-05-14 23:00:00.000+00	135	1	Great set of weights 
411	Craig 	Absolutely blown away by these, have had the 3weeks now and they are a pleasure to use. Loving working out , the feels is perfect and they look insane 	2023-05-07 23:00:00.000+00	135	1	1 
412	Dan 	Very good quality, easy assembly, fast delivery. Shopped around for quite a while and very happy with my choice, would highly recommend 	2023-05-02 23:00:00.000+00	135	1	Excellent 
413	Uncle 	Bought them for my niece. Good quality and mix of weights 	2023-01-03 00:00:00.000+00	136	1	Good quality for beginners 
414	A 	Really nice dumbbell set, perfect for beginners. 	2022-12-08 00:00:00.000+00	136	1	Love them 
415	Tiger 	Bought to keep my wife and me exercising as we get older. Variety of weights and handy carry case well thought out. 	2022-10-29 23:00:00.000+00	136	1	Good product 
416	AliRunner 	Great set of diumbells in a handy carry case. Perfect for carrying to the exercise class I run. 	2022-09-16 23:00:00.000+00	136	1	Great product 
417	JD 	These mini dumbells set are perfect. Great feel and the small to large are just what we wanted. Bonus they have a case to store them in.Delivery was very fast.Thank you MiraFit 	2022-08-13 23:00:00.000+00	136	1	Great quality product 
418	Chris 	Fantastic quality all round. Really, really impressed ! 	2023-08-21 23:00:00.000+00	138	1	Superb ! 
419	Stephen 	Good quality equipment, good delivery. Would definitely recommend! ???? 	2023-06-22 23:00:00.000+00	138	1	Excellent! 
420	Dan 	Quit the gym and bought this weight set, solid products all round will be buying more from mirafit 	2023-06-01 23:00:00.000+00	138	1	Great Product and Great Value 
421	Ray 	I am a marine and used alot of gym equipment and receiving the olympic weights and zbar was impressed with the quality. Very happy 	2023-03-24 00:00:00.000+00	138	1	Better than expected 
422	Matt 	Really good quality solid product. Great delivery, fair price. Recommended. Will definitely use this site again 	2022-07-24 23:00:00.000+00	138	1	Great product 
423	Micksmick 	Quick delivery, excellent product for use in my garage 	2023-03-04 00:00:00.000+00	140	1	Starter pack 
424	Nick 	Great delivery 	2023-10-15 23:00:00.000+00	142	1	Great delivery 
425	Karl 	Very sturdy, use them for hanging leg raises. 	2023-10-12 23:00:00.000+00	142	1	Does the job 
426	Happy Chappy 	I love the ankle weights, easy to put on and serving the purpose I bought them for. 	2023-03-22 00:00:00.000+00	142	1	Good buy 
427	JonyB 	Looked all over Amazon, but all reviews of different products had a downside, mainly in workmanship &/or durability. One reviewer pointed at Mirafit saying good value and well-made. I chose the 2 x 3 kg weights and they fit the title. 	2022-10-21 23:00:00.000+00	142	1	Good price, well made, comfortable 
519	Stepper 	This step is nice and sturdy, which is essential. Good size. Delivery was super efficient. 	2023-02-04 00:00:00.000+00	186	1	Super Step 
428	Owen 	Bought a pair of these to replace some lighter ones purchased elsewhere some years ago. The new ones are well made, exactly the quoted weight and were delivered quickly - all good! 	2022-05-09 23:00:00.000+00	142	1	Mirafit ankle weights 
429	Iesa 	Good solid piece of equipment but I prefer to use it with a plate pin 	2023-10-16 23:00:00.000+00	145	1	Wrist Roller 
430	TM28 	This works your forearms like nothing else, you really feel the burn, it's definitely worth being apart of your programme. 	2023-07-31 23:00:00.000+00	145	1	Very Interesting 
431	Sam 	This will definitely last a lifetime, very robust build. Really fires up the wrists too! I use it every week 	2023-07-11 23:00:00.000+00	145	1	Strong build quality and works really well 
432	Mitch p 	Loads of people in the gym have been coming up to me, showing interest in this product. I don’t think it will ever break! It’s very sturdy and well made 	2023-01-28 00:00:00.000+00	145	1	Great sturdy product 
433	Peter 	. 	2022-12-19 00:00:00.000+00	145	1	Very effective 
434	Jason 	Comfortable and easy to use. Very sturdy and secure . 	2023-09-14 23:00:00.000+00	147	1	Great vest for upping your workout 
435	Salesy 	Really like the vest. Great sub for actual BA and has the option of adding extra weight via the mole. Well balanced, easy to wear, comfortable. 	2023-01-26 00:00:00.000+00	147	1	Really good 
436	JV 	It’s a great vest. I have used 5.11 plate carriers before as well as various types of body armour whilst serving. It very much does the job. AComfortable fit, doesn’t bounce and the 10kgs vest is well balanced across the body. It’s made a big impact to my workouts and is great value! 	2023-01-24 00:00:00.000+00	147	1	Excellent bit of kit 
437	Andy 	Awesome piece of kit, top quality, very comfortable, no restriction of movement when wearing. I've trained in this vest for a month now and its the easiest way to take a training session from average to savage! Ive taken it through all sorts of sessions, strength, cardio, conditioning, plyometric and it has performed flawlessly. I literally have no complaints. 	2022-06-28 23:00:00.000+00	147	1	Awesome piece of kit! 
438	OldmanDave 	The quality is amazing really feels well made the Velcro is very strong. It fits well (5"10 80kg) and most importantly it doesn't slip. There seems to be a small amount of plate movement on the front but nothing that would spoil it. I got the 10kg version and it's so versatile, I have wore it for a few sessions of cardio and free weights and I defo feel the burn more, I think this will give my shred the edge it needed. 	2022-02-01 00:00:00.000+00	147	1	Good value 
439	Sibbo57 	Bought 2.35kg plates for my plate carrier to mimic the real thing for airsoft gamesYou really feel it after 6hrs game great fitness aidOnly niggle was that my jpc is a little longer by 5cm so had to used velcro to hold them in the correct placeOther than that great product very pleased with them 	2022-07-16 23:00:00.000+00	148	1	Excellent service 
440	LostBoy 	Got a set of 7kg plates for an 8fields plate carrier (most plate carriers are the same)Noticed the weight difference straight away during my training sessions.Can be awkward to run in though	2022-06-15 23:00:00.000+00	148	1	Beast Mode 
441	Andy P 	As always quality is first class. Highly recommend if you’re looking to burn calories. This is hard work! Brilliant!!! 	2023-06-24 23:00:00.000+00	149	1	Battle rope 
442	Mina 	Very strong it's good if you are a beginner and if you live in a flat. 	2023-04-18 23:00:00.000+00	149	1	Great quality . 
443	Very happy customer. 	These fabulous battle ropes are exactly what I need for an all over body work out whenever I want it. I am disabled and cannot always go outside so, having these at my disposal is brilliant. The customer services is also exceptional. When I put the wrong order in, they fixed it all very quickly and made sure there was no further costs to me which was amazing. 	2023-02-02 00:00:00.000+00	149	1	Outstanding value! 
444	Jack 	Exactly as described 	2022-05-10 23:00:00.000+00	149	1	???????? 
445	Leebo 	I personally love the battle ropes. They are very versatile and are great for a conditioning workout. Me and my clients love them 	2022-03-07 00:00:00.000+00	149	1	Great 
446	Grover 	Really do the job, I feeling work all my arms and back , great 	2023-06-20 23:00:00.000+00	150	1	Excellent heavyweight rope 
447	VBR Fitness 	I use this in my Circuit Training classes. My clients use this after a speed rope and there’s a massive difference in technique and effort required - helps me to keep challenging them. 	2022-04-30 23:00:00.000+00	150	1	Real workout 
448	BENJ 	Great rope. I bought the 1kg version and its perfect to start weighted skipping. Makes the workout harder on the shoulders and a slower tempo. Good addition to regular skipping. 	2022-02-24 00:00:00.000+00	150	1	Perfect weight 
449	Andrew 	My brother bought me the 2 inch/9”2 rope for my birthday. It weighs 3.6kg/7.9lbs which is the heaviest rope I’ve seen online. I weighed it to make sure. This rope is really hard. It works your upper body especially your arms and shoulders. You have to be careful with your jump rope form or you could easily injure yourself. Great product!! 	2021-07-27 23:00:00.000+00	150	1	Great product not for beginners! 
450	Cb 	Great product, solid build. And don't get ahead of yourself and jump straight into the heaviest option, the lightest of these ropes is still a huge difference to a normal non weighted rope. 	2021-06-01 23:00:00.000+00	150	1	Excellent 
451	Jay 	I recently purchased a set of battle ropes and I am so pleased with their quality and durability! They are made of a thick, tough material and are sewn together very well. I'm confident that they will hold up to rigorous use and last me a long time. With these battle ropes, I can get a great workout and feel like I'm getting the best value for my money. Highly recommend! 	2023-01-25 00:00:00.000+00	151	1	Good quality ropes and anchor 
452	RAW 	Great quality and price, easy to install and comes with all the right fitments, highly recommend. 	2022-05-11 23:00:00.000+00	151	1	The only battle is the workout 
453	Dek 	Great bit of kit for battle ropes. Can’t fault it. 	2022-07-15 23:00:00.000+00	152	1	Battle rope anchor 
454	Bazzer 	This was actually stronger and better than expected. I purchased it not as a rope anchor but to fit in my shed so that I could loop my bike lock around it. It comes with very strong and long screw bolts with it, to make it very secure against the frame of the shed. 	2021-04-24 23:00:00.000+00	152	1	High Quality Product 
455	Huddo 	Good product - not sure if I needed however. Very heavy! 	2021-04-11 23:00:00.000+00	152	1	Good product 
457	Seb 	Bought this so I could fashion a sled pulling belt using a dipping belt. The quality is great and works perfectly. Haven't seen very many companies with this product. 	2021-12-03 00:00:00.000+00	153	1	Great product 
458	George 	Does what is says on the box and would recommend the purchase along with the battle ropes. 	2021-03-11 00:00:00.000+00	153	1	Great partner for the Battle ropes 
459	Lord Liftington 	Dug this bad boy into the grass. It wasn't moving. I had to use the battle rope to get it back out again!It's a large chappie, sitting quite conspicuously, in your storage area; but I don't think it could be any smaller and do its job as well. Which it does. Its job. It does its job. Very well. Yep. Until you want to get it out the ground. Then it's suddenly an evil thing. 	2023-01-18 00:00:00.000+00	154	1	Works well, big to store 
460	Tom 	Pleased would recommend 	2022-09-25 23:00:00.000+00	154	1	Very good 
461	Abi 	Great accessory for making battle ropes more portable. As long as there’s a patch of soil you can use your ropes 	2022-08-19 23:00:00.000+00	154	1	It does the job 
462	pc 	quick delivery seems sturdy product so far 	2022-05-23 23:00:00.000+00	154	1	works well as resistance band anchor 
463	Kay 	Excellent quality spike ground anchor, 	2021-02-20 00:00:00.000+00	154	1	Quality anchor 
464	Becky 	Solid and looks class too very good 	2020-11-10 00:00:00.000+00	155	1	Fantastic 
465	Carts 	Excellent quality will last us for years 	2022-11-22 00:00:00.000+00	168	1	Punch bag 
466	Rob 	I ruptured a ligament so was unable to go to my usual means of exercise and bought this out of frustration. It works perfectly, came in very good time with reasonable postage cost. I genuinely believe it actually sped up my recovery and is now part of my weekly routine. It gives a full body workout and at first it was really tough, stick with it, it will get easier. 	2022-10-09 23:00:00.000+00	169	1	Purchased as I was injured 
467	Hayley 	Great piece of kit. Easy to put together.Service was great, easy to order and was shipped quickly. 	2023-10-24 23:00:00.000+00	170	1	Excellent service 
468	clijam 	Unbelievable fast service, ordered Saturday morning, delivered Monday!This is a serious bit of kit, very easy to put together plus you can do everything you need to set goals and record direct to your smartphone. 	2023-06-04 23:00:00.000+00	170	1	First class service 
469	Paula 	I got the 10kg bar..it’s amazing…can so sooo many different workouts with it…I love it. It’s so comfortable to hold and grip too!! So much nicer than having bulky weights at the end ???? 	2023-10-25 23:00:00.000+00	172	1	Absolutely superb 
470	babs 	The bar is as good as the ones at my local gym. I use it across my shoulders for walking lunges, it helps with my balance. It's also good for ball squats in my cramped home gym. 	2023-02-04 00:00:00.000+00	172	1	Good Quality 
471	Janet 	This is my 2nd weighted bar from Mirafit. Very comfy in the hand. Excellent product. 	2022-11-02 00:00:00.000+00	172	1	Excellent product 
472	VBR Fitness 	I use this in my Circuit Training classes. My clients like that it’s easy to grip and offers a number of challenging exercises. It’s very good quality at a great price. 	2022-04-30 23:00:00.000+00	172	1	Top quality bar 
473	Kate 	My outdoor class each bought one of these for loaded movement and dynamic exercises... absolutely love it and I wish I'd found out about these years ago! Great service and quick delivery too. 	2022-03-31 23:00:00.000+00	172	1	My new favourite piece of fitness kit 
474	GinaG 	These are a great product. They work well (slide!) and are good quality. 	2022-03-21 00:00:00.000+00	174	1	Great sliders 
475	Slip sliding away... 	Another great purchase from my favourite exercise equipment company... slidey side for carpet, non-slidey side for wood floors/tiles etc. Great on their own or good to combine with TRX style suspension straps, very compact and suitable to bring on hols etc. etc. 	2021-12-04 00:00:00.000+00	174	1	Very slidey... 'mountain climbers' with these are a breeze (almost!) 
476	Adam 	Practical and very easy to use. Highly recommended at a very reasonable price 	2021-01-14 00:00:00.000+00	174	1	Sliders 
477	Hosk 	Very good. They slide as required. Not sure how long the shiny side will last, but seem good value for now 	2022-10-18 23:00:00.000+00	174	0.6	Sliders - do as they say they would 
478	E 	So comfy i ordered two mats they came within a few days and were so worth buying as i always get a sore back and neck when doing situps. The thickness of the mat has made my workouts so much more enjoyable! Cant recommend these mats enough thank you Mira Fit 	2021-01-23 00:00:00.000+00	175	1	Best Gym mats!! 
479	ED 	These mats are very comfortable in comparison to any others I’ve had, however, after having been used approximately 3-4 times, most have wear and tear which I would not expect after very little use.They are very easy to clean also so the only disappointing issue is the quality. 	2023-04-23 23:00:00.000+00	175	0.6	Disappointed 
480	K 	Very very comfortable... 	2023-10-11 23:00:00.000+00	176	1	Excellent 
481	Dawnygirl 	I’ve bought a few Mats for Pilates, this is great got really good grip, thick and longer, love it, super pleased 	2023-04-05 23:00:00.000+00	176	1	Excellent 
482	Roughrider 	Nice and thick and soft, quite pricey, looks nice with the other black and orange gear in my gym 	2023-04-02 23:00:00.000+00	176	1	It's a mat 
483	Den 	Great service, quick delivery and fantastic quality 	2023-03-26 00:00:00.000+00	176	1	Great exersise mat 
484	Daniel 	Amazing product, fast delivery and very stylish 	2023-01-09 00:00:00.000+00	176	1	AmAzing 
485	Flex 	Space saving, soft, and maximum comfort levels provided by the mat. Had handles at the side for easy transportation or hanging out of the way. Ideal way to own a mat which cannot be permanently laid out and does not misshape overtime as can happen with roll ups. 	2023-08-30 23:00:00.000+00	177	1	6ft folding gym mat 
486	Iain 	Great mats. Can be used to sit for seated rows on floor as well as stretch/core work etc. Very comfy. Had them in works gym where they were much abused but they stood up to it very well. Should last me a lifetime!! 	2023-04-15 23:00:00.000+00	177	1	Fat Mat 
487	Ash 	Bought for my son to practice judo at home. Love the folding size, neatly behind a door or side of sofa. Going to need a second one for extra room as judo is a lot of falling over and these are the same thickness as the mats they use. Quick dispatch, great product 	2023-03-30 23:00:00.000+00	177	1	Perfect for judo practice! 
488	Andy 	Just the right combination of softness and support. Soft enough to be comfortable but not so soft that you go right through it and feel the floor.The tri-fold design makes it easy to pack away and carry. 	2023-03-27 23:00:00.000+00	177	1	Excellent mat 
489	Jon 	Proper decent mat that! Great for mobilisation work and easy to transport 	2023-01-08 00:00:00.000+00	177	1	Great 
490	J 	Very good quality, well cushioned mat 	2022-03-05 00:00:00.000+00	178	1	Excellent Product 
491	Ralph 	I bought a second one of these, one for home and one for gym classes. really great mat, thin but gives great support to knees etc, much more so than the thicker ones. 	2021-06-11 23:00:00.000+00	178	1	Great mat for price 
492	WT74 	Extremely light, easy to carry and non-slip. Warm to touch and totally non-slip even when dry and during fast-flow classes. I'm so happy with this product, thank you. 	2023-08-10 23:00:00.000+00	180	1	Excellent product 
493	Johnny 	If you get sweaty in yoga this is for you! Great mat. Bit stiff but lays flat nicely 	2023-03-18 00:00:00.000+00	180	1	Awesome 
494	Annie 	I purchased this mat for my daughter. Her previous foam mat shed and left bits everywhere. She loves the feel of her new mirafit mat and we are both very pleased with quality and performance of it. 	2021-07-03 23:00:00.000+00	180	1	Mirafit yoga mat 
495	Feral 	This yoga mat has transformed my practice! The cork is soft yet supportive and warm underfoot. I have not found it slippery at all doing warrior and down dog poses. The texture and warmth of the cork makes you feel more grounded than rubber / synthetic mats. It looks lovely in my clinic too 	2021-05-27 23:00:00.000+00	180	1	Brilliant yoga mat! 
496	Kate 	I bought this mat a few weeks ago and I have been searching for a more environmentally friendly one. It has great grip, rolls up nicely and is a really good thickness. Would definitely recommend! 	2021-02-08 00:00:00.000+00	180	1	Lovely Mat 
497	Rich 	This platform is so good. Professional standard and I've already bounced 260kg off it and it just absorbs the shock and sound wonderfully. And compared to other brands the value for money is probably unbeatable. I am a Mirafit fan boy however 	2023-09-14 23:00:00.000+00	181	1	Another quality piece of kit 
498	paul 	Really good, easy to put together.Would recommend to anyone.	2023-02-06 00:00:00.000+00	181	1	great 
499	Littlea34 	Perfect for what I wanted for my basement gym, order was handled really well, great service and communication and arrived quickly, thank you! Would definitely recommend 	2020-11-26 00:00:00.000+00	181	1	Great 
500	Pav 	It’s larger than I expected but it’s comfy and supports my back . Great purchase. 	2022-10-10 23:00:00.000+00	182	1	Large and comfortable 
501	Matt 	Great addition to the home gym, looks after your lower back. Well made. 	2022-06-28 23:00:00.000+00	182	1	Good bit of kit 
502	Harry 	Very helpful if you have a bad back and want to continue working out. Has a solid amount of cushion and can be tucked away. 	2022-05-30 23:00:00.000+00	182	1	Helpful 
503	Trev 	As well as good support for sit up/crunch I find this excellent for back extender exercises. Lifts you off the ground a little further to give bigger range of movement. 	2021-12-07 00:00:00.000+00	182	1	Good support 
504	Belly Bear 	I brought this just to save wear and tear on my lower back, I usually used a folded up towel but this tends to move.I was pleasently surprised when I discovered this does more than just protect your back, it actually works and stretches your abbs more due to the curvature of the matt, following the natural line of your back.This has definitely made my abbs pop visually alongside the more important benefits of health and fitness.Best bit of kit I've brought for the money to function ratio 	2021-08-31 23:00:00.000+00	182	1	Better than expected 
505	Luke 	Great product as always from Mira Fit. Doesnt slip. Excellent shape for sit ups and floor press. Excellent price and quick delivery. 	2021-02-09 00:00:00.000+00	183	1	Great product 
506	Bernie 	Just what I was looking for. Excellent quality, great size, quick delivery. Good firmness, not rock hard but not super squishy. Have been using for HSPU and sit ups and great for both. 	2021-02-04 00:00:00.000+00	183	1	Great Product 
507	Becka 	Really quick service, great products and good value 	2021-01-30 00:00:00.000+00	183	1	Great service and products 
508	Rich 	An excellent an mat, quick delivery and really great quality product at an affordable price. Spot on. 	2021-01-27 00:00:00.000+00	183	1	Excellent product 
509	LMP 	More than happy with the ab mat. It's good quality and very firm. Good value for money and quick delivery, as always from Mirafit. Thank you. 	2020-12-28 00:00:00.000+00	183	1	Great product 
510	Brownie 	Great bit of equipment 	2022-11-23 00:00:00.000+00	184	1	Mat 
511	STres 	Bought as a present and daughter is delighted with it. Uses it for workouts at home to protect her carpet. 	2022-05-23 23:00:00.000+00	184	1	Extremely pleased with purchase 
512	MisterP17 	I’m impressed to say the least. I have 3 of them now , one for my Peloton treadmill, one for my Peloton Bike. Now this one for floor exercises. Nice on the knees too and regains it’s shape quickly. 	2021-12-14 00:00:00.000+00	184	1	Floor mat 
513	Bernard 	This is a neat mat, non slip on carpet and tile. Used daily for a few weeks and seems to look like it will last a long time. 	2021-11-04 00:00:00.000+00	184	1	High Quality Mat 
514	catb0y 	Great sized mat for any weights or HIIT done at home.Cant fault Mirafit, everything I've purchased from them has been top quality. 	2021-10-14 23:00:00.000+00	184	1	Great Exercise Mat 
515	mark 	quick deliveryexcellent productall good 	2023-01-20 00:00:00.000+00	185	1	EXCELLENT 
516	SC 	I wanted a mat that could withstand HITT workouts with shoes on, this does the job perfectly. Doesn't slip around and cushions any sound on a wood floor. Slightly slippy when hands are sweaty. 	2021-03-18 00:00:00.000+00	185	1	Robust 
517	Bhavana 	The step looks and feels sturdy but is light enough to lift and store away. Perfectly suitable for chest press exercises. Looks more expensive than it is. 	2023-08-18 23:00:00.000+00	186	1	Does a great job 
518	Mark 	Excellent step, bought together with mini exercise step (cheaper to get 4 extra heigh adjusters that way than buying 4 on their own). Stability is very good for weight step ups (35kg). Arrived very quickly. 	2023-08-14 23:00:00.000+00	186	1	Mira Premium Exercise Step 
712	Jonny 	Basic but strong rack 	2022-08-09 23:00:00.000+00	243	1	Good 
520	Gareth 	I purchased this alongside the "mini exercise step" so that i'd have a lot of additional levels to make the step a lot higherI was wary because of reviews saying it was unstable yet i find it fine. Even if I use all of the levels I have and make the step really high it is still fairly stable. I can jump on and off it and it is finesummary - product is as described. perfect 	2022-08-23 23:00:00.000+00	186	1	Perfect 
521	Mani 	Step is solid, aesthetically pleasing, has 3 height options and while I'm waiting for my new bench, is filling the gap with a few of my flat bench excercises. Great piece of kit!Customer services were very quick to get back to me around my order when I had a question and were very helpful. Will be using Mirafit again! 	2022-04-23 23:00:00.000+00	186	1	Great step! 
522	Dave 	Really happy with the step. I like the fact it has adjustable height. It is well made and looks like it will stand the test of time. 	2023-09-22 23:00:00.000+00	187	1	Great 
523	Marta 	Wasn't sure if made good choice as it is a small step, but tried it few times and it does the job. Very happy with the product. 	2023-05-31 23:00:00.000+00	187	1	Good step 
524	GandT 	Good sturdy step. Great quality and great price. 	2023-05-10 23:00:00.000+00	187	1	Excellent 
525	MrDutch 	Solid quality product, it does not slip easy either. 	2023-03-06 00:00:00.000+00	187	1	Quality product 
526	Jane 	Due to back and leg problems my physio sets me stepping exercises which are tricky as I live in a bungalow. I started using a 'hop up' but didn't feel that secure on it so I ordered this step and am so pleased I did. Feels very safe and can adjust the height too depending on which exercise I'm doing. Very prompt delivery. Thank you. 	2023-01-21 00:00:00.000+00	187	1	Good quality step 
527	Mark 	Bought it as it was a cheaper way to get 4 extra height adjusters for the premium step, that buying them stand alone. A useful addition to the gym in its own right too. 	2023-08-14 23:00:00.000+00	188	1	Mira Mini Exercise Step 
528	PT Guru 	Bought this to use withy my clients. Great piece of equipment. Well made, sturdy and very durable. Highly recommended 	2023-03-28 23:00:00.000+00	188	1	A step up 
529	Barb 	I bought these as I was recommended them by my NHS Physiotherapist, who was using them himself. Not bulky, easy to adjust and sturdy. Delivered very quickly. 	2023-03-08 00:00:00.000+00	188	1	Just what is needed 
530	Wendell 	Excellent for home workouts I bought two sets. 	2023-02-19 00:00:00.000+00	188	1	Great Price! 
531	MariaO 	My trainer recommended this step so I can workout at home. Useful for so many exercises! 	2023-01-29 00:00:00.000+00	188	1	Great 
532	Richard 	I was unsure whether raising the whole step with 2 blocks each side would be safe. It's absolutely file and rock solid. No problems taking me (83 kg) plus holding 10kg dumbell in each hand (103kg in total) 	2022-03-29 23:00:00.000+00	189	1	Sturdy - raised step using 2 each side 
533	Tilly’s mum 	I bought the stepper & 2 extra risers at the start of lockdown. As I’ve got fitter I want to add to the difficulty because it’s a brilliant piece of kit. 	2021-06-30 23:00:00.000+00	189	1	Bloody brilliant addition 
534	Tracey66 	Absolutely live my new stepper and extra risers/ a great addition to my little gym room. Perfect size, steady on the floor and height adjustable for whatever activity I am doing. Love it. 	2021-02-14 00:00:00.000+00	189	1	Stepper and additional risers 
535	donna 	REALLY LOVE THE NEW EXTRA RISERS A GREAT ADDITION AS I LIKE TO PUT MORE EFFORT INTO MY WORK OUT. LOVE THEM 	2022-08-02 23:00:00.000+00	189	0.8	RAISER 
536	Ian 	Solid enough and a fair price. 	2021-04-22 23:00:00.000+00	189	0.8	Functional 
537	Sandra 	This hoop is excellent, tried and tested and now a daily essential to my excersise regime . Can recommend for beginners or experienced hoopers . Great quality for the price . Thankyou 	2023-10-04 23:00:00.000+00	191	1	Hula hoop 
538	Sophia, Surrey 	sturdy, so you don't need to worry dropping it before you master the technique, and then continue using it like a pro, good long term purchase 	2022-09-25 23:00:00.000+00	191	1	sturdy 
539	Emma 	Easy to put together, took two minutes max and feels very sturdy. Is large enough to go around easily. Heavy enough for the job but not too heavy. Can be uncomfortable at first but wear a second layer if you need to and you soon get used to the feel of it. No complaints at all. Everyone wants to have a go! 	2022-04-27 23:00:00.000+00	191	1	Brilliant 
540	Big Daddy 	Got this for my wife and she is very happy with it. Heavy enough to work up a sweat (much more than a standard hoop), but not stupidly heavy. 	2022-01-09 00:00:00.000+00	191	1	Excellent bit of kit 
541	Kelly 	Great product. Easy to put together and use. I have used it for a couple of weeks now and I am definitely getting stronger and loosing inches around my waist. It was reasonably priced and arrived earlier than expected. Would definitely reccomend to others. 	2021-03-16 00:00:00.000+00	191	1	Weighted Hula Hoop 
542	K 	Very very comfortable... 	2023-10-11 23:00:00.000+00	192	1	Excellent 
543	Dawnygirl 	I’ve bought a few Mats for Pilates, this is great got really good grip, thick and longer, love it, super pleased 	2023-04-05 23:00:00.000+00	192	1	Excellent 
544	Roughrider 	Nice and thick and soft, quite pricey, looks nice with the other black and orange gear in my gym 	2023-04-02 23:00:00.000+00	192	1	It's a mat 
545	Den 	Great service, quick delivery and fantastic quality 	2023-03-26 00:00:00.000+00	192	1	Great exersise mat 
546	Daniel 	Amazing product, fast delivery and very stylish 	2023-01-09 00:00:00.000+00	192	1	AmAzing 
547	Marta 	Absolutely fab they come in pairs! 	2023-05-31 23:00:00.000+00	194	1	Yoga blocks 
548	kaya 	Good standard yoga blocks 	2022-12-01 00:00:00.000+00	194	1	Good blocks 
549	Mauzi 	SmartSoftLightCheerful colourDelivery all good	2021-06-10 23:00:00.000+00	194	1	Happy 
550	Becca 	They do the job! Love how they come in a pair as most places don’t sell 2 this well priced together 	2021-01-28 00:00:00.000+00	194	1	GREAT! 
551	Adam 	This is the only mirafit product I have not given a 5 star review to. They are very useful and do exactly what they are supposed to but they are a total dust magnet. After just a few uses they look well used. But this is just a cosmetic issue as the product itself remains exactly the same. For this reason perhaps the orange option is not the best.But if you want solid, reliable yoga blocks at a great price these are a great choice. 	2021-01-14 00:00:00.000+00	194	0.8	Flexible, comfortable product 
552	WT74 	Extremely light, easy to carry and non-slip. Warm to touch and totally non-slip even when dry and during fast-flow classes. I'm so happy with this product, thank you. 	2023-08-10 23:00:00.000+00	195	1	Excellent product 
553	Johnny 	If you get sweaty in yoga this is for you! Great mat. Bit stiff but lays flat nicely 	2023-03-18 00:00:00.000+00	195	1	Awesome 
554	Annie 	I purchased this mat for my daughter. Her previous foam mat shed and left bits everywhere. She loves the feel of her new mirafit mat and we are both very pleased with quality and performance of it. 	2021-07-03 23:00:00.000+00	195	1	Mirafit yoga mat 
555	Feral 	This yoga mat has transformed my practice! The cork is soft yet supportive and warm underfoot. I have not found it slippery at all doing warrior and down dog poses. The texture and warmth of the cork makes you feel more grounded than rubber / synthetic mats. It looks lovely in my clinic too 	2021-05-27 23:00:00.000+00	195	1	Brilliant yoga mat! 
556	Kate 	I bought this mat a few weeks ago and I have been searching for a more environmentally friendly one. It has great grip, rolls up nicely and is a really good thickness. Would definitely recommend! 	2021-02-08 00:00:00.000+00	195	1	Lovely Mat 
557	Lb129 	Easy to inflate and helpful to aid exercise 	2023-09-25 23:00:00.000+00	196	1	Excellent use these balls every week in our gym class 
558	NA 	Arrived in good time, well packaged easy to inflate. A good ball and perfect for its intended use. 	2021-01-15 00:00:00.000+00	196	1	Good product, efficient delivery. 
559	Scobie 	Can't inflate no none return valveUseless 	2022-07-07 23:00:00.000+00	196	0.2	How the ...... do you inflate it 
560	Disappointed 	Pity it has no valve to control the escape of air 	2020-11-15 00:00:00.000+00	196	0.2	Very Disappointed 
561	Jules 	Great product and great value! 	2023-10-13 23:00:00.000+00	197	1	Great product 
562	… 	Very good price for quality, came very quick too! 	2023-03-09 00:00:00.000+00	197	1	Amazing 
563	Sally 	Arrived in good time and to be honest I was not sure what to expect as they are quite cheap. But they are perfect! Easy to inflate and good quality. I will be ordering more! Great value. 	2023-03-05 00:00:00.000+00	197	1	Perfect! 
564	Nettstar 	Pilates balls what can `I say? Does the job only thing is once blown up they look like 'walnuts' as they have been folded in a way to be packaged in a small bag and when opened and blown up the creases are left in! 	2021-10-05 23:00:00.000+00	197	0.8	Mirafit Pilates Balls 
565	Andie 	Firstly having ordered a multi pack of10 I only received 7, emailed Mirafit not had a reply. I dont like the large valve, it makes it difficult to inflatable the ball . It's impossible to hold the air in whilst trying to insert the valve. 	2022-01-25 00:00:00.000+00	197	0.4	Disappointed 
566	NickNack 	I’ve been thinking about adding the Pilates ring to my community classes and finally got around to ordering this set and so pleased I did, my members love them, they’re easy to transport, and add a new level to my classes. Such good value and service 	2023-02-03 00:00:00.000+00	198	1	Brilliant product 
567	Di 	Good quality rings which arrived promptly. Would definitely buy again 	2022-05-02 23:00:00.000+00	198	1	Pilates rings 
568	Susi2shoes 	Bought these to try and compensate for Body I used at the gym, the work really well and have added some fun challenges to working on balance & core strength 	2021-03-17 00:00:00.000+00	199	1	Great for improving balance 
569	Hele 	Arrived quickly, as describedA very useful tool 	2023-08-14 23:00:00.000+00	200	1	Mirafit ring 
570	wadstw 	Used to supplement a leg workout as men dont tend to train "inner thighs" It works and you can feel the tension so worth a try .A+++ 	2022-06-23 23:00:00.000+00	200	1	Inner thigh training 
571	An 	I have bought others & seen others that are dearer in price, but this was better made & otherwise very similar. Happy with the purchase! 	2022-06-22 23:00:00.000+00	200	1	Perfect 
572	Kasia 	One of the best exercise equipment I have at home. Also really comfy in use. Highly recommend x 	2022-03-09 00:00:00.000+00	200	1	Great stuff 
573	Jeanie 	This was bought for my daughter in law as she mine and wanted one. Great for toning arms and legs. 	2022-02-13 00:00:00.000+00	200	1	Great Ides 
574	Alex 	Looks the part. Solid AF. Very happy with my purchase. 	2023-10-23 23:00:00.000+00	202	1	Great box/step 
575	Karl 	Use it for warm ups before squatting and deadlift.Absolute solid, doesn’t move when you lose you balance.Very happy. 	2023-10-12 23:00:00.000+00	202	1	Awesome bit of kit. 
576	Mark 	Excellent product, well made and substantial.Shame the colour has changed to black from orange. 	2023-05-23 23:00:00.000+00	202	1	Excellent product 
577	Carl86 	Couldn’t decide between this and a Plyo box. I don’t regret the decision to get this. Very solid, is reasonably heavy and just doesn’t move when you jump or step onto it. 	2023-01-29 00:00:00.000+00	202	1	Solid and looks great 
578	Pistol Prits 	Great product, much sturdier then the pictures portray. I have the full set which provides great variations for exercises. Currently utilising these to strengthen functional movements in lower body and knee rehab! As an added bonus, allows shorter folk to reach the top shelf’s around the house ;) 	2023-01-17 00:00:00.000+00	202	1	Spring in my step 
579	Euan 	Boxes are absolutely ideal for plyo training. Extremely durable materials mean you needn't worry about damaging these in a hurry. Sturdy when they are secured in place by the velcro and don't rock when used. They are quite heavy and not the most manoeuvrable to switch up with ease initially but a great investment for the home gym! 	2023-08-08 23:00:00.000+00	203	1	Awesome 
580	Rowan 	I use these every week in the gym, solid product that encourages confidence of doing these box jumps for the first time. Would buy again! 	2021-11-01 00:00:00.000+00	203	1	Great quality 
581	Suesan 	Love it, would definitely recommend 	2021-10-17 23:00:00.000+00	203	1	Love it 
582	Shahz 	Great quality and great addition to my home gym. I left a 100kg log on them for a day or two and they are as good as new with no dents. Very happy with this purchase. 	2021-02-23 00:00:00.000+00	203	1	12 inch Mirafit blocks 
583	sleeplessj 	Compared to other named brands, for the money - you can’t go wrong. Proper weight to it, the Velcro straps keep the layers together solidly. Useful bit of kit that - very happy! 	2020-10-17 23:00:00.000+00	203	1	Solid materials, and construction. 
584	Michael 	Soft enough for hip thrusts without discomfort and large enough for this purpose using the 16 inch side 	2022-02-05 00:00:00.000+00	204	1	A good size and quality 
585	Aimee 	More stable than i was expecting. Really pleased, and great addition to my home gym. 	2021-08-09 23:00:00.000+00	204	1	Love it 
586	Dave R 	Really pleased with the jump box. It’s soft enough to provide a bit of give on the landings, whilst not so spongey to cause instability. Easy to wipe down after use. 	2021-03-04 00:00:00.000+00	204	1	Excellent Product 
587	Dayne 	Quality is there and material is durable. I was worried about the stability of the box due to the small ground-surface area when positioned on the 24" side. However, the box is perfectly weighted so works very well. The edges are also sturdy enough for strict step ups but soft enough for the shoulders in a hip thrust. 	2020-12-22 00:00:00.000+00	204	1	Great, multi-purpose plyo box 
588	Steve 	Quality product, does what it says on the box! 	2020-12-19 00:00:00.000+00	204	1	Quality 
589	Kairos Martial Arts 	Compared to a plain wooden ply box this seemed expensive. But it is well worth it, I'm very glad I spent the extra money. I use it in martial arts classes and the kids absolutely love using it. They get excited as soon as they see it's out. 	2022-10-22 23:00:00.000+00	205	1	Really good bit of kit 
590	Neil 	Excellent quality and great addition to our gym kit. 	2022-08-09 23:00:00.000+00	205	1	Great Jump box 
591	Shell 	Really solid well padded box. Great for practicing jumps without hurting your shins and knees. 	2022-07-25 23:00:00.000+00	205	1	Great! 
592	Agnes 	Our members love this box. It helps the people who are nervous about box jumps a lotSo can’t fault the product, only small detail that could be improved is it’s very heavy and large to carry so some handles would make the product even better 	2022-03-10 00:00:00.000+00	205	1	Great addition to our equipment list 
593	Baldy 	From order to reviving item was a very easy process. The item is 1st class. 	2021-12-13 00:00:00.000+00	205	1	Customer service. 
594	Claire 	Really great sturdy little box, easy to assemble and good quality. 	2022-09-26 23:00:00.000+00	206	1	Perfect little box 
595	Nick 	Easy to set up, and strong, we use it for stepping and jumping. Very well priced 	2022-04-13 23:00:00.000+00	206	1	Delighted 
596	El 	This box is great! It looks really good, was easy to put together and, with the internal support, it feels so sturdy . I have no concerns over safety when using it 	2021-10-26 23:00:00.000+00	206	1	Excellent quality 
597	MattLav 	Great priceFast deliveryEasily assembledSolid piece of kit 	2021-03-17 00:00:00.000+00	206	1	Solid 
598	Danners 	Well priced, easily assembled and sturdy 	2021-02-20 00:00:00.000+00	206	1	Excellent 
599	RichardP 	Great addition to my home gym. Found it difficult to guage which size to buy and will probably return for a taller box at some point. As has been mentioned, there are a lot of screws! 	2023-03-27 23:00:00.000+00	207	1	Very Sturdy Box! 
600	SP 	A well made sturdy piece of kit and nicely packaged, arrived in good time and was easy to assemble. Very happy! 	2022-06-28 23:00:00.000+00	207	1	Great piece of Kit 
601	H 	Really well constructed and super sturdy jump box. Easy to assemble and a good range of heights for all users. Well worth it. 	2022-04-12 23:00:00.000+00	207	1	Great 
602	Dee 	A great piece of kit, fitted together fairly easily tho fixing 37 screws caused palm blister! 	2021-03-26 00:00:00.000+00	207	1	Very substantial 
603	Matty 	Well made, strong, clean lines. Definitely recommend. 	2021-03-23 00:00:00.000+00	207	1	Great Plyo box 
604	Alan 	5 minutes to put together for years of use! Great box, nicely finished and does exactly what it should. 	2023-05-19 23:00:00.000+00	208	1	Great product 
605	Sj 	Good value, very strong and sturdy. Fits together well. 	2022-10-08 23:00:00.000+00	208	1	Great sturdy box 
606	Pete3 	A great box good buy definitely buy again Easy to build 	2022-06-04 23:00:00.000+00	208	1	A great box 
607	BigAl 	A well made, very strong box that was easy to assemble. Excellent quality and good value. 	2022-04-20 23:00:00.000+00	208	1	Excellent quality 
608	Natriles 	Awesome service yet again by Mirafit. The box is such great value - sturdy and so versatile. Recommended 	2022-02-18 00:00:00.000+00	208	1	Great product! Sturdy!! 
609	Val 	Really pleased with the dimensions and quality of this box. The padding is comfortable to step up onto and it's easy enough to move around too. 	2023-02-28 00:00:00.000+00	209	1	Good quality plyo box 
610	Odin 	Really pleased with these, sturdy, don't slide about but the main thing is the ease with which you can change position and ease strain on your elbows 	2023-09-18 23:00:00.000+00	213	1	Good gear 
611	Spanner 	Excellent service and quality, very stable 	2023-09-14 23:00:00.000+00	213	1	Excellent quality 
612	Daniel 	Breath fresh air & not the carpet + keep your back straight. Yes these make press ups far nicer. Very pleased 	2023-02-27 00:00:00.000+00	213	1	Comfy Press ups 
613	Curtis 	These push up handles save me from pain and stress on my wrists (RA) and deeper motion, they also allow additional movements to exercises on shoulders, (May work well with sliders) Very happy with these and highly recommended. 	2022-05-24 23:00:00.000+00	213	1	Wrist Saver! 
614	Garage Gym Nick 	Great product by mirafit as expected.Improves the standard push up and takes virtually all the pressure off your wrists. Recommended. 	2022-01-03 00:00:00.000+00	213	1	Saves my wrists! 
615	Steve 	These are the first resistance bands I've owned, but they seem very well made. Hope they last, no reason to think they won't. 	2023-10-17 23:00:00.000+00	214	1	Good quality bands 
616	SwindonRower 	Am using these for assisted pull-ups. Starting at band 6 and working down as I increase the reps. Is working well, band 6 is very powerful.They feel great and hopefully will last if cared for correctly. 	2023-10-04 23:00:00.000+00	214	1	Excellent quality 
617	Wendy 	Bought a set and impressed with the quality, particularly for the price. 	2023-08-28 23:00:00.000+00	214	1	Good Quality. Good Price 
618	GT 	Perfect bands for development of pull up ability and very good quality. 	2023-08-23 23:00:00.000+00	214	1	Resistance Bands 
619	Nick 	I bought 2 resistance bands of different strengths, the first being for warm-up. Very happy with them and I imagine they have years of wear in them. Thanks! 	2023-08-22 23:00:00.000+00	214	1	Resistance bands 
620	BettyB 	Delighted with my purchase. Really good quality product.	2023-05-12 23:00:00.000+00	215	1	Great Resistance Bands 
621	Jo 	Great product & delivery service 	2023-04-20 23:00:00.000+00	215	1	Great 
622	Mike 	Good quality resistance bands and at a good price. 	2023-02-22 00:00:00.000+00	215	1	Good Quality 
623	Tony 	These resistance bands are excellent quality and feel as though they will last indefinitely. 	2022-04-18 23:00:00.000+00	215	1	Excellent 
624	Derfael 	I'm very happy with these. Unlike a lot of bands that increase resistance by decreasing length. Mirafit band are all the same length which means you can actually fit your legs in them. Which is handy if like me you're on the larger size. I definitely recommend them over any other brand. 	2022-02-13 00:00:00.000+00	215	1	Resistance band 
625	Seb 	Got these recently and they seem great quality. A very useful bit of equipment! 	2021-12-03 00:00:00.000+00	216	1	Quality is great 
626	T 	No good at all, the rubber has a shiny finish and won’t work as a floss band should. Bought for my thighs, tried twice with the same result of useless 	2022-08-29 23:00:00.000+00	216	0.2	Floss band 
627	Gain Forth Gym 	Bought these to create a banded deadlift platform. Worked perfect, fit the rack great and didn't bend under heavy load 	2023-02-10 00:00:00.000+00	217	1	Great products, strong for banded deadlifts 
628	Pete 	Good, solid band pegs. Fits the 18mm holes in my Bulldog Gear Mammoth Lite rack nicely with a little bit of play, but no issues. (The rack comes with M16 bolts anyway). These are the only ones that I found that would fit, as Bulldog don't seem to sell their own for some reason. Would definitely recommend. 	2023-01-03 00:00:00.000+00	217	1	16mm band pegs 
629	Wayne 	Great pegs well made but unfortunately didn’t fit my rack. But returns was easy and prompt refund made. 	2022-02-22 00:00:00.000+00	217	1	Great Pegs 
630	yusuf 	Excellent product well made and strong. appropriate fit to peg holes. Useful for using bands in different manners and hanging items on racks. Also useful for inserting to identify peg holes when a quick change in spotter arm or top bracket is required. Can be used on any rig or cage with 16mm holes. 	2021-07-10 23:00:00.000+00	217	1	well made can be used on any rack/cage with 16mm holes 
631	Chris 	Really good bands 	2021-09-30 23:00:00.000+00	218	1	Good bands 
632	RichardP 	I'm sure my mum had one of these in the 80's!! Really good for extra core work. Recommended! 	2023-03-27 23:00:00.000+00	220	1	Great value 
633	Scotty 	Great bit of kit, cheap sturdy and good quality 5 star ⭐️ 	2022-11-11 00:00:00.000+00	220	1	Ab Roller 
634	GinaG 	This a well made roller. I really did not expect it to be such good quality for the price. As others have said the handles are comfortable and it seems a sturdy piece of kit. The knee pad is a bonus! 	2022-03-21 00:00:00.000+00	220	1	Quality at a low price. 
635	Adam 	Strong handles and pads better than you would think. 	2022-01-07 00:00:00.000+00	220	1	Great bit of kit 
636	J 	Great product for the price 	2021-09-12 23:00:00.000+00	220	1	Ab roller 
637	Val 	I have a solid foam roller and wanted to step things up a bit in some areas and this has done just that. I thought the length might limit its' use as I'm used to a longer one but it doesn't at all. The price is very competitive too compared to others on the market. 	2023-02-28 00:00:00.000+00	222	1	Really sturdy foam roller to properly get into the knots 
638	Pav 	They definitely help with back pain despite being sceptical at first . 	2022-10-10 23:00:00.000+00	222	1	Definitely help 
639	Terry 	This item is one of the smaller and cheaper items I have bought from Mirafit.I am very pleased I did purchase this item as I have used this each workout that I have had and it has helped so much to target those muscles that the longer foam rollers do not reach.Terry Holland's shows you exactly how this product should be used. 	2022-03-08 00:00:00.000+00	222	1	Essential 
640	Jack 	I’ve purchased other rollers in the past but none have been as effective as this one! 	2021-02-24 00:00:00.000+00	222	1	Would recommend 
641	Tiny 	Excellent roller excellent service every time 	2021-02-04 00:00:00.000+00	222	1	Good firm roller 
642	Hopscotcher 	Right size, weight and firmness. Good value, and promptly delivered. Could not have asked for more. 	2023-03-22 00:00:00.000+00	223	1	Top log! 
643	Davo 	Looked around after my physiotherapist suggested I should get one.Strong, firm roller nicely made and delivered promptly.	2023-03-20 00:00:00.000+00	223	1	Perfect 
644	Shirl 	I needed this roller as I am having tightness in my upper back and this roller is perfect for this. It was delivered in perfect condition, very happy with it. 	2022-08-19 23:00:00.000+00	223	1	Excellent roller 
645	Curtis 	This 91cm roller is very firm and a great length for wider shoulders, I have arthritis and place this roller on the bridge of my feet to assist with push ups. I don't think I've heard my back crack as much as this roller can. Great piece of gym equipment. Highly recommended! 	2022-05-24 23:00:00.000+00	223	1	Great Roller! Multi use! 
646	GinaG 	A firm and reassuringly well made, solid roller. You don't feel that it might collapse under you. It is my first experience with such a roller and I lay on top of it. I have a shorter roller for 'massage'. It really helps with back pain and shoulder issues. 	2022-03-21 00:00:00.000+00	223	1	Sturdy, solid and a good length 
647	John doe 	Been looking for one at a decent price found this one works in all the ways you need it to great for the back. 	2022-03-10 00:00:00.000+00	224	1	Amazing product 
648	Iesa 	Good solid piece of equipment but I prefer to use it with a plate pin 	2023-10-16 23:00:00.000+00	225	1	Wrist Roller 
649	TM28 	This works your forearms like nothing else, you really feel the burn, it's definitely worth being apart of your programme. 	2023-07-31 23:00:00.000+00	225	1	Very Interesting 
650	Sam 	This will definitely last a lifetime, very robust build. Really fires up the wrists too! I use it every week 	2023-07-11 23:00:00.000+00	225	1	Strong build quality and works really well 
834	Triangledan 	More than adequate to do the job, and it looks great. 	2022-03-16 00:00:00.000+00	284	1	Good bit of kit - Fixings provided. 
651	Mitch p 	Loads of people in the gym have been coming up to me, showing interest in this product. I don’t think it will ever break! It’s very sturdy and well made 	2023-01-28 00:00:00.000+00	225	1	Great sturdy product 
652	Peter 	. 	2022-12-19 00:00:00.000+00	225	1	Very effective 
653	Dave 	Great rope for the price. Handles are a nice weight and feel like they will last. Will just need to buy replacement rope from time to time. Nice smooth spin. No complaints 	2021-12-20 00:00:00.000+00	226	1	Excellent value 
654	Ali 	Great skipping rope but keep checking the screws are tight as they come loose when in use 	2021-01-05 00:00:00.000+00	226	1	Skipping rope 
655	Grover 	Really do the job, I feeling work all my arms and back , great 	2023-06-20 23:00:00.000+00	227	1	Excellent heavyweight rope 
656	VBR Fitness 	I use this in my Circuit Training classes. My clients use this after a speed rope and there’s a massive difference in technique and effort required - helps me to keep challenging them. 	2022-04-30 23:00:00.000+00	227	1	Real workout 
657	BENJ 	Great rope. I bought the 1kg version and its perfect to start weighted skipping. Makes the workout harder on the shoulders and a slower tempo. Good addition to regular skipping. 	2022-02-24 00:00:00.000+00	227	1	Perfect weight 
658	Andrew 	My brother bought me the 2 inch/9”2 rope for my birthday. It weighs 3.6kg/7.9lbs which is the heaviest rope I’ve seen online. I weighed it to make sure. This rope is really hard. It works your upper body especially your arms and shoulders. You have to be careful with your jump rope form or you could easily injure yourself. Great product!! 	2021-07-27 23:00:00.000+00	227	1	Great product not for beginners! 
659	Cb 	Great product, solid build. And don't get ahead of yourself and jump straight into the heaviest option, the lightest of these ropes is still a huge difference to a normal non weighted rope. 	2021-06-01 23:00:00.000+00	227	1	Excellent 
660	Ann 	I bought this at my son's request for his birthday so I never actually saw the item as it was delivered direct to him. Two points here - he was really pleased with the item, exactly what he wanted, and from my perspective the service was second to none with delivery being exceptionally speedy and both myself and my son kept well informed about when it would arrive. Would definitely recommend. 	2023-05-13 23:00:00.000+00	229	1	Perfect 
661	Nikola 	Perfect for smaller bars and straight bars in general. Mirafit products are almost always top of the top 	2023-02-24 00:00:00.000+00	229	1	Excellent, sturdy and simple 
662	CC 	Nice and small footprint, well made and works well for all my bars. Probably the best item I found on the market for 4-5 bars. 	2022-09-29 23:00:00.000+00	229	1	Great quality product - well designed 
663	sumeet21585 	Happy to recive that 	2022-09-07 23:00:00.000+00	229	1	awesome 
664	Patrick 	Compact but very sturdy and stable - it does, as one reviewer said, look almost like modern sculpture with my bars in.Got 2 Olympic bars and one axle dumbbell currently stored - all perfectly vertical and no wobble. Planning to to get more.Very good value, solid, practical and looks fantastic.Another great purchase from Mirafit! 	2022-05-14 23:00:00.000+00	229	1	Excellent piece of Kit 
665	Mia 	Bigger and heavy than thought. Brought for hubby a gift for Christmas 	2023-09-27 23:00:00.000+00	230	1	Good Quality 
666	Steve 	Took a chance with this standard bar stand as I have 28mm bars and I wanted a stand for them. I wondered if I removed the plastic inserts in the tubes would my 28mm bars fit in? Obviously they are meant for 1” bars with the inserts fitted. I am well pleased to say they fit perfectly with the inserts removed! Absolutely well chuffed! The stand itself is really well made and solid. It was well packaged too. Brilliant purchase. Thx Mirafit! 	2022-05-03 23:00:00.000+00	230	1	Excellent piece of kit and fits 28mm bars! 
667	David 	This stand is brilliant. Looks great and holds all of my bars. So pleased I bought it 	2022-02-18 00:00:00.000+00	230	1	Brilliant 
668	Shokes 	A well made sturdy bar stand. Great for storing a number of 1inch bars. 	2020-12-05 00:00:00.000+00	230	1	Solid Bar Stand 
669	Simon 	Good quality, quick delivery and easy to install. 	2023-09-28 23:00:00.000+00	231	1	Looks great 
670	Jay 	Nicely built wall rack which looks like it will comfortably hold my 3 solid bars instead of having to lean them up against a wall and the colour combination looks fantastic.Haven’t actually put them up yet as I will need to get the wall studded before fitting them as they are quite heavy and when the bars are placed in them they will be adding a lot of weight to the fixing wall. 	2023-03-11 00:00:00.000+00	231	1	Aesthetically pleasing space saver 
671	Milly 	Perfect addition to home gym looks great 	2022-05-05 23:00:00.000+00	231	1	Great gun rack for the bars 
672	Rob 	I bought some mirafit stuff years ago on Amazon and wasn’t that impressed with the quality but it must have had an upgrade the last few bits I have bought have far exceeded other brands and usually for two thirds of the price. This rack is solid, well finished and easily holds my 4 bars without moving at all. A must for a garage gym 	2022-04-24 23:00:00.000+00	231	1	Stylish and strong rack 
673	Corin 	Came within a couple of days and easy to install.Holds bars and looks good, so very happy. 	2021-05-22 23:00:00.000+00	231	1	Good service and speedy delivery 
674	John 	Excellent. Easy to put up and holds my three main bars and has room for the lat pull down bar to rest on top. Recommended. 	2023-01-02 00:00:00.000+00	232	1	Good bar holder 
675	david 	Great looking solid storage option. Would definitely recommend. 	2022-10-12 23:00:00.000+00	232	1	Heavy Duty 
676	Lianne 	Looks good, sturdy, fixings provided holds all the bars I have 	2022-07-18 23:00:00.000+00	232	1	Fab 
677	Triangledan 	More than adequate to do the job, and it looks great. 	2022-03-16 00:00:00.000+00	232	1	Good bit of kit - Fixings provided. 
678	Niall N 	Looks great, easy to fit and does exactly what it says it will, couldn’t be happier with the rack! 	2022-02-25 00:00:00.000+00	232	1	Excellent Product 
679	Oldboygrandad 	Great fixings,Holds the safety squat bar plus standard Olympic,nice polycarbonate cover .Certainly beats bumping your head on bars stuck out and saves space. 	2021-10-26 23:00:00.000+00	233	1	Solid secure 
680	Oldboygrandad 	Wall anchors that are provided are 13mm bolt head solid fixing,Nice smooth finish with the hard plastic skin .Takes the Olympic squat safety bar and 7 ft standard bar with ease, no more banging your head on bars.	2021-10-17 23:00:00.000+00	233	1	Solid construction 
681	James 	Got this to tidy up my garage gym. Great job and easy to mount on the block wall using the fittings supplied. Keeps my Olympic and EZ bar safely out of the way when not in use and still space for another bar. Even better is that I can always find my lock jaw collars now! 	2021-09-10 23:00:00.000+00	233	1	Great Storage 
682	RyanT 	As usual with Mirafit, great product at w great price. Looks great in my home gym 	2021-07-21 23:00:00.000+00	233	1	Very sturdy 
683	Derek 	A great bit of kit to keep the gym tidy 	2021-06-29 23:00:00.000+00	233	1	Vertical wall rack 
684	Mark 	Great way to keep bars tidy instead of leaving them laying around on the floor. Fixings provided are more then suffient, very solid! 	2022-04-26 23:00:00.000+00	234	1	Excellent Quality 
685	Steve B 	Very sturdy. A good addition to the garage to keep everything tidy 	2022-02-03 00:00:00.000+00	234	1	Good quality 
686	Bob 	I've been building a gym in my garage with a friend, it's pretty compact so wanted to have somewhere to store the bars. I'd love to say it was easy to out up, and to the average normal red blooded man it probably is. The garage walls are made up of 3-4 inch concrete blocks. They were a c*ck to drill though, unless you have a sds drill. You'll need 10mm drill bit and some more substantial wall plugs. With the right drill and drill it went up a treat!! 	2021-02-26 00:00:00.000+00	234	1	Does the job!!! 
687	Pete 	Does the job very well, used the supplied fittings and holds up fine. 	2021-01-31 00:00:00.000+00	234	1	Easy to fit 
688	John 	This rack is a solid piece of kit, it looks the part in the home gym and does the job perfectly. Can't fault it and the delivery was really quick as always. Would strongly recommend this product and MiraFit full stop. 	2021-01-29 00:00:00.000+00	234	1	Looks the business and is solid 
689	Dorey 	Brilliant piece for my home gym! Looking very neat and Orderly now. Really pleased with it 	2023-07-09 23:00:00.000+00	237	1	Love it 
690	Robert 	Well engineered equipment. 	2023-06-05 23:00:00.000+00	237	1	Great product. 
691	Bingojones 	Bought a couple in the end! Great for reconstituted rubber plates. 	2023-04-16 23:00:00.000+00	237	1	Exceeded expectations 
692	Sparky 	Great service and product 	2022-06-11 23:00:00.000+00	237	1	Great service 
693	Sparky 	Excellent service and product 	2022-06-11 23:00:00.000+00	237	1	Excellent 
694	Mongey 	Excellent storage system, bought this for my eldest son as a surprise. I was getting so fed up with his gym looking so messy, what with weights, medicine balls everywhere... and .....he absolutely loves it. Very quick delivery always kept informed every step of the way by DHL. Looks amazing.. will definitely be using Mirafit again 100/10 	2022-05-14 23:00:00.000+00	238	1	MIRAFIT 2 BAY GYM STORAGE SYSTEM 
695	Kacy 	I recently bought the Mirafit Single Bay Gym Storage System, it's a very solid system. Exactly what I required for my home gym. I am very pleased with it. 	2023-06-19 23:00:00.000+00	239	1	Solid Gym Storage System 
696	Flo 	So i've recently built my own home gym and this really helped to keep everything tidy. Its easy to put together and very robust and strong. Really pleased with it and would recommend. 	2022-10-09 23:00:00.000+00	239	1	Excellent Storage rack 
697	Marisa 	Love this unit; it’s ideal for my space and was very easy to assemble .It’s very sturdy and looks great. 	2021-02-10 00:00:00.000+00	239	1	Love it 
698	Tom 	Amazing storage rack, appreciate they’re not the cheapest. But it does the job so well and feels bomb proof. One thing I would note, which I do think Mira Fit need to add onto their info. You need a large roof clearance for the barbell holders if using them for 7ft barbells. And the accessory hooks for the top won’t work if you’re planning on putting the shelve as high as possible. But all in all really happy with the product. 	2023-02-14 00:00:00.000+00	240	1	Worth every penny for the storage rack! 
699	Full circle fitness 	We have 2 separate units that we’ve built - different heights and widths.Both very sturdy and neat. 	2022-11-08 00:00:00.000+00	240	1	Well built - great value 
700	Lewis 	Great price of kit! Got the 180cm width. Mega strong and fit for purpose. Heavy as well, no need to bolt down. Carry’s 400kg easily. Wanted the medball 180cm but currently out of stock, may still get them when back in. Makes the gym look so much better and more professional 	2022-10-08 23:00:00.000+00	240	1	Absolutely Solid! 
701	Michael 	Basically a gym in one corner of the room. Got it for our studio and it’s revived the most positive comments out of anything we’ve bought… weird.Anyway - robust and an excellent use of space! 	2022-04-12 23:00:00.000+00	240	1	Lovely bit of kit 
702	Bish 	Extremely happy with the storage system. It has offered me loads more space in my garage gym.l and fits in well with the rest of my equipment. Delivery was prompt and I was kept informed during the whole process. Very happy with the service and product. 	2022-03-23 00:00:00.000+00	240	1	Fantastic 
703	Scott 	does the job and looks great 	2020-11-16 00:00:00.000+00	241	1	great rack 
704	Iain 	Was goimg to buy the cheaper one that had good reviews but really glad I paid a bit more. Top quality kit 	2020-11-05 00:00:00.000+00	241	1	Faultless 
705	Scott 	Great quality easy to assemble rack with the option to extend so happy I bought this 	2020-10-18 23:00:00.000+00	241	1	Mirafit all the way 
706	Gez 	Fantastic quality rack at a very reasonable price, took about 10/15 minutes to put together. Love it. Mirafit for the win... again!!! 	2023-06-26 23:00:00.000+00	242	1	Quality Rack 
707	Taff 	Good quality, very sturdy rack, got 9 pairs on there, from 10-30kg and is perfect. Would definitely recommend 	2023-05-18 23:00:00.000+00	242	1	Nice Item 
708	Mike 	Very sturdy and makes great use of the space. Perfect for what I needed, currently have 5-20kg dumbbells in 2.5 increments and still have the whole bottom row to fill with heavier dumbbells once I'm ready for them. All for a great price, very happy with it! 	2023-05-12 23:00:00.000+00	242	1	Sturdy rack and great value for money 
709	Raz 	Very strong and great quality wieghts.DHL, didn't send out items as promised was over a week late. Not apply with delivery service. But quality of product very good 	2023-03-26 00:00:00.000+00	242	1	Good quality rack with quality weights 
710	Kevin 	Excellent value for money, the powder coat is very high quality and really decent finish A+++++ 	2023-03-23 00:00:00.000+00	242	1	Dumbell Rack 
711	Hass 	High quality for an affordable price! 	2023-01-03 00:00:00.000+00	243	1	Great! 
713	Mr T 	My 250kg rack lives indoors. It looks neat, tidy and not too obtrusive in the room. It is an upright design with strongly welded parts and it does not flex or strain to take the full load of hex dumbbells. Very pleased with it. 	2022-06-16 23:00:00.000+00	243	1	Good strong rack 
714	Trevor 	Got this when buying Mirafit rubber dumbbells. The components are very strong and it just takes minutes to put together. Got the orange one which also looks very stylish alongside the M250 bench I got from Mirafit as well. Excellent piece of equipment. 	2022-06-13 23:00:00.000+00	243	1	Very Strong 
715	Kawt55 	Mirafits quality has always spoken for itself and there is no difference here. Looking for a sturdy well built, easy to put together DB rack, get this and you won't regret it 	2022-05-23 23:00:00.000+00	243	1	Mirafit quality 
716	David 	Great little rack for its size. Fits my small home gym perfectly and holds what I need it to. Easy to assemble. 	2023-10-20 23:00:00.000+00	244	1	Great buy 
717	Dave 	Sturdy rack that fits the space in my gym perfectly. There is a slight wobble side to side like other reviews have said, but that's to be expected with the way its been designed. Quality is as I've come to expect from mirafit - well engineered and will last for years to come. 	2023-02-12 00:00:00.000+00	244	1	Great entry point dumbell rack 
718	Kez 	Great stand does the job 	2023-01-25 00:00:00.000+00	244	1	Great 
719	Tony P 	A very well made, good looking rack. I have read complaints that it is not sufficiently robust as the bottom joints splay slightly under load. I do not think this is a valid criticism as the brackets are perfectly strong enough with up to 150kg load and slight splaying is to be expected. 	2022-06-01 23:00:00.000+00	244	1	Excellent product 
720	Tony Page 	I think this is an excellent product for a small gym.Others have suggested that it may not be substantial enough and have been concerned by a slight splaying of the bottom joint under load. I do not think this is a valid complaint as the brackets gives it ample structural integrity. I would be quite happy storing 150kg on it. 	2022-05-28 23:00:00.000+00	244	1	Excellent product 
721	Steph 	I assembled this vertical dummbell stand in a jiffy - so no time at all. It is working amazingly to store my dumbbell set from 2.5 kg upto 15kg. It is strong, sturdy and works perfectly. I love it and would highly recommend it! 	2023-10-03 23:00:00.000+00	245	1	Easy to assemble, Strong & Sturdy 
722	FIFA 	Super chuffed with my purchase. Nice and sturdy, and easy enough to assemble. Delivery came super quick too!! Definitely recommend 	2023-09-30 23:00:00.000+00	245	1	Dumbbell Stand 
723	Baz 	Nice and sturdy piece of kit, easy to assemble and arrived promptly 	2023-04-25 23:00:00.000+00	245	1	Great Kit 
724	Hollie 	Rack as expected, well packaged and straight forward to assemble by myself. Packaged very well and arrived quickly. Definitely will use Mirafit again! 	2023-03-05 00:00:00.000+00	245	1	Quick delivery, great product 
725	Review 	Exactly as described, very sturdy. Very happy with the service and product. 	2022-12-21 00:00:00.000+00	245	1	Brilliant Dumbbell Storage 
726	Balloo 	Tidies up our various makes kettlebells and dumbells. Solid, sturdy rack. Real easy to assemble. Defo buying from Mirafit again! 	2023-02-05 00:00:00.000+00	246	1	Solid 
727	Weephil 	Brilliant piece of kit. Very reasonably priced. Huge capacity for my KBs, wall/med balls and sandbag 	2023-01-03 00:00:00.000+00	246	1	Sturdy beast 
728	SG 	Excellent rack for my kettlebells and dumbbells, and it was easy to put together. I would totally buy from this company again. 	2022-10-27 23:00:00.000+00	246	1	Good size, quality and cost 
729	G-Man 	Easy to put together, very sturdy & does the job. 	2022-02-06 00:00:00.000+00	246	1	Solid, simple storage 
730	Dorey 	Brilliant piece for my home gym! Looking very neat and Orderly now. Really pleased with it 	2023-07-09 23:00:00.000+00	247	1	Love it 
731	Robert 	Well engineered equipment. 	2023-06-05 23:00:00.000+00	247	1	Great product. 
732	Bingojones 	Bought a couple in the end! Great for reconstituted rubber plates. 	2023-04-16 23:00:00.000+00	247	1	Exceeded expectations 
733	Sparky 	Great service and product 	2022-06-11 23:00:00.000+00	247	1	Great service 
734	Sparky 	Excellent service and product 	2022-06-11 23:00:00.000+00	247	1	Excellent 
735	Thomas 	Perfect piece of kit for all my bumper plates. Super easy to setup. Filled each arm nearly full. And it doesn't take up too much space. Highly recommend 	2023-07-28 23:00:00.000+00	248	1	Weightlifting tree 
736	Sara 	Easy to assemble, super quick delivery, and perfect for my male & female bar + my full set of bumper plates! Thanks Mirafit! 	2023-01-21 00:00:00.000+00	248	1	Weightlifting tree 
737	Jamie 	I bought this for my home gym so I had somewhere to store my plates. This was easy to build and does the job well. Feels pretty solid over 200kg loaded on it. 	2022-12-12 00:00:00.000+00	248	1	Well made and easy to assemble 
738	SG 	This is a sturdy rack for my kettles and dumbbells, and it was easy to put together. Great customer service also! Would shop from these guys again! 	2022-10-27 23:00:00.000+00	248	1	Good size and quality 
739	nige 	Another first class product from mirafit , had this assembled and loaded within 30 minutes of opening , this would not look out of place in any gym home or commercial just oozes class, and so sturdy had it maximum loaded on one side empty on the other and still not even a quiver, and not over large also takes largest weights on all poles at the same time , dont buy inferior products this is unbeatable 	2022-10-02 23:00:00.000+00	248	1	olympic weight tree 
740	Balloo 	Tidies up our various makes kettlebells and dumbells. Solid, sturdy rack. Real easy to assemble. Defo buying from Mirafit again! 	2023-02-05 00:00:00.000+00	249	1	Solid 
741	Weephil 	Brilliant piece of kit. Very reasonably priced. Huge capacity for my KBs, wall/med balls and sandbag 	2023-01-03 00:00:00.000+00	249	1	Sturdy beast 
742	SG 	Excellent rack for my kettlebells and dumbbells, and it was easy to put together. I would totally buy from this company again. 	2022-10-27 23:00:00.000+00	249	1	Good size, quality and cost 
743	G-Man 	Easy to put together, very sturdy & does the job. 	2022-02-06 00:00:00.000+00	249	1	Solid, simple storage 
831	John 	Excellent. Easy to put up and holds my three main bars and has room for the lat pull down bar to rest on top. Recommended. 	2023-01-02 00:00:00.000+00	284	1	Good bar holder 
744	Mongey 	Excellent storage system, bought this for my eldest son as a surprise. I was getting so fed up with his gym looking so messy, what with weights, medicine balls everywhere... and .....he absolutely loves it. Very quick delivery always kept informed every step of the way by DHL. Looks amazing.. will definitely be using Mirafit again 100/10 	2022-05-14 23:00:00.000+00	251	1	MIRAFIT 2 BAY GYM STORAGE SYSTEM 
745	Kacy 	I recently bought the Mirafit Single Bay Gym Storage System, it's a very solid system. Exactly what I required for my home gym. I am very pleased with it. 	2023-06-19 23:00:00.000+00	252	1	Solid Gym Storage System 
746	Flo 	So i've recently built my own home gym and this really helped to keep everything tidy. Its easy to put together and very robust and strong. Really pleased with it and would recommend. 	2022-10-09 23:00:00.000+00	252	1	Excellent Storage rack 
747	Marisa 	Love this unit; it’s ideal for my space and was very easy to assemble .It’s very sturdy and looks great. 	2021-02-10 00:00:00.000+00	252	1	Love it 
748	Tom 	Amazing storage rack, appreciate they’re not the cheapest. But it does the job so well and feels bomb proof. One thing I would note, which I do think Mira Fit need to add onto their info. You need a large roof clearance for the barbell holders if using them for 7ft barbells. And the accessory hooks for the top won’t work if you’re planning on putting the shelve as high as possible. But all in all really happy with the product. 	2023-02-14 00:00:00.000+00	253	1	Worth every penny for the storage rack! 
749	Full circle fitness 	We have 2 separate units that we’ve built - different heights and widths.Both very sturdy and neat. 	2022-11-08 00:00:00.000+00	253	1	Well built - great value 
750	Lewis 	Great price of kit! Got the 180cm width. Mega strong and fit for purpose. Heavy as well, no need to bolt down. Carry’s 400kg easily. Wanted the medball 180cm but currently out of stock, may still get them when back in. Makes the gym look so much better and more professional 	2022-10-08 23:00:00.000+00	253	1	Absolutely Solid! 
751	Michael 	Basically a gym in one corner of the room. Got it for our studio and it’s revived the most positive comments out of anything we’ve bought… weird.Anyway - robust and an excellent use of space! 	2022-04-12 23:00:00.000+00	253	1	Lovely bit of kit 
752	Bish 	Extremely happy with the storage system. It has offered me loads more space in my garage gym.l and fits in well with the rest of my equipment. Delivery was prompt and I was kept informed during the whole process. Very happy with the service and product. 	2022-03-23 00:00:00.000+00	253	1	Fantastic 
753	Thomas 	Perfect piece of kit for all my bumper plates. Super easy to setup. Filled each arm nearly full. And it doesn't take up too much space. Highly recommend 	2023-07-28 23:00:00.000+00	257	1	Weightlifting tree 
754	Sara 	Easy to assemble, super quick delivery, and perfect for my male & female bar + my full set of bumper plates! Thanks Mirafit! 	2023-01-21 00:00:00.000+00	257	1	Weightlifting tree 
755	Jamie 	I bought this for my home gym so I had somewhere to store my plates. This was easy to build and does the job well. Feels pretty solid over 200kg loaded on it. 	2022-12-12 00:00:00.000+00	257	1	Well made and easy to assemble 
756	SG 	This is a sturdy rack for my kettles and dumbbells, and it was easy to put together. Great customer service also! Would shop from these guys again! 	2022-10-27 23:00:00.000+00	257	1	Good size and quality 
757	nige 	Another first class product from mirafit , had this assembled and loaded within 30 minutes of opening , this would not look out of place in any gym home or commercial just oozes class, and so sturdy had it maximum loaded on one side empty on the other and still not even a quiver, and not over large also takes largest weights on all poles at the same time , dont buy inferior products this is unbeatable 	2022-10-02 23:00:00.000+00	257	1	olympic weight tree 
758	Baz 	Very good 	2023-07-29 23:00:00.000+00	258	1	Weight plate rack 
759	Stacey 	Absolutely ideal for what we needed make adding, changing, and storing plates easier 	2023-04-21 23:00:00.000+00	258	1	Perfect compact storage 
760	Rich 	Absolutely excellent. Recommended weight is 150kg but I have about 270kg currently hanging from mine. Assembly is about 90 seconds with 2 screws. Do love.mirafit 	2023-03-26 00:00:00.000+00	258	1	Excellent 
761	nickcl 	Did the job well and compared to other products I found, I thought the price was reasonable. 	2023-01-09 00:00:00.000+00	258	1	Good quality 
762	Chris B 	I got this to tidy up my adjustable dumbells, plus some metal 10s i use on my log. its really convenient, and holds loads (just not bumpers like it says) 	2023-01-01 00:00:00.000+00	258	1	Great produuct 
763	Taff 	Fast delivery, great price! Already loaded ,very strong and sturdy. Would definitely recommend ???? 	2023-05-19 23:00:00.000+00	259	1	Just the Job 
764	JIRc 	Very good 	2023-04-13 23:00:00.000+00	259	1	Exactly what I needed 
765	Jan 	Good 	2023-01-26 00:00:00.000+00	259	1	Good 
766	Mia 	Fast delivery, arrived before date given. It is a present for hubby for Christmas therefore have not opened or used 	2022-09-25 23:00:00.000+00	259	1	Quick Delivery 
767	bigjon 	very well made, great value, easy to put together, rugged and sturdy. AAA+++well worth buying 	2022-07-20 23:00:00.000+00	259	1	superb value, well made 
768	Peter Rogerson 	great piece of kit for storing my Olympic plates using the fixing supplied its fitted to my garage wall and I`m actually surprised how sturdy it is considering the weight it holding, I`d highly recommend this if your looking for a storage solution 	2023-10-22 23:00:00.000+00	260	1	very sturdy 
769	eddiesson03 	Theses storage racks really allowed me organise my gym to free up valuable space. 	2023-10-22 23:00:00.000+00	260	1	Strong and sturdy. 
770	Jack 	Had some studs in the garage so cut a piece of 45 x 120 x 2400mm timber in half and attached a storage rack to each half. Used some 40mm screws and this feels really solid on the wall. Looks great too! 	2023-06-08 23:00:00.000+00	260	1	Sturdy and looks great 
771	John 	Used to hold all my Olympic weights. Strong and easy to put up. 	2023-01-02 00:00:00.000+00	260	1	Strong rack 
772	CC 	Very well made with rubber bumpers to prevent plates hitting the wall. I have a combination of Olympic and regular dics on it. Installation was easy and it doesn't proturde into the race space. 	2022-09-29 23:00:00.000+00	260	1	Excellent space-saving storage 
832	david 	Great looking solid storage option. Would definitely recommend. 	2022-10-12 23:00:00.000+00	284	1	Heavy Duty 
773	Robert 	Another great product, there’s a fair few bolts to drill in but your secure that it’s not coming down once up. Has made my gym look 100% better now all my weight plates are off the floor. Have brought two to make it easy it keep weight separated into groups. 	2021-09-21 23:00:00.000+00	261	1	Well made as always 
774	Dorey 	Brilliant piece for my home gym! Looking very neat and Orderly now. Really pleased with it 	2023-07-09 23:00:00.000+00	262	1	Love it 
775	Robert 	Well engineered equipment. 	2023-06-05 23:00:00.000+00	262	1	Great product. 
776	Bingojones 	Bought a couple in the end! Great for reconstituted rubber plates. 	2023-04-16 23:00:00.000+00	262	1	Exceeded expectations 
777	Sparky 	Great service and product 	2022-06-11 23:00:00.000+00	262	1	Great service 
778	Sparky 	Excellent service and product 	2022-06-11 23:00:00.000+00	262	1	Excellent 
779	Amy 	Was choosing between the normal rack or this and so glad I choose this one being able to move the weights around my home gym is convenient and keeps them tidy. Good quality and fast delivery would recommend 	2022-03-27 00:00:00.000+00	263	1	Love this 
780	Mark 	I have only just set this up so too early to tell long term however, intial impressions are good, solid kit, easy to put together. 	2021-10-14 23:00:00.000+00	263	1	Initial Impression 
781	Neily 	Good solid bit of kit.Fast delivery.AAA+ 	2021-08-16 23:00:00.000+00	263	1	Solid bit of kit 
782	Ann 	Bought this for our home gym to keep our hex plates on . Great design , takes up a small space but means it’s easy to pick weights as needed and keep them organised 	2021-03-27 00:00:00.000+00	263	1	Ideal weight storage 
783	Mark 	Surprised it was such quality for the price and proves Mirafit haven't jumped on the band wagon of increasing prices because of demand like the rest have !!!! 	2021-03-19 00:00:00.000+00	263	1	Best value rack on the Market 
784	Broseph 	I'm really pleased with this. It's easy to setup. It's robust (probably indestructible), and it keeps the home gym neat and tidy.it's also one of those things you aren't sure you need until you get it, and then you realise how much better the gym runs with proper storage. The only downside is you then realise how untidy the house is. 	2023-07-27 23:00:00.000+00	264	1	Sturdy, ergonomic and satisfying 
785	John 	A solid useful and essential accessory for any home gym 	2022-03-07 00:00:00.000+00	264	1	Bumper plate stacker 
786	Misty 	Didn’t realise when I bought this how perfect for storing my weights it would be. So easy to pull out for use and it doesn’t take up too much room 	2022-02-07 00:00:00.000+00	264	1	Excellent 
787	Federico 	Took me less than 15 mins to assemble. Finally my plates are well organised, and most important they are easier than ever to move around. 	2022-01-06 00:00:00.000+00	264	1	Easy to install and perfect storage 
788	Gem 	Very very sturdy and worth the money. Can in advance and took no time to setup. Will be buying all gym equipment from MIRAFIT 	2021-12-16 00:00:00.000+00	264	1	EXTREMELY STURDY MIRAFIT BUMPER PLATE STACKER TROLLEY 
789	Antony 	Help keep the weights organised and also help ground the rack so no need to bolt it down. 	2023-07-04 23:00:00.000+00	265	1	Get these! 
790	RichardP 	I bought the 1" bars so I could store either 1" or 2" plates. Work well. Seem strong though only 30kg stored on each 	2022-12-10 00:00:00.000+00	265	1	Great for organising the gym! 
791	RJ 	Nicely manufactured. Easy to fit and a good addition to the rack 	2022-08-19 23:00:00.000+00	265	1	Good addition 
792	Theo 	If you have the bumper plates the Short poles are good for two plates on each only, and I would say one has to be a 5 kg.I have set these high and use for a 10 & 5 with heavier plates on the longer pole set at bottom of the frame.If you use two 10 plates on the shorts they just about fit but I am not convinced it’s safe, especially as my kids use the gym as well.Either way, with both long and short you can store the full 100kg bumper set perfectly. 	2022-07-16 23:00:00.000+00	265	1	Good Space Savers 
793	Jason 	Great for storage and easy to fit. 	2022-06-24 23:00:00.000+00	265	1	Useful 
794	Sid 	MIRAFIT M200 WEIGHT STORAGE POLES very good quality easy to fit just need 2x 17mm sockets and they are very sturdy 	2023-10-12 23:00:00.000+00	266	1	M200s squat rack attachment 
795	Ferrari93 	I bought 2 sets of these to hold all of my plates onto the power rack and they do the job nicely, looks neat and tidy. I'll be looking at buying some fractional plate holders soon to add at the top of my power rack for ease of use. Great quality and great company. 	2023-08-26 23:00:00.000+00	266	1	Great for keeping the gym tidy 
796	oldtimer 	The well made and strong storage poles sit nicely on top of the bracing for the power rack at low level, easy to bolt on 	2023-06-15 23:00:00.000+00	266	1	Well worth the money 
797	Ben 	Excellent product & fab company. 	2023-03-19 00:00:00.000+00	266	1	Plate storage 
798	Michal 	They do be holding plates. Have 3 of them on each side of the rack, very handy, can hook bands around them too if you are feeling fancy with your barbell work. My second order was missing the bolts needed to mount, however quick email to customer service and they were quickly on their way. Great company 	2023-01-26 00:00:00.000+00	266	1	They do what they say they do. 
799	Bren1997 	Very good storage poles nice chrome better than power coated because the when removing weight plates it doesn't scratch like power coating will last a lot longer I have I bulldog gear mammoth lite snap together power rack it is compatible with my rack but I just needed longer bolts because my rack is 80x80 post rack will buy more 	2022-05-25 23:00:00.000+00	267	1	Very good storage 
800	Antony 	Help keep the weights organised and also help ground the rack so no need to bolt it down. 	2023-07-04 23:00:00.000+00	269	1	Get these! 
801	RichardP 	I bought the 1" bars so I could store either 1" or 2" plates. Work well. Seem strong though only 30kg stored on each 	2022-12-10 00:00:00.000+00	269	1	Great for organising the gym! 
802	RJ 	Nicely manufactured. Easy to fit and a good addition to the rack 	2022-08-19 23:00:00.000+00	269	1	Good addition 
829	Rob 	I bought some mirafit stuff years ago on Amazon and wasn’t that impressed with the quality but it must have had an upgrade the last few bits I have bought have far exceeded other brands and usually for two thirds of the price. This rack is solid, well finished and easily holds my 4 bars without moving at all. A must for a garage gym 	2022-04-24 23:00:00.000+00	283	1	Stylish and strong rack 
803	Theo 	If you have the bumper plates the Short poles are good for two plates on each only, and I would say one has to be a 5 kg.I have set these high and use for a 10 & 5 with heavier plates on the longer pole set at bottom of the frame.If you use two 10 plates on the shorts they just about fit but I am not convinced it’s safe, especially as my kids use the gym as well.Either way, with both long and short you can store the full 100kg bumper set perfectly. 	2022-07-16 23:00:00.000+00	269	1	Good Space Savers 
804	Jason 	Great for storage and easy to fit. 	2022-06-24 23:00:00.000+00	269	1	Useful 
805	Sid 	MIRAFIT M200 WEIGHT STORAGE POLES very good quality easy to fit just need 2x 17mm sockets and they are very sturdy 	2023-10-12 23:00:00.000+00	270	1	M200s squat rack attachment 
806	Ferrari93 	I bought 2 sets of these to hold all of my plates onto the power rack and they do the job nicely, looks neat and tidy. I'll be looking at buying some fractional plate holders soon to add at the top of my power rack for ease of use. Great quality and great company. 	2023-08-26 23:00:00.000+00	270	1	Great for keeping the gym tidy 
807	oldtimer 	The well made and strong storage poles sit nicely on top of the bracing for the power rack at low level, easy to bolt on 	2023-06-15 23:00:00.000+00	270	1	Well worth the money 
808	Ben 	Excellent product & fab company. 	2023-03-19 00:00:00.000+00	270	1	Plate storage 
809	Michal 	They do be holding plates. Have 3 of them on each side of the rack, very handy, can hook bands around them too if you are feeling fancy with your barbell work. My second order was missing the bolts needed to mount, however quick email to customer service and they were quickly on their way. Great company 	2023-01-26 00:00:00.000+00	270	1	They do what they say they do. 
810	SteveB 	I've been waiting for these to be in stock since I bough my rack last summer. Definitely a great addition.I opted for the bolt on version and currently have 4 x 20 and 2 x 15 plates (not bumper plates) on each with enough room for a few more plates should I need it. 	2022-01-14 00:00:00.000+00	271	1	Great addition to the M3 rack 
811	FM 	I liked the flexibility of moving the location on the power cage. It’s stable . The only issue is that the securing pin keeps dropping out. Wish Mirafit could introduce a better pin which doesn’t keep dropping off 	2022-02-02 00:00:00.000+00	271	0.6	Very good but some issues hence not a 5* 
812	Steve 	Having recently moved to a place with higher ceilings I purchased the 208cm to extend my 188cm rack. I did speak to Mirafit over mail before trying it and was advised the 208 extension was for the 208cm rack, but thought id give it a go anyway.So for any of you wondering, it does work and the holes do line up. I can now get rid of my standalone cable pull and get the M3 version fitted. 	2022-12-15 00:00:00.000+00	273	1	Great addition 
813	Magdalena 	Really happy with purchase. We use this M3 POWER RACK EXTENSION KIT like a wall mounted rack. It's extremely sturdy and has great look. 	2022-02-24 00:00:00.000+00	273	1	Heavy duty 
814	Som 	Highly recommend to anyone getting the storage system, very durable and convenient 	2023-05-19 23:00:00.000+00	274	1	Best Investment 
815	Jonny 	Excellent addition to the rack. Keeps the plates nicely stored and off floor. 	2021-07-06 23:00:00.000+00	274	1	Excellent 
816	Derek 	Like most of Mirafit products, the extension bay is excellent quality. Easy to add on and good value for money. Really adds to the function of the half rack and who doesn't love it when it looks really neat. 	2021-02-12 00:00:00.000+00	274	1	Excellent product 
817	David 	Storage part took about five minutes to put together and stick fit into the back of my half rack. It is an absolutely solid piece of kit and keeps all plates of the floor obviously so does exactly what you need it for, delivered ridiculously quick aswell as usual from mirafit. 	2021-02-01 00:00:00.000+00	274	1	Solid piece of kit 
818	Sirloin 	Ive over 400kgs on mine, its a solid as a rock, easy to fit and a reasonably priced, 5 stars 	2021-01-19 00:00:00.000+00	274	1	Great job 
819	Bren1997 	Very good storage poles nice chrome better than power coated because the when removing weight plates it doesn't scratch like power coating will last a lot longer I have I bulldog gear mammoth lite snap together power rack it is compatible with my rack but I just needed longer bolts because my rack is 80x80 post rack will buy more 	2022-05-25 23:00:00.000+00	276	1	Very good storage 
820	Peter Rogerson 	great piece of kit for storing my Olympic plates using the fixing supplied its fitted to my garage wall and I`m actually surprised how sturdy it is considering the weight it holding, I`d highly recommend this if your looking for a storage solution 	2023-10-22 23:00:00.000+00	280	1	very sturdy 
821	eddiesson03 	Theses storage racks really allowed me organise my gym to free up valuable space. 	2023-10-22 23:00:00.000+00	280	1	Strong and sturdy. 
822	Jack 	Had some studs in the garage so cut a piece of 45 x 120 x 2400mm timber in half and attached a storage rack to each half. Used some 40mm screws and this feels really solid on the wall. Looks great too! 	2023-06-08 23:00:00.000+00	280	1	Sturdy and looks great 
823	John 	Used to hold all my Olympic weights. Strong and easy to put up. 	2023-01-02 00:00:00.000+00	280	1	Strong rack 
824	CC 	Very well made with rubber bumpers to prevent plates hitting the wall. I have a combination of Olympic and regular dics on it. Installation was easy and it doesn't proturde into the race space. 	2022-09-29 23:00:00.000+00	280	1	Excellent space-saving storage 
825	Robert 	Another great product, there’s a fair few bolts to drill in but your secure that it’s not coming down once up. Has made my gym look 100% better now all my weight plates are off the floor. Have brought two to make it easy it keep weight separated into groups. 	2021-09-21 23:00:00.000+00	282	1	Well made as always 
826	Simon 	Good quality, quick delivery and easy to install. 	2023-09-28 23:00:00.000+00	283	1	Looks great 
827	Jay 	Nicely built wall rack which looks like it will comfortably hold my 3 solid bars instead of having to lean them up against a wall and the colour combination looks fantastic.Haven’t actually put them up yet as I will need to get the wall studded before fitting them as they are quite heavy and when the bars are placed in them they will be adding a lot of weight to the fixing wall. 	2023-03-11 00:00:00.000+00	283	1	Aesthetically pleasing space saver 
828	Milly 	Perfect addition to home gym looks great 	2022-05-05 23:00:00.000+00	283	1	Great gun rack for the bars 
830	Corin 	Came within a couple of days and easy to install.Holds bars and looks good, so very happy. 	2021-05-22 23:00:00.000+00	283	1	Good service and speedy delivery 
835	Niall N 	Looks great, easy to fit and does exactly what it says it will, couldn’t be happier with the rack! 	2022-02-25 00:00:00.000+00	284	1	Excellent Product 
836	James 	Looks great, strong and easy to put up 	2021-09-07 23:00:00.000+00	285	1	Wall Rack 
837	justin 	I brought 2 of these and they are great for the price very strong and finished extremely well, with good bolt fixings supplied well worth the money 	2021-06-09 23:00:00.000+00	285	1	good finish and strong 
838	Jamesy 	A very solid well built storage gym rack. Looks the business and will last forever I recommend this to anyone looking for a great quality rack. 	2021-03-28 00:00:00.000+00	285	1	6 hook wall storage rack 
839	Jamie 	Good solid well built wall rack, easy to put up, would definitely recommend 	2021-03-10 00:00:00.000+00	285	1	Wall rack 
840	Kat EG 	Another cracking purchase from Mirafit. Goes nicely with my M2 and other Mirafit gear. Stores things neatly up and out the way. Easy to fit, highly recommend ???????? 	2023-07-21 23:00:00.000+00	286	1	Great bit of kit 
841	flo 	So I didn't realise it wasn't for bars! its managing to hold 4 bars up no problems! So i guess that shows how strong it actually is. I'll probably not keep all 4 bars on their permanently from now on though just in case. 	2022-10-09 23:00:00.000+00	286	1	Very strong holder 
842	Surfseeker 	Very good quality, better than I expected 	2022-02-15 00:00:00.000+00	286	1	Strong sturdy hooks 
843	Chocojetpack 	This thing is really robust. No worries about it holding a range of heavy cable handles and attachments. If you’re securing in a brick wall you’ll probably want to use different wall plugs. The ones supplied just rotate in place but a quick trip to Homebase found some much better ones. Now there are no worries about this coming off the garage wall. 	2021-04-10 23:00:00.000+00	286	1	Great but you’ll probably want to use your own wall plugs 
844	Dz69 	Excellent for hanging bands, belts or even cables. Alot heavier than I was expecting and when it's up (solid wall) I swear you could swing from it. Definitely heavy duty. 	2020-12-30 00:00:00.000+00	286	1	How strong lol 
845	Oldboygrandad 	Great fixings,Holds the safety squat bar plus standard Olympic,nice polycarbonate cover .Certainly beats bumping your head on bars stuck out and saves space. 	2021-10-26 23:00:00.000+00	287	1	Solid secure 
846	Oldboygrandad 	Wall anchors that are provided are 13mm bolt head solid fixing,Nice smooth finish with the hard plastic skin .Takes the Olympic squat safety bar and 7 ft standard bar with ease, no more banging your head on bars.	2021-10-17 23:00:00.000+00	287	1	Solid construction 
847	James 	Got this to tidy up my garage gym. Great job and easy to mount on the block wall using the fittings supplied. Keeps my Olympic and EZ bar safely out of the way when not in use and still space for another bar. Even better is that I can always find my lock jaw collars now! 	2021-09-10 23:00:00.000+00	287	1	Great Storage 
848	RyanT 	As usual with Mirafit, great product at w great price. Looks great in my home gym 	2021-07-21 23:00:00.000+00	287	1	Very sturdy 
849	Derek 	A great bit of kit to keep the gym tidy 	2021-06-29 23:00:00.000+00	287	1	Vertical wall rack 
850	Mark 	Great way to keep bars tidy instead of leaving them laying around on the floor. Fixings provided are more then suffient, very solid! 	2022-04-26 23:00:00.000+00	288	1	Excellent Quality 
851	Steve B 	Very sturdy. A good addition to the garage to keep everything tidy 	2022-02-03 00:00:00.000+00	288	1	Good quality 
852	Bob 	I've been building a gym in my garage with a friend, it's pretty compact so wanted to have somewhere to store the bars. I'd love to say it was easy to out up, and to the average normal red blooded man it probably is. The garage walls are made up of 3-4 inch concrete blocks. They were a c*ck to drill though, unless you have a sds drill. You'll need 10mm drill bit and some more substantial wall plugs. With the right drill and drill it went up a treat!! 	2021-02-26 00:00:00.000+00	288	1	Does the job!!! 
853	Pete 	Does the job very well, used the supplied fittings and holds up fine. 	2021-01-31 00:00:00.000+00	288	1	Easy to fit 
854	John 	This rack is a solid piece of kit, it looks the part in the home gym and does the job perfectly. Can't fault it and the delivery was really quick as always. Would strongly recommend this product and MiraFit full stop. 	2021-01-29 00:00:00.000+00	288	1	Looks the business and is solid 
855	G. 	Does anybody know if this can be used for the centre of an EZ curl bar to do squats? Thanks 	2023-08-21 23:00:00.000+00	292	1	EZ curl bar 
856	Kat EG 	Another excellent purchase from Mirafit. Has totally changed hip thrust ability. Really comfortable! I used this for squat/barbell work too but prefer to use this one. ???????? 	2023-07-21 23:00:00.000+00	292	1	Excellent 
857	Iron sanctum 	Great barbell pad . Makes squats comfortable. Pad density is spot on . Width is just right. Best of all is the orange colour to match my gym colours ???? 	2023-06-23 23:00:00.000+00	292	1	Barbell pad 
858	Sam 	This pad makes squatting so much more comfortable. Love the orange mirafit colour 	2022-11-27 00:00:00.000+00	292	1	Great Pad! 
859	WILLIAM 	This is a superb piece of kit. With this on the bar, I can keep it good and stable whilst Squatting; and without hurting my spine or causing sciatica from the bar. Highly recommended! 	2022-10-14 23:00:00.000+00	292	1	Brilliant Pad! 
860	Flex 	Adds comfort and style to your bar. That's all you want this piece of kit to do and that's what it does. Good quality materials used and for me has made squats more comfortable, allowing me to focus on the lift more than the position of the bar as the pad keeps you central and consistently in place for each lift. Finally, it's easy to take on and off so there's no down side to owning this. 	2023-08-30 23:00:00.000+00	293	1	Weight bar pad 
861	Kat EG 	Another excellent purchase from Mirafit. Looks good, really comfortable and sturdy for barbell squat/Bulgarians etc. I also bought the barbel squat pad which has totally changed my hip thrust game. ???????? 	2023-07-21 23:00:00.000+00	293	1	Perfect 
862	TM28 	This makes doing barbell squats tolerable, no more neck pain, I can now them with confidence. 	2023-05-11 23:00:00.000+00	293	1	Buy it. 
863	Nikola 	Comfortable and better than the previous generation. Mirafit products are almost always top of the top 	2023-02-24 00:00:00.000+00	293	1	Excellent 
864	garrymckay 	Well made from premium materials. Fits the bar great and doesn't spin around. Really does the job 	2022-08-28 23:00:00.000+00	293	1	Brilliant 
866	Jonny Was 	Great fit and very comfortable. I'm 5ft8 and 85k and bought a M 	2023-01-28 00:00:00.000+00	297	1	Great t-shirt 
867	Jonny Was 	Very comfortable and perfect fit. I'm 5ft 8, 85K and bought a M 	2023-01-28 00:00:00.000+00	297	1	Great shirt! 
868	Bob 	Service was fine. I'm a bit chunky but usually sit between L and XL, so thought I'd go XL to be on the safe side. It was tiny!! Around the chest and midriff. Not flattering atall. Material was was fine, a tad thin. 	2022-11-05 00:00:00.000+00	297	0.6	Very small 
869	Chunky but funky 	Bought an XL , mainly in case of shrinkage when going through the dryer . Fit remains the same. Decent quality. Mirafit should send these out as freebies with purchases of weights! 	2023-10-20 23:00:00.000+00	304	1	Quality fabric and doesn't shrink 
870	Stuart 	Very nice quality shirts, will definitely be buying some more. 	2023-08-08 23:00:00.000+00	304	1	Medium t 
871	CubbyWorse 	Really fine cotton, and well smart with the Union Jack. Makes you proud to wear it!! 	2023-05-11 23:00:00.000+00	304	1	Comfortable T 
872	Vinny 	Quality product with great range of resistance for anyone to improve their grip. 	2023-08-29 23:00:00.000+00	310	1	The best grippers 
873	Ren 	Bought as a gift for son. They are used daily. Extremely good quality compared to other brands used in the passed. Son has since gone on to buy two more in different sizes, and recommends them to friends. Highly recommend. 	2023-08-06 23:00:00.000+00	310	1	High quality 
874	Hendry 	I've had the No. 1 grippers several weeks and I'm very happy. Great quality and nicely challenging resistance, compared to others I've previously tried. 	2023-03-22 00:00:00.000+00	310	1	Good grippers 
875	Zeejay 	I have used the grips for years since college when I was trying to improve grip strength for certain lifts like deadlifts. The captains of crush grip arrived swiftly and were in excellent condition. They function just as advertised and have proven a great addition to my training. I currently used the 1.5 grip a few times a week and have seen great results in the gym and rock climbing. Excellent product overall! 	2022-11-25 00:00:00.000+00	310	1	Excellent product 
876	Foz 	I bought the 50mm and I’ve been using it for cable exercises. It’s made every one of them extremely tough. Great piece of kit very well made and I’m going to have to buy another one too. 	2023-09-21 23:00:00.000+00	311	1	Great handle 
877	David 	I bought the 70mm grip roller and it is very difficult to lift past a certain weight. I was optimistic about lifting 60kg with it, but found it impossible. After decreasing the weight I found it really worked the forearms thoroughly. I'm glad I purchased it and that my grip has improved! 	2023-04-26 23:00:00.000+00	311	1	Great for increasing grip strength 
878	Dale 	nice kit for the money .its a bit of a beast to axle a bar 	2023-03-07 00:00:00.000+00	311	1	70MM AND PIN 
879	Candles 	Superb quality and price, love Mirafit stuff and this did not disappoint . I'm defiantly not lifting same weight as the smaller handles, its massive !Pin and handle weigh in at bang on 5kg. 	2022-12-02 00:00:00.000+00	311	1	70mm handle & Pin 
880	James 	solid piece a kit to help me get that gorilla grip!!!!quick delivery too thanks 	2022-11-03 00:00:00.000+00	311	1	60mm rolling handle 
881	GP95 	Bought this to go with the MIRAFIT M3 POWER RACK CABLE PULLEY STARTER KIT, works perfectly 	2023-02-19 00:00:00.000+00	312	1	Perfect for cable attachment 
882	Gruffjet 	My kettle bell was not enough and this plate loading pin is ideal to add the weights to and gradually increase.Professional service from Mirafit as usual. 	2022-03-10 00:00:00.000+00	312	1	Happy Home Gym 
883	Chris 	I bought this as part of a DIY set up for cable exercises in my home gym, this was slightly more expensive than options on Amazon but, having made a number of purchases from Mirafit, came with an almost guaranteed quality.This didn't disappoint, great powder coat finish and does the job perfectly! 	2022-01-27 00:00:00.000+00	312	1	Great value 
884	Stewart 	I use this for cable pulldowns etc. It's very well built and can definitely take a good amount of weight. I will buy another when in stock again for fly exercises. 	2021-02-24 00:00:00.000+00	312	1	Does the job 
885	WS 	Looked at most 2 inch loading pins, but decided on this option due to its build quality. Good bit if kit. 	2020-12-29 00:00:00.000+00	312	1	Well constructed. 
886	Rorschach. 	A great way to assess where your grip is at.I thought mine was pretty good, but this is a great reality check and target setter.Great service and delivery as usual, from a regular customer. 	2023-03-19 00:00:00.000+00	314	1	Excellent Product. 
887	Rorschach. 	I’ve been looking for this product for years.Great service and delivery as usual, from a regular customer. 	2023-03-19 00:00:00.000+00	315	1	Excellent Product. 
888	Terry 	Delighted with these handles. Loading these way as oppose to on top is not a problem.The weights stay securely in place.Hefty piece of equipment and very keenly priced. 	2022-02-28 00:00:00.000+00	317	1	Perfect 
889	Hugh 	Very sturdy. Collars fit perfectly. 	2022-02-19 00:00:00.000+00	317	1	excellent 
890	Big B 	Santa brought these for my Christmas, and am very pleased he did. Usual very high standard of construction from Mirafit. Very robust, I very much doubt that I will be breaking these ones. 	2022-01-18 00:00:00.000+00	317	1	Very well built, and now with collars! 
891	RS 	The farmers are doing their job well as part of a home gym. Service from mirafit was excellent too. 	2021-01-11 00:00:00.000+00	317	1	Excellent 
892	John Fish 	Good sturdy bit of kit. Thick handles challenge the grip a bit but that's what you want!!	2022-02-06 00:00:00.000+00	317	0.8	Great bit of kit 
893	Dave 	Top flag and very decent price for the size. It makes my home gym come alive. 	2022-04-14 23:00:00.000+00	318	1	Top flag 
894	Arc 	Love these flags have 2 need another 1 at some point. 	2022-02-26 00:00:00.000+00	318	1	Added nice touch! 
895	Ryo 	Love the flags, really enhances my garage for that "gym feel" 	2021-12-21 00:00:00.000+00	318	1	Another great Mirafit product 
896	Simon 	It does what it says on the description, great for warming up the home gym, I bough three. 	2022-03-11 00:00:00.000+00	319	1	It’s a flag :) 
897	Sim 	ILove these wall flags they really look good on my home gym walls ,iterally flying the flag for my favourite brand 	2022-11-26 00:00:00.000+00	324	1	Union jack wall flag 
898	Pip 	It makes my garage wall look a little less boring. Good size, feels decent quality. All good! 	2022-06-23 23:00:00.000+00	324	1	Flag 
899	Titan 	Great addition 	2022-06-19 23:00:00.000+00	324	1	Uk 
900	Steve 	It's a flag and it hangs well, not sure what else it could do ;-) But looks good in my home/garage gym. Well made. 	2021-07-14 23:00:00.000+00	324	1	It's a Flag 
901	Dan 	Good quality flags, look the business 	2021-03-28 00:00:00.000+00	324	1	Great 
902	DRP Fitness 	Adds a bit of inspiration and motivation to my home gym when I'm doing my clients PT 	2023-04-16 23:00:00.000+00	325	1	Inspirational 
903	GavS 	Completes the gym area, very well made, quick delivery 	2023-02-16 00:00:00.000+00	325	1	Finishing touch 
904	Paul 	Just adds that bit to a home gym, also hides some of the garage door lolDecent quality, delivery was slow but ultimately worth the wait 	2021-12-16 00:00:00.000+00	325	1	Adds a bit to the home gym 
905	PL 	Nice clean looking flag that adds a lovely touch! 	2021-03-14 00:00:00.000+00	325	1	Adds a nice touch to the gym! 
906	Kat EG 	Needed a new bag and threw this is the basket when getting some other bits from Mirafit. It’s great, comfy on the shoulder, perfect size. In my opinion, great value for money for a top quality product 	2023-07-21 23:00:00.000+00	335	1	Great bag! 
907	SJ 	These are perfect for anyone who is a gym/weight enthusiast. The reactions I get when guests come over is hilarious! 	2023-05-17 23:00:00.000+00	338	1	Perfect 
908	Asha 	Xmas presents for some of my friends, they absolutely loved them! Highly recommended 	2022-12-25 00:00:00.000+00	338	1	Coasters 
909	RogueDriver 	These coasters are a fun addition to our home gym. They're colourful and save the windowsill and various other surfaces from getting drink stains.They're not rigid like the coasters you get from souvenir shops they're rubbery but do the job perfectly.	2022-01-04 00:00:00.000+00	338	1	The perfect drinks coasters for your gym 
910	Belly Bear 	They are quality just like everything else your find here on Mirafit, and no I wasn't paid to say that, although if you fancy paying me I'm available for a good price ????.I even managed to turn these cool place mats into a workout (see picture attached).Nothing more than using a biro (pen) for a bar and you too can smash out some reps with all your bear friends. 	2021-08-31 23:00:00.000+00	338	1	Nice 
911	Vin 	always a talking point 	2021-05-17 23:00:00.000+00	338	1	Brilliant 
912	Tarzan 	Brilliant product 	2022-05-06 23:00:00.000+00	345	1	What I think 
913	basil 	Really useful and best quality.No more rounded bolt heads for me!! 	2023-09-05 23:00:00.000+00	353	1	spanner heaven 
914	Joseph 	I bought these so that I could put my power rack together. They are absolutely worth their price- top quality product which made the construction so much easier than it could have been.If in doubt, buy them! 	2022-04-19 23:00:00.000+00	353	1	Top quality spanner set 
915	Gaz 	Bought them to put the power rack together. Absolute must if you want to put mirafit equipment together. Can't fault them. 	2021-04-26 23:00:00.000+00	353	1	Brilliant 
916	Ann 	Bought this set of spammers to build our M200 cage from you and so glad we did . Meant my son could easily build the cage by himself . Would recommend to anyone who buys one of your cages . 	2021-03-27 00:00:00.000+00	353	1	Very useful 
917	Dimitris 	Bought them to install the M220 squat rack. 	2021-03-22 00:00:00.000+00	353	1	Quality Product 
918	Adam 	Fits the M3 rack perfectly 	2021-04-07 23:00:00.000+00	354	1	Perfect fit 
919	Alex 	These are pretty nice ratchet spanners, do the the job. What else is there to say. 	2021-02-05 00:00:00.000+00	354	1	Pretty nice set 
920	Eric 	Very pleased with this. Great support and very comfortable. Feels very dependable 	2023-07-26 23:00:00.000+00	355	1	Quality especially for price 
921	Raph 	The belt has come and great price. 	2023-07-19 23:00:00.000+00	355	1	Get kit 
922	Paul 	Good quality and value for money 	2022-11-15 00:00:00.000+00	355	1	Good value for money 
923	Shina 	Very high quality product for a very good price. 	2022-09-24 23:00:00.000+00	355	1	Belt 
924	Spike 	Needed a a belt for training especially for overhead lifting,saw this one and not disappointed, comfortable great fit and looks good a great belt for the price thanks to mirafit for another quality product for my home gym 	2021-10-13 23:00:00.000+00	355	1	Great value 
925	Karen 	Comfortable and fits will. Seems very well made. So far only tried dips and pull ups with a 5kg weight attached but sits well and moulds to body without being uncomfortable. 	2023-04-14 23:00:00.000+00	356	1	Comfortable and well made 
926	Carl 	Great bit of extra kit 	2022-07-24 23:00:00.000+00	356	1	Belt 
927	Danny 	Very comfortable, performs well, feels well built at a good price 	2022-01-27 00:00:00.000+00	356	1	Great belt 
928	Dave 	Good value. Prompt delivery	2021-09-14 23:00:00.000+00	356	1	Does what it says on the tin. 
929	John 	Excellent for giga chads who are too strong for their own body weight 	2021-02-12 00:00:00.000+00	356	1	Yes 
930	Superman 	Fair price, looks good and does exactly what you want it for comfortably 	2022-06-02 23:00:00.000+00	357	1	Good quality 
931	Oldboygrandad 	Good long chain ,Ideally for wrapping around dumbells or through centre hoke on plates,I mainly use this for calve raisers on block after loosing my balance with a Olympic bar . 	2021-10-26 23:00:00.000+00	357	1	Comfortable strong 
932	Henry 	Been using it for weighted pull ups and for land mine squats. Very comfortable and durable. Been a great service from start to finish will order from here again. 	2021-03-04 00:00:00.000+00	357	1	Great piece of equipment and great quality. 
933	Big Si 	I use this bent for belted landmine squats. Works well. Comfortable and easy to use. Swift deliver and great communication from Mirafit. 	2021-01-31 00:00:00.000+00	357	1	Great belt 
\.


--
-- TOC entry 4926 (class 0 OID 16667)
-- Dependencies: 228
-- Data for Name: verification_token; Type: TABLE DATA; Schema: public; Owner: e_commerce_emxk_user
--

COPY public.verification_token (id, created_time_stamp, token, user_id) FROM stdin;
1	2023-11-06 16:40:02.131	eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJWRVJJRklDQVRJT05fRU1BSUwiOiJVc2VyOUBqdW5pdC5jb20iLCJleHAiOjE2OTk4OTM2MDIsImlzcyI6ImVDb21tZXJjZSJ9.C6y6K7oILH8_VDAnaODjlzwbyvXswAIz-HhyNtuc5j4	599
3	2023-11-06 17:26:10.528	eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJWRVJJRklDQVRJT05fRU1BSUwiOiJqb2huc21pdGgyQGp1bml0LmNvbSIsImV4cCI6MTY5OTg5NjM3MCwiaXNzIjoiZUNvbW1lcmNlIn0.jEEUcYHCgvTSH5sgEpXNQveFaN8IS3F-7F4wC0-4mb0	601
4	2023-11-06 17:31:23.022	eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJWRVJJRklDQVRJT05fRU1BSUwiOiJqb2huc21pdGgzQGp1bml0LmNvbSIsImV4cCI6MTY5OTg5NjY4MywiaXNzIjoiZUNvbW1lcmNlIn0.eqXvPZ6rgZafCh5OdsADg2tzmm1X8jR6xXKHa2UYx4Y	602
5	2023-11-06 17:32:40.187	eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJWRVJJRklDQVRJT05fRU1BSUwiOiJqb2huc21pdGg0QGp1bml0LmNvbSIsImV4cCI6MTY5OTg5Njc2MCwiaXNzIjoiZUNvbW1lcmNlIn0.um5m9H67ZR5Nyjbb7cET92YSdt60jkWufYJgc-3gBoA	603
\.


--
-- TOC entry 4922 (class 0 OID 16612)
-- Dependencies: 224
-- Data for Name: web_order; Type: TABLE DATA; Schema: public; Owner: e_commerce_emxk_user
--

COPY public.web_order (id, address_id, user_id) FROM stdin;
\.


--
-- TOC entry 4924 (class 0 OID 16619)
-- Dependencies: 226
-- Data for Name: web_order_quantities; Type: TABLE DATA; Schema: public; Owner: e_commerce_emxk_user
--

COPY public.web_order_quantities (id, quantity, order_id, product_id) FROM stdin;
\.


--
-- TOC entry 4970 (class 0 OID 0)
-- Dependencies: 215
-- Name: address_id_seq; Type: SEQUENCE SET; Schema: public; Owner: e_commerce_emxk_user
--

SELECT pg_catalog.setval('public.address_id_seq', 620, true);


--
-- TOC entry 4971 (class 0 OID 0)
-- Dependencies: 232
-- Name: basket_seq; Type: SEQUENCE SET; Schema: public; Owner: e_commerce_emxk_user
--

SELECT pg_catalog.setval('public.basket_seq', 401, true);


--
-- TOC entry 4972 (class 0 OID 0)
-- Dependencies: 217
-- Name: inventory_id_seq; Type: SEQUENCE SET; Schema: public; Owner: e_commerce_emxk_user
--

SELECT pg_catalog.setval('public.inventory_id_seq', 357, true);


--
-- TOC entry 4973 (class 0 OID 0)
-- Dependencies: 219
-- Name: local_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: e_commerce_emxk_user
--

SELECT pg_catalog.setval('public.local_user_id_seq', 604, true);


--
-- TOC entry 4974 (class 0 OID 0)
-- Dependencies: 221
-- Name: product_id_seq; Type: SEQUENCE SET; Schema: public; Owner: e_commerce_emxk_user
--

SELECT pg_catalog.setval('public.product_id_seq', 357, true);


--
-- TOC entry 4975 (class 0 OID 0)
-- Dependencies: 229
-- Name: review_id_seq; Type: SEQUENCE SET; Schema: public; Owner: e_commerce_emxk_user
--

SELECT pg_catalog.setval('public.review_id_seq', 934, true);


--
-- TOC entry 4976 (class 0 OID 0)
-- Dependencies: 227
-- Name: verification_token_id_seq; Type: SEQUENCE SET; Schema: public; Owner: e_commerce_emxk_user
--

SELECT pg_catalog.setval('public.verification_token_id_seq', 7, true);


--
-- TOC entry 4977 (class 0 OID 0)
-- Dependencies: 223
-- Name: web_order_id_seq; Type: SEQUENCE SET; Schema: public; Owner: e_commerce_emxk_user
--

SELECT pg_catalog.setval('public.web_order_id_seq', 1, false);


--
-- TOC entry 4978 (class 0 OID 0)
-- Dependencies: 225
-- Name: web_order_quantities_id_seq; Type: SEQUENCE SET; Schema: public; Owner: e_commerce_emxk_user
--

SELECT pg_catalog.setval('public.web_order_quantities_id_seq', 1, false);


--
-- TOC entry 4956 (class 0 OID 0)
-- Data for Name: BLOBS; Type: BLOBS; Schema: -; Owner: -
--

BEGIN;

SELECT pg_catalog.lo_open('16681', 131072);
SELECT pg_catalog.lowrite(0, '\x65794a68624763694f694a49557a49314e694973496e523563434936496b705856434a392e65794a465455464a54434936496e4276623342766230427762323977623238784c6d4e7662534973496d5634634349364d5459354e7a63334d5441324d53776961584e7a496a6f695a554e766257316c636d4e6c496e302e376548666159534e7a30543655393375794e5a716333477a62334767534572554639624573434e676a4373');
SELECT pg_catalog.lo_close(0);

SELECT pg_catalog.lo_open('16682', 131072);
SELECT pg_catalog.lowrite(0, '\x65794a68624763694f694a49557a49314e694973496e523563434936496b705856434a392e65794a465455464a54434936496e4276623342766230427762323977623238794c6d4e7662534973496d5634634349364d5459354e7a63334d5445794d53776961584e7a496a6f695a554e766257316c636d4e6c496e302e4373575f5452473862456c3343727141626b35577756336d396644444c6f535f4b61554a50385a77433355');
SELECT pg_catalog.lo_close(0);

SELECT pg_catalog.lo_open('24858', 131072);
SELECT pg_catalog.lowrite(0, '\x65794a68624763694f694a49557a49314e694973496e523563434936496b705856434a392e65794a465455464a54434936496e42766233427662304277623239776232387a4c6d4e7662534973496d5634634349364d5459354e7a6b304e7a59774d43776961584e7a496a6f695a554e766257316c636d4e6c496e302e43394b5672384c764b336c62794f6853466570325866364f4972686d5047346d7839446e77537032362d34');
SELECT pg_catalog.lo_close(0);

SELECT pg_catalog.lo_open('24859', 131072);
SELECT pg_catalog.lowrite(0, '\x65794a68624763694f694a49557a49314e694973496e523563434936496b705856434a392e65794a465455464a54434936496e4276623342766230427762323977623238794c6d4e7662534973496d5634634349364d5459354e7a6b314d7a49794f43776961584e7a496a6f695a554e766257316c636d4e6c496e302e6b5f596569494a4f385967624e4831535355396a6e576879634f704c643331436477775456766e546e4277');
SELECT pg_catalog.lo_close(0);

SELECT pg_catalog.lo_open('24860', 131072);
SELECT pg_catalog.lowrite(0, '\x65794a68624763694f694a49557a49314e694973496e523563434936496b705856434a392e65794a465455464a54434936496e4276623342766230427762323977623238794c6d4e7662534973496d5634634349364d5459354e7a6b314d7a49794f43776961584e7a496a6f695a554e766257316c636d4e6c496e302e6b5f596569494a4f385967624e4831535355396a6e576879634f704c643331436477775456766e546e4277');
SELECT pg_catalog.lo_close(0);

SELECT pg_catalog.lo_open('24861', 131072);
SELECT pg_catalog.lowrite(0, '\x65794a68624763694f694a49557a49314e694973496e523563434936496b705856434a392e65794a465455464a54434936496e4276623342766230427762323977623238794c6d4e7662534973496d5634634349364d5459354e7a6b314d7a49794f43776961584e7a496a6f695a554e766257316c636d4e6c496e302e6b5f596569494a4f385967624e4831535355396a6e576879634f704c643331436477775456766e546e4277');
SELECT pg_catalog.lo_close(0);

SELECT pg_catalog.lo_open('24862', 131072);
SELECT pg_catalog.lowrite(0, '\x65794a68624763694f694a49557a49314e694973496e523563434936496b705856434a392e65794a465455464a54434936496e4276623342766230427762323977623238794c6d4e7662534973496d5634634349364d5459354e7a6b314d7a49794f43776961584e7a496a6f695a554e766257316c636d4e6c496e302e6b5f596569494a4f385967624e4831535355396a6e576879634f704c643331436477775456766e546e4277');
SELECT pg_catalog.lo_close(0);

SELECT pg_catalog.lo_open('24863', 131072);
SELECT pg_catalog.lowrite(0, '\x65794a68624763694f694a49557a49314e694973496e523563434936496b705856434a392e65794a465455464a54434936496e4276623342766230427762323977623238794c6d4e7662534973496d5634634349364d5459354e7a6b314d7a49794f43776961584e7a496a6f695a554e766257316c636d4e6c496e302e6b5f596569494a4f385967624e4831535355396a6e576879634f704c643331436477775456766e546e4277');
SELECT pg_catalog.lo_close(0);

SELECT pg_catalog.lo_open('24864', 131072);
SELECT pg_catalog.lowrite(0, '\x65794a68624763694f694a49557a49314e694973496e523563434936496b705856434a392e65794a465455464a54434936496e4276623342766230427762323977623238794c6d4e7662534973496d5634634349364d5459354e7a6b314d7a49794f43776961584e7a496a6f695a554e766257316c636d4e6c496e302e6b5f596569494a4f385967624e4831535355396a6e576879634f704c643331436477775456766e546e4277');
SELECT pg_catalog.lo_close(0);

SELECT pg_catalog.lo_open('24865', 131072);
SELECT pg_catalog.lowrite(0, '\x65794a68624763694f694a49557a49314e694973496e523563434936496b705856434a392e65794a465455464a54434936496e4276623342766230427762323977623238794c6d4e7662534973496d5634634349364d5459354e7a6b314d7a49794f43776961584e7a496a6f695a554e766257316c636d4e6c496e302e6b5f596569494a4f385967624e4831535355396a6e576879634f704c643331436477775456766e546e4277');
SELECT pg_catalog.lo_close(0);

SELECT pg_catalog.lo_open('24866', 131072);
SELECT pg_catalog.lowrite(0, '\x65794a68624763694f694a49557a49314e694973496e523563434936496b705856434a392e65794a465455464a54434936496e4276623342766230427762323977623238794c6d4e7662534973496d5634634349364d5459354e7a6b314d7a49794f43776961584e7a496a6f695a554e766257316c636d4e6c496e302e6b5f596569494a4f385967624e4831535355396a6e576879634f704c643331436477775456766e546e4277');
SELECT pg_catalog.lo_close(0);

SELECT pg_catalog.lo_open('24867', 131072);
SELECT pg_catalog.lowrite(0, '\x65794a68624763694f694a49557a49314e694973496e523563434936496b705856434a392e65794a465455464a54434936496e4276623342766230427762323977623238794c6d4e7662534973496d5634634349364d5459354e7a6b314d7a49794f43776961584e7a496a6f695a554e766257316c636d4e6c496e302e6b5f596569494a4f385967624e4831535355396a6e576879634f704c643331436477775456766e546e4277');
SELECT pg_catalog.lo_close(0);

SELECT pg_catalog.lo_open('24868', 131072);
SELECT pg_catalog.lowrite(0, '\x65794a68624763694f694a49557a49314e694973496e523563434936496b705856434a392e65794a465455464a54434936496e4276623342766230427762323977623238794c6d4e7662534973496d5634634349364d5459354e7a6b314d7a49794f43776961584e7a496a6f695a554e766257316c636d4e6c496e302e6b5f596569494a4f385967624e4831535355396a6e576879634f704c643331436477775456766e546e4277');
SELECT pg_catalog.lo_close(0);

SELECT pg_catalog.lo_open('24869', 131072);
SELECT pg_catalog.lowrite(0, '\x65794a68624763694f694a49557a49314e694973496e523563434936496b705856434a392e65794a465455464a54434936496e4276623342766230427762323977623238794c6d4e7662534973496d5634634349364d5459354e7a6b314d7a49794f43776961584e7a496a6f695a554e766257316c636d4e6c496e302e6b5f596569494a4f385967624e4831535355396a6e576879634f704c643331436477775456766e546e4277');
SELECT pg_catalog.lo_close(0);

SELECT pg_catalog.lo_open('24870', 131072);
SELECT pg_catalog.lowrite(0, '\x65794a68624763694f694a49557a49314e694973496e523563434936496b705856434a392e65794a465455464a54434936496e4276623342766230427762323977623238794c6d4e7662534973496d5634634349364d5459354e7a6b314d7a49794f43776961584e7a496a6f695a554e766257316c636d4e6c496e302e6b5f596569494a4f385967624e4831535355396a6e576879634f704c643331436477775456766e546e4277');
SELECT pg_catalog.lo_close(0);

SELECT pg_catalog.lo_open('24871', 131072);
SELECT pg_catalog.lowrite(0, '\x65794a68624763694f694a49557a49314e694973496e523563434936496b705856434a392e65794a465455464a54434936496e4276623342766230427762323977623238794c6d4e7662534973496d5634634349364d5459354e7a6b314d7a49794f43776961584e7a496a6f695a554e766257316c636d4e6c496e302e6b5f596569494a4f385967624e4831535355396a6e576879634f704c643331436477775456766e546e4277');
SELECT pg_catalog.lo_close(0);

SELECT pg_catalog.lo_open('24872', 131072);
SELECT pg_catalog.lowrite(0, '\x65794a68624763694f694a49557a49314e694973496e523563434936496b705856434a392e65794a465455464a54434936496e4276623342766230427762323977623238794c6d4e7662534973496d5634634349364d5459354e7a6b314d7a49794f43776961584e7a496a6f695a554e766257316c636d4e6c496e302e6b5f596569494a4f385967624e4831535355396a6e576879634f704c643331436477775456766e546e4277');
SELECT pg_catalog.lo_close(0);

SELECT pg_catalog.lo_open('24873', 131072);
SELECT pg_catalog.lowrite(0, '\x65794a68624763694f694a49557a49314e694973496e523563434936496b705856434a392e65794a465455464a54434936496e4276623342766230427762323977623238794c6d4e7662534973496d5634634349364d5459354e7a6b314d7a49794f43776961584e7a496a6f695a554e766257316c636d4e6c496e302e6b5f596569494a4f385967624e4831535355396a6e576879634f704c643331436477775456766e546e4277');
SELECT pg_catalog.lo_close(0);

SELECT pg_catalog.lo_open('24874', 131072);
SELECT pg_catalog.lowrite(0, '\x65794a68624763694f694a49557a49314e694973496e523563434936496b705856434a392e65794a465455464a54434936496e4276623342766230427762323977623238794c6d4e7662534973496d5634634349364d5459354e7a6b314d7a49794f43776961584e7a496a6f695a554e766257316c636d4e6c496e302e6b5f596569494a4f385967624e4831535355396a6e576879634f704c643331436477775456766e546e4277');
SELECT pg_catalog.lo_close(0);

SELECT pg_catalog.lo_open('24875', 131072);
SELECT pg_catalog.lowrite(0, '\x65794a68624763694f694a49557a49314e694973496e523563434936496b705856434a392e65794a465455464a54434936496e4276623342766230427762323977623238794c6d4e7662534973496d5634634349364d5459354e7a6b314d7a49794f43776961584e7a496a6f695a554e766257316c636d4e6c496e302e6b5f596569494a4f385967624e4831535355396a6e576879634f704c643331436477775456766e546e4277');
SELECT pg_catalog.lo_close(0);

SELECT pg_catalog.lo_open('24876', 131072);
SELECT pg_catalog.lowrite(0, '\x65794a68624763694f694a49557a49314e694973496e523563434936496b705856434a392e65794a465455464a54434936496e4276623342766230427762323977623238304c6d4e7662534973496d5634634349364d5459354e7a6b314e4445354e79776961584e7a496a6f695a554e766257316c636d4e6c496e302e4d46534956734c445a58636d533035674f335f72507436763656374b6d7a41694a3776506e66744754636b');
SELECT pg_catalog.lo_close(0);

SELECT pg_catalog.lo_open('24877', 131072);
SELECT pg_catalog.lowrite(0, '\x65794a68624763694f694a49557a49314e694973496e523563434936496b705856434a392e65794a465455464a54434936496e4276623342766230427762323977623238304c6d4e7662534973496d5634634349364d5459354e7a6b314e4445354e79776961584e7a496a6f695a554e766257316c636d4e6c496e302e4d46534956734c445a58636d533035674f335f72507436763656374b6d7a41694a3776506e66744754636b');
SELECT pg_catalog.lo_close(0);

SELECT pg_catalog.lo_open('24878', 131072);
SELECT pg_catalog.lowrite(0, '\x65794a68624763694f694a49557a49314e694973496e523563434936496b705856434a392e65794a465455464a54434936496e4276623342766230427762323977623238304c6d4e7662534973496d5634634349364d5459354e7a6b314e4445354e79776961584e7a496a6f695a554e766257316c636d4e6c496e302e4d46534956734c445a58636d533035674f335f72507436763656374b6d7a41694a3776506e66744754636b');
SELECT pg_catalog.lo_close(0);

SELECT pg_catalog.lo_open('24879', 131072);
SELECT pg_catalog.lowrite(0, '\x65794a68624763694f694a49557a49314e694973496e523563434936496b705856434a392e65794a465455464a54434936496e4276623342766230427762323977623238304c6d4e7662534973496d5634634349364d5459354e7a6b314e4445354e79776961584e7a496a6f695a554e766257316c636d4e6c496e302e4d46534956734c445a58636d533035674f335f72507436763656374b6d7a41694a3776506e66744754636b');
SELECT pg_catalog.lo_close(0);

SELECT pg_catalog.lo_open('24880', 131072);
SELECT pg_catalog.lowrite(0, '\x65794a68624763694f694a49557a49314e694973496e523563434936496b705856434a392e65794a465455464a54434936496e4276623342766230427762323977623238304c6d4e7662534973496d5634634349364d5459354e7a6b314e4445354e79776961584e7a496a6f695a554e766257316c636d4e6c496e302e4d46534956734c445a58636d533035674f335f72507436763656374b6d7a41694a3776506e66744754636b');
SELECT pg_catalog.lo_close(0);

COMMIT;

--
-- TOC entry 4738 (class 2606 OID 16585)
-- Name: address address_pkey; Type: CONSTRAINT; Schema: public; Owner: e_commerce_emxk_user
--

ALTER TABLE ONLY public.address
    ADD CONSTRAINT address_pkey PRIMARY KEY (id);


--
-- TOC entry 4762 (class 2606 OID 34852)
-- Name: basket basket_pkey; Type: CONSTRAINT; Schema: public; Owner: e_commerce_emxk_user
--

ALTER TABLE ONLY public.basket
    ADD CONSTRAINT basket_pkey PRIMARY KEY (id);


--
-- TOC entry 4740 (class 2606 OID 16592)
-- Name: inventory inventory_pkey; Type: CONSTRAINT; Schema: public; Owner: e_commerce_emxk_user
--

ALTER TABLE ONLY public.inventory
    ADD CONSTRAINT inventory_pkey PRIMARY KEY (id);


--
-- TOC entry 4744 (class 2606 OID 16601)
-- Name: local_user local_user_pkey; Type: CONSTRAINT; Schema: public; Owner: e_commerce_emxk_user
--

ALTER TABLE ONLY public.local_user
    ADD CONSTRAINT local_user_pkey PRIMARY KEY (id);


--
-- TOC entry 4750 (class 2606 OID 16610)
-- Name: product product_pkey; Type: CONSTRAINT; Schema: public; Owner: e_commerce_emxk_user
--

ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_pkey PRIMARY KEY (id);


--
-- TOC entry 4760 (class 2606 OID 25114)
-- Name: review review_pkey; Type: CONSTRAINT; Schema: public; Owner: e_commerce_emxk_user
--

ALTER TABLE ONLY public.review
    ADD CONSTRAINT review_pkey PRIMARY KEY (id);


--
-- TOC entry 4746 (class 2606 OID 16628)
-- Name: local_user uk_46f7ufu7j9nkhuyfly98to4u1; Type: CONSTRAINT; Schema: public; Owner: e_commerce_emxk_user
--

ALTER TABLE ONLY public.local_user
    ADD CONSTRAINT uk_46f7ufu7j9nkhuyfly98to4u1 UNIQUE (email);


--
-- TOC entry 4748 (class 2606 OID 16630)
-- Name: local_user uk_93d93k106ik2383youkc9bixl; Type: CONSTRAINT; Schema: public; Owner: e_commerce_emxk_user
--

ALTER TABLE ONLY public.local_user
    ADD CONSTRAINT uk_93d93k106ik2383youkc9bixl UNIQUE (username);


--
-- TOC entry 4742 (class 2606 OID 16626)
-- Name: inventory uk_ce3rbi3bfstbvvyne34c1dvyv; Type: CONSTRAINT; Schema: public; Owner: e_commerce_emxk_user
--

ALTER TABLE ONLY public.inventory
    ADD CONSTRAINT uk_ce3rbi3bfstbvvyne34c1dvyv UNIQUE (product_id);


--
-- TOC entry 4756 (class 2606 OID 24882)
-- Name: verification_token uk_p678btf3r9yu6u8aevyb4ff0m; Type: CONSTRAINT; Schema: public; Owner: e_commerce_emxk_user
--

ALTER TABLE ONLY public.verification_token
    ADD CONSTRAINT uk_p678btf3r9yu6u8aevyb4ff0m UNIQUE (token);


--
-- TOC entry 4758 (class 2606 OID 16672)
-- Name: verification_token verification_token_pkey; Type: CONSTRAINT; Schema: public; Owner: e_commerce_emxk_user
--

ALTER TABLE ONLY public.verification_token
    ADD CONSTRAINT verification_token_pkey PRIMARY KEY (id);


--
-- TOC entry 4752 (class 2606 OID 16617)
-- Name: web_order web_order_pkey; Type: CONSTRAINT; Schema: public; Owner: e_commerce_emxk_user
--

ALTER TABLE ONLY public.web_order
    ADD CONSTRAINT web_order_pkey PRIMARY KEY (id);


--
-- TOC entry 4754 (class 2606 OID 16624)
-- Name: web_order_quantities web_order_quantities_pkey; Type: CONSTRAINT; Schema: public; Owner: e_commerce_emxk_user
--

ALTER TABLE ONLY public.web_order_quantities
    ADD CONSTRAINT web_order_quantities_pkey PRIMARY KEY (id);


--
-- TOC entry 4767 (class 2606 OID 16653)
-- Name: web_order_quantities fk654x9lb2ii9jrhsriicg518iw; Type: FK CONSTRAINT; Schema: public; Owner: e_commerce_emxk_user
--

ALTER TABLE ONLY public.web_order_quantities
    ADD CONSTRAINT fk654x9lb2ii9jrhsriicg518iw FOREIGN KEY (order_id) REFERENCES public.web_order(id);


--
-- TOC entry 4765 (class 2606 OID 16643)
-- Name: web_order fk65jlvhv84w95l6dimcc1p6hqr; Type: FK CONSTRAINT; Schema: public; Owner: e_commerce_emxk_user
--

ALTER TABLE ONLY public.web_order
    ADD CONSTRAINT fk65jlvhv84w95l6dimcc1p6hqr FOREIGN KEY (address_id) REFERENCES public.address(id);


--
-- TOC entry 4766 (class 2606 OID 16648)
-- Name: web_order fk8mvneqqd44higf18x0m67bg29; Type: FK CONSTRAINT; Schema: public; Owner: e_commerce_emxk_user
--

ALTER TABLE ONLY public.web_order
    ADD CONSTRAINT fk8mvneqqd44higf18x0m67bg29 FOREIGN KEY (user_id) REFERENCES public.local_user(id);


--
-- TOC entry 4769 (class 2606 OID 16675)
-- Name: verification_token fk8tx2aau9yc0gsxb82192wkyyl; Type: FK CONSTRAINT; Schema: public; Owner: e_commerce_emxk_user
--

ALTER TABLE ONLY public.verification_token
    ADD CONSTRAINT fk8tx2aau9yc0gsxb82192wkyyl FOREIGN KEY (user_id) REFERENCES public.local_user(id);


--
-- TOC entry 4768 (class 2606 OID 16658)
-- Name: web_order_quantities fki7eexulg463xqvxgykc3qqx0a; Type: FK CONSTRAINT; Schema: public; Owner: e_commerce_emxk_user
--

ALTER TABLE ONLY public.web_order_quantities
    ADD CONSTRAINT fki7eexulg463xqvxgykc3qqx0a FOREIGN KEY (product_id) REFERENCES public.product(id);


--
-- TOC entry 4763 (class 2606 OID 16633)
-- Name: address fkkb7b5aavt0mlydpvdiuesa9r8; Type: FK CONSTRAINT; Schema: public; Owner: e_commerce_emxk_user
--

ALTER TABLE ONLY public.address
    ADD CONSTRAINT fkkb7b5aavt0mlydpvdiuesa9r8 FOREIGN KEY (user_id) REFERENCES public.local_user(id);


--
-- TOC entry 4764 (class 2606 OID 16638)
-- Name: inventory fkp7gj4l80fx8v0uap3b2crjwp5; Type: FK CONSTRAINT; Schema: public; Owner: e_commerce_emxk_user
--

ALTER TABLE ONLY public.inventory
    ADD CONSTRAINT fkp7gj4l80fx8v0uap3b2crjwp5 FOREIGN KEY (product_id) REFERENCES public.product(id);


-- Completed on 2023-12-03 01:29:49

--
-- E_commerce_emxk_userQL database dump complete
--

