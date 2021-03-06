﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;


namespace SportsStore.Domain.Entities
{
    public class Media
    {
        [Key]
        [HiddenInput(DisplayValue = false)]
        public int mediaID { get; set; }
        
        public byte[] ImageData { get; set; }

        public string ImageMimeType { get; set; }

        public virtual Product Product { get; set; }
    
    }
}
