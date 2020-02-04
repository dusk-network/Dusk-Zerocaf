var searchIndex={};
searchIndex["zerocaf"] = {"doc":"            ","i":[[0,"backend","zerocaf","This contains the different backend implementations: `u64`…",null,null],[0,"u64","zerocaf::backend","The u64 backend contains the implementation of all of the…",null,null],[0,"constants","zerocaf::backend::u64","This module contains backend-specific constant values as…",null,null],[7,"EDWARDS_A","zerocaf::backend::u64::constants","Edwards `a` variable value = `-1 (mod l)` equals:…",null,null],[7,"EDWARDS_D","","Edwards `d` variable value = `-126296/126297 (mod l)`…",null,null],[7,"INV_SQRT_A","","`(+)1/SQRT(a) (mod l)` equals:…",null,null],[7,"MINUS_SQRT_A","","`(-)SQRT(a) (mod l)` equals:…",null,null],[17,"L","","`L` is the order of base point for Sonny, in this case it…",null,null],[17,"LFACTOR","","Scalar-LFACTOR is the value that satisfies the equation:…",null,null],[17,"RR","","Montgomery modulus defined for Scalar arithmetics, `R^2 =…",null,null],[17,"FIELD_L","","`FIELD_L` is the order of the Prime field for Sonny, n…",null,null],[17,"RR_FIELD","","Montgomery modulus defined for FieldElement arithmetics,…",null,null],[17,"SCALAR_INVERSE_MOD_TWO","","`SCALAR_INVERSE_MOD_TWO = 1/2 (mod l)`. ",null,null],[17,"INVERSE_MOD_TWO","","`INVERSE_MOD_TWO = 1/2 (mod l)`.                   ",null,null],[17,"MINUS_ONE_HALF","","`MINUS_ONE_HALF = (-1/2) (mod l)`. ",null,null],[17,"LFACTOR_FIELD","","FieldElement-LFACTOR is the value that satisfies the…",null,null],[17,"INV_RR","","Montgomery modulus defined for FieldElements on…",null,null],[17,"SQRT_MINUS_ONE","","Holds the value of one of both `sqrt(-1 (mod p)) values.…",null,null],[17,"INV_SQRT_A_MINUS_D","","`INV_SQRT_A_MINUS_D =…",null,null],[17,"SQRT_AD_MINUS_ONE","","`SQRT_AD_MINUS_ONE = `.",null,null],[17,"BASEPOINT","","Holds the value of the Curve basepoint, which has been…",null,null],[17,"RISTRETTO_BASEPOINT","","Ristretto Basepoint.",null,null],[0,"field","zerocaf::backend::u64","Field arithmetic modulo `2^252 +…",null,null],[3,"FieldElement","zerocaf::backend::u64::field","A `FieldElement` represents an element of the field which…",null,null],[12,"0","","",0,null],[11,"zero","","Construct zero.",0,[[],["fieldelement"]]],[11,"one","","Construct one.",0,[[],["fieldelement"]]],[11,"minus_one","","Construct -1 (mod l).",0,[[],["fieldelement"]]],[11,"is_even","","Evaluate if a `FieldElement` is even or not.",0,[[],["bool"]]],[11,"is_positive","","Checks if a ´FieldElement` is considered negative…",0,[[["self"]],["choice"]]],[11,"from_bytes","","Load a `FieldElement` from the low 253b bits of a 256-bit…",0,[[],["fieldelement"]]],[11,"to_bytes","","Serialize this `FieldElement` to a 32-byte array. The…",0,[[]]],[11,"two_pow_k","","Given a `k`: u64, compute `2^k` giving the resulting…",0,[[["u64"]],["fieldelement"]]],[11,"half_without_mod","","Returns the half of an EVEN `FieldElement`.",0,[[],["fieldelement"]]],[11,"legendre_symbol","","Given a FieldElement, this function evaluates if it is a…",0,[[["self"]],["choice"]]],[11,"inverse","","Compute `a^-1 (mod l)` using the the Savas & Koç modular…",0,[[["self"]],["fieldelement"]]],[0,"scalar","zerocaf::backend::u64","Arithmetic mod `2^249 +…",null,null],[3,"Scalar","zerocaf::backend::u64::scalar","The `Scalar` struct represents an Scalar over the modulo…",null,null],[12,"0","","",1,null],[11,"zero","","Return a Scalar with value = `0`.",1,[[],["scalar"]]],[11,"one","","Return a Scalar with value = `1`.",1,[[],["scalar"]]],[11,"minus_one","","Return a Scalar with value = `-1 (mod l)`.",1,[[],["scalar"]]],[11,"is_even","","Evaluate if a `Scalar` is even or not.",1,[[],["bool"]]],[11,"into_bits","","Returns the bit representation of the given `Scalar` as an…",1,[[["self"]]]],[11,"compute_NAF","","Compute the Non-Adjacent Form of a given `Scalar`.",1,[[["self"]]]],[11,"compute_window_NAF","","Compute the Windowed-Non-Adjacent Form of a given `Scalar`.",1,[[["self"],["u8"]]]],[11,"mod_2_pow_k","","Compute the result from `Scalar (mod 2^k)`.",1,[[["self"],["u8"]],["u8"]]],[11,"mods_2_pow_k","","Compute the result from `Scalar (mods k)`.",1,[[["self"],["u8"]],["i8"]]],[11,"from_bytes","","Unpack a 32 byte / 256 bit Scalar into 5 52-bit limbs.",1,[[],["scalar"]]],[11,"from_bytes_wide","","Reduce a 64 byte / 512 bit scalar mod l",1,[[],["scalar"]]],[11,"to_bytes","","Pack the limbs of this `Scalar` into 32 bytes",1,[[["self"]]]],[11,"two_pow_k","","Given a `k`: u64, compute `2^k` giving the resulting…",1,[[["u64"]],["scalar"]]],[11,"half_without_mod","","Returns the half of an EVEN `Scalar`.",1,[[],["scalar"]]],[0,"constants","zerocaf","Contains the curve-constants needed by different algorithm…",null,null],[17,"BASEPOINT_COMPRESSED","zerocaf::constants","Holds the value of the Curve basepoint, which has been…",null,null],[17,"RISTRETTO_BASEPOINT_COMPRESSED","","Ristretto Basepoint on compressed format.",null,null],[0,"edwards","zerocaf","Edwards Point operations and their implementations are…",null,null],[3,"CompressedEdwardsY","zerocaf::edwards","The first 255 bits of a `CompressedEdwardsY` represent the…",null,null],[12,"0","","",2,null],[3,"EdwardsPoint","","An `EdwardsPoint` represents a point on the Sonny Curve…",null,null],[12,"X","","",3,null],[12,"Y","","",3,null],[12,"Z","","",3,null],[12,"T","","",3,null],[3,"ProjectivePoint","","A `ProjectivePoint` represents a point on the Sonny Curve…",null,null],[12,"X","","",4,null],[12,"Y","","",4,null],[12,"Z","","",4,null],[3,"AffinePoint","","An `AffinePoint` represents a point on the Sonny Curve…",null,null],[12,"X","","",5,null],[12,"Y","","",5,null],[5,"double_and_add","","Implementation of the standard algorithm of…",null,[[["scalar"],["t"]],["t"]]],[5,"ltr_bin_mul","","",null,[[["scalar"],["t"]],["t"]]],[5,"binary_naf_mul","","",null,[[["scalar"],["t"]],["t"]]],[5,"window_naf_mul","","",null,[[["scalar"],["u8"]],["ristrettopoint"]]],[5,"mul_by_cofactor","","Multiply by the cofactor: return (8 P).",null,[[["t"]],["t"]]],[5,"mul_by_pow_2","","Compute ([2^k] * P (mod l)).",null,[[["u64"],["t"]],["t"]]],[11,"from_slice","","Construct a `CompressedEdwardsY` from a slice of bytes.",2,[[],["compressededwardsy"]]],[11,"to_bytes","","Return the `CompressedEdwardsY` as an array of bytes (it's…",2,[[["self"]]]],[11,"decompress","","Attempt to decompress to an `EdwardsPoint`.",2,[[["self"]],[["option",["edwardspoint"]],["edwardspoint"]]]],[11,"to_montgomery","","Convert this `EdwardsPoint` on the Edwards model to the…",3,[[["self"]],["montgomerypoint"]]],[11,"coset4","","Prints the 4Coset where the input `EdwardsPoint` lives in.",3,[[["self"]]]],[11,"compress","","Compress this point to `CompressedEdwardsY` format.",3,[[["self"]],["compressededwardsy"]]],[11,"new_from_y_coord","","This function tries to build a Point over the Sonny Curve…",3,[[["choice"],["fieldelement"]],[["option",["edwardspoint"]],["edwardspoint"]]]],[11,"new_random_point","","This function tries to build a Point over the Sonny Curve…",3,[[["t"]],["edwardspoint"]]],[11,"new_from_y_coord","","This function tries to build a Point over the Sonny Curve…",4,[[["choice"],["fieldelement"]],[["option",["projectivepoint"]],["projectivepoint"]]]],[11,"new_random_point","","This function tries to build a Point over the Sonny Curve…",4,[[["t"]],["projectivepoint"]]],[0,"field","zerocaf","A `FieldElement` represents an element of the finite field…",null,null],[6,"FieldElement","zerocaf::field","A `FieldElement` represents an element of the field `2^252…",null,null],[11,"random","","Generate a valid FieldElement choosen uniformly using…",6,[[["t"]],["fieldelement"]]],[0,"montgomery","zerocaf","Implementation that provides support for Montgomery Points…",null,null],[3,"MontgomeryPoint","zerocaf::montgomery","Holds the u-coordinate of a point on the Montgomery form…",null,null],[12,"0","","",7,null],[11,"as_bytes","","View this `MontgomeryPoint` as an array of bytes.",7,[[["self"]]]],[11,"to_bytes","","Convert this `MontgomeryPoint` to an array of bytes.",7,[[["self"]]]],[11,"to_edwards","","Attempt to convert to an `EdwardsPoint`, using the…",7,[[["self"],["u8"]],[["option",["edwardspoint"]],["edwardspoint"]]]],[0,"ristretto","zerocaf","Implementation of the Ristretto Protocol over the…",null,null],[3,"CompressedRistretto","zerocaf::ristretto","Ristretto Point expressed in wire format. Since the…",null,null],[12,"0","","",8,null],[3,"RistrettoPoint","","",null,null],[12,"0","","",9,null],[11,"as_bytes","","Get the bytes of the `CompressedRistretto` point.",8,[[["self"]]]],[11,"copy_from_slice","","",8,[[],["compressedristretto"]]],[11,"decompress","","Attempt to decompress a `CompressedRistretto` point. This…",8,[[["self"]],[["option",["ristrettopoint"]],["ristrettopoint"]]]],[11,"compress","","Encode a Ristretto point represented by the point…",9,[[["self"]],["compressedristretto"]]],[11,"elligator_ristretto_flavor","","Computes the Ristretto Elligator map. This gets a…",9,[[["fieldelement"]],["ristrettopoint"]]],[11,"from_uniform_bytes","","Construct a `RistrettoPoint` from 64 bytes of data.",9,[[],["ristrettopoint"]]],[11,"new_random_point","","Generate a random `RistrettoPoint` from a 64-byte array…",9,[[["t"]],["ristrettopoint"]]],[0,"scalar","zerocaf","A `Scalar` represents an element of the finite field…",null,null],[6,"Scalar","zerocaf::scalar","A `Scalar` represents an element of the field generated by…",null,null],[6,"Ristretto255Scalar","","This is a type alias for the Scalar type in the…",null,null],[11,"random","","Generate a valid Scalar choosen uniformly using user-…",10,[[["t"]],["scalar"]]],[0,"traits","zerocaf","Module for Public Trait implementations.",null,null],[0,"ops","zerocaf::traits","",null,null],[8,"Square","zerocaf::traits::ops","Trait that represents the `^2` operation for any kind of…",null,null],[16,"Output","","",11,null],[10,"square","","Returns the square of the input: `x^2`.",11,[[]]],[8,"Double","","Trait that represents the Point doubling operation for any…",null,null],[16,"Output","","",12,null],[10,"double","","Performs the point-doubling operation over the coordinates…",12,[[]]],[8,"Half","","Trait that represents the `/2` operation for any kind of…",null,null],[16,"Output","","",13,null],[10,"half","","Returns the half of the input: `x/2`.",13,[[]]],[8,"Pow","","Trait that represents the modular exponentiation…",null,null],[16,"Output","","",14,null],[10,"pow","","Returns  `a^b (mod l)`.",14,[[["t"]]]],[8,"ModSqrt","","",null,null],[16,"Output","","",15,null],[10,"mod_sqrt","","Performs the modular Square Root operation over a finite…",15,[[["choice"]]]],[8,"InvSqrt","","",null,null],[16,"Output","","",16,null],[10,"inv_sqrt","","Performs the Inverse Square root of a given value.",16,[[]]],[8,"SqrtRatioI","","",null,null],[16,"Output","","",17,null],[10,"sqrt_ratio_i","","Using the same trick as in ed25519 decoding, we merge the…",17,[[["self"],["t"]]]],[8,"Identity","zerocaf::traits","Gives the Identity element for the type which it has been…",null,null],[10,"identity","","Returns the identity element for the implemented type,…",18,[[],["self"]]],[8,"ValidityCheck","","This trait pretends to be a verification in ct_time about…",null,null],[10,"is_valid","","Checks the point coordinates agains the curve equation to…",19,[[["self"]],["choice"]]],[11,"from","zerocaf::backend::u64::field","",0,[[["t"]],["t"]]],[11,"into","","",0,[[],["u"]]],[11,"to_owned","","",0,[[["self"]],["t"]]],[11,"clone_into","","",0,[[["self"],["t"]]]],[11,"to_string","","",0,[[["self"]],["string"]]],[11,"try_from","","",0,[[["u"]],["result"]]],[11,"try_into","","",0,[[],["result"]]],[11,"borrow","","",0,[[["self"]],["t"]]],[11,"borrow_mut","","",0,[[["self"]],["t"]]],[11,"type_id","","",0,[[["self"]],["typeid"]]],[11,"conditional_negate","","",0,[[["self"],["choice"]]]],[11,"clear","","",0,[[["self"]]]],[11,"initialize","","",0,[[]]],[11,"vzip","","",0,[[],["v"]]],[11,"from","zerocaf::backend::u64::scalar","",1,[[["t"]],["t"]]],[11,"into","","",1,[[],["u"]]],[11,"to_owned","","",1,[[["self"]],["t"]]],[11,"clone_into","","",1,[[["self"],["t"]]]],[11,"try_from","","",1,[[["u"]],["result"]]],[11,"try_into","","",1,[[],["result"]]],[11,"borrow","","",1,[[["self"]],["t"]]],[11,"borrow_mut","","",1,[[["self"]],["t"]]],[11,"type_id","","",1,[[["self"]],["typeid"]]],[11,"vzip","","",1,[[],["v"]]],[11,"from","zerocaf::edwards","",2,[[["t"]],["t"]]],[11,"into","","",2,[[],["u"]]],[11,"to_owned","","",2,[[["self"]],["t"]]],[11,"clone_into","","",2,[[["self"],["t"]]]],[11,"try_from","","",2,[[["u"]],["result"]]],[11,"try_into","","",2,[[],["result"]]],[11,"borrow","","",2,[[["self"]],["t"]]],[11,"borrow_mut","","",2,[[["self"]],["t"]]],[11,"type_id","","",2,[[["self"]],["typeid"]]],[11,"clear","","",2,[[["self"]]]],[11,"initialize","","",2,[[]]],[11,"vzip","","",2,[[],["v"]]],[11,"from","","",3,[[["t"]],["t"]]],[11,"into","","",3,[[],["u"]]],[11,"to_owned","","",3,[[["self"]],["t"]]],[11,"clone_into","","",3,[[["self"],["t"]]]],[11,"try_from","","",3,[[["u"]],["result"]]],[11,"try_into","","",3,[[],["result"]]],[11,"borrow","","",3,[[["self"]],["t"]]],[11,"borrow_mut","","",3,[[["self"]],["t"]]],[11,"type_id","","",3,[[["self"]],["typeid"]]],[11,"clear","","",3,[[["self"]]]],[11,"initialize","","",3,[[]]],[11,"vzip","","",3,[[],["v"]]],[11,"from","","",4,[[["t"]],["t"]]],[11,"into","","",4,[[],["u"]]],[11,"to_owned","","",4,[[["self"]],["t"]]],[11,"clone_into","","",4,[[["self"],["t"]]]],[11,"try_from","","",4,[[["u"]],["result"]]],[11,"try_into","","",4,[[],["result"]]],[11,"borrow","","",4,[[["self"]],["t"]]],[11,"borrow_mut","","",4,[[["self"]],["t"]]],[11,"type_id","","",4,[[["self"]],["typeid"]]],[11,"clear","","",4,[[["self"]]]],[11,"initialize","","",4,[[]]],[11,"vzip","","",4,[[],["v"]]],[11,"from","","",5,[[["t"]],["t"]]],[11,"into","","",5,[[],["u"]]],[11,"try_from","","",5,[[["u"]],["result"]]],[11,"try_into","","",5,[[],["result"]]],[11,"borrow","","",5,[[["self"]],["t"]]],[11,"borrow_mut","","",5,[[["self"]],["t"]]],[11,"type_id","","",5,[[["self"]],["typeid"]]],[11,"clear","","",5,[[["self"]]]],[11,"initialize","","",5,[[]]],[11,"vzip","","",5,[[],["v"]]],[11,"from","zerocaf::montgomery","",7,[[["t"]],["t"]]],[11,"into","","",7,[[],["u"]]],[11,"to_owned","","",7,[[["self"]],["t"]]],[11,"clone_into","","",7,[[["self"],["t"]]]],[11,"try_from","","",7,[[["u"]],["result"]]],[11,"try_into","","",7,[[],["result"]]],[11,"borrow","","",7,[[["self"]],["t"]]],[11,"borrow_mut","","",7,[[["self"]],["t"]]],[11,"type_id","","",7,[[["self"]],["typeid"]]],[11,"clear","","",7,[[["self"]]]],[11,"initialize","","",7,[[]]],[11,"vzip","","",7,[[],["v"]]],[11,"from","zerocaf::ristretto","",8,[[["t"]],["t"]]],[11,"into","","",8,[[],["u"]]],[11,"to_owned","","",8,[[["self"]],["t"]]],[11,"clone_into","","",8,[[["self"],["t"]]]],[11,"try_from","","",8,[[["u"]],["result"]]],[11,"try_into","","",8,[[],["result"]]],[11,"borrow","","",8,[[["self"]],["t"]]],[11,"borrow_mut","","",8,[[["self"]],["t"]]],[11,"type_id","","",8,[[["self"]],["typeid"]]],[11,"vzip","","",8,[[],["v"]]],[11,"from","","",9,[[["t"]],["t"]]],[11,"into","","",9,[[],["u"]]],[11,"to_owned","","",9,[[["self"]],["t"]]],[11,"clone_into","","",9,[[["self"],["t"]]]],[11,"try_from","","",9,[[["u"]],["result"]]],[11,"try_into","","",9,[[],["result"]]],[11,"borrow","","",9,[[["self"]],["t"]]],[11,"borrow_mut","","",9,[[["self"]],["t"]]],[11,"type_id","","",9,[[["self"]],["typeid"]]],[11,"clear","","",9,[[["self"]]]],[11,"initialize","","",9,[[]]],[11,"vzip","","",9,[[],["v"]]],[11,"identity","zerocaf::backend::u64::field","Returns the Identity element over the finite field modulo…",0,[[],["fieldelement"]]],[11,"identity","zerocaf::backend::u64::scalar","Returns the `Identity` element for `Scalar` which equals…",1,[[],["scalar"]]],[11,"identity","zerocaf::edwards","Returns the `CompressedEdwardsY` identity point value that…",2,[[],["compressededwardsy"]]],[11,"identity","","Returns the Edwards Point identity value = `(0, 1, 1, 0)`.",3,[[],["edwardspoint"]]],[11,"identity","","Returns the Edwards Point identity value = `(0, 1, 1)`.",4,[[],["projectivepoint"]]],[11,"identity","","Returns the Edwards Point identity value = `(0, 1)`.",5,[[],["affinepoint"]]],[11,"identity","zerocaf::ristretto","Returns the Identity point on `CompressedRistretto` format.",8,[[],["compressedristretto"]]],[11,"identity","","Gives back the Identity point for the Extended Edwards…",9,[[],["ristrettopoint"]]],[11,"is_valid","zerocaf::edwards","Verifies if the curve equation (in projective twisted…",3,[[["self"]],["choice"]]],[11,"is_valid","","Verifies if the curve equation (in projective twisted…",4,[[["self"]],["choice"]]],[11,"is_valid","","Verifies if the curve equation holds given the (X, Y)…",5,[[["self"]],["choice"]]],[11,"is_valid","zerocaf::ristretto","A valid `RistrettoPoint` should have exactly order `L`…",9,[[["self"]],["choice"]]],[11,"sqrt_ratio_i","zerocaf::backend::u64::field","The first part of the return value signals whether u/v was…",0,[[["fieldelement"],["self"]]]],[11,"from","","Performs the conversion.",0,[[["u8"]],["fieldelement"]]],[11,"from","","Performs the conversion.",0,[[["u16"]],["fieldelement"]]],[11,"from","","Performs the conversion.",0,[[["u32"]],["fieldelement"]]],[11,"from","","Performs the conversion.",0,[[["u64"]],["fieldelement"]]],[11,"from","","Performs the conversion.",0,[[["u128"]],["fieldelement"]]],[11,"from","","Given a Ristretto255Scalar on canonical bytes…",0,[[["ristretto255scalar"]],["fieldelement"]]],[11,"from","zerocaf::backend::u64::scalar","Performs the conversion. ",1,[[["i8"]],["scalar"]]],[11,"from","","Performs the conversion.",1,[[["u8"]],["scalar"]]],[11,"from","","Performs the conversion.",1,[[["u16"]],["scalar"]]],[11,"from","","Performs the conversion.",1,[[["u32"]],["scalar"]]],[11,"from","","Performs the conversion.",1,[[["u64"]],["scalar"]]],[11,"from","","Performs the conversion.",1,[[["u128"]],["scalar"]]],[11,"from","zerocaf::edwards","Given (X:Y:Z) in ε passing to εε can beperformed in 3M+ 1S…",3,[[["projectivepoint"]],["edwardspoint"]]],[11,"from","","In affine form, each elliptic curve point has 2…",3,[[["affinepoint"]],["edwardspoint"]]],[11,"from","","Given (X:Y:T:Z) in εε, passing to ε is cost-free by simply…",4,[[["edwardspoint"]],["projectivepoint"]]],[11,"from","","The key idea of projective coordinates is that instead of…",4,[[["affinepoint"]],["projectivepoint"]]],[11,"from","","Given (X:Y:Z:T) in εε, passing to affine can be performed…",5,[[["edwardspoint"]],["affinepoint"]]],[11,"from","","Reduce the point from Projective to Affine coordinates…",5,[[["projectivepoint"]],["affinepoint"]]],[11,"into","zerocaf::backend::u64::field","Given a FieldElement reference get it's Ristretto255Scalar…",0,[[],["ristretto255scalar"]]],[11,"clone","","",0,[[["self"]],["fieldelement"]]],[11,"clone","zerocaf::backend::u64::scalar","",1,[[["self"]],["scalar"]]],[11,"clone","zerocaf::edwards","",2,[[["self"]],["compressededwardsy"]]],[11,"clone","","",3,[[["self"]],["edwardspoint"]]],[11,"clone","","",4,[[["self"]],["projectivepoint"]]],[11,"clone","zerocaf::montgomery","",7,[[["self"]],["montgomerypoint"]]],[11,"clone","zerocaf::ristretto","",8,[[["self"]],["compressedristretto"]]],[11,"clone","","",9,[[["self"]],["ristrettopoint"]]],[11,"default","zerocaf::backend::u64::field","Returns the default value for a FieldElement = Zero.",0,[[],["fieldelement"]]],[11,"default","zerocaf::edwards","Returns the identity for `CompressedEdwardsY` point.",2,[[],["compressededwardsy"]]],[11,"default","","Returns the default EdwardsPoint Extended Coordinates: (0,…",3,[[],["edwardspoint"]]],[11,"default","","Returns the default ProjectivePoint Extended Coordinates:…",4,[[],["projectivepoint"]]],[11,"default","","Returns the default Twisted Edwards AffinePoint…",5,[[],["affinepoint"]]],[11,"default","zerocaf::montgomery","",7,[[],["montgomerypoint"]]],[11,"default","zerocaf::ristretto","Gives back the Identity point for the Extended Edwards…",9,[[],["ristrettopoint"]]],[11,"cmp","zerocaf::backend::u64::field","",0,[[["self"]],["ordering"]]],[11,"cmp","zerocaf::backend::u64::scalar","",1,[[["self"]],["ordering"]]],[11,"eq","zerocaf::edwards","",2,[[["compressededwardsy"],["self"]],["bool"]]],[11,"eq","","",3,[[["edwardspoint"],["self"]],["bool"]]],[11,"eq","","",4,[[["projectivepoint"],["self"]],["bool"]]],[11,"eq","","",5,[[["self"]],["bool"]]],[11,"eq","zerocaf","",6,[[["self"],["fieldelement"]],["bool"]]],[11,"eq","zerocaf::montgomery","",7,[[["self"],["montgomerypoint"]],["bool"]]],[11,"eq","zerocaf::ristretto","",8,[[["self"],["compressedristretto"]],["bool"]]],[11,"eq","","",9,[[["ristrettopoint"],["self"]],["bool"]]],[11,"eq","zerocaf","",10,[[["scalar"],["self"]],["bool"]]],[11,"partial_cmp","zerocaf::backend::u64::field","",0,[[["fieldelement"],["self"]],[["ordering"],["option",["ordering"]]]]],[11,"partial_cmp","zerocaf::backend::u64::scalar","",1,[[["scalar"],["self"]],[["ordering"],["option",["ordering"]]]]],[11,"fmt","zerocaf::backend::u64::field","",0,[[["self"],["formatter"]],["result"]]],[11,"fmt","zerocaf::backend::u64::scalar","",1,[[["self"],["formatter"]],["result"]]],[11,"fmt","zerocaf::edwards","",2,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",3,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",4,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",5,[[["self"],["formatter"]],["result"]]],[11,"fmt","zerocaf::montgomery","",7,[[["self"],["formatter"]],["result"]]],[11,"fmt","zerocaf::ristretto","",8,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",9,[[["self"],["formatter"]],["result"]]],[11,"fmt","zerocaf::backend::u64::field","",0,[[["self"],["formatter"]],["result"]]],[11,"div","","Performs the op: `x / y (mod l)`.",0,[[["fieldelement"]],["fieldelement"]]],[11,"sub","","Compute `a + b (mod l)`.",0,[[["fieldelement"]],["fieldelement"]]],[11,"sub","zerocaf::backend::u64::scalar","Compute `a - b (mod l)`.",1,[[["scalar"]],["scalar"]]],[11,"sub","zerocaf::edwards","Substract two EdwardsPoints and give the resulting…",3,[[["edwardspoint"]],["edwardspoint"]]],[11,"sub","","Add two ProjectivePoints, negating the second one, This…",4,[[["projectivepoint"]],["projectivepoint"]]],[11,"sub","zerocaf::ristretto","Performs the subtraction of two RistrettoPoints following…",9,[[["ristrettopoint"]],["ristrettopoint"]]],[11,"add","zerocaf::backend::u64::field","Compute `a + b (mod l)`.",0,[[["fieldelement"]],["fieldelement"]]],[11,"add","zerocaf::backend::u64::scalar","Compute `a + b (mod l)`.",1,[[["scalar"]],["scalar"]]],[11,"add","zerocaf::edwards","Add two EdwardsPoints and give the resulting…",3,[[["edwardspoint"]],["edwardspoint"]]],[11,"add","","Add two ProjectivePoints and give the resulting…",4,[[["projectivepoint"]],["projectivepoint"]]],[11,"add","zerocaf::ristretto","Performs the addition of two RistrettoPoints following the…",9,[[["ristrettopoint"]],["ristrettopoint"]]],[11,"mul","zerocaf::backend::u64::field","This Mul implementation returns a double precision result.",0,[[["fieldelement"]],["fieldelement"]]],[11,"mul","zerocaf::backend::u64::scalar","This `Mul` implementation returns a double precision…",1,[[["scalar"]],["scalar"]]],[11,"mul","zerocaf::edwards","Scalar multiplication: compute `Scalar * self`. This…",3,[[["scalar"]],["edwardspoint"]]],[11,"mul","","Scalar multiplication: compute `Scalar * self`. This…",4,[[["scalar"]],["projectivepoint"]]],[11,"mul","zerocaf::ristretto","Scalar multiplication: compute `self * Scalar`. This…",9,[[["scalar"]],["ristrettopoint"]]],[11,"mul","zerocaf","Scalar multiplication: compute `self * Scalar`. This…",10,[[["ristrettopoint"]],["ristrettopoint"]]],[11,"neg","zerocaf::backend::u64::field","Computes `-self (mod l)`.",0,[[],["fieldelement"]]],[11,"neg","zerocaf::backend::u64::scalar","Performs the negate operation over the sub-group modulo l.",1,[[],["scalar"]]],[11,"neg","zerocaf::edwards","Negates an `CompressedEdwardsY` by decompressing it,…",2,[[],["compressededwardsy"]]],[11,"neg","","Negates an `EdwardsPoint` giving it as a result",3,[[],["edwardspoint"]]],[11,"neg","","Negates an `ProjectivePoint` giving it as a result",4,[[],["projectivepoint"]]],[11,"neg","","Negates an `AffinePoint` giving it as a result. Since the…",5,[[],["affinepoint"]]],[11,"neg","zerocaf::ristretto","Negates a `RistrettoPoint` giving it's negated…",9,[[],["ristrettopoint"]]],[11,"shr","zerocaf::backend::u64::scalar","",1,[[["u8"]],["scalar"]]],[11,"index","zerocaf::backend::u64::field","",0,[[["self"],["usize"]],["u64"]]],[11,"index","zerocaf::backend::u64::scalar","",1,[[["self"],["usize"]],["u64"]]],[11,"index","zerocaf::edwards","",2,[[["self"],["usize"]],["u8"]]],[11,"index","zerocaf::ristretto","",8,[[["self"],["usize"]],["u8"]]],[11,"index_mut","zerocaf::backend::u64::field","",0,[[["self"],["usize"]],["u64"]]],[11,"index_mut","zerocaf::backend::u64::scalar","",1,[[["self"],["usize"]],["u64"]]],[11,"index_mut","zerocaf::edwards","",2,[[["self"],["usize"]],["u8"]]],[11,"ct_eq","","",2,[[["compressededwardsy"],["self"]],["choice"]]],[11,"ct_eq","","",3,[[["edwardspoint"],["self"]],["choice"]]],[11,"ct_eq","","",4,[[["projectivepoint"],["self"]],["choice"]]],[11,"ct_eq","","",5,[[["self"]],["choice"]]],[11,"ct_eq","zerocaf","Test equality between two `FieldElement`s. Since the…",6,[[["self"],["fieldelement"]],["choice"]]],[11,"ct_eq","zerocaf::montgomery","",7,[[["self"],["montgomerypoint"]],["choice"]]],[11,"ct_eq","zerocaf::ristretto","",8,[[["self"]],["choice"]]],[11,"ct_eq","","As specified on the Ristretto protocol docs:…",9,[[["ristrettopoint"],["self"]],["choice"]]],[11,"ct_eq","zerocaf","Test equality between two `Scalar`s. Since the internal…",10,[[["scalar"],["self"]],["choice"]]],[11,"conditional_select","","",6,[[["self"],["choice"]],["self"]]]],"p":[[3,"FieldElement"],[3,"Scalar"],[3,"CompressedEdwardsY"],[3,"EdwardsPoint"],[3,"ProjectivePoint"],[3,"AffinePoint"],[6,"FieldElement"],[3,"MontgomeryPoint"],[3,"CompressedRistretto"],[3,"RistrettoPoint"],[6,"Scalar"],[8,"Square"],[8,"Double"],[8,"Half"],[8,"Pow"],[8,"ModSqrt"],[8,"InvSqrt"],[8,"SqrtRatioI"],[8,"Identity"],[8,"ValidityCheck"]]};
addSearchOptions(searchIndex);initSearch(searchIndex);