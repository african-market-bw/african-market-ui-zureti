.footer {
  width: 100%;
  border-top: 2px dashed silver;
  background: @sandy-beach;
  
  p {
    text-align: center;
    color: @font-color;
    font-size: 1.6rem;
    padding: 20px;
  }
}