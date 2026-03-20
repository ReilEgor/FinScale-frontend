import React, {useState, useRef} from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import UserProfile from "./UserProfile.jsx";

const customStyles = {
    body: {
        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif',
        color: '#FFFFFF',
        backgroundColor: '#000',
        backgroundImage: 'radial-gradient(ellipse at top left, rgba(45, 35, 80, 0.6), transparent 50%), radial-gradient(ellipse at bottom right, rgba(20, 50, 70, 0.5), transparent 50%), radial-gradient(circle at 50% 50%, rgba(20, 20, 25, 1), #050505 100%)',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
        display: 'flex',
        overflow: 'hidden',
        WebkitFontSmoothing: 'antialiased',
    },
    glassPanel: {
        background: 'rgba(30, 30, 32, 0.45)',
        backdropFilter: 'blur(40px)',
        WebkitBackdropFilter: 'blur(40px)',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        boxShadow: '0 10px 40px -10px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
    },
    cardPreview: {
        background: 'linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05))',
        borderRadius: '20px',
        padding: '24px',
        border: '1px solid rgba(255,255,255,0.2)',
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        minHeight: '200px',
        position: 'relative',
        overflow: 'hidden',
    },
};

const Sidebar = () => (
    <aside style={{
        ...customStyles.glassPanel,
        width: '260px',
        flexShrink: 0,
        borderRadius: '28px',
        display: 'flex',
        flexDirection: 'column',
        padding: '24px 16px'
    }}>
        <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '0 12px 32px 12px',
            fontWeight: 600,
            fontSize: '18px'
        }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                 style={{width: '24px', height: '24px'}}>
                <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"/>
                <path d="M12 16L16 12L12 8"/>
                <path d="M8 12H16"/>
            </svg>
            Aura
        </div>
        <div style={{display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '24px'}}>
            <div style={{
                fontSize: '11px',
                textTransform: 'uppercase',
                letterSpacing: '0.8px',
                color: 'rgba(255,255,255,0.55)',
                padding: '0 12px 8px 12px'
            }}>Main
            </div>
            <Link to="/" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                padding: '10px 12px',
                borderRadius: '14px',
                cursor: 'pointer',
                textDecoration: 'none',
                color: '#FFFFFF',
                fontSize: '15px'
            }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                     style={{width: '18px', height: '18px', color: 'rgba(255,255,255,0.55)'}}>
                    <rect x="3" y="3" width="7" height="7"/>
                    <rect x="14" y="3" width="7" height="7"/>
                    <rect x="14" y="14" width="7" height="7"/>
                    <rect x="3" y="14" width="7" height="7"/>
                </svg>
                Dashboard
            </Link>
            <Link to="/transactions" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                padding: '10px 12px',
                borderRadius: '14px',
                cursor: 'pointer',
                textDecoration: 'none',
                color: '#FFFFFF',
                fontSize: '15px',
                background: 'rgba(255,255,255,0.15)'
            }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                     style={{width: '18px', height: '18px', color: '#FFFFFF'}}>
                    <line x1="12" y1="1" x2="12" y2="23"/>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
                Transactions
            </Link>
            <Link to="/analytics" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                padding: '10px 12px',
                borderRadius: '14px',
                cursor: 'pointer',
                textDecoration: 'none',
                color: '#FFFFFF',
                fontSize: '15px'
            }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                     style={{width: '18px', height: '18px', color: 'rgba(255,255,255,0.55)'}}>
                    <path d="M21.21 15.89A10 10 0 1 1 8 2.83"/>
                    <path d="M22 12A10 10 0 0 0 12 2v10z"/>
                </svg>
                Analytics
            </Link>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '24px'}}>
            <div style={{
                fontSize: '11px',
                textTransform: 'uppercase',
                letterSpacing: '0.8px',
                color: 'rgba(255,255,255,0.55)',
                padding: '0 12px 8px 12px'
            }}>Planning
            </div>
            <Link to="/budgets" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                padding: '10px 12px',
                borderRadius: '14px',
                cursor: 'pointer',
                textDecoration: 'none',
                color: '#FFFFFF',
                fontSize: '15px'
            }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                     style={{width: '18px', height: '18px', color: 'rgba(255,255,255,0.55)'}}>
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
                </svg>
                Budgets
            </Link>
        </div>
    </aside>
);

