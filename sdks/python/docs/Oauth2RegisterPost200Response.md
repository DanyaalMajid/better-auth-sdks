# Oauth2RegisterPost200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the OAuth2 application | 
**icon** | **str** | Icon URL for the application | [optional] 
**metadata** | **Dict[str, object]** | Additional metadata for the application | [optional] 
**client_id** | **str** | Unique identifier for the client | 
**client_secret** | **str** | Secret key for the client | 
**redirect_urls** | **List[str]** | List of allowed redirect URLs | 
**type** | **str** | Type of the client | 
**authentication_scheme** | **str** | Authentication scheme used by the client | 
**disabled** | **bool** | Whether the client is disabled | 
**user_id** | **str** | ID of the user who registered the client, null if registered anonymously | [optional] 
**created_at** | **datetime** | Creation timestamp | 
**updated_at** | **datetime** | Last update timestamp | 

## Example

```python
from better_auth.models.oauth2_register_post200_response import Oauth2RegisterPost200Response

# TODO update the JSON string below
json = "{}"
# create an instance of Oauth2RegisterPost200Response from a JSON string
oauth2_register_post200_response_instance = Oauth2RegisterPost200Response.from_json(json)
# print the JSON string representation of the object
print(Oauth2RegisterPost200Response.to_json())

# convert the object into a dict
oauth2_register_post200_response_dict = oauth2_register_post200_response_instance.to_dict()
# create an instance of Oauth2RegisterPost200Response from a dict
oauth2_register_post200_response_from_dict = Oauth2RegisterPost200Response.from_dict(oauth2_register_post200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