const TransactionsPage = ({setActiveNav}) => {
    const [currencyMode, setCurrencyMode] = useState('Fiat');
    const [currency, setCurrency] = useState('USD');
    const [amount, setAmount] = useState('42.50');
    const [categories, setCategories] = useState([]);
    const [account, setAccount] = useState('Main Bank (..4920)');
    const [date, setDate] = useState('2023-10-27');
    const [time, setTime] = useState('14:30');
    const [isDragOver, setIsDragOver] = useState(false);
    const [convertFrom, setConvertFrom] = useState('USD');
    const [convertTo, setConvertTo] = useState('EUR');
    const [convertAmount, setConvertAmount] = useState('100');
    const [convertResult, setConvertResult] = useState('92.00');
    const [submitted, setSubmitted] = useState(false);

    const currencySymbolsFiat = {USD: '$', EUR: '€', GBP: '£', JPY: '¥'};
    const symbolFiat = currencySymbolsFiat[currency] || '$';
    const currencySymbolsCrypto = {BTC: '₿', ETH: 'Ξ', USDT: '₮', XRP: 'X', BNB: '<>'};
    const symbolCrypto = currencySymbolsCrypto[currency] || currencySymbolsCrypto["USDT"];

    const fiatAccounts = ["Main Bank (..4920)", "Savings Account", "Cash"];
    const cryptoAccounts = ["MetaMask (ETH)", "Binance Account", "Ledger Nano X", "Digital Wallet"];

    const availableCategories = ["+ Add category...", "#transport", "#food", "#utilities", "#shopping", "#health", "#entertainment", "#education"];

    const formatDateDisplay = (d) => {
        if (!d) return '';
        const parts = d.split('-');
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return `${months[parseInt(parts[1]) - 1]} ${parseInt(parts[2])}, ${parts[0]}`;
    };

    const formatTimeDisplay = (t) => {
        if (!t) return '';
        const [h, m] = t.split(':');
        const hour = parseInt(h);
        const ampm = hour >= 12 ? 'PM' : 'AM';
        const displayHour = hour % 12 || 12;
        return `${String(displayHour).padStart(2, '0')}:${m} ${ampm}`;
    };

    const removeCategory = (cat) => {
        setCategories(categories.filter(c => c !== cat));
    };

    const addCategory = (e) => {
        const val = e.target.value;
        if (val && val !== '+ Add category...' && !categories.includes(val)) {
            setCategories([...categories, val]);
        }
        e.target.value = '+ Add category...';
    };

    const calculateString = (str) => {
        try {
            const sanitized = str.replace(/[^-+*/0-9.]/g, '');
            if (!sanitized) return "0";

            let result = Function(`return (${sanitized})`)();

            if (isNaN(result) || !isFinite(result)) return "0";
            if (result < 0) return "0";
            return String(parseFloat(result.toFixed(8)));
        } catch (e) {
            const fallback = parseFloat(str.replace(/[^-0-9.]/g, ''));
            return isNaN(fallback) || fallback < 0 ? "0" : String(fallback);
        }
    };

    const handleSuggestChip = (val) => {
        const numMatch = val.match(/\$([\d.]+)/);
        if (numMatch) setAmount(numMatch[1]);
    };

    const handleConvert = () => {
        const rates = {USD: 1, EUR: 0.92, GBP: 0.79, BTC: 0.000023, ETH: 0.00043, SOL: 0.0092};
        const fromRate = rates[convertFrom] || 1;
        const toRate = rates[convertTo] || 1;
        const result = (parseFloat(convertAmount || 0) / fromRate * toRate).toFixed(2);
        setConvertResult(result);
    };

    const handleSwapCurrencies = () => {
        const temp = convertFrom;
        setConvertFrom(convertTo);
        setConvertTo(temp);
        setConvertAmount(convertResult);
        handleConvert();
    };

    const handleCopyToAmount = () => {
        setAmount(convertResult);
    };

    const handleSubmit = () => {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 2000);
    };

    const handleFiles = (files) => {
        const file = files[0];
        if (file) {
            console.log("File loaded:", file.name);
        }
    };

    const inputStyle = {
        background: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        borderRadius: '8px',
        padding: '12px 16px',
        color: 'white',
        fontFamily: 'inherit',
        fontSize: '15px',
        outline: 'none',
        width: '100%',
    };

    const selectStyle = {
        ...inputStyle,
        cursor: 'pointer',
        appearance: 'none',
        WebkitAppearance: 'none',
    };
    const fileInputRef = useRef(null);

    const handleClick = () => {
        fileInputRef.current.click();
    };

    const onFileInputChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            handleFiles(e.target.files);
        }
    }
    return (
        <div style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            overflowY: 'auto',
            paddingRight: '8px'
        }}>
            <header style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0'}}>
                <h1 style={{fontSize: '28px', fontWeight: 600}}>New Transaction</h1>
                <UserProfile setActiveNav={setActiveNav}/>
            </header>

            <div style={{display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '24px', marginBottom: '40px'}}>
                <div style={{...customStyles.glassPanel, borderRadius: '20px', padding: '32px'}}>
                    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px'}}>

                        {/* Amount Field */}
                        <div style={{display: 'flex', flexDirection: 'column', gap: '8px', gridColumn: 'span 2'}}>
                            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end'}}>
                                <label style={{
                                    fontSize: '12px',
                                    fontWeight: 500,
                                    color: 'rgba(255,255,255,0.55)',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px'
                                }}>
                                    Amount <span style={{
                                    fontSize: '10px',
                                    opacity: 0.6,
                                    marginLeft: '8px',
                                    textTransform: 'none',
                                    letterSpacing: 'normal',
                                    fontWeight: 400
                                }}>Try: 50+20 or 100/2</span>
                                </label>
                                <div style={{
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid rgba(255,255,255,0.12)',
                                    borderRadius: '40px',
                                    display: 'flex',
                                    padding: '4px',
                                    width: 'fit-content'
                                }}>
                                    {['Fiat', 'Crypto'].map(mode => (
                                        <div key={mode} onClick={() => setCurrencyMode(mode)}
                                             style={{
                                                 padding: '6px 16px',
                                                 borderRadius: '40px',
                                                 fontSize: '12px',
                                                 fontWeight: 600,
                                                 cursor: 'pointer',
                                                 transition: '0.3s',
                                                 background: currencyMode === mode ? '#FFFFFF' : 'transparent',
                                                 color: currencyMode === mode ? 'black' : 'white'
                                             }}>
                                            {mode}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div style={{display: 'flex', gap: '12px'}}>
                                <div style={{ position: 'relative' }}>
                                    <select
                                        value={currency}
                                        onChange={e => setCurrency(e.target.value)}
                                        style={{
                                            ...selectStyle,
                                            width: '90px',
                                            paddingRight: '28px',
                                            backgroundImage: `url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22white%22 stroke-width=%222%22%3E%3Cpolyline points=%226 9 12 15 18 9%22%3E%3C/polyline%3E%3C/svg%3E')`,
                                            backgroundRepeat: 'no-repeat',
                                            backgroundPosition: 'right 8px center',
                                            appearance: 'none',
                                        }}
                                    >
                                        {currencyMode === 'Fiat' ? (
                                            Object.keys(currencySymbolsFiat).map(code => (
                                                <option key={code} value={code} style={{color: '#000'}}>{code}</option>
                                            ))
                                        ) : (
                                            Object.keys(currencySymbolsCrypto).map(code => (
                                                <option key={code} value={code} style={{color: '#000'}}>{code}</option>
                                            ))
                                        )}
                                    </select>
                                </div>
                                <div style={{position: 'relative', flex: 1}}>
                                    <span style={{
                                        position: 'absolute',
                                        left: '16px',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        fontWeight: 600
                                    }}>{currencyMode === "Fiat" ? symbolFiat : symbolCrypto }</span>
                                    <input type="text" placeholder="0.00" value={amount}
                                           onChange={e => setAmount(e.target.value)}
                                           onBlur={(e) => {
                                               const result = calculateString(e.target.value);
                                               setAmount(result);
                                           }}
                                           style={{
                                               ...inputStyle,
                                               paddingLeft: '32px',
                                               fontSize: '20px',
                                               fontWeight: 600
                                           }}/>
                                </div>
                            </div>
                            <div style={{display: 'flex', gap: '8px', marginTop: '8px'}}>
                                {['$12.00 (Morning Coffee)', '$45.00 (Lunch)', '$8.50 (Transit)'].map(chip => (
                                    <span key={chip} onClick={() => handleSuggestChip(chip)}
                                          style={{
                                              background: 'rgba(255,255,255,0.08)',
                                              border: '1px solid rgba(255,255,255,0.12)',
                                              padding: '4px 10px',
                                              borderRadius: '6px',
                                              fontSize: '11px',
                                              cursor: 'pointer',
                                              transition: 'background 0.2s'
                                          }}
                                          onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                                          onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}>
                    {chip}
                  </span>
                                ))}
                            </div>
                        </div>

                        {/* Categories */}
                        <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                            <label style={{
                                fontSize: '12px',
                                fontWeight: 500,
                                color: 'rgba(255,255,255,0.55)',
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px'
                            }}>Categories</label>
                            <div style={{display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '8px'}}>
                                {categories.map(cat => (
                                    <div key={cat} style={{
                                        background: cat === '#transport' ? 'rgba(10, 132, 255, 0.3)' : 'rgba(255,255,255,0.1)',
                                        border: cat === '#transport' ? '1px solid rgba(10, 132, 255, 0.5)' : '1px solid rgba(255,255,255,0.12)',
                                        padding: '4px 8px 4px 12px',
                                        borderRadius: '16px',
                                        fontSize: '12px',
                                        fontWeight: 500,
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '6px'
                                    }}>
                                        {cat}
                                        <span onClick={() => removeCategory(cat)} style={{
                                            cursor: 'pointer',
                                            opacity: 0.6,
                                            fontSize: '14px',
                                            padding: '0 2px'
                                        }}>×</span>
                                    </div>
                                ))}
                            </div>
                            <select onChange={addCategory} style={selectStyle}>
                                {availableCategories.map(cat => (
                                    <option key={cat} value={cat}>{cat}</option>
                                ))}
                            </select>
                        </div>

                        {/* Account */}
                        <div style={{display: 'flex', flexDirection: 'column', gap: '8px', marginTop: 'auto'}}>
                            <label style={{
                                fontSize: '12px',
                                fontWeight: 500,
                                color: 'rgba(255,255,255,0.55)',
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px'
                            }}>Account</label>
                            <select
                                value={account}
                                onChange={e => setAccount(e.target.value)}
                                style={selectStyle}
                            >
                                {currencyMode === 'Fiat' ? (
                                    fiatAccounts.map(acc => (
                                        <option key={acc} value={acc} style={{color: '#000'}}>{acc}</option>
                                    ))
                                ) : (
                                    cryptoAccounts.map(acc => (
                                        <option key={acc} value={acc} style={{color: '#000'}}>{acc}</option>
                                    ))
                                )}
                            </select>
                        </div>

                        {/* Date */}
                        <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                            <label style={{
                                fontSize: '12px',
                                fontWeight: 500,
                                color: 'rgba(255,255,255,0.55)',
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px'
                            }}>Date</label>
                            <input type="date" value={date} onChange={e => setDate(e.target.value)}
                                   style={{...inputStyle, colorScheme: 'dark'}}/>
                        </div>

                        {/* Time */}
                        <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                            <label style={{
                                fontSize: '12px',
                                fontWeight: 500,
                                color: 'rgba(255,255,255,0.55)',
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px'
                            }}>Time</label>
                            <input type="time" value={time} onChange={e => setTime(e.target.value)}
                                   style={{...inputStyle, colorScheme: 'dark'}}/>
                        </div>

                        {/* Receipt */}
                        <div style={{display: 'flex', flexDirection: 'column', gap: '8px', gridColumn: 'span 2'}}>
                            <label style={{
                                fontSize: '12px',
                                fontWeight: 500,
                                color: 'rgba(255,255,255,0.55)',
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px'
                            }}>Receipt</label>
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={onFileInputChange}
                                accept=".jpg, .jpeg"
                                style={{ display: 'none' }}
                            />
                            <div

                                onDragOver={e => {
                                    e.preventDefault();
                                    setIsDragOver(true);
                                }}
                                onClick={handleClick}
                                onDragLeave={() => setIsDragOver(false)}
                                onDrop={e => {
                                    e.preventDefault();
                                    setIsDragOver(false);
                                    handleFiles(e.dataTransfer.files)
                                }}
                                style={{
                                    border: `1px dashed ${isDragOver ? '#FFFFFF' : 'rgba(255,255,255,0.12)'}`,
                                    borderRadius: '14px',
                                    padding: '24px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '12px',
                                    color: 'rgba(255,255,255,0.55)',
                                    fontSize: '13px',
                                    marginTop: '12px',
                                    transition: 'border-color 0.2s',
                                    cursor: 'pointer'
                                }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                     strokeWidth="2">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                    <polyline points="17 8 12 3 7 8"/>
                                    <line x1="12" y1="3" x2="12" y2="15"/>
                                </svg>
                                <span>Drag and drop receipt or click to browse</span>
                            </div>
                        </div>
                    </div>

                    <button onClick={handleSubmit}
                            style={{
                                background: submitted ? '#32D74B' : '#FFFFFF',
                                color: 'black',
                                border: 'none',
                                padding: '16px',
                                borderRadius: '14px',
                                fontWeight: 600,
                                fontSize: '16px',
                                marginTop: '24px',
                                cursor: 'pointer',
                                transition: 'transform 0.1s, background 0.3s',
                                width: '100%'
                            }}
                            onMouseDown={e => e.currentTarget.style.transform = 'scale(0.98)'}
                            onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}>
                        {submitted ? '✓ Transaction Recorded!' : 'Record Transaction'}
                    </button>
                </div>

                {/* Right Preview Column */}
                <div style={{position: 'sticky', top: 0}}>
                    <span style={{
                        fontSize: '13px',
                        color: 'rgba(255,255,255,0.55)',
                        marginBottom: '12px',
                        display: 'block'
                    }}>Live Preview</span>
                    <div style={customStyles.cardPreview}>
                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
                            <div style={{
                                opacity: 0.6,
                                fontSize: '11px',
                                textTransform: 'uppercase',
                                letterSpacing: '1px'
                            }}>Transaction Card
                            </div>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                 strokeWidth="2">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                            </svg>
                        </div>
                        <div style={{
                            fontSize: '36px',
                            fontWeight: 700,
                            letterSpacing: '-1px'
                        }}>{currencyMode === "Fiat" ? symbolFiat : symbolCrypto }{parseFloat(amount || 0).toFixed(2)}</div>
                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end'}}>
                            <div style={{display: 'flex', flexDirection: 'column', gap: '4px'}}>
                                <div style={{fontSize: '14px', fontWeight: 500}}>{account.split('(')[0].trim()}</div>
                                <div style={{
                                    fontSize: '11px',
                                    opacity: 0.5
                                }}>{formatDateDisplay(date)} • {formatTimeDisplay(time)}</div>
                            </div>
                            <div style={{display: 'flex', gap: '4px', flexWrap: 'wrap', justifyContent: 'flex-end'}}>
                                {categories.map(cat => (
                                    <div key={cat} style={{
                                        background: 'rgba(255,255,255,0.15)',
                                        padding: '4px 12px',
                                        borderRadius: '20px',
                                        fontSize: '12px',
                                        fontWeight: 500
                                    }}>{cat}</div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Quick Convert */}
                    <div style={{...customStyles.glassPanel, padding: '20px', marginTop: '20px', borderRadius: '14px'}}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: '16px'
                        }}>
                            <div style={{fontSize: '13px', fontWeight: 600}}>Quick Convert</div>
                            <div style={{fontSize: '11px', color: 'rgba(255,255,255,0.55)'}}>1 USD = 0.92 EUR</div>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
                            <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                                <select value={convertFrom} onChange={e => setConvertFrom(e.target.value)}
                                        style={{...selectStyle, width: '70px', fontSize: '13px', padding: '8px'}}>
                                    {Object.keys(currencySymbolsFiat).map(asf => (
                                        <option key={asf} value={asf}>{asf}</option>
                                    ))}
                                    {Object.keys(currencySymbolsCrypto).map(asc => (
                                        <option key={asc} value={asc}>{asc}</option>
                                    ))}
                                </select>
                                <input type="text" value={convertAmount}
                                       onChange={e => setConvertAmount(e.target.value)}
                                       style={{...inputStyle, flex: 1, fontSize: '15px', padding: '10px 12px'}}/>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'center'}}>
                                <button onClick={handleSwapCurrencies}
                                        style={{
                                            background: 'rgba(255,255,255,0.1)',
                                            border: '1px solid rgba(255,255,255,0.12)',
                                            borderRadius: '50%',
                                            width: '32px',
                                            height: '32px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            cursor: 'pointer',
                                            transition: 'all 0.2s'
                                        }}
                                        onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
                                        onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white"
                                         strokeWidth="2">
                                        <path d="M7 16V4M7 4L3 8M7 4l4 4M17 8v12m0 0 4-4m-4 4-4-4"/>
                                    </svg>
                                </button>
                            </div>
                            <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                                <select value={convertTo} onChange={e => setConvertTo(e.target.value)}
                                        style={{...selectStyle, width: '70px', fontSize: '13px', padding: '8px'}}>
                                    {Object.keys(currencySymbolsFiat).map(asf => (
                                        <option key={asf} value={asf}>{asf}</option>
                                    ))}
                                    {Object.keys(currencySymbolsCrypto).map(asc => (
                                        <option key={asc} value={asc}>{asc}</option>
                                    ))}
                                </select>
                                <input type="text" value={convertResult} readOnly
                                       style={{
                                           ...inputStyle,
                                           flex: 1,
                                           fontSize: '15px',
                                           padding: '10px 12px',
                                           opacity: 0.9,
                                           background: 'rgba(255,255,255,0.08)'
                                       }}/>
                            </div>
                            <button onClick={handleConvert}
                                    style={{
                                        background: 'transparent',
                                        border: '1px solid rgba(255,255,255,0.2)',
                                        color: 'white',
                                        padding: '8px',
                                        borderRadius: '8px',
                                        fontSize: '12px',
                                        fontWeight: 500,
                                        cursor: 'pointer',
                                        marginBottom: '2px'
                                    }}>
                                Convert
                            </button>
                            <button onClick={handleCopyToAmount}
                                    style={{
                                        background: '#0A84FF',
                                        color: 'white',
                                        border: 'none',
                                        padding: '10px',
                                        borderRadius: '8px',
                                        fontSize: '13px',
                                        fontWeight: 600,
                                        cursor: 'pointer',
                                        marginTop: '0px',
                                        transition: 'transform 0.1s'
                                    }}
                                    onMouseDown={e => e.currentTarget.style.transform = 'scale(0.98)'}
                                    onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}>
                                Copy to Amount Field
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


const Transactions = () => {
    return (
        <TransactionsPage/>
    );
};

export default Transactions;